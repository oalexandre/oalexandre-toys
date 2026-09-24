import CasinoIcon from "@mui/icons-material/CasinoRounded";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import { drawNumbers, secureRandomBetween } from "../../lib/random";

import DrawReveal from "./DrawReveal";

// Acima disso a revelação número a número ficaria longa demais: mostra direto.
const MAX_ANIMATED = 20;

const toInt = (value, fallback) => {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const NumberPicker = () => {
  const [form, setForm] = useState({
    count: "1",
    min: "1",
    max: "100",
    unique: true,
    sorted: true,
  });
  const [result, setResult] = useState([]);
  const [drawnAt, setDrawnAt] = useState(null);
  const [runId, setRunId] = useState(0);
  const [revealing, setRevealing] = useState(false);
  const [copies, setCopies] = useState(0);

  const count = toInt(form.count, 1);
  const min = toInt(form.min, 1);
  const max = toInt(form.max, 100);
  const rangeSize = Math.abs(max - min) + 1;
  const tooMany = form.unique && count > rangeSize;
  const invalid = count < 1 || count > 1000 || tooMany;

  const setField = name => event =>
    setForm(prev => ({
      ...prev,
      [name]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
    }));

  const draw = event => {
    event.preventDefault();
    if (invalid || revealing) return;
    setResult(drawNumbers({ count, min, max, unique: form.unique, sorted: form.sorted }));
    setDrawnAt(new Date());
    setRevealing(true);
    setRunId(id => id + 1);
  };

  return (
    <Box component="form" onSubmit={draw} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Quantos números"
            value={form.count}
            inputProps={{ inputMode: "numeric" }}
            onChange={setField("count")}
            error={invalid}
            helperText={
              tooMany
                ? `Só há ${rangeSize} números no intervalo`
                : count > 1000
                ? "Máximo de 1000"
                : " "
            }
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            fullWidth
            label="De"
            value={form.min}
            inputProps={{ inputMode: "numeric" }}
            onChange={setField("min")}
            helperText=" "
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            fullWidth
            label="Até"
            value={form.max}
            inputProps={{ inputMode: "numeric" }}
            onChange={setField("max")}
            helperText=" "
          />
        </Grid>
      </Grid>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ sm: 3 }} sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Switch checked={form.unique} onChange={setField("unique")} />}
          label="Sem repetição"
        />
        <FormControlLabel
          control={<Switch checked={form.sorted} onChange={setField("sorted")} />}
          label="Em ordem crescente"
        />
      </Stack>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<CasinoIcon />}
        disabled={invalid || revealing}
        sx={{ mb: 3 }}
      >
        {revealing ? "Sorteando..." : result.length ? "Sortear de novo" : "Sortear"}
      </Button>

      <ResultBox
        label="Resultado"
        flashKey={copies}
        actions={
          result.length > 0 && !revealing ? (
            <CopyButton
              value={result.join(", ")}
              label="Copiar"
              size="large"
              onCopied={() => setCopies(c => c + 1)}
            />
          ) : null
        }
      >
        {result.length > 0 ? (
          <>
            <DrawReveal
              results={result.map(String)}
              randomItem={() => String(secureRandomBetween(Math.min(min, max), Math.max(min, max)))}
              runId={runId}
              animate={result.length <= MAX_ANIMATED}
              variant="chips"
              onDone={() => setRevealing(false)}
            />
            {!revealing && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                Sorteado em {drawnAt.toLocaleString("pt-BR")} · {result.length} número
                {result.length > 1 ? "s" : ""} entre {Math.min(min, max)} e {Math.max(min, max)}
                {form.unique ? ", sem repetição" : ""}.
              </Typography>
            )}
          </>
        ) : (
          <Typography color="text.secondary">Defina o intervalo e clique em Sortear.</Typography>
        )}
      </ResultBox>
    </Box>
  );
};

export default NumberPicker;
