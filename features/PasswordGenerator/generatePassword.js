import { includedItems } from "../../constants/passwordGenerator";

// Função para gerar números aleatórios criptograficamente seguros
const getSecureRandomInt = max => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
};

// Função para embaralhar array usando crypto.getRandomValues()
const secureArrayShuffle = array => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getSecureRandomInt(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomSymbol = () => {
  const symbols = "!@#$%&*";
  return symbols[getSecureRandomInt(symbols.length)];
};

const getRandomNumber = excludeSimilar => {
  const items = [3, 4, 6, 7, 9];

  if (excludeSimilar) {
    return items[getSecureRandomInt(items.length)];
  } else {
    return +String.fromCharCode(getSecureRandomInt(10) + 48);
  }
};

const getRandomLower = excludeSimilar => {
  if (excludeSimilar) {
    return includedItems[getSecureRandomInt(includedItems.length)];
  } else {
    return String.fromCharCode(getSecureRandomInt(26) + 97);
  }
};

const getRandomUpper = excludeSimilar => {
  const items = includedItems.map(letter => letter.toUpperCase());

  if (excludeSimilar) {
    return items[getSecureRandomInt(items.length)];
  } else {
    return String.fromCharCode(getSecureRandomInt(26) + 65);
  }
};

const randomGenerator = {
  symbols: getRandomSymbol,
  numbers: getRandomNumber,
  lowerCase: getRandomLower,
  upperCase: getRandomUpper,
};

// Embaralhar usando crypto.getRandomValues() ao invés de Math.random()
const shuffle = str => {
  const chars = [...str];
  return secureArrayShuffle(chars).join("");
};

export const generatePassword = (
  symbols,
  numbers,
  lowerCase,
  upperCase,
  excludeSimilar,
  length
) => {
  const typesCount = symbols + numbers + lowerCase + upperCase;

  const typesArr = [{ symbols }, { numbers }, { lowerCase }, { upperCase }].filter(
    item => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  const iterate = Math.ceil(length / typesCount);
  let generatedPassword = "";

  Array.from({ length: iterate }, () => {
    typesArr.map(type => {
      const name = Object.keys(type)[0];

      generatedPassword += randomGenerator[name](excludeSimilar);
    });
  });

  const finalPassword = shuffle(generatedPassword).slice(0, length);

  return finalPassword;
};
