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

/**
 * Nono dígito do CPF: região fiscal onde o documento foi emitido.
 * Fonte: Receita Federal.
 */
export const CPF_REGIONS = [
  { digit: 1, ufs: ["DF", "GO", "MS", "MT", "TO"] },
  { digit: 2, ufs: ["AC", "AM", "AP", "PA", "RO", "RR"] },
  { digit: 3, ufs: ["CE", "MA", "PI"] },
  { digit: 4, ufs: ["AL", "PB", "PE", "RN"] },
  { digit: 5, ufs: ["BA", "SE"] },
  { digit: 6, ufs: ["MG"] },
  { digit: 7, ufs: ["ES", "RJ"] },
  { digit: 8, ufs: ["SP"] },
  { digit: 9, ufs: ["PR", "SC"] },
  { digit: 0, ufs: ["RS"] },
];

export const regionDigitForUf = uf => CPF_REGIONS.find(r => r.ufs.includes(uf))?.digit ?? null;

export const ufsForRegionDigit = digit =>
  CPF_REGIONS.find(r => r.digit === Number(digit))?.ufs ?? [];

/**
 * CPF com dígitos verificadores válidos. `region` (0-9) fixa o nono dígito.
 * Evita sequências repetidas, que a Receita rejeita.
 */
export const generateCpf = ({ region = null } = {}) => {
  let base;
  do {
    base = randomDigits(9);
    if (region !== null) base[8] = Number(region);
  } while (new Set(base).size === 1);
  const d1 = checkDigit(base, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
  const d2 = checkDigit([...base, d1], [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
  return [...base, d1, d2].join("");
};

/** CNPJ com dígitos verificadores válidos. `branch` é o número do estabelecimento (1 = matriz). */
export const generateCnpj = ({ branch = 1 } = {}) => {
  const order = String(Math.min(Math.max(Number(branch) || 1, 1), 9999)).padStart(4, "0");
  const base = [...randomDigits(8), ...order.split("").map(Number)];
  const d1 = checkDigit(base, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const d2 = checkDigit([...base, d1], [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return [...base, d1, d2].join("");
};

/** Gera `count` documentos únicos com a função informada. */
export const generateMany = (generate, count) => {
  const set = new Set();
  while (set.size < count) set.add(generate());
  return [...set];
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
