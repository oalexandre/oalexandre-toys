import RefreshIcon from "@mui/icons-material/RefreshRounded";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import { DJANGO_LENGTH, generateDjangoSecret } from "../../lib/djangoSecret";

const DjangoSecretKey = () => {
  const [secret, setSecret] = useState("");
  const [copies, setCopies] = useState(0);

  useEffect(() => {
    setSecret(generateDjangoSecret());
  }, []);

  const envLine = secret ? `SECRET_KEY=${secret}` : "";

  return (
    <ToolPanel>
      <ResultBox
        label="SECRET_KEY"
        value={secret}
        size="md"
        ariaLabel="SECRET_KEY gerada"
        flashKey={copies}
        actions={
          <>
            <CopyButton
              value={secret}
              label="Copiar"
              size="large"
              onCopied={() => setCopies(c => c + 1)}
            />
            <Button
              variant="outlined"
              size="large"
              aria-label={"Gerar nova chave"}
              onClick={() => setSecret(generateDjangoSecret())}
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

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        alignItems={{ sm: "center" }}
        sx={{ mt: 2 }}
      >
        <CopyButton
          value={envLine}
          label="Copiar como SECRET_KEY=…"
          variant="text"
          onCopied={() => setCopies(c => c + 1)}
        />
        <Typography variant="body2" color="text.secondary">
          {DJANGO_LENGTH} caracteres, mesmo alfabeto de <code>get_random_secret_key()</code>. Gerada
          no seu navegador; nada é enviado.
        </Typography>
      </Stack>
    </ToolPanel>
  );
};

export default DjangoSecretKey;
