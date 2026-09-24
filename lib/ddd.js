/** Estados brasileiros com seus códigos de área (DDD), conforme a Anatel. */
export const states = [
  { uf: "AC", capital: "Rio Branco", name: "Acre", region: "Norte", ddds: ["68"] },
  { uf: "AL", capital: "Maceió", name: "Alagoas", region: "Nordeste", ddds: ["82"] },
  { uf: "AP", capital: "Macapá", name: "Amapá", region: "Norte", ddds: ["96"] },
  { uf: "AM", capital: "Manaus", name: "Amazonas", region: "Norte", ddds: ["92", "97"] },
  {
    uf: "BA",
    capital: "Salvador",
    name: "Bahia",
    region: "Nordeste",
    ddds: ["71", "73", "74", "75", "77"],
  },
  { uf: "CE", capital: "Fortaleza", name: "Ceará", region: "Nordeste", ddds: ["85", "88"] },
  { uf: "DF", capital: "Brasília", name: "Distrito Federal", region: "Centro-Oeste", ddds: ["61"] },
  { uf: "ES", capital: "Vitória", name: "Espírito Santo", region: "Sudeste", ddds: ["27", "28"] },
  { uf: "GO", capital: "Goiânia", name: "Goiás", region: "Centro-Oeste", ddds: ["62", "64"] },
  { uf: "MA", capital: "São Luís", name: "Maranhão", region: "Nordeste", ddds: ["98", "99"] },
  { uf: "MT", capital: "Cuiabá", name: "Mato Grosso", region: "Centro-Oeste", ddds: ["65", "66"] },
  {
    uf: "MS",
    capital: "Campo Grande",
    name: "Mato Grosso do Sul",
    region: "Centro-Oeste",
    ddds: ["67"],
  },
  {
    uf: "MG",
    capital: "Belo Horizonte",
    name: "Minas Gerais",
    region: "Sudeste",
    ddds: ["31", "32", "33", "34", "35", "37", "38"],
  },
  { uf: "PA", capital: "Belém", name: "Pará", region: "Norte", ddds: ["91", "93", "94"] },
  { uf: "PB", capital: "João Pessoa", name: "Paraíba", region: "Nordeste", ddds: ["83"] },
  {
    uf: "PR",
    capital: "Curitiba",
    name: "Paraná",
    region: "Sul",
    ddds: ["41", "42", "43", "44", "45", "46"],
  },
  { uf: "PE", capital: "Recife", name: "Pernambuco", region: "Nordeste", ddds: ["81", "87"] },
  { uf: "PI", capital: "Teresina", name: "Piauí", region: "Nordeste", ddds: ["86", "89"] },
  {
    uf: "RJ",
    capital: "Rio de Janeiro",
    name: "Rio de Janeiro",
    region: "Sudeste",
    ddds: ["21", "22", "24"],
  },
  { uf: "RN", capital: "Natal", name: "Rio Grande do Norte", region: "Nordeste", ddds: ["84"] },
  {
    uf: "RS",
    capital: "Porto Alegre",
    name: "Rio Grande do Sul",
    region: "Sul",
    ddds: ["51", "53", "54", "55"],
  },
  { uf: "RO", capital: "Porto Velho", name: "Rondônia", region: "Norte", ddds: ["69"] },
  { uf: "RR", capital: "Boa Vista", name: "Roraima", region: "Norte", ddds: ["95"] },
  {
    uf: "SC",
    capital: "Florianópolis",
    name: "Santa Catarina",
    region: "Sul",
    ddds: ["47", "48", "49"],
  },
  {
    uf: "SP",
    capital: "São Paulo",
    name: "São Paulo",
    region: "Sudeste",
    ddds: ["11", "12", "13", "14", "15", "16", "17", "18", "19"],
  },
  { uf: "SE", capital: "Aracaju", name: "Sergipe", region: "Nordeste", ddds: ["79"] },
  { uf: "TO", capital: "Palmas", name: "Tocantins", region: "Norte", ddds: ["63"] },
];

// Artigo de cada estado no português ("o Acre", "a Bahia", "Alagoas" sem artigo).
const ARTICLES = {
  AC: "o",
  AP: "o",
  AM: "o",
  BA: "a",
  CE: "o",
  DF: "o",
  ES: "o",
  MA: "o",
  MT: "o",
  MS: "o",
  PA: "o",
  PB: "a",
  PR: "o",
  PI: "o",
  RJ: "o",
  RN: "o",
  RS: "o",
  TO: "o",
};

const CONTRACTIONS = {
  de: { o: "do", a: "da", "": "de" },
  em: { o: "no", a: "na", "": "em" },
  a: { o: "ao", a: "à", "": "a" },
  para: { o: "para o", a: "para a", "": "para" },
};

/**
 * Nome do estado com a preposição contraída: stateName(ba, "de") → "da Bahia",
 * stateName(al, "de") → "de Alagoas". Sem preposição, devolve com artigo ("a Bahia").
 */
export const stateName = (state, preposition) => {
  const article = ARTICLES[state.uf] ?? "";
  const prefix = preposition ? CONTRACTIONS[preposition][article] : article;
  return prefix ? `${prefix} ${state.name}` : state.name;
};

/** Nome com artigo para início de frase: "O Acre", "A Bahia", "Alagoas". */
export const stateSubject = state => {
  const name = stateName(state);
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const findStateByUf = uf =>
  states.find(state => state.uf === String(uf).toUpperCase()) ?? null;

/** Recebe um DDD ("11") ou telefone com DDD e devolve o estado, ou null. */
export const findStateByPhone = input => {
  const digits = String(input ?? "").replace(/\D/g, "");
  if (digits.length < 2) return null;
  const ddd = digits.slice(0, 2);
  return states.find(state => state.ddds.includes(ddd)) ?? null;
};

/** Máscara (99) 99999-9999 ou (99) 9999-9999 conforme a quantidade de dígitos. */
export const formatPhone = value => {
  const digits = String(value ?? "")
    .replace(/\D/g, "")
    .slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};
