import SwapHorizIcon from "@mui/icons-material/SwapHorizRounded";
import {
  Alert,
  Autocomplete,
  Box,
  Grid,
  IconButton,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import { getCurrencyName } from "../../lib/currencyNames";

const POPULAR = ["BRL", "USD", "EUR", "GBP", "ARS", "JPY", "CAD", "AUD", "CHF", "CNY"];

const parseAmount = value => {
  const normalized = String(value).replace(/\./g, "").replace(",", ".");
  const parsed = parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatDate = iso =>
  iso
    ? new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "long" })
    : "";

const format = (value, currency) => {
  try {
    return value.toLocaleString("pt-BR", { style: "currency", currency, maximumFractionDigits: 2 });
  } catch {
    return `${value.toFixed(2)} ${currency}`;
  }
};

const CurrencyConverter = ({ initialRates = null }) => {
  const [rates, setRates] = useState(initialRates?.rates ?? null);
  const [updatedAt, setUpdatedAt] = useState(initialRates?.date ?? "");
  const [error, setError] = useState(false);
  const [from, setFrom] = useState("BRL");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState("100");
  const [copies, setCopies] = useState(0);

  // Uma única requisição com base USD; as demais conversões são derivadas.
  // As cotações do build servem de ponto de partida e são atualizadas no cliente.
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(response =>
        response.ok ? response.json() : Promise.reject(new Error(response.status))
      )
      .then(data => {
        setRates(data.rates);
        setUpdatedAt(data.date || "");
      })
      .catch(() => {
        if (!initialRates) setError(true);
      });
  }, [initialRates]);

  const options = useMemo(() => {
    if (!rates) return POPULAR;
    const rest = Object.keys(rates)
      .filter(code => !POPULAR.includes(code))
      .sort();
    return [...POPULAR, ...rest];
  }, [rates]);

  const rate = rates && rates[from] && rates[to] ? rates[to] / rates[from] : null;
  const value = parseAmount(amount);
  const converted = rate !== null ? value * rate : null;

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const label = code => `${code} · ${getCurrencyName(code)}`;

  return (
    <ToolPanel>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Não foi possível carregar as cotações agora. Tente novamente em instantes.
        </Alert>
      )}

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Valor"
            value={amount}
            inputProps={{ inputMode: "decimal" }}
            onChange={event => setAmount(event.target.value.replace(/[^\d.,]/g, ""))}
          />
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <Autocomplete
            disableClearable
            options={options}
            value={from}
            getOptionLabel={label}
            onChange={(_, code) => setFrom(code)}
            renderInput={params => <TextField {...params} label="De" />}
          />
        </Grid>
        <Grid item xs={12} sm={1} sx={{ textAlign: "center" }}>
          <IconButton aria-label="Inverter moedas" onClick={swap} color="primary">
            <SwapHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <Autocomplete
            disableClearable
            options={options}
            value={to}
            getOptionLabel={label}
            onChange={(_, code) => setTo(code)}
            renderInput={params => <TextField {...params} label="Para" />}
          />
        </Grid>
      </Grid>

      <ResultBox
        label="Resultado"
        sx={{ mt: 3 }}
        flashKey={copies}
        actions={
          converted !== null ? (
            <CopyButton
              value={format(converted, to)}
              label="Copiar"
              size="large"
              onCopied={() => setCopies(c => c + 1)}
            />
          ) : null
        }
      >
        <Box aria-live="polite">
          {converted === null && !error ? (
            <Skeleton variant="text" width={260} height={48} />
          ) : (
            <>
              <Typography variant="body2" color="text.secondary">
                {format(value, from)} equivalem a
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1.75rem", sm: "2.125rem" },
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {converted !== null ? format(converted, to) : "—"}
              </Typography>
              {rate !== null && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  1 {from} = {rate.toLocaleString("pt-BR", { maximumFractionDigits: 6 })} {to}
                  {updatedAt ? ` · cotação de referência de ${formatDate(updatedAt)}` : ""}
                </Typography>
              )}
            </>
          )}
        </Box>
      </ResultBox>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Cotação média de mercado, atualizada uma vez por dia. Bancos e casas de câmbio aplicam
        spread e IOF, então o valor final da sua operação será diferente.
      </Typography>
    </ToolPanel>
  );
};

export default CurrencyConverter;
