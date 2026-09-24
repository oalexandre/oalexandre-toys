import { formatMoney, parseMoney, parsePercent, roundCents } from "./money";

/**
 * Lógica de "rachar a conta". Tudo é calculado em centavos inteiros para que
 * a soma das partes feche exatamente com o total, sem erros de arredondamento.
 */

export const MAX_PEOPLE = 100;

/** Acima disso (R$ 10 milhões) o valor é tratado como inválido. */
export const MAX_AMOUNT = 10_000_000;

/** Valor digitado em reais para centavos inteiros (vazio, inválido, negativo ou alto demais vira 0). */
export const toCents = value => {
  const number = typeof value === "number" ? value : parseMoney(value);
  if (!Number.isFinite(number) || number <= 0 || number > MAX_AMOUNT) return 0;
  return Math.round(roundCents(number) * 100);
};

/** Centavos inteiros para reais. */
export const fromCents = cents => cents / 100;

/** Percentual digitado limitado a 0–100 (inválido vira 0). */
export const toPercent = value => {
  const number = typeof value === "number" ? value : parsePercent(value);
  if (!Number.isFinite(number) || number <= 0) return 0;
  return Math.min(number, 100);
};

/** Número de pessoas inteiro entre 1 e MAX_PEOPLE. */
export const toPeople = value => {
  const number = parseInt(String(value ?? "").replace(/\D/g, ""), 10);
  if (!Number.isFinite(number) || number < 1) return 1;
  return Math.min(number, MAX_PEOPLE);
};

/**
 * Divide `totalCents` em `parts` partes iguais. Os centavos que sobram vão,
 * um para cada, às primeiras pessoas: 10000 / 3 → [3334, 3333, 3333].
 */
export const splitCents = (totalCents, parts) => {
  const count = Math.max(1, Math.floor(parts) || 1);
  const total = Math.max(0, Math.round(totalCents) || 0);
  const base = Math.floor(total / count);
  const leftover = total - base * count;
  return Array.from({ length: count }, (_, index) => base + (index < leftover ? 1 : 0));
};

/**
 * Reparte `totalCents` proporcionalmente aos pesos, pelo método dos maiores
 * restos: cada um recebe a parte inteira e os centavos restantes vão para
 * quem teve a maior fração. A soma é sempre igual ao total.
 */
export const allocateCents = (totalCents, weights) => {
  const total = Math.max(0, Math.round(totalCents) || 0);
  const safe = weights.map(weight => (Number.isFinite(weight) && weight > 0 ? weight : 0));
  const sum = safe.reduce((acc, weight) => acc + weight, 0);
  if (!safe.length) return [];
  if (sum === 0) return splitCents(total, safe.length);

  const exact = safe.map(weight => (total * weight) / sum);
  const result = exact.map(Math.floor);
  let leftover = total - result.reduce((acc, value) => acc + value, 0);
  const order = exact
    .map((value, index) => ({ index, fraction: value - Math.floor(value) }))
    .sort((a, b) => b.fraction - a.fraction || a.index - b.index);
  for (let i = 0; leftover > 0; i = (i + 1) % order.length) {
    result[order[i].index] += 1;
    leftover -= 1;
  }
  return result;
};

/** Valor do serviço em centavos sobre uma base em centavos. */
export const serviceCents = (baseCents, percent) => Math.round((baseCents * percent) / 100);

/**
 * Modo "Dividir igualmente".
 * Entrada: { total, people, includeService, servicePercent, couvert } (strings ou números).
 * O serviço incide sobre a conta; o couvert é somado por pessoa, fora dos 10%.
 */
export const splitEqually = ({ total, people, includeService, servicePercent, couvert }) => {
  const count = toPeople(people);
  const billCents = toCents(total);
  const percent = includeService ? toPercent(servicePercent) : 0;
  const service = serviceCents(billCents, percent);
  const couvertEach = toCents(couvert);
  const shares = splitCents(billCents + service, count).map(share => share + couvertEach);
  const base = Math.min(...shares);
  const extraCount = shares.filter(share => share > base).length;

  return {
    valid: billCents > 0,
    people: count,
    percent,
    billCents,
    serviceCents: service,
    couvertCents: couvertEach,
    couvertTotalCents: couvertEach * count,
    totalCents: billCents + service + couvertEach * count,
    shares,
    baseShareCents: base,
    extraCount,
  };
};

