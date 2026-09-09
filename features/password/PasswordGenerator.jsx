import RefreshIcon from "@mui/icons-material/RefreshRounded";
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
import ResultBox from "../../components/tool/ResultBox";
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
  const [copies, setCopies] = useState(0);

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
        value={mode}
        onChange={(_, next) => next && setMode(next)}
        aria-label="Tipo de senha"
        sx={{ mb: 2.5 }}
      >
        <ToggleButton value="random">Senha aleatória</ToggleButton>
        <ToggleButton value="phrase">Frase-senha</ToggleButton>
      </ToggleButtonGroup>

      <ResultBox
        label={mode === "random" ? "Sua senha" : "Sua frase-senha"}
        value={password}
        placeholder={noneSelected ? "Escolha ao menos um tipo de caractere" : ""}
        ariaLabel="Senha gerada"
        flashKey={copies}
        actions={
          <>
            <CopyButton
              value={password}
              label="Copiar"
              size="large"
              onCopied={() => setCopies(c => c + 1)}
            />
            <Button
              variant="outlined"
              size="large"
              aria-label={mode === "random" ? "Gerar outra senha" : "Gerar outra frase"}
              onClick={regenerate}
              disabled={noneSelected}
              startIcon={<RefreshIcon />}
              sx={{ "& .MuiButton-startIcon": { mr: { xs: 0, sm: 1 } }, px: { xs: 1.5, sm: 2.5 } }}
            >
              <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                Gerar outra
              </Box>
            </Button>
          </>
        }
      />

      <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1.5, mb: 3 }}>
        <Chip size="small" color={strength.color} label={strength.label} sx={{ color: "#fff" }} />
        <Typography variant="body2" color="text.secondary">
          {bits} bits de entropia
        </Typography>
      </Stack>

      {mode === "random" ? (
        <>
          <Box sx={{ mb: 1.5, px: 0.5 }}>
            <Typography id="comprimento-label" variant="subtitle2" sx={{ mb: 1 }}>
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

          <FormGroup sx={{ display: "grid", gridTemplateColumns: { sm: "1fr 1fr" }, rowGap: 0.25 }}>
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
          <Box sx={{ mb: 2, px: 0.5 }}>
            <Typography id="palavras-label" variant="subtitle2" sx={{ mb: 1 }}>
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
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2 }}
            alignItems={{ sm: "center" }}
          >
            <TextField
              select
              size="small"
              label="Separador"
              value={phrase.separator}
              onChange={event => setPhrase(prev => ({ ...prev, separator: event.target.value }))}
              sx={{ minWidth: 190 }}
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
    </ToolPanel>
  );
};

export default PasswordGenerator;
