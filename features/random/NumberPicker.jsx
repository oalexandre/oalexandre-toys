import CasinoIcon from "@mui/icons-material/CasinoRounded";
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
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import { drawNumbers } from "../../lib/random";
import { colors } from "../../theme";

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

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<CasinoIcon />}
        disabled={invalid}
        sx={{ mb: 3 }}
      >
        Sortear
      </Button>

      <ResultBox
        label="Resultado"
        flashKey={copies}
        actions={
          result.length > 0 ? (
            <CopyButton
              value={result.join(", ")}
              label="Copiar"
              size="large"
              onCopied={() => setCopies(c => c + 1)}
            />
          ) : null
        }
      >
        <Box aria-live="polite">
          {result.length > 0 ? (
            <>
              <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
                {result.map((number, index) => (
                  <Chip
                    key={`${number}-${index}`}
                    label={number}
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      height: 44,
                      px: 0.75,
                      borderRadius: 2,
                      bgcolor: "background.paper",
                      color: "primary.main",
                      border: 1,
                      borderColor: colors.accentTintStrong,
                      fontVariantNumeric: "tabular-nums",
                    }}
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
            <Typography color="text.secondary">Defina o intervalo e clique em Sortear.</Typography>
          )}
        </Box>
      </ResultBox>
    </ToolPanel>
  );
};

export default NumberPicker;
