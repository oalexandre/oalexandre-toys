/**
 * Pix estático: monta o BR Code (padrão EMV QRCPS-MPM do Banco Central)
 * a partir da chave, do recebedor e do valor opcional. Lógica pura, sem React.
 */
import { onlyDigits, validateDocument } from "./documents";
import { parseMoney, roundCents } from "./money";

export const KEY_TYPES = [
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "phone", label: "Celular" },
  { value: "email", label: "E-mail" },
  { value: "evp", label: "Chave aleatória" },
];

export const LIMITS = { name: 25, city: 15, txid: 25, email: 77 };

const GUI = "br.gov.bcb.pix";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
const TXID_RE = /^[A-Za-z0-9]+$/;

/** Campo EMV: ID + tamanho com 2 dígitos + valor. */
const field = (id, value) => `${id}${String(value.length).padStart(2, "0")}${value}`;

/**
 * CRC16/CCITT-FALSE (polinômio 0x1021, valor inicial 0xFFFF), como exige o
 * BR Code. Devolve 4 caracteres hexadecimais maiúsculos.
 */
export const crc16 = text => {
  let crc = 0xffff;
  for (let i = 0; i < text.length; i += 1) {
    crc ^= text.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
};

/**
 * Remove acentos e qualquer caractere fora do ASCII imprimível, junta espaços
 * repetidos e corta no limite. Mantém maiúsculas e minúsculas.
 */
export const sanitizeText = (value, max) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)
    .trim();

/** Tenta adivinhar o tipo de chave pelo que foi digitado. Devolve null se não souber. */
export const detectKeyType = value => {
  const text = String(value ?? "").trim();
  if (!text) return null;
  if (text.includes("@")) return "email";
  if (UUID_RE.test(text)) return "evp";
  if (/[a-z]/i.test(text)) return null;
  if (text.startsWith("+") || /[()]/.test(text)) return "phone";
  const digits = onlyDigits(text);
  if (digits.length === 14) return "cnpj";
  if (digits.length === 11) return validateDocument(digits).valid ? "cpf" : "phone";
  if (digits.length === 10 || digits.length === 13) return "phone";
  return null;
};

/** Valida e normaliza a chave. Devolve { key } ou { error }. */
export const normalizeKey = (type, value) => {
  const text = String(value ?? "").trim();
  if (!text) return { error: "Informe a chave Pix." };

  switch (type) {
    case "cpf": {
      const digits = onlyDigits(text);
      const doc = validateDocument(digits);
      if (doc.type !== "CPF" || !doc.valid) return { error: "CPF inválido. Confira os números." };
      return { key: digits };
    }
    case "cnpj": {
      const digits = onlyDigits(text);
      const doc = validateDocument(digits);
      if (doc.type !== "CNPJ" || !doc.valid) return { error: "CNPJ inválido. Confira os números." };
      return { key: digits };
    }
    case "phone": {
      if (/[^\d\s()+-]/.test(text)) return { error: "Use só números, com DDD." };
      let digits = onlyDigits(text);
      if ((text.startsWith("+") || digits.length > 11) && digits.startsWith("55")) {
        digits = digits.slice(2);
      }
      if (digits.length < 10 || digits.length > 11) {
        return { error: "Informe DDD e número, por exemplo (11) 91234-5678." };
      }
      if (digits.startsWith("0")) return { error: "O DDD não começa com 0." };
      return { key: `+55${digits}` };
    }
    case "email": {
      const email = text.toLowerCase();
      if (email.length > LIMITS.email) return { error: "E-mail longo demais para chave Pix." };
      if (!EMAIL_RE.test(email)) return { error: "E-mail inválido." };
      return { key: email };
    }
    case "evp": {
      if (!UUID_RE.test(text)) {
        return { error: "A chave aleatória tem 32 letras e números separados por hífens." };
      }
      return { key: text.toLowerCase() };
    }
    default:
      return { error: "Escolha o tipo de chave." };
  }
};

/**
 * Valor em reais. Vazio ou zero significa que quem paga digita o valor.
 * Devolve { amount: "10.50" | "" } ou { error }.
 */
export const normalizeAmount = value => {
  if (!String(value ?? "").trim()) return { amount: "" };
  const number = parseMoney(value);
  if (!Number.isFinite(number) || number < 0) return { error: "Valor inválido." };
  const cents = roundCents(number);
  if (cents === 0) return { amount: "" };
  const amount = cents.toFixed(2);
  if (amount.length > 13) return { error: "Valor alto demais." };
  return { amount, value: cents };
};

/** Identificador (txid): só letras sem acento e números, até 25. Vazio vira "***". */
export const normalizeTxid = value => {
  const text = String(value ?? "").trim();
  if (!text) return { txid: "***" };
  if (!TXID_RE.test(text)) return { error: "Use só letras sem acento e números, sem espaços." };
  if (text.length > LIMITS.txid) return { error: `Máximo de ${LIMITS.txid} caracteres.` };
  return { txid: text };
};

/**
 * Espaço que sobra para a descrição dentro do campo 26 (máx. 99 caracteres):
 * 18 do GUI + 4 do cabeçalho da chave + chave + 4 do cabeçalho da descrição.
 */
export const descriptionLimit = key => Math.max(0, 99 - 18 - 4 - (key?.length ?? 0) - 4);

/**
 * Valida todos os campos. Devolve { errors, values } onde `errors` é um
 * objeto { campo: mensagem } (vazio se estiver tudo certo) e `values` são os
 * valores normalizados que vão para o código.
 */
export const validatePix = ({ keyType, key, name, city, amount, txid, description }) => {
  const errors = {};
  const values = {};

  const keyResult = normalizeKey(keyType, key);
  if (keyResult.error) errors.key = keyResult.error;
  else values.key = keyResult.key;

  values.name = sanitizeText(name, LIMITS.name);
  if (!values.name) errors.name = "Informe o nome de quem recebe.";

  values.city = sanitizeText(city, LIMITS.city);
  if (!values.city) errors.city = "Informe a cidade de quem recebe.";

  const amountResult = normalizeAmount(amount);
  if (amountResult.error) errors.amount = amountResult.error;
  else values.amount = amountResult.amount;

  const txidResult = normalizeTxid(txid);
  if (txidResult.error) errors.txid = txidResult.error;
  else values.txid = txidResult.txid;

  // A descrição é cortada para caber no campo 26 junto com a chave.
  values.description = sanitizeText(description, descriptionLimit(values.key ?? ""));

  return { errors, values };
};

/** Monta o código a partir de valores já normalizados (saída de validatePix). */
export const assemblePayload = ({ key, name, city, amount, txid, description }) => {
  const account =
    field("00", GUI) + field("01", key) + (description ? field("02", description) : "");
  const body =
    field("00", "01") +
    field("26", account) +
    field("52", "0000") +
    field("53", "986") +
    (amount ? field("54", amount) : "") +
    field("58", "BR") +
    field("59", name) +
    field("60", city) +
    field("62", field("05", txid)) +
    "6304";
  return body + crc16(body);
};

/**
 * Gera o Pix copia e cola. Devolve { payload } ou { error } com a primeira
 * mensagem de erro encontrada (e `errors` com todas, por campo).
 */
export const buildPixPayload = input => {
  const { errors, values } = validatePix(input);
  const first = Object.values(errors)[0];
  if (first) return { error: first, errors };
  return { payload: assemblePayload(values) };
};
