// Contagem de caracteres, palavras, frases, parágrafos e linhas.
// Lógica pura, sem React: roda no navegador e também em Node para testes.

const hasSegmenter = typeof Intl !== "undefined" && typeof Intl.Segmenter === "function";

let graphemeSegmenter = null;
let wordSegmenter = null;

const getGraphemeSegmenter = () => {
  if (!graphemeSegmenter)
    graphemeSegmenter = new Intl.Segmenter("pt-BR", { granularity: "grapheme" });
  return graphemeSegmenter;
};

const getWordSegmenter = () => {
  if (!wordSegmenter) wordSegmenter = new Intl.Segmenter("pt-BR", { granularity: "word" });
  return wordSegmenter;
};

/**
 * Conta caracteres como a pessoa os vê (grafemas): "ç", "ã" e "👍🏽" contam 1.
 * Sem Intl.Segmenter, cai para Array.from sobre o texto normalizado (NFC):
 * acentos continuam contando 1, mas emoji compostos podem contar mais de 1.
 */
export const countGraphemes = text => {
  if (!text) return 0;
  // Texto só com ASCII: cada unidade é um caractere; evita segmentar à toa.
  // eslint-disable-next-line no-control-regex
  if (/^[\x00-\x7f]*$/.test(text)) return text.length;
  if (hasSegmenter) {
    const iterator = getGraphemeSegmenter().segment(text)[Symbol.iterator]();
    let count = 0;
    while (!iterator.next().done) count += 1;
    return count;
  }
  // NFC junta letra + acento combinante ("a" + "~") em um só ponto de código.
  return Array.from(text.normalize("NFC")).length;
};

// Hífen (ASCII e Unicode) que une partes de uma palavra composta.
const HYPHENS = new Set(["-", "‐", "‑"]);

