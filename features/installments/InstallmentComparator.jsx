import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import { annualRate, compareInstallments, monthlyFromAnnual } from "../../lib/installments";
import { formatMoney, formatPercent, parseMoney, parsePercent, roundCents } from "../../lib/money";
import { colors } from "../../theme";

const MAX_COUNT = 120;
const MAX_RATE = { month: 20, year: 500 };

// Mantém só dígitos e separadores enquanto a pessoa digita.
const cleanDecimal = value => value.replace(/[^\d.,]/g, "");

const reais = {
  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
};
const percent = {
  endAdornment: <InputAdornment position="end">%</InputAdornment>,
};

// Tabela mês a mês sem "R$" em cada célula, para caber no celular.
const plain = value =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const VERDICT_TEXT = {
  cash: "À vista compensa",
  installments: "Parcelado compensa",
  tie: "Tanto faz",
};

/** Título de bloco do formulário, com controle opcional à direita. */
const SectionTitle = ({ children, action }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 1,
      mb: 1.5,
    }}
  >
    <Typography component="div" sx={{ fontWeight: 600 }}>
      {children}
    </Typography>
    {action}
  </Box>
);

/** Frase que explica o porquê do veredito, com os valores em reais. */
const explain = result => {
  const discount = formatMoney(result.discountValue);
  const earnings = formatMoney(result.earnings);
  const gap = formatMoney(Math.abs(roundCents(result.finalBalance)));

  if (result.discountValue < -0.005) {
    return "As parcelas somam menos que o preço à vista. Parcelar sai mais barato de qualquer jeito; confira se os valores estão certos.";
  }
  if (result.verdict === "tie") {
    return `O desconto à vista (${discount}) e o que seu dinheiro renderia (${earnings}) praticamente se anulam. Escolha pelo que for mais prático.`;
  }
  if (result.verdict === "cash") {
    return `O desconto de ${discount} é maior que os ${earnings} que seu dinheiro renderia enquanto você paga as parcelas. Pagando à vista, você fica ${gap} à frente.`;
  }
  if (result.discountValue < 0.005) {
    return `Sem desconto à vista, parcelar deixa o dinheiro aplicado: ele renderia ${earnings} até a última parcela.`;
  }
  return `Seu dinheiro renderia ${earnings} enquanto você paga as parcelas, mais que o desconto de ${discount} à vista. Parcelando, sobram ${gap} no fim.`;
};

/** Barra horizontal proporcional, para comparar desconto e rendimento. */
const Bar = ({ label, value, max, strong }) => (
  <Box>
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1, mb: 0.5 }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontWeight: 700, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}
      >
        {formatMoney(value)}
      </Typography>
    </Box>
    <Box sx={{ height: 10, borderRadius: 5, bgcolor: "background.paper", overflow: "hidden" }}>
      <Box
        sx={{
          height: "100%",
          width: `${max > 0 ? Math.max(0, Math.min(1, value / max)) * 100 : 0}%`,
          minWidth: value > 0 ? 6 : 0,
          borderRadius: 5,
          bgcolor: strong ? "primary.main" : colors.accentTintStrong,
          transition: "width 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </Box>
  </Box>
);

/** Linha rótulo/valor dentro dos cartões de comparação. */
const Line = ({ label, value, tone, bold }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.5, py: 0.5 }}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontWeight: bold ? 700 : 600,
        fontVariantNumeric: "tabular-nums",
        textAlign: "right",
        color: tone === "good" ? "success.main" : "text.primary",
      }}
    >
      {value}
    </Typography>
  </Box>
);

/** Cartão de uma das opções; o vencedor ganha borda e selo. */
const OptionCard = ({ title, winner, children, finalLabel, finalValue }) => (
  <Box
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      p: 2,
      borderRadius: "12px",
      bgcolor: "background.paper",
      border: 2,
      borderColor: winner ? "success.main" : "transparent",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
      <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
      {winner && (
        <Box
          component="span"
          sx={{
            px: 1,
            py: 0.25,
            borderRadius: 1,
            fontSize: "0.8125rem",
            fontWeight: 700,
            color: colors.successInk,
            bgcolor: colors.successTint,
          }}
        >
          Melhor opção
        </Box>
      )}
    </Box>
    <Box sx={{ flex: 1 }}>{children}</Box>
    <Divider sx={{ my: 1 }} />
    <Line label={finalLabel} value={finalValue} bold />
  </Box>
);

