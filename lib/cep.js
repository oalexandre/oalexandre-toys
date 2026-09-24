/** Funções puras da consulta de CEP (ViaCEP). Sem React e sem rede. */

export const VIACEP_BASE = "https://viacep.com.br/ws";

/** Mínimo de caracteres que o ViaCEP aceita para cidade e rua na busca por endereço. */
export const MIN_ADDRESS_LENGTH = 3;

/** Remove tudo que não é dígito e limita a 8 dígitos. */
export const cepDigits = value =>
  String(value ?? "")
    .replace(/\D/g, "")
    .slice(0, 8);

/** Aplica a máscara 00000-000 enquanto a pessoa digita. */
export const maskCep = value => {
  const digits = cepDigits(value);
  return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
};

/** CEP completo: exatamente 8 dígitos (com ou sem hífen). */
export const isValidCep = value => /^\d{5}-?\d{3}$/.test(String(value ?? "").trim());

/** URL da busca pelo CEP. Retorna null se o CEP não tiver 8 dígitos. */
export const buildCepUrl = value => {
  const digits = cepDigits(value);
  return digits.length === 8 ? `${VIACEP_BASE}/${digits}/json/` : null;
};

/** URL da busca por endereço (UF/cidade/rua). Retorna null se faltar algo. */
export const buildAddressUrl = ({ uf, city, street }) => {
  const cleanUf = String(uf ?? "")
    .trim()
    .toUpperCase();
  const cleanCity = String(city ?? "").trim();
  const cleanStreet = String(street ?? "").trim();
  if (!/^[A-Z]{2}$/.test(cleanUf)) return null;
  if (cleanCity.length < MIN_ADDRESS_LENGTH || cleanStreet.length < MIN_ADDRESS_LENGTH) {
    return null;
  }
  return [VIACEP_BASE, cleanUf, cleanCity, cleanStreet]
    .map((part, index) => (index === 0 ? part : encodeURIComponent(part)))
    .concat("json/")
    .join("/");
};

/** O ViaCEP responde { erro: true } ou { erro: "true" } quando o CEP não existe. */
export const isNotFound = data => !data || data.erro === true || data.erro === "true";

const text = value => (typeof value === "string" ? value.trim() : "");

/** Normaliza um endereço do ViaCEP para os campos usados na tela. */
export const normalizeAddress = data => {
  const address = {
    cep: maskCep(data?.cep),
    street: text(data?.logradouro),
    complement: text(data?.complemento),
    unit: text(data?.unidade),
    district: text(data?.bairro),
    city: text(data?.localidade),
    uf: text(data?.uf).toUpperCase(),
    state: text(data?.estado),
    ibge: text(data?.ibge),
    ddd: text(data?.ddd),
  };
  // CEP geral: a cidade inteira usa um único CEP, sem rua nem bairro.
  address.isGeneral = !address.street && !address.district;
  return address;
};

/** Normaliza a resposta da busca pelo CEP: null quando não encontrado. */
export const parseCepResponse = data => (isNotFound(data) ? null : normalizeAddress(data));

/** Normaliza a resposta da busca por endereço: sempre uma lista. */
export const parseAddressResponse = data =>
  Array.isArray(data) ? data.filter(item => !isNotFound(item)).map(normalizeAddress) : [];

/** Endereço em uma linha: "Rua X, Bairro, Cidade - UF, 00000-000". */
export const formatAddressLine = address => {
  if (!address) return "";
  const cityUf = [address.city, address.uf].filter(Boolean).join(" - ");
  return [address.street, address.district, cityUf, address.cep].filter(Boolean).join(", ");
};
