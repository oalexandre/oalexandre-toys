import { cnpj as cnpjValidator, cpf as cpfValidator } from "cpf-cnpj-validator";

import { secureRandomInt } from "./random";

export const onlyDigits = value => String(value ?? "").replace(/\D/g, "");

export const maskCpf = value =>
  onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

export const maskCnpj = value =>
  onlyDigits(value)
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");

/** Aplica máscara de CPF até 11 dígitos e de CNPJ acima disso. */
export const maskDocument = value => {
  const digits = onlyDigits(value);
  return digits.length <= 11 ? maskCpf(digits) : maskCnpj(digits);
};

const randomDigits = count => Array.from({ length: count }, () => secureRandomInt(10));

const checkDigit = (digits, weights) => {
  const sum = digits.reduce((acc, digit, index) => acc + digit * weights[index], 0);
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

/** CPF com dígitos verificadores válidos (evita sequências repetidas, que a Receita rejeita). */
export const generateCpf = () => {
  let base;
  do {
    base = randomDigits(9);
  } while (new Set(base).size === 1);
  const d1 = checkDigit(base, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
  const d2 = checkDigit([...base, d1], [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
  return [...base, d1, d2].join("");
};

/** CNPJ matriz (filial 0001) com dígitos verificadores válidos. */
export const generateCnpj = () => {
  const base = [...randomDigits(8), 0, 0, 0, 1];
  const d1 = checkDigit(base, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const d2 = checkDigit([...base, d1], [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return [...base, d1, d2].join("");
};

/**
 * Valida CPF (11 dígitos) ou CNPJ (14 dígitos).
 * Retorna { type: "CPF" | "CNPJ" | null, valid: boolean }.
 */
export const validateDocument = value => {
  const digits = onlyDigits(value);
  if (digits.length === 11) return { type: "CPF", valid: cpfValidator.isValid(digits) };
  if (digits.length === 14) return { type: "CNPJ", valid: cnpjValidator.isValid(digits) };
  return { type: null, valid: false };
};
