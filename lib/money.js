/**
 * Valores em reais digitados no formato brasileiro. Aceita "1.234,56",
 * "1234,56", "1234.56" e "R$ 12". Devolve NaN quando não há número.
 */
export const parseMoney = value => {
  const text = String(value ?? "")
    .replace(/[^\d,.-]/g, "")
    .trim();
  if (!text) return NaN;
  const lastComma = text.lastIndexOf(",");
  const lastDot = text.lastIndexOf(".");
  let normalized;
  if (lastComma > -1 && lastComma > lastDot) {
    // Vírgula é o separador decimal: pontos são milhar.
    normalized = text.replace(/\./g, "").replace(",", ".");
  } else if (lastDot > -1 && text.length - lastDot - 1 === 3 && lastComma === -1) {
    // "1.234" sem vírgula: ponto de milhar, não decimal.
    normalized = text.replace(/\./g, "");
  } else {
    normalized = text.replace(/,/g, "");
  }
  const number = Number(normalized);
  return Number.isFinite(number) ? number : NaN;
};

/** Percentual digitado ("10", "10,5", "10%") como número (10.5). */
export const parsePercent = value => parseMoney(String(value ?? "").replace("%", ""));

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/** 1234.5 → "R$ 1.234,50". */
export const formatMoney = value => brl.format(Number.isFinite(value) ? value : 0);

/** 0.1234 → "12,34%" (recebe fração). */
export const formatPercent = (fraction, digits = 2) =>
  `${(fraction * 100).toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}%`;

/** Arredonda para centavos sem os erros de ponto flutuante de toFixed. */
export const roundCents = value => Math.round((value + Number.EPSILON) * 100) / 100;

/**
 * Número decimal curto, como preço de combustível ou consumo ("5,899",
 * "5.899", "12,5"). Diferente de parseMoney, um único ponto é sempre decimal.
 */
export const parseDecimal = value => {
  const text = String(value ?? "")
    .replace(/[^\d,.-]/g, "")
    .trim();
  if (!text) return NaN;
  const separators = text.match(/[,.]/g) ?? [];
  if (separators.length > 1) return parseMoney(text);
  const number = Number(text.replace(",", "."));
  return Number.isFinite(number) ? number : NaN;
};
