import AddIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/DeleteOutlineRounded";
import PersonAddIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import RemoveIcon from "@mui/icons-material/RemoveRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useMemo, useRef, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import {
  consumptionSummary,
  equalSummary,
  extraCentsText,
  fromCents,
  MAX_AMOUNT,
  MAX_PEOPLE,
  splitByConsumption,
  splitEqually,
  toPeople,
  whatsappShareLink,
} from "../../lib/billSplit";
import { formatMoney, parseMoney } from "../../lib/money";
import { colors, monoFontFamily } from "../../theme";

const MAX_ROWS = 30;

const money = cents => formatMoney(fromCents(cents));

const moneyAdornment = <InputAdornment position="start">R$</InputAdornment>;

/** Mensagem de erro para um campo em reais (vazio não é erro). */
const moneyError = value => {
  if (!String(value ?? "").trim()) return "";
  const number = parseMoney(value);
  if (!Number.isFinite(number) || number < 0) return "Digite um valor, como 150,90";
  if (number > MAX_AMOUNT) return "Valor alto demais";
  return "";
};

/** Linha rótulo + valor dos detalhes do resultado. */
const DetailRow = ({ label, value, strong }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 2,
      py: 0.5,
    }}
  >
    <Typography
      variant="body2"
      sx={{ color: strong ? "text.primary" : "text.secondary", fontWeight: strong ? 600 : 400 }}
    >
      {label}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontFamily: monoFontFamily,
        fontVariantNumeric: "tabular-nums",
        fontWeight: strong ? 600 : 500,
        whiteSpace: "nowrap",
      }}
    >
      {value}
    </Typography>
  </Box>
);

/** Ações do resultado: copiar o resumo e abrir o WhatsApp com ele. */
const ShareActions = ({ summary, onCopied }) => (
  <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mt: 2 }}>
    <CopyButton value={summary} label="Copiar resumo" size="large" onCopied={onCopied} />
    <Button
      variant="outlined"
      size="large"
      color="success"
      startIcon={<WhatsAppIcon />}
      href={summary ? whatsappShareLink(summary) : undefined}
      target="_blank"
      rel="noopener noreferrer"
      disabled={!summary}
    >
      Enviar no WhatsApp
    </Button>
  </Stack>
);