const InstallmentComparator = () => {
  const [form, setForm] = useState({
    installment: "100,00",
    count: "10",
    cashMode: "price",
    cashPrice: "900,00",
    discount: "10",
    firstNow: false,
    investRate: "0,8",
    investUnit: "month",
  });
  const [showMonths, setShowMonths] = useState(false);

  const setField = name => event =>
    setForm(prev => ({
      ...prev,
      [name]:
        event.target.type === "checkbox" ? event.target.checked : cleanDecimal(event.target.value),
    }));

  const installment = parseMoney(form.installment);
  const count = parseInt(form.count, 10);
  const total = installment * count;
  const discountPct = parsePercent(form.discount);
  const investPct = parsePercent(form.investRate);
  const monthlyInvest =
    form.investUnit === "year" ? monthlyFromAnnual(investPct / 100) : investPct / 100;

  const cashPrice =
    form.cashMode === "price"
      ? parseMoney(form.cashPrice)
      : roundCents(total * (1 - discountPct / 100));

  const installmentError = form.installment !== "" && !(installment > 0);
  const countError =
    form.count !== "" && (!Number.isInteger(count) || count < 1 || count > MAX_COUNT);
  const discountError =
    form.cashMode === "discount" &&
    form.discount !== "" &&
    !(discountPct >= 0 && discountPct < 100);
  const cashError = form.cashMode === "price" && form.cashPrice !== "" && !(cashPrice > 0);
  const investError =
    form.investRate !== "" && !(investPct >= 0 && investPct <= MAX_RATE[form.investUnit]);

  const result =
    installmentError || countError || discountError || cashError || investError
      ? null
      : compareInstallments({
          cashPrice,
          installment,
          count,
          firstNow: form.firstNow,
          investRate: monthlyInvest,
        });

  const totalReady = installment > 0 && Number.isInteger(count) && count >= 1;
  const cashHelper =
    form.cashMode === "price"
      ? cashError
        ? "Informe um valor maior que zero"
        : totalReady && cashPrice > 0
        ? cashPrice < total
          ? `Desconto de ${formatMoney(total - cashPrice)} (${formatPercent(
              1 - cashPrice / total,
              1
            )}) sobre o total parcelado`
          : "Sem desconto em relação ao total parcelado"
        : " "
      : discountError
      ? "Use um valor de 0 a 99"
      : totalReady && cashPrice > 0
      ? `Preço à vista: ${formatMoney(cashPrice)}`
      : " ";

  const investHelper = investError
    ? `Use um valor de 0 a ${MAX_RATE[form.investUnit]}`
    : Number.isFinite(monthlyInvest) && form.investRate !== ""
    ? form.investUnit === "year"
      ? `Equivale a ${formatPercent(monthlyInvest)} ao mês`
      : `Equivale a ${formatPercent(annualRate(monthlyInvest))} ao ano`
    : " ";

  const rate = result?.monthlyRate;
  const hasInterest = rate !== null && rate !== undefined && rate >= 0.00005;
  const barMax = result ? Math.max(result.discountValue, result.earnings) : 0;

  return (
    <ToolPanel>
      <SectionTitle>Parcelado</SectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Valor da parcela"
            value={form.installment}
            onChange={setField("installment")}
            inputProps={{ inputMode: "decimal" }}
            InputProps={reais}
            error={installmentError}
            helperText={installmentError ? "Informe um valor maior que zero" : " "}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Número de parcelas"
            value={form.count}
            onChange={event =>
              setForm(prev => ({ ...prev, count: event.target.value.replace(/\D/g, "") }))
            }
            inputProps={{ inputMode: "numeric" }}
            InputProps={{
              endAdornment: <InputAdornment position="end">vezes</InputAdornment>,
            }}
            error={countError}
            helperText={
              countError
                ? `Use de 1 a ${MAX_COUNT} parcelas`
                : totalReady
                ? `Total parcelado: ${formatMoney(total)}`
                : " "
            }
          />
        </Grid>
      </Grid>
      <FormControlLabel
        control={<Switch checked={form.firstNow} onChange={setField("firstNow")} />}
        label="Primeira parcela paga na compra"
        sx={{ mb: 2 }}
      />

      <Divider sx={{ mb: 2 }} />

      <SectionTitle
        action={
          <ToggleButtonGroup
            exclusive
            size="small"
            value={form.cashMode}
            onChange={(_, mode) => mode && setForm(prev => ({ ...prev, cashMode: mode }))}
            aria-label="Como informar o preço à vista"
          >
            <ToggleButton value="price">Preço em R$</ToggleButton>
            <ToggleButton value="discount">Desconto em %</ToggleButton>
          </ToggleButtonGroup>
        }
      >
        À vista
      </SectionTitle>
      {form.cashMode === "price" ? (
        <TextField
          fullWidth
          label="Preço à vista"
          value={form.cashPrice}
          onChange={setField("cashPrice")}
          inputProps={{ inputMode: "decimal" }}
          InputProps={reais}
          error={cashError}
          helperText={cashHelper}
        />
      ) : (
        <TextField
          fullWidth
          label="Desconto à vista"
          value={form.discount}
          onChange={setField("discount")}
          inputProps={{ inputMode: "decimal" }}
          InputProps={percent}
          error={discountError}
          helperText={cashHelper}
        />
      )}

      <Divider sx={{ my: 2 }} />

      <SectionTitle
        action={
          <ToggleButtonGroup
            exclusive
            size="small"
            value={form.investUnit}
            onChange={(_, unit) => unit && setForm(prev => ({ ...prev, investUnit: unit }))}
            aria-label="Período do rendimento"
          >
            <ToggleButton value="month">Ao mês</ToggleButton>
            <ToggleButton value="year">Ao ano</ToggleButton>
          </ToggleButtonGroup>
        }
      >
        Seu dinheiro aplicado
      </SectionTitle>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        Se você parcelar, o dinheiro do pagamento à vista pode ficar aplicado e as parcelas saem
        dele. Quanto ele rende?
      </Typography>
      <TextField
        fullWidth
        label={form.investUnit === "year" ? "Rendimento ao ano" : "Rendimento ao mês"}
        value={form.investRate}
        onChange={setField("investRate")}
        inputProps={{ inputMode: "decimal" }}
        InputProps={percent}
        error={investError}
        helperText={investHelper}
      />

      <ResultBox label="Resultado" sx={{ mt: 3 }}>
        <Box>
          {result ? (
            <>
              <Box aria-live="polite">
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.875rem" },
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {VERDICT_TEXT[result.verdict]}
                </Typography>
                <Typography sx={{ mt: 0.75, color: "text.secondary" }}>
                  {explain(result)}
                </Typography>
              </Box>

              {result.discountValue >= 0 && (
                <Box sx={{ display: "grid", gap: 1.25, mt: 2.5 }}>
                  <Bar
                    label="Desconto pagando à vista"
                    value={result.discountValue}
                    max={barMax}
                    strong={result.verdict === "cash"}
                  />
                  <Bar
                    label="Rendimento enquanto parcela"
                    value={result.earnings}
                    max={barMax}
                    strong={result.verdict === "installments"}
                  />
                </Box>
              )}

              <Grid container spacing={1.5} sx={{ mt: 1.5 }}>
                <Grid item xs={12} sm={6}>
                  <OptionCard
                    title="Pagando à vista"
                    winner={result.verdict === "cash"}
                    finalLabel="Custo final"
                    finalValue={formatMoney(result.cashPrice)}
                  >
                    <Line label="Você paga hoje" value={formatMoney(result.cashPrice)} />
                    <Line
                      label="Desconto"
                      value={
                        result.discountValue > 0.005
                          ? `${formatMoney(result.discountValue)} (${formatPercent(
                              result.discount,
                              1
                            )})`
                          : "Nenhum"
                      }
                      tone={result.discountValue > 0.005 ? "good" : undefined}
                    />
                    <Line label="Depois disso" value="Nada a pagar" />
                  </OptionCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <OptionCard
                    title="Parcelando"
                    winner={result.verdict === "installments"}
                    finalLabel="Custo final"
                    finalValue={formatMoney(result.realCost)}
                  >
                    <Line
                      label={`${count}× de ${formatMoney(installment)}`}
                      value={formatMoney(result.total)}
                    />
                    <Line
                      label="Seu dinheiro rende"
                      value={`+ ${formatMoney(result.earnings)}`}
                      tone={result.earnings > 0.005 ? "good" : undefined}
                    />
                    <Line
                      label="Juros embutidos"
                      value={
                        hasInterest
                          ? `${formatPercent(rate)} ao mês`
                          : rate !== null && Math.abs(rate) < 0.00005
                          ? "Nenhum"
                          : "—"
                      }
                    />
                  </OptionCard>
                </Grid>
              </Grid>

              {hasInterest && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  O parcelado embute juros de {formatPercent(rate)} ao mês
                  {Number.isFinite(result.yearlyRate) && result.yearlyRate < 1000
                    ? ` (${formatPercent(result.yearlyRate)} ao ano)`
                    : ""}
                  . Se o seu dinheiro render mais que isso, parcelar compensa; se render menos, à
                  vista compensa.
                </Typography>
              )}

              <Button
                size="small"
                onClick={() => setShowMonths(open => !open)}
                aria-expanded={showMonths}
                aria-controls="parcelado-mes-a-mes"
                endIcon={
                  <ExpandMoreIcon
                    sx={{
                      transition: "transform 150ms",
                      transform: showMonths ? "rotate(180deg)" : "none",
                    }}
                  />
                }
                sx={{ mt: 1.5, ml: -1 }}
              >
                {showMonths ? "Esconder o mês a mês" : "Ver o mês a mês do dinheiro aplicado"}
              </Button>
              <Collapse in={showMonths} id="parcelado-mes-a-mes">
                <Box sx={{ overflowX: "auto", mt: 1 }}>
                  <Box
                    component="table"
                    sx={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                      fontVariantNumeric: "tabular-nums",
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      "& th, & td": {
                        px: { xs: 0.75, sm: 1.25 },
                        py: 0.75,
                        textAlign: "right",
                        whiteSpace: "nowrap",
                        borderBottom: 1,
                        borderColor: "divider",
                      },
                      "& th:first-of-type, & td:first-of-type": { textAlign: "left" },
                      "& th": { fontWeight: 700, color: "text.secondary", fontSize: "0.8125rem" },
                      "& tr:last-of-type td": { borderBottom: 0 },
                    }}
                  >
                    <caption style={{ captionSide: "bottom", textAlign: "left", paddingTop: 8 }}>
                      <Typography variant="caption" component="span">
                        Valores em reais. Começa com os {formatMoney(result.cashPrice)} do preço à
                        vista aplicados; saldo negativo é dinheiro que faltou e não rende.
                      </Typography>
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Mês</th>
                        <th scope="col">Rendimento</th>
                        <th scope="col">Parcela</th>
                        <th scope="col">Saldo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Hoje</td>
                        <td>—</td>
                        <td>—</td>
                        <td>{plain(result.cashPrice)}</td>
                      </tr>
                      {result.rows.map(row => (
                        <tr key={row.month}>
                          <td>{row.month === 0 ? "No ato" : `${row.month}º`}</td>
                          <td>{row.interest > 0 ? `+${plain(row.interest)}` : "—"}</td>
                          <td>−{plain(row.payment)}</td>
                          <Box
                            component="td"
                            sx={{ color: row.balance < -0.005 ? "error.main" : "text.primary" }}
                          >
                            {plain(roundCents(row.balance))}
                          </Box>
                        </tr>
                      ))}
                    </tbody>
                  </Box>
                </Box>
              </Collapse>
            </>
          ) : (
            <Typography color="text.secondary">
              Preencha a parcela, o número de parcelas, o preço à vista e o rendimento para ver a
              comparação.
            </Typography>
          )}
        </Box>
      </ResultBox>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Calculadora para comparar opções, não é recomendação financeira. O resultado depende do
        rendimento que você informar.
      </Typography>
    </ToolPanel>
  );
};

export default InstallmentComparator;
