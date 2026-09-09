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
