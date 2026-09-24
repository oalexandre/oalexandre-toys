/**
 * Cálculos para comparar pagamento à vista com parcelado. Tudo em frações
 * mensais (0.02 = 2% ao mês). Sem React, para poder testar isolado.
 */

/**
 * Soma dos fatores de desconto de `count` parcelas mensais à taxa `rate`.
 * Com `firstNow`, a primeira parcela é paga no ato (tempo 0); senão, em 30 dias.
 */
export const annuityFactor = (rate, count, firstNow = false) => {
  const start = firstNow ? 0 : 1;
  let factor = 0;
  for (let k = 0; k < count; k += 1) {
    factor += Math.pow(1 + rate, -(start + k));
  }
  return factor;
};

/** Valor presente (em dinheiro de hoje) das parcelas à taxa mensal `rate`. */
export const presentValue = ({ installment, count, rate, firstNow = false }) =>
  installment * annuityFactor(rate, count, firstNow);

const MIN_RATE = -0.99;
const MAX_RATE = 10; // 1000% ao mês: acima disso o resultado não tem sentido prático.

/**
 * Taxa mensal que iguala o valor presente das parcelas ao preço à vista.
 * Resolve por bisseção (o valor presente cai sempre que a taxa sobe, então
 * há no máximo uma raiz). Devolve null quando não existe taxa: dados
 * inválidos, uma única parcela paga no ato ou raiz fora do intervalo.
 */
export const impliedRate = ({ cashPrice, installment, count, firstNow = false }) => {
  if (!(cashPrice > 0) || !(installment > 0) || !Number.isInteger(count) || count < 1) {
    return null;
  }
  // Tudo pago no ato: não há prazo, logo não há juros a calcular.
  if (firstNow && count === 1) return null;

  const total = installment * count;
  if (Math.abs(total - cashPrice) < 1e-9) return 0;

  const f = rate => presentValue({ installment, count, rate, firstNow }) - cashPrice;
  let low = MIN_RATE;
  let high = MAX_RATE;
  const fLow = f(low);
  const fHigh = f(high);
  if (!Number.isFinite(fLow) || !Number.isFinite(fHigh) || fLow < 0 || fHigh > 0) return null;

  for (let step = 0; step < 200; step += 1) {
    const mid = (low + high) / 2;
    const value = f(mid);
    if (value > 0) low = mid;
    else high = mid;
    if (high - low < 1e-12) break;
  }
  const rate = (low + high) / 2;
  return Number.isFinite(rate) ? rate : null;
};

/** Converte taxa mensal em taxa anual equivalente (juros compostos). */
export const annualRate = monthly => Math.pow(1 + monthly, 12) - 1;

/** Converte taxa anual em mensal equivalente (juros compostos). */
export const monthlyFromAnnual = yearly => Math.pow(1 + yearly, 1 / 12) - 1;

/**
 * Simula o cenário "parcelar e deixar o dinheiro aplicado": o valor que seria
 * pago à vista fica rendendo e cada parcela sai dele. Mês a mês, o saldo rende
 * `investRate` e depois paga a parcela. Com `firstNow`, a primeira parcela sai
 * no ato, antes de qualquer rendimento. Saldo negativo não rende (é dinheiro
 * que faltou e teve de vir de outro lugar).
 */
export const simulateInvested = ({
  cashPrice,
  installment,
  count,
  firstNow = false,
  investRate,
}) => {
  const rows = [];
  let balance = cashPrice;
  let earnings = 0;

  if (firstNow) {
    balance -= installment;
    rows.push({ month: 0, interest: 0, payment: installment, balance });
  }
  const paidMonths = firstNow ? count - 1 : count;
  for (let month = 1; month <= paidMonths; month += 1) {
    const interest = balance > 0 ? balance * investRate : 0;
    earnings += interest;
    balance += interest - installment;
    rows.push({ month, interest, payment: installment, balance });
  }
  return { rows, earnings, finalBalance: balance };
};

/**
 * Compara as duas formas de pagamento. `investRate` é o rendimento mensal
 * do dinheiro (fração). Devolve null se faltar algum dado válido.
 *
 * verdict: "cash" (à vista compensa), "installments" (parcelado compensa)
 * ou "tie" (diferença de até R$ 1 ou 0,5% do preço à vista). O critério é o
 * saldo final de `simulateInvested`: o rendimento do dinheiro aplicado contra
 * o desconto à vista.
 */
export const compareInstallments = ({
  cashPrice,
  installment,
  count,
  firstNow = false,
  investRate,
}) => {
  if (
    !(cashPrice > 0) ||
    !(installment > 0) ||
    !Number.isInteger(count) ||
    count < 1 ||
    !Number.isFinite(investRate) ||
    investRate <= -1
  ) {
    return null;
  }

  const total = installment * count;
  const pv = presentValue({ installment, count, rate: investRate, firstNow });
  const difference = pv - cashPrice;
  const simulation = simulateInvested({ cashPrice, installment, count, firstNow, investRate });
  // Saldo final da aplicação: positivo, sobrou dinheiro parcelando; negativo, faltou.
  // É o mesmo que rendimento menos desconto à vista.
  const tolerance = Math.max(1, cashPrice * 0.005);
  let verdict = "tie";
  if (simulation.finalBalance < -tolerance) verdict = "cash";
  else if (simulation.finalBalance > tolerance) verdict = "installments";

  const rate = impliedRate({ cashPrice, installment, count, firstNow });

  return {
    total,
    cashPrice,
    discount: 1 - cashPrice / total,
    // Desconto à vista a partir do qual pagar à vista passa a valer mais.
    breakEvenDiscount: 1 - pv / total,
    presentValue: pv,
    difference,
    discountValue: total - cashPrice,
    earnings: simulation.earnings,
    finalBalance: simulation.finalBalance,
    realCost: total - simulation.earnings,
    rows: simulation.rows,
    verdict,
    monthlyRate: rate,
    yearlyRate: rate === null ? null : annualRate(rate),
  };
};
