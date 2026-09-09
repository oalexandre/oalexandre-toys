import { secureRandomInt, secureShuffle } from "./random";
import { WORDS } from "./words";

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%&*?-_+=",
};

/** Caracteres fáceis de confundir (l/1/I, O/0, S/5, B/8, Z/2). */
const SIMILAR = /[il1IoO0S5B8Z2]/g;

export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 64;

/**
 * Gera uma senha com pelo menos um caractere de cada tipo escolhido.
 * Usa crypto.getRandomValues em todas as escolhas.
 */
export const generatePassword = ({ length, lower, upper, numbers, symbols, excludeSimilar }) => {
  const enabled = Object.entries({ lower, upper, numbers, symbols })
    .filter(([, on]) => on)
    .map(([key]) => (excludeSimilar ? SETS[key].replace(SIMILAR, "") : SETS[key]))
    .filter(set => set.length > 0);

  if (!enabled.length) return "";

  const size = Math.min(Math.max(length, PASSWORD_MIN), PASSWORD_MAX);
  const pool = enabled.join("");
  const chars = enabled.map(set => set[secureRandomInt(set.length)]);
  while (chars.length < size) chars.push(pool[secureRandomInt(pool.length)]);

  return secureShuffle(chars).slice(0, size).join("");
};

/** Entropia aproximada em bits: length * log2(tamanho do alfabeto). */
export const passwordEntropy = ({ length, lower, upper, numbers, symbols, excludeSimilar }) => {
  const alphabet = Object.entries({ lower, upper, numbers, symbols })
    .filter(([, on]) => on)
    .reduce(
      (sum, [key]) => sum + (excludeSimilar ? SETS[key].replace(SIMILAR, "") : SETS[key]).length,
      0
    );
  if (!alphabet) return 0;
  return Math.round(length * Math.log2(alphabet));
};

export const strengthLabel = bits => {
  if (bits < 40) return { label: "Fraca", color: "error" };
  if (bits < 60) return { label: "Razoável", color: "warning" };
  if (bits < 80) return { label: "Forte", color: "success" };
  return { label: "Muito forte", color: "success" };
};

export const PASSPHRASE_MIN = 3;
export const PASSPHRASE_MAX = 10;

/**
 * Frase-senha com palavras em português sorteadas de forma segura.
 * `separator` une as palavras; `capitalize` põe inicial maiúscula;
 * `number` acrescenta dois dígitos ao final.
 */
export const generatePassphrase = ({
  words,
  separator = "-",
  capitalize = false,
  number = false,
}) => {
  const count = Math.min(Math.max(words, PASSPHRASE_MIN), PASSPHRASE_MAX);
  const picked = Array.from({ length: count }, () => WORDS[secureRandomInt(WORDS.length)]).map(
    word => (capitalize ? word[0].toUpperCase() + word.slice(1) : word)
  );
  const suffix = number ? String(secureRandomInt(100)).padStart(2, "0") : "";
  return picked.join(separator) + (suffix ? separator + suffix : "");
};

/** Entropia da frase-senha: log2(lista^palavras) mais os dígitos extras. */
export const passphraseEntropy = ({ words, number = false }) =>
  Math.round(words * Math.log2(WORDS.length) + (number ? Math.log2(100) : 0));
