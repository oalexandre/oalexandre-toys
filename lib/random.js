/** Inteiro aleatório uniforme em [0, max) usando crypto.getRandomValues, sem viés de módulo. */
export const secureRandomInt = max => {
  if (max <= 0) return 0;
  const range = 2 ** 32;
  const limit = range - (range % max);
  const buffer = new Uint32Array(1);
  let value;
  do {
    crypto.getRandomValues(buffer);
    value = buffer[0];
  } while (value >= limit);
  return value % max;
};

/** Inteiro aleatório em [min, max], inclusive. */
export const secureRandomBetween = (min, max) => min + secureRandomInt(max - min + 1);

/** Embaralha uma cópia do array (Fisher-Yates com fonte segura). */
export const secureShuffle = array => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

/**
 * Sorteia `count` números entre `min` e `max`.
 * Com `unique`, nunca repete (limitado ao tamanho do intervalo).
 */
export const drawNumbers = ({ count, min, max, unique = true, sorted = true }) => {
  const low = Math.min(min, max);
  const high = Math.max(min, max);
  const size = high - low + 1;
  const total = unique ? Math.min(count, size) : count;
  let result;

  if (unique) {
    if (total > size / 2) {
      result = secureShuffle(Array.from({ length: size }, (_, i) => low + i)).slice(0, total);
    } else {
      const picked = new Set();
      while (picked.size < total) picked.add(secureRandomBetween(low, high));
      result = [...picked];
    }
  } else {
    result = Array.from({ length: total }, () => secureRandomBetween(low, high));
  }

  return sorted ? result.sort((a, b) => a - b) : result;
};

// Numeração ou marcador no início da linha, comum em listas coladas ("1. ", "2) ", "- ", "• ").
const LIST_PREFIX = /^\s*(?:\d{1,4}\s*[.)\-–:]|[-–•*·])\s+/;

/**
 * Nomes de uma lista colada, um por linha: tira espaços, linhas vazias e
 * numeração do início. Com `unique`, remove repetidos ignorando maiúsculas e
 * acentos, mantendo a primeira grafia.
 */
export const parseNames = (text, { unique = true } = {}) => {
  const names = String(text ?? "")
    .split(/\r?\n/)
    .map(line => line.replace(LIST_PREFIX, "").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  if (!unique) return names;
  const seen = new Set();
  return names.filter(name => {
    const key = name.normalize("NFD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase("pt-BR");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

/** Sorteia `count` itens distintos da lista, na ordem em que foram sorteados. */
export const drawItems = (items, count) =>
  secureShuffle(items).slice(0, Math.min(count, items.length));

/** Um item qualquer da lista, para a animação de revelação. */
export const randomItem = items => items[secureRandomInt(items.length)];
