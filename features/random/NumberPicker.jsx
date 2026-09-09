import CasinoIcon from "@mui/icons-material/Casino";
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import { drawNumbers } from "../../lib/random";

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
    if (invalid) return;
    setResult(drawNumbers({ count, min, max, unique: form.unique, sorted: form.sorted }));
    setDrawnAt(new Date());
  };

  return (
    <ToolPanel component="form" onSubmit={draw} noValidate>
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

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<CasinoIcon />}
          disabled={invalid}
        >
          Sortear
        </Button>
        <CopyButton value={result.join(", ")} label="Copiar resultado" size="large" />
      </Stack>

      <Box sx={{ mt: 3 }} aria-live="polite">
        {result.length > 0 ? (
          <>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
              Resultado
            </Typography>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
              {result.map((number, index) => (
                <Chip
                  key={`${number}-${index}`}
                  label={number}
                  color="primary"
                  sx={{ fontSize: "1.1rem", fontWeight: 700, height: 40, px: 0.5, borderRadius: 2 }}
                />
              ))}
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              Sorteado em {drawnAt.toLocaleString("pt-BR")} · {result.length} número
              {result.length > 1 ? "s" : ""} entre {Math.min(min, max)} e {Math.max(min, max)}
              {form.unique ? ", sem repetição" : ""}.
            </Typography>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Defina o intervalo e clique em Sortear.
          </Typography>
        )}
      </Box>
    </ToolPanel>
  );
};

export default NumberPicker;
