import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
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

import ToolPanel from "../../components/tool/ToolPanel";
import { getCurrencyName } from "../../lib/currencyNames";

const POPULAR = ["BRL", "USD", "EUR", "GBP", "ARS", "JPY", "CAD", "AUD", "CHF", "CNY"];

const parseAmount = value => {
  const normalized = String(value).replace(/\./g, "").replace(",", ".");
  const parsed = parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const format = (value, currency) => {
  try {
    return value.toLocaleString("pt-BR", { style: "currency", currency, maximumFractionDigits: 2 });
  } catch {
    return `${value.toFixed(2)} ${currency}`;
  }
};

const CurrencyConverter = () => {
  const [rates, setRates] = useState(null);
  const [updatedAt, setUpdatedAt] = useState("");
  const [error, setError] = useState(false);
  const [from, setFrom] = useState("BRL");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState("100");

  // Uma única requisição com base USD; as demais conversões são derivadas.
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then(response =>
        response.ok ? response.json() : Promise.reject(new Error(response.status))
      )
      .then(data => {
        setRates(data.rates);
        setUpdatedAt(data.date || "");
      })
      .catch(() => setError(true));
  }, []);

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
            inputMode="decimal"
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

      <Box
        sx={{
          mt: 3,
          p: 2.5,
          bgcolor: "#f7f8fa",
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
        }}
        aria-live="polite"
      >
        {converted === null && !error ? (
          <Skeleton variant="text" width={260} height={48} />
        ) : (
          <>
            <Typography variant="body2" color="text.secondary">
              {format(value, from)} equivalem a
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.6rem", sm: "2rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {converted !== null ? format(converted, to) : "—"}
            </Typography>
            {rate !== null && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                1 {from} = {rate.toLocaleString("pt-BR", { maximumFractionDigits: 6 })} {to}
                {updatedAt ? ` · cotação de referência de ${updatedAt}` : ""}
              </Typography>
            )}
          </>
        )}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Cotação média de mercado, atualizada uma vez por dia. Bancos e casas de câmbio aplicam
        spread e IOF, então o valor final da sua operação será diferente.
      </Typography>
    </ToolPanel>
  );
};

export default CurrencyConverter;
