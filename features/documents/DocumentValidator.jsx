import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

import ToolPanel from "../../components/tool/ToolPanel";
import { maskDocument, onlyDigits, validateDocument } from "../../lib/documents";

const DocumentValidator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const digits = onlyDigits(value);
  const detected = digits.length === 11 ? "CPF" : digits.length === 14 ? "CNPJ" : null;

  const validate = event => {
    event.preventDefault();
    setResult(validateDocument(value));
  };

  return (
    <ToolPanel component="form" onSubmit={validate} noValidate>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        alignItems={{ sm: "flex-start" }}
      >
        <TextField
          fullWidth
          label="CPF ou CNPJ"
          placeholder="000.000.000-00 ou 00.000.000/0000-00"
          value={value}
          inputMode="numeric"
          autoComplete="off"
          onChange={event => {
            setValue(maskDocument(event.target.value));
            setResult(null);
          }}
          helperText={
            detected ? `Detectado: ${detected}` : "Digite 11 dígitos para CPF ou 14 para CNPJ"
          }
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ height: 56, flexShrink: 0 }}
          disabled={!digits}
        >
          Validar
        </Button>
      </Stack>

      {result && (
        <Box sx={{ mt: 2 }} aria-live="polite">
          {result.type === null ? (
            <Alert severity="warning">
              Quantidade de dígitos inválida. CPF tem 11 dígitos e CNPJ tem 14.
            </Alert>
          ) : result.valid ? (
            <Alert severity="success">
              <strong>{result.type} válido.</strong> Os dígitos verificadores conferem.
            </Alert>
          ) : (
            <Alert severity="error">
              <strong>{result.type} inválido.</strong> Os dígitos verificadores não conferem.
            </Alert>
          )}
        </Box>
      )}

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        A verificação é feita no seu navegador e confere apenas o cálculo dos dígitos. Não consulta
        a Receita Federal nem diz se o documento existe.
      </Typography>
    </ToolPanel>
  );
};

export default DocumentValidator;
