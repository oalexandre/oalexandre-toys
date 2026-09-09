import { secureRandomInt, secureShuffle } from "./random";

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