// Regra de palavras (a mesma nos dois caminhos):
// - "d'água" e "d’água" contam como 1 palavra (apóstrofo une).
// - "guarda-chuva" e "e-mail" contam como 1 palavra (hífen entre letras une),
//   como fazem Word e Google Docs.
// - Números como "3,5" ou "1.000" contam como 1.
// - Pontuação e emoji sozinhos não contam.
const FALLBACK_WORD =
  /[\p{L}\p{M}\p{N}]+(?:(?:['’\-‐‑]|(?<=\p{N})[.,](?=\p{N}))[\p{L}\p{M}\p{N}]+)*/gu;

export const countWords = text => {
  if (!text || !text.trim()) return 0;
  if (!hasSegmenter) return (text.match(FALLBACK_WORD) ?? []).length;

  let count = 0;
  // Estado para juntar "palavra-hífen-palavra" em uma só.
  let prevWasWord = false;
  let pendingHyphen = false;
  for (const segment of getWordSegmenter().segment(text)) {
    if (segment.isWordLike) {
      if (!(prevWasWord && pendingHyphen)) count += 1;
      prevWasWord = true;
      pendingHyphen = false;
    } else if (prevWasWord && !pendingHyphen && HYPHENS.has(segment.segment)) {
      pendingHyphen = true;
    } else {
      prevWasWord = false;
      pendingHyphen = false;
    }
  }
  return count;
};

const HAS_CONTENT = /[\p{L}\p{N}]/u;

/**
 * Frases: trechos terminados em . ! ? ou … (seguidos de espaço ou fim do
 * texto), e também quebras de parágrafo. Abreviações como "Sr." contam como
 * fim de frase; é uma estimativa, como em qualquer contador.
 */
export const countSentences = text => {
  if (!text) return 0;
  return text.split(/[.!?…]+["'”’)\]]*(?=\s|$)|\n\s*\n/u).filter(part => HAS_CONTENT.test(part))
    .length;
};

/** Parágrafos: blocos de texto separados por uma ou mais linhas em branco. */
export const countParagraphs = text => {
  if (!text) return 0;
  return text.split(/\r?\n[^\S\r\n]*\r?\n/).filter(part => part.trim()).length;
};

/** Linhas: todas as linhas do texto, inclusive as em branco no meio. */
export const countLines = text => {
  if (!text || !text.trim()) return 0;
  return text.split(/\r\n|\r|\n/).length;
};

export const READING_WPM = 200;
export const SPEAKING_WPM = 130;

/** Duração estimada em segundos para um número de palavras a um ritmo (palavras/min). */
export const estimateSeconds = (words, wpm) => Math.round((words / wpm) * 60);

/** "menos de 1 min", "4 min", "1 h 12 min". */
export const formatDuration = seconds => {
  if (!seconds) return "0 min";
  if (seconds < 60) return "menos de 1 min";
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? `${hours} h ${rest} min` : `${hours} h`;
};

// Alfabeto GSM 03.38 (GSM-7). Caracteres básicos ocupam 1 posição; os da
// tabela de extensão ocupam 2 (são enviados com um caractere de escape).
// Repare que o alfabeto não tem ç minúsculo, á, ã, â, ê, í, ó, õ, ô nem ú.
const GSM_BASIC = new Set(
  Array.from(
    "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?" +
      "¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà"
  )
);
const GSM_EXTENDED = new Set(Array.from("^{}\\[~]|€\f"));

/**
 * Analisa o texto como SMS.
 * - GSM-7: até 160 posições em um SMS.
 * - Com qualquer caractere fora do GSM-7 (acentos como ã, ç, emoji), o
 *   aparelho usa UCS-2 e o limite cai para 70 (contados em unidades UTF-16,
 *   então um emoji costuma ocupar 2).
 * `nonGsm` traz até 10 caracteres que forçaram o UCS-2, para mostrar ao usuário.
 */
export const smsInfo = text => {
  const value = text ?? "";
  let septets = 0;
  let gsm = true;
  const nonGsm = new Set();
  for (const char of value) {
    if (GSM_BASIC.has(char)) septets += 1;
    else if (GSM_EXTENDED.has(char)) septets += 2;
    else {
      gsm = false;
      if (nonGsm.size < 10) nonGsm.add(char);
    }
  }
  return {
    encoding: gsm ? "GSM-7" : "UCS-2",
    gsm,
    used: gsm ? septets : value.length,
    limit: gsm ? 160 : 70,
    nonGsm: Array.from(nonGsm),
  };
};

/** Todas as contagens de uma vez. */
export const getTextStats = text => {
  const value = text ?? "";
  const words = countWords(value);
  return {
    characters: countGraphemes(value),
    charactersNoSpaces: countGraphemes(value.replace(/\s+/g, "")),
    words,
    sentences: countSentences(value),
    paragraphs: countParagraphs(value),
    lines: countLines(value),
    readingSeconds: estimateSeconds(words, READING_WPM),
    speakingSeconds: estimateSeconds(words, SPEAKING_WPM),
  };
};

/**
 * Limites de plataformas. `approximate` marca os que não são uma regra exata
 * de contagem (o X pesa URLs e alguns caracteres de forma diferente; o Google
 * corta título e descrição por largura em pixels, não por caracteres).
 */
export const PLATFORM_LIMITS = [
  { id: "x", label: "Post no X (Twitter)", limit: 280, approximate: true },
  { id: "instagram-caption", label: "Legenda do Instagram", limit: 2200 },
  { id: "instagram-bio", label: "Bio do Instagram", limit: 150 },
  { id: "google-title", label: "Título no Google", limit: 60, approximate: true },
  { id: "meta-description", label: "Meta description", limit: 160, approximate: true },
];

// Conversões de caixa respeitando o português (toLocale*Case com "pt-BR").
export const toUpper = text => text.toLocaleUpperCase("pt-BR");
export const toLower = text => text.toLocaleLowerCase("pt-BR");

/** "primeira letra maiúscula" em cada palavra; "d'água" vira "D'água". */
export const toTitleCase = text =>
  toLower(text).replace(
    /(^|[^\p{L}\p{M}\p{N}'’])(\p{L})/gu,
    (_, before, letter) => before + letter.toLocaleUpperCase("pt-BR")
  );
