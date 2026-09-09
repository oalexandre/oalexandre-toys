/** Estados brasileiros com seus códigos de área (DDD), conforme a Anatel. */
export const states = [
  { uf: "AC", name: "Acre", region: "Norte", ddds: ["68"] },
  { uf: "AL", name: "Alagoas", region: "Nordeste", ddds: ["82"] },
  { uf: "AP", name: "Amapá", region: "Norte", ddds: ["96"] },
  { uf: "AM", name: "Amazonas", region: "Norte", ddds: ["92", "97"] },
  { uf: "BA", name: "Bahia", region: "Nordeste", ddds: ["71", "73", "74", "75", "77"] },
  { uf: "CE", name: "Ceará", region: "Nordeste", ddds: ["85", "88"] },
  { uf: "DF", name: "Distrito Federal", region: "Centro-Oeste", ddds: ["61"] },
  { uf: "ES", name: "Espírito Santo", region: "Sudeste", ddds: ["27", "28"] },
  { uf: "GO", name: "Goiás", region: "Centro-Oeste", ddds: ["62", "64"] },
  { uf: "MA", name: "Maranhão", region: "Nordeste", ddds: ["98", "99"] },
  { uf: "MT", name: "Mato Grosso", region: "Centro-Oeste", ddds: ["65", "66"] },
  { uf: "MS", name: "Mato Grosso do Sul", region: "Centro-Oeste", ddds: ["67"] },
  {
    uf: "MG",
    name: "Minas Gerais",
    region: "Sudeste",
    ddds: ["31", "32", "33", "34", "35", "37", "38"],
  },
  { uf: "PA", name: "Pará", region: "Norte", ddds: ["91", "93", "94"] },
  { uf: "PB", name: "Paraíba", region: "Nordeste", ddds: ["83"] },
  { uf: "PR", name: "Paraná", region: "Sul", ddds: ["41", "42", "43", "44", "45", "46"] },
  { uf: "PE", name: "Pernambuco", region: "Nordeste", ddds: ["81", "87"] },
  { uf: "PI", name: "Piauí", region: "Nordeste", ddds: ["86", "89"] },
  { uf: "RJ", name: "Rio de Janeiro", region: "Sudeste", ddds: ["21", "22", "24"] },
  { uf: "RN", name: "Rio Grande do Norte", region: "Nordeste", ddds: ["84"] },
  { uf: "RS", name: "Rio Grande do Sul", region: "Sul", ddds: ["51", "53", "54", "55"] },
  { uf: "RO", name: "Rondônia", region: "Norte", ddds: ["69"] },
  { uf: "RR", name: "Roraima", region: "Norte", ddds: ["95"] },
  { uf: "SC", name: "Santa Catarina", region: "Sul", ddds: ["47", "48", "49"] },
  {
    uf: "SP",
    name: "São Paulo",
    region: "Sudeste",
    ddds: ["11", "12", "13", "14", "15", "16", "17", "18", "19"],
  },
  { uf: "SE", name: "Sergipe", region: "Nordeste", ddds: ["79"] },
  { uf: "TO", name: "Tocantins", region: "Norte", ddds: ["63"] },
];

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
