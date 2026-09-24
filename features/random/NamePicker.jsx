import CasinoIcon from "@mui/icons-material/CasinoRounded";
import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import { drawItems, parseNames, randomItem } from "../../lib/random";

import DrawReveal from "./DrawReveal";

const COUNTS = [1, 2, 3];

const EXAMPLE = "Ana\nBruno\nCarla\nDiego\nEduarda";

const NamePicker = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [unique, setUnique] = useState(true);
  const [draw, setDraw] = useState({ runId: 0, results: [], pool: [], at: null });
  const [revealing, setRevealing] = useState(false);
  const [copies, setCopies] = useState(0);

  const names = useMemo(() => parseNames(text, { unique }), [text, unique]);
  const tooFew = names.length > 0 && count > names.length;
  const canDraw = names.length >= 2 && !tooFew && !revealing;

  const submit = event => {
    event.preventDefault();
    if (!canDraw) return;
    setRevealing(true);
    setDraw(prev => ({
      runId: prev.runId + 1,
      results: drawItems(names, count),
      pool: names,
      at: new Date(),
    }));
  };

  const helper = () => {
    if (!names.length) return "Um nome por linha. Pode colar uma lista numerada.";
    if (names.length < 2) return "Coloque pelo menos 2 nomes para sortear.";
    if (tooFew) return `A lista tem só ${names.length} nomes.`;
    return `${names.length} nomes na lista.`;
  };

  const done = draw.results.length > 0 && !revealing;
  const summary = draw.results
    .map((name, index) => (draw.results.length > 1 ? `${index + 1}º ${name}` : name))
    .join(", ");

  return (
    <Box component="form" onSubmit={submit} noValidate>
      <TextField
        fullWidth
        multiline
        minRows={6}
        maxRows={14}
        label="Nomes ou opções"
        placeholder={EXAMPLE}
        value={text}
        onChange={event => setText(event.target.value)}
        error={tooFew}
        helperText={helper()}
        inputProps={{ spellCheck: false }}
      />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1.5, sm: 3 }}
        alignItems={{ sm: "center" }}
        sx={{ mt: 2, mb: 2.5 }}
      >
        <Box>
          <Typography id="quantos-nomes" variant="subtitle2" sx={{ mb: 0.75 }}>
            Quantos sortear
          </Typography>
          <ToggleButtonGroup
            exclusive
            size="small"
            value={count}
            onChange={(_, next) => next && setCount(next)}
            aria-labelledby="quantos-nomes"
          >
            {COUNTS.map(value => (
              <ToggleButton key={value} value={value} sx={{ minWidth: 56 }}>
                {value}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <FormControlLabel
          control={<Switch checked={unique} onChange={event => setUnique(event.target.checked)} />}
          label="Ignorar nomes repetidos"
          sx={{ alignSelf: { sm: "flex-end" }, mb: { sm: 0.25 } }}
        />
      </Stack>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<CasinoIcon />}
        disabled={!canDraw}
        sx={{ mb: 3 }}
      >
        {revealing ? "Sorteando..." : draw.results.length ? "Sortear de novo" : "Sortear"}
      </Button>

      <ResultBox
        label={count > 1 ? "Sorteados" : "Sorteado"}
        flashKey={copies}
        actions={
          done ? (
            <CopyButton
              value={summary}
              label="Copiar"
              size="large"
              onCopied={() => setCopies(c => c + 1)}
            />
          ) : null
        }
      >
        {draw.results.length > 0 ? (
          <>
            <DrawReveal
              results={draw.results}
              randomItem={() => randomItem(draw.pool)}
              runId={draw.runId}
              variant="list"
              onDone={() => setRevealing(false)}
            />
            {done && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                Sorteado em {draw.at.toLocaleString("pt-BR")} entre {draw.pool.length} nomes.
              </Typography>
            )}
          </>
        ) : (
          <Typography color="text.secondary">
            Cole a lista, escolha quantos sortear e clique em Sortear.
          </Typography>
        )}
      </ResultBox>
    </Box>
  );
};

export default NamePicker;
