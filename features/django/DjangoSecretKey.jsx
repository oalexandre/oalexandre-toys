import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import { DJANGO_LENGTH, generateDjangoSecret } from "../../lib/djangoSecret";
import { monoFontFamily } from "../../theme";

const DjangoSecretKey = () => {
  const [secret, setSecret] = useState("");

  useEffect(() => {
    setSecret(generateDjangoSecret());
  }, []);

  const envLine = secret ? `SECRET_KEY=${secret}` : "";

  return (
    <ToolPanel>
      <Typography
        component="output"
        aria-live="polite"
        aria-label="SECRET_KEY gerada"
        sx={{
          display: "block",
          p: 2,
          mb: 2,
          bgcolor: "#16181d",
          color: "#f3f4f6",
          borderRadius: 2,
          fontFamily: monoFontFamily,
          fontSize: { xs: "0.9rem", sm: "1.05rem" },
          wordBreak: "break-all",
          minHeight: "3em",
        }}
      >
        {secret}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {DJANGO_LENGTH} caracteres, mesmo alfabeto usado por <code>get_random_secret_key()</code>.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        <Button
          variant="contained"
          size="large"
          startIcon={<RefreshIcon />}
          onClick={() => setSecret(generateDjangoSecret())}
        >
          Gerar nova chave
        </Button>
        <CopyButton value={secret} label="Copiar chave" size="large" />
        <CopyButton value={envLine} label="Copiar como SECRET_KEY=..." size="large" />
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Gerada no seu navegador com <code>crypto.getRandomValues()</code>. Nada é enviado para
          servidor.
        </Typography>
      </Box>
    </ToolPanel>
  );
};

export default DjangoSecretKey;
