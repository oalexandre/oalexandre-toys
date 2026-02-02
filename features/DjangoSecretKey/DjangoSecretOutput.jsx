import { ContentCopy, Check, Refresh } from "@mui/icons-material";
import { Box, TextField, Button, Stack } from "@mui/material";

/**
 * Componente de saída para exibir a Django SECRET_KEY
 */
const DjangoSecretOutput = ({ secretKey, copied, onGenerate, onCopy }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        value={secretKey}
        InputProps={{
          readOnly: true,
          sx: {
            fontFamily: "monospace",
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
            letterSpacing: "0.5px",
            backgroundColor: "grey.100",
            color: "grey.900",
            "& input": {
              color: "grey.900",
            },
          },
        }}
        sx={{ mb: 2 }}
      />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={onGenerate}
          startIcon={<Refresh />}
          sx={{ fontSize: 16 }}
        >
          Gerar Nova Chave
        </Button>

        <Button
          fullWidth
          variant={copied ? "contained" : "outlined"}
          color={copied ? "success" : "primary"}
          onClick={onCopy}
          startIcon={copied ? <Check /> : <ContentCopy />}
          sx={{ fontSize: 16 }}
        >
          {copied ? "Copiado!" : "Copiar"}
        </Button>
      </Stack>
    </Box>
  );
};

export default DjangoSecretOutput;
