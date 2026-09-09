import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import { generateCnpj, generateCpf, maskCnpj, maskCpf } from "../../lib/documents";
import { monoFontFamily } from "../../theme";

const CONFIG = {
  cpf: { generate: generateCpf, mask: maskCpf, label: "CPF" },
  cnpj: { generate: generateCnpj, mask: maskCnpj, label: "CNPJ" },
};

/** Gera um CPF ou CNPJ válido. `type` é "cpf" ou "cnpj". */
const DocumentGenerator = ({ type }) => {
  const { generate, mask, label } = CONFIG[type];
  const [digits, setDigits] = useState("");
  const [masked, setMasked] = useState(true);

  useEffect(() => {
    setDigits(generate());
  }, [generate]);

  const value = masked ? mask(digits) : digits;

  return (
    <ToolPanel>
      <Box
        sx={{
          p: 2,
          mb: 2,
          bgcolor: "#f7f8fa",
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          component="output"
          aria-live="polite"
          aria-label={`${label} gerado`}
          sx={{
            flex: 1,
            fontFamily: monoFontFamily,
            fontSize: { xs: "1.4rem", sm: "1.9rem" },
            letterSpacing: "0.04em",
          }}
        >
          {value}
        </Typography>
        <CopyButton value={value} iconOnly />
      </Box>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ sm: "center" }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<RefreshIcon />}
          onClick={() => setDigits(generate())}
        >
          Gerar novo {label}
        </Button>
        <CopyButton value={value} label={`Copiar ${label}`} size="large" />
        <FormControlLabel
          sx={{ ml: { sm: "auto" } }}
          control={<Switch checked={masked} onChange={event => setMasked(event.target.checked)} />}
          label="Com pontuação"
        />
      </Stack>
    </ToolPanel>
  );
};

export default DocumentGenerator;