/**
 * Modo "Cada um paga o que consumiu".
 * Entrada: { people: [{ name, amount }], shared, includeService, servicePercent }.
 * Os itens divididos por todos são repartidos igualmente; o serviço é
 * repartido na proporção do que cada um deve (consumo + parte dos itens).
 */
export const splitByConsumption = ({ people, shared, includeService, servicePercent }) => {
  const list = people?.length ? people : [{}];
  const percent = includeService ? toPercent(servicePercent) : 0;
  const consumed = list.map(person => toCents(person?.amount));
  const sharedTotal = toCents(shared);
  const sharedShares = splitCents(sharedTotal, list.length);
  const bases = consumed.map((value, index) => value + sharedShares[index]);
  const subtotal = bases.reduce((acc, value) => acc + value, 0);
  const service = serviceCents(subtotal, percent);
  const services = allocateCents(service, bases);

  const rows = list.map((person, index) => ({
    name: String(person?.name ?? "").trim() || `Pessoa ${index + 1}`,
    consumedCents: consumed[index],
    sharedCents: sharedShares[index],
    serviceCents: services[index],
    totalCents: bases[index] + services[index],
  }));

  const sharedBase = sharedShares.length ? Math.min(...sharedShares) : 0;

  return {
    valid: subtotal > 0,
    percent,
    rows,
    consumedCents: consumed.reduce((acc, value) => acc + value, 0),
    sharedCents: sharedTotal,
    subtotalCents: subtotal,
    serviceCents: service,
    totalCents: subtotal + service,
    sharedExtraCount: sharedShares.filter(value => value > sharedBase).length,
  };
};

const money = cents => formatMoney(fromCents(cents));

const formatPercentLabel = percent =>
  `${percent.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}%`;

/** Frase simples sobre o centavo a mais: "1 pessoa paga 1 centavo a mais". */
export const extraCentsText = count => {
  if (count <= 0) return "";
  return count === 1 ? "1 pessoa paga 1 centavo a mais" : `${count} pessoas pagam 1 centavo a mais`;
};

/** Resumo em texto puro para colar no grupo do WhatsApp (modo igual). */
export const equalSummary = result => {
  if (!result?.valid) return "";
  const lines = ["Divisão da conta", `Conta: ${money(result.billCents)}`];
  if (result.serviceCents > 0) {
    lines.push(`Serviço (${formatPercentLabel(result.percent)}): ${money(result.serviceCents)}`);
  }
  if (result.couvertCents > 0) {
    lines.push(`Couvert: ${money(result.couvertCents)} por pessoa`);
  }
  lines.push(`Total: ${money(result.totalCents)}`);
  lines.push("");
  const pessoas = result.people === 1 ? "1 pessoa" : `${result.people} pessoas`;
  lines.push(`${pessoas}: ${money(result.baseShareCents)} cada`);
  if (result.extraCount > 0) {
    lines.push(
      `(${result.extraCount} ${result.extraCount === 1 ? "paga" : "pagam"} ${money(
        result.baseShareCents + 1
      )} para fechar o total)`
    );
  }
  return lines.join("\n");
};

/** Resumo em texto puro para colar no grupo do WhatsApp (modo por consumo). */
export const consumptionSummary = result => {
  if (!result?.valid) return "";
  const lines = ["Divisão da conta"];
  result.rows.forEach(row => lines.push(`${row.name}: ${money(row.totalCents)}`));
  lines.push("");
  if (result.sharedCents > 0) {
    lines.push(`Itens divididos por todos: ${money(result.sharedCents)}`);
  }
  if (result.serviceCents > 0) {
    lines.push(`Serviço (${formatPercentLabel(result.percent)}): ${money(result.serviceCents)}`);
  }
  lines.push(`Total: ${money(result.totalCents)}`);
  return lines.join("\n");
};

/** Link do WhatsApp sem destinatário: a pessoa escolhe o grupo ao abrir. */
export const whatsappShareLink = text =>
  text ? `https://wa.me/?text=${encodeURIComponent(text)}` : "";
