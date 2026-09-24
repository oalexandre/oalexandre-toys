import { parseDecimal } from "./money";

/** Regra prática: etanol compensa quando custa até 70% do preço da gasolina. */
export const ETHANOL_RULE = 0.7;

/** Diferença de proporção abaixo da qual o resultado é considerado praticamente empate. */
const CLOSE_MARGIN = 0.01;

const perLiter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

/** 5.899 → "R$ 5,899" (preço por litro, com três casas como nas bombas). */
export const formatPricePerLiter = value => perLiter.format(Number.isFinite(value) ? value : 0);

/** Converte texto ou número em valor positivo; devolve NaN se vazio, inválido ou zero. */
const toPositive = value => {
  const number = typeof value === "number" ? value : parseDecimal(value);
  return Number.isFinite(number) && number > 0 ? number : NaN;
};

// Compara proporções sem os erros de ponto flutuante (4,13 / 5,90 deve dar 70%).
const atMost = (a, b) => Math.round(a * 1e6) <= Math.round(b * 1e6);

/**
 * Compara etanol e gasolina. Aceita textos no formato brasileiro ("5,899")
 * ou números. Devolve null enquanto os dois preços não forem válidos.
 *
 * Com o consumo do carro (km/l nos dois combustíveis), o limite passa a ser
 * kmEtanol / kmGasolina em vez dos 70% fixos, e o custo por km é calculado.
 */
export const compareFuel = ({
  ethanolPrice,
  gasolinePrice,
  ethanolKmL,
  gasolineKmL,
  tankLiters,
}) => {
  const ethanol = toPositive(ethanolPrice);
  const gasoline = toPositive(gasolinePrice);
  if (!Number.isFinite(ethanol) || !Number.isFinite(gasoline)) return null;

  const kmEthanol = toPositive(ethanolKmL);
  const kmGasoline = toPositive(gasolineKmL);
  const usesConsumption = Number.isFinite(kmEthanol) && Number.isFinite(kmGasoline);

  const ratio = ethanol / gasoline;
  const breakEvenRatio = usesConsumption ? kmEthanol / kmGasoline : ETHANOL_RULE;
  const winner = atMost(ratio, breakEvenRatio) ? "etanol" : "gasolina";
  const breakEvenEthanolPrice = gasoline * breakEvenRatio;

  const ethanolCostPerKm = usesConsumption ? ethanol / kmEthanol : null;
  const gasolineCostPerKm = usesConsumption ? gasoline / kmGasoline : null;
  const savingsPer100Km = usesConsumption
    ? Math.abs(ethanolCostPerKm - gasolineCostPerKm) * 100
    : null;

  // Economia ao encher o tanque com o combustível vencedor, comparada ao custo
  // de rodar a mesma distância com o outro.
  const tank = toPositive(tankLiters);
  let savingsPerTank = null;
  if (Number.isFinite(tank)) {
    savingsPerTank =
      winner === "etanol"
        ? tank * (breakEvenRatio * gasoline - ethanol)
        : tank * (ethanol / breakEvenRatio - gasoline);
    savingsPerTank = Math.max(0, savingsPerTank);
  }

  return {
    ethanol,
    gasoline,
    ratio,
    breakEvenRatio,
    breakEvenEthanolPrice,
    winner,
    close: Math.abs(ratio - breakEvenRatio) < CLOSE_MARGIN,
    usesConsumption,
    ethanolCostPerKm,
    gasolineCostPerKm,
    savingsPer100Km,
    tankLiters: Number.isFinite(tank) ? tank : null,
    savingsPerTank,
  };
};