/** Campo de número de pessoas com botões − e +. */
const PeopleStepper = ({ value, onChange }) => {
  const count = toPeople(value);
  return (
    <TextField
      fullWidth
      label="Número de pessoas"
      value={value}
      onChange={event => onChange(event.target.value.replace(/\D/g, "").slice(0, 3))}
      onBlur={() => onChange(String(count))}
      inputProps={{
        inputMode: "numeric",
        "aria-label": "Número de pessoas",
        style: { textAlign: "center" },
      }}
      helperText={`De 1 a ${MAX_PEOPLE}`}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              aria-label="Menos uma pessoa"
              onClick={() => onChange(String(Math.max(1, count - 1)))}
              disabled={count <= 1}
              edge="start"
              sx={{ width: 44, height: 44 }}
            >
              <RemoveIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Mais uma pessoa"
              onClick={() => onChange(String(Math.min(MAX_PEOPLE, count + 1)))}
              disabled={count >= MAX_PEOPLE}
              edge="end"
              sx={{ width: 44, height: 44 }}
            >
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const EqualMode = ({ service, onCopied, copies }) => {
  const [total, setTotal] = useState("");
  const [people, setPeople] = useState("2");
  const [couvert, setCouvert] = useState("");

  const result = useMemo(
    () => splitEqually({ total, people, couvert, ...service }),
    [total, people, couvert, service]
  );
  const summary = equalSummary(result);
  const totalError = moneyError(total);
  const couvertError = moneyError(couvert);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Total da conta"
            placeholder="0,00"
            value={total}
            onChange={event => setTotal(event.target.value)}
            inputProps={{ inputMode: "decimal" }}
            InputProps={{ startAdornment: moneyAdornment }}
            error={Boolean(totalError)}
            helperText={totalError || "Sem os 10%, como vem na comanda"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PeopleStepper value={people} onChange={setPeople} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Couvert por pessoa"
            placeholder="0,00"
            value={couvert}
            onChange={event => setCouvert(event.target.value)}
            inputProps={{ inputMode: "decimal" }}
            InputProps={{ startAdornment: moneyAdornment }}
            error={Boolean(couvertError)}
            helperText={couvertError || "Couvert artístico, se houver. Fica fora dos 10%"}
          />
        </Grid>
      </Grid>

      <ResultBox label="Cada pessoa paga" flashKey={copies} sx={{ mt: 3 }}>
        <Box aria-live="polite">
          {result.valid ? (
            <>
              <Typography
                component="output"
                sx={{
                  display: "block",
                  fontFamily: monoFontFamily,
                  fontSize: { xs: "1.75rem", sm: "2.25rem" },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {money(result.baseShareCents)}
              </Typography>
              {result.extraCount > 0 && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  {extraCentsText(result.extraCount)} ({money(result.baseShareCents + 1)}) para
                  fechar o total exato.
                </Typography>
              )}
              <Divider sx={{ my: 1.5, borderColor: colors.accentTintStrong }} />
              <DetailRow label="Conta" value={money(result.billCents)} />
              {result.serviceCents > 0 && (
                <DetailRow
                  label={`Serviço (${result.percent.toLocaleString("pt-BR")}%)`}
                  value={money(result.serviceCents)}
                />
              )}
              {result.couvertCents > 0 && (
                <DetailRow
                  label={`Couvert (${result.people} × ${money(result.couvertCents)})`}
                  value={money(result.couvertTotalCents)}
                />
              )}
              <DetailRow label="Total a pagar" value={money(result.totalCents)} strong />
              <ShareActions summary={summary} onCopied={onCopied} />
            </>
          ) : (
            <Typography color="text.secondary">
              Digite o total da conta para ver quanto cada um paga.
            </Typography>
          )}
        </Box>
      </ResultBox>
    </>
  );
};

const ConsumptionMode = ({ service, onCopied, copies }) => {
  const nextId = useRef(3);
  const [rows, setRows] = useState([
    { id: 1, name: "", amount: "" },
    { id: 2, name: "", amount: "" },
  ]);
  const [shared, setShared] = useState("");

  const result = useMemo(
    () => splitByConsumption({ people: rows, shared, ...service }),
    [rows, shared, service]
  );
  const summary = consumptionSummary(result);
  const sharedError = moneyError(shared);

  const updateRow = (id, field) => event =>
    setRows(prev =>
      prev.map(row => (row.id === id ? { ...row, [field]: event.target.value } : row))
    );

  const addRow = () => {
    const id = nextId.current;
    nextId.current += 1;
    setRows(prev => (prev.length >= MAX_ROWS ? prev : [...prev, { id, name: "", amount: "" }]));
  };

  const removeRow = id => setRows(prev => (prev.length > 1 ? prev.filter(r => r.id !== id) : prev));

  return (
    <>
      <Stack spacing={2}>
        {rows.map((row, index) => {
          const amountError = moneyError(row.amount);
          const label = row.name.trim() || `Pessoa ${index + 1}`;
          return (
            <Box
              key={row.id}
              sx={{
                p: { xs: 1.5, sm: 2 },
                borderRadius: "12px",
                bgcolor: colors.surfaceSunken,
              }}
            >
              <Grid container spacing={1.5} alignItems="flex-start">
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome (opcional)"
                    placeholder={`Pessoa ${index + 1}`}
                    value={row.name}
                    onChange={updateRow(row.id, "name")}
                    inputProps={{ maxLength: 40 }}
                    sx={{ "& .MuiInputBase-root": { bgcolor: "background.paper" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
                    <TextField
                      fullWidth
                      label="Quanto consumiu"
                      placeholder="0,00"
                      value={row.amount}
                      onChange={updateRow(row.id, "amount")}
                      inputProps={{ inputMode: "decimal" }}
                      InputProps={{ startAdornment: moneyAdornment }}
                      error={Boolean(amountError)}
                      helperText={amountError || undefined}
                      sx={{ "& .MuiInputBase-root": { bgcolor: "background.paper" } }}
                    />
                    <IconButton
                      aria-label={`Remover ${label}`}
                      onClick={() => removeRow(row.id)}
                      disabled={rows.length <= 1}
                      sx={{ width: 48, height: 48, mt: 0.5, flexShrink: 0 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Stack>

      <Button
        variant="outlined"
        size="large"
        startIcon={<PersonAddIcon />}
        onClick={addRow}
        disabled={rows.length >= MAX_ROWS}
        sx={{ mt: 2 }}
      >
        Adicionar pessoa
      </Button>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Itens divididos por todos (opcional)"
            placeholder="0,00"
            value={shared}
            onChange={event => setShared(event.target.value)}
            inputProps={{ inputMode: "decimal" }}
            InputProps={{ startAdornment: moneyAdornment }}
            error={Boolean(sharedError)}
            helperText={sharedError || "Porções, jarra, garrafa de vinho..."}
          />
        </Grid>
      </Grid>

      <ResultBox label="Quanto cada um paga" flashKey={copies} sx={{ mt: 3 }}>
        <Box aria-live="polite">
          {result.valid ? (
            <>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {result.rows.map((row, index) => (
                  <Box
                    component="li"
                    key={rows[index]?.id ?? index}
                    sx={{
                      py: 1,
                      borderBottom: 1,
                      borderColor: colors.accentTintStrong,
                      "&:first-of-type": { pt: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 2,
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, minWidth: 0, overflowWrap: "anywhere" }}>
                        {row.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: monoFontFamily,
                          fontWeight: 600,
                          fontSize: "1.125rem",
                          fontVariantNumeric: "tabular-nums",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {money(row.totalCents)}
                      </Typography>
                    </Box>
                    <Typography variant="caption" component="p" color="text.secondary">
                      Consumo {money(row.consumedCents)}
                      {row.sharedCents > 0 && ` + itens ${money(row.sharedCents)}`}
                      {row.serviceCents > 0 && ` + serviço ${money(row.serviceCents)}`}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 1.5 }}>
                {result.sharedCents > 0 && (
                  <DetailRow label="Itens divididos" value={money(result.sharedCents)} />
                )}
                {result.serviceCents > 0 && (
                  <DetailRow
                    label={`Serviço (${result.percent.toLocaleString("pt-BR")}%)`}
                    value={money(result.serviceCents)}
                  />
                )}
                <DetailRow label="Total da mesa" value={money(result.totalCents)} strong />
              </Box>
              {result.sharedExtraCount > 0 && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Nos itens divididos, {extraCentsText(result.sharedExtraCount)} para fechar o total
                  exato.
                </Typography>
              )}
              <ShareActions summary={summary} onCopied={onCopied} />
            </>
          ) : (
            <Typography color="text.secondary">
              Digite quanto cada pessoa consumiu para ver a divisão.
            </Typography>
          )}
        </Box>
      </ResultBox>
    </>
  );
};

const BillSplitter = () => {
  const [mode, setMode] = useState("equal");
  const [includeService, setIncludeService] = useState(true);
  const [percentText, setPercentText] = useState("10");
  const [copies, setCopies] = useState(0);

  const service = useMemo(
    () => ({ includeService, servicePercent: percentText }),
    [includeService, percentText]
  );
  const onCopied = () => setCopies(c => c + 1);

  return (
    <ToolPanel>
      <ToggleButtonGroup
        exclusive
        value={mode}
        onChange={(_, next) => next && setMode(next)}
        aria-label="Como dividir"
        sx={{
          mb: 2.5,
          display: "flex",
          "& .MuiToggleButton-root": { flex: 1, minHeight: 44, lineHeight: 1.25 },
        }}
      >
        <ToggleButton value="equal">Dividir igualmente</ToggleButton>
        <ToggleButton value="consumption">Cada um paga o que consumiu</ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 2,
          mb: 2.5,
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={includeService}
              onChange={event => setIncludeService(event.target.checked)}
            />
          }
          label="Incluir serviço (10% do garçom)"
          sx={{ mr: 0 }}
        />
        <TextField
          label="Serviço"
          value={percentText}
          onChange={event => setPercentText(event.target.value.replace(/[^\d,.]/g, "").slice(0, 5))}
          disabled={!includeService}
          inputProps={{ inputMode: "decimal", "aria-label": "Percentual de serviço" }}
          InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
          sx={{ width: 120 }}
        />
      </Box>

      {mode === "equal" ? (
        <EqualMode service={service} onCopied={onCopied} copies={copies} />
      ) : (
        <ConsumptionMode service={service} onCopied={onCopied} copies={copies} />
      )}
    </ToolPanel>
  );
};

export default BillSplitter;
