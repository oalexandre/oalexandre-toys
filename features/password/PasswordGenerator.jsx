import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Slider,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import {
  generatePassphrase,
  generatePassword,
  PASSPHRASE_MAX,
  PASSPHRASE_MIN,
  passphraseEntropy,
  PASSWORD_MAX,
  PASSWORD_MIN,
  passwordEntropy,
  strengthLabel,
} from "../../lib/password";
import { WORDS } from "../../lib/words";
import { monoFontFamily } from "../../theme";

const OPTIONS = [
  { name: "lower", label: "Letras minúsculas (a-z)" },
  { name: "upper", label: "Letras maiúsculas (A-Z)" },
  { name: "numbers", label: "Números (0-9)" },
  { name: "symbols", label: "Símbolos (!@#$%&*)" },
  { name: "excludeSimilar", label: "Evitar caracteres parecidos (l, 1, I, O, 0)" },
];

const INITIAL = {
  length: 16,
  lower: true,
  upper: true,
  numbers: true,
  symbols: true,
  excludeSimilar: false,
};

const INITIAL_PHRASE = { words: 5, separator: "-", capitalize: false, number: false };

const SEPARATORS = [
  { value: "-", label: "hífen (-)" },
  { value: ".", label: "ponto (.)" },
  { value: "_", label: "sublinhado (_)" },
  { value: " ", label: "espaço" },
  { value: "", label: "nenhum" },
];

const PasswordGenerator = () => {
  const [mode, setMode] = useState("random");
  const [options, setOptions] = useState(INITIAL);
  const [phrase, setPhrase] = useState(INITIAL_PHRASE);
  const [password, setPassword] = useState("");

  const regenerate = useCallback(
    () => setPassword(mode === "random" ? generatePassword(options) : generatePassphrase(phrase)),
    [mode, options, phrase]
  );

  // Gera na montagem (só no cliente, por causa do crypto) e a cada mudança de opção.
  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const bits = mode === "random" ? passwordEntropy(options) : passphraseEntropy(phrase);
  const strength = strengthLabel(bits);
  const noneSelected =
    mode === "random" && !options.lower && !options.upper && !options.numbers && !options.symbols;

  const toggle = event =>
    setOptions(prev => ({ ...prev, [event.target.name]: event.target.checked }));

  return (
    <ToolPanel>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={mode}
        onChange={(_, next) => next && setMode(next)}
        aria-label="Tipo de senha"
        sx={{ mb: 2 }}
      >
        <ToggleButton value="random">Senha aleatória</ToggleButton>
        <ToggleButton value="phrase">Frase-senha</ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 2,
          mb: 2,
          bgcolor: "#f7f8fa",
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Typography
          component="output"
          aria-live="polite"
          aria-label="Senha gerada"
          sx={{
            flex: 1,
            fontFamily: monoFontFamily,
            fontSize: { xs: "1.05rem", sm: "1.35rem" },
            letterSpacing: "0.04em",
            wordBreak: "break-all",
            minHeight: "1.5em",
          }}
        >
          {password || (noneSelected ? "Escolha ao menos um tipo de caractere" : "")}
        </Typography>
        <CopyButton value={password} iconOnly />
        <Button
          aria-label="Gerar outra senha"
          onClick={regenerate}
          sx={{ minWidth: 0, px: 1 }}
          disabled={noneSelected}
        >
          <RefreshIcon />
        </Button>
      </Box>

      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
        <Chip size="small" color={strength.color} label={strength.label} />
        <Typography variant="body2" color="text.secondary">
          {bits} bits de entropia
        </Typography>
      </Stack>

      {mode === "random" ? (
        <>
          <Box sx={{ mb: 2 }}>
            <Typography id="comprimento-label" variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
              Comprimento: {options.length} caracteres
            </Typography>
            <Slider
              aria-labelledby="comprimento-label"
              value={options.length}
              min={PASSWORD_MIN}
              max={PASSWORD_MAX}
              onChange={(_, value) => setOptions(prev => ({ ...prev, length: value }))}
              valueLabelDisplay="auto"
              marks={[8, 16, 24, 32, 48, 64].map(value => ({ value, label: String(value) }))}
            />
          </Box>

          <FormGroup sx={{ display: "grid", gridTemplateColumns: { sm: "1fr 1fr" } }}>
            {OPTIONS.map(option => (
              <FormControlLabel
                key={option.name}
                control={
                  <Checkbox name={option.name} checked={options[option.name]} onChange={toggle} />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
        </>
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <Typography id="palavras-label" variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
              Palavras: {phrase.words}
            </Typography>
            <Slider
              aria-labelledby="palavras-label"
              value={phrase.words}
              min={PASSPHRASE_MIN}
              max={PASSPHRASE_MAX}
              onChange={(_, value) => setPhrase(prev => ({ ...prev, words: value }))}
              valueLabelDisplay="auto"
              marks={[3, 4, 5, 6, 7, 8, 9, 10].map(value => ({ value, label: String(value) }))}
            />
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }}>
            <TextField
              select
              size="small"
              label="Separador"
              value={phrase.separator}
              onChange={event => setPhrase(prev => ({ ...prev, separator: event.target.value }))}
              sx={{ minWidth: 180 }}
            >
              {SEPARATORS.map(sep => (
                <MenuItem key={sep.label} value={sep.value}>
                  {sep.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControlLabel
              control={
                <Checkbox
                  checked={phrase.capitalize}
                  onChange={event =>
                    setPhrase(prev => ({ ...prev, capitalize: event.target.checked }))
                  }
                />
              }
              label="Iniciais maiúsculas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={phrase.number}
                  onChange={event => setPhrase(prev => ({ ...prev, number: event.target.checked }))}
                />
              }
              label="Número no final"
            />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            Palavras sorteadas de uma lista pública de {WORDS.length} termos em português, sem
            acento. Fácil de lembrar e digitar, e forte pela quantidade de combinações.
          </Typography>
        </>
      )}

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
        <Button
          variant="contained"
          size="large"
          onClick={regenerate}
          disabled={noneSelected}
          startIcon={<RefreshIcon />}
        >
          {mode === "random" ? "Gerar nova senha" : "Gerar nova frase"}
        </Button>
        <CopyButton value={password} label="Copiar senha" size="large" />
      </Stack>
    </ToolPanel>
  );
};

export default PasswordGenerator;
