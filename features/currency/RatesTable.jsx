import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { getCurrencyName } from "../../lib/currencyNames";

const CODES = ["USD", "EUR", "GBP", "ARS", "JPY", "CAD", "AUD", "CHF", "CNY", "UYU", "CLP", "MXN"];

const formatBrl = value => {
  const digits = value >= 1 ? 2 : 4;
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

const formatDate = iso =>
  iso
    ? new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

/** Tabela de quanto vale 1 unidade de cada moeda em reais, com dados do build. */
const RatesTable = ({ rates }) => {
  if (!rates?.rates?.BRL) {
    return (
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        A tabela de cotações não pôde ser carregada nesta versão da página. Use o conversor acima.
      </Typography>
    );
  }
  const brl = rates.rates.BRL;
  const rows = CODES.filter(code => rates.rates[code]).map(code => ({
    code,
    name: getCurrencyName(code),
    inBrl: brl / rates.rates[code],
  }));

  return (
    <>
      <TableContainer
        component={Box}
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.paper",
          mb: 1,
        }}
      >
        <Table size="small" aria-label="Cotações em reais">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Moeda</TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="right">
                1 unidade em reais
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.code}>
                <TableCell>
                  {row.name} ({row.code})
                </TableCell>
                <TableCell align="right" sx={{ fontVariantNumeric: "tabular-nums" }}>
                  {formatBrl(row.inBrl)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Cotação de referência de{" "}
        <time dateTime={rates.date ?? undefined}>{formatDate(rates.date)}</time>, atualizada
        automaticamente ao longo do dia. Valores de mercado, sem spread nem IOF.
      </Typography>
    </>
  );
};

export default RatesTable;
