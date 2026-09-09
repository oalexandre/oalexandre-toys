import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import {
  generatePassword,
  PASSWORD_MAX,
  PASSWORD_MIN,
  passwordEntropy,
  strengthLabel,
} from "../../lib/password";
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

const PasswordGenerator = () => {
  const [options, setOptions] = useState(INITIAL);
  const [password, setPassword] = useState("");

  const regenerate = useCallback(() => setPassword(generatePassword(options)), [options]);

  // Gera na montagem (só no cliente, por causa do crypto) e a cada mudança de opção.
  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const bits = passwordEntropy(options);
  const strength = strengthLabel(bits);
  const noneSelected = !options.lower && !options.upper && !options.numbers && !options.symbols;

  const toggle = event =>
    setOptions(prev => ({ ...prev, [event.target.name]: event.target.checked }));

  return (
    <ToolPanel>
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

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
        <Button
          variant="contained"
          size="large"
          onClick={regenerate}
          disabled={noneSelected}
          startIcon={<RefreshIcon />}
        >
          Gerar nova senha
        </Button>
        <CopyButton value={password} label="Copiar senha" size="large" />
      </Stack>
    </ToolPanel>
  );
};

export default PasswordGenerator;
