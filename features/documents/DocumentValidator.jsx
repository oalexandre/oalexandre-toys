import {
  Alert,
  Box,
  Button,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import { maskDocument, onlyDigits, validateDocument } from "../../lib/documents";
import { monoFontFamily } from "../../theme";

const STATUS = {
  valid: { label: "válido", color: "success" },
  invalid: { label: "inválido", color: "error" },
  unknown: { label: "tamanho errado", color: "warning" },
};

const classify = value => {
  const result = validateDocument(value);
  if (result.type === null) return { ...result, status: "unknown" };
  return { ...result, status: result.valid ? "valid" : "invalid" };
};

const DocumentValidator = () => {
  const [mode, setMode] = useState("single");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [batch, setBatch] = useState("");
  const [rows, setRows] = useState(null);

  const digits = onlyDigits(value);
  const detected = digits.length === 11 ? "CPF" : digits.length === 14 ? "CNPJ" : null;

  const validateSingle = event => {
    event.preventDefault();
    setResult(validateDocument(value));
  };

  const validateBatch = event => {
    event.preventDefault();
    const lines = batch
      .split(/[\n;,]+/)
      .map(line => line.trim())
      .filter(Boolean);
    setRows(lines.map(line => ({ input: line, ...classify(line) })));
  };

  const summary = rows
    ? rows.reduce((acc, row) => ({ ...acc, [row.status]: (acc[row.status] ?? 0) + 1 }), {})
    : null;
  const report = rows
    ? rows.map(row => `${row.input};${row.type ?? "?"};${STATUS[row.status].label}`).join("\n")
    : "";

  return (
    <ToolPanel>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={mode}
        onChange={(_, next) => next && setMode(next)}
        aria-label="Modo de validação"
        sx={{ mb: 2 }}
      >
        <ToggleButton value="single">Um documento</ToggleButton>
        <ToggleButton value="batch">Vários de uma vez</ToggleButton>
      </ToggleButtonGroup>

      {mode === "single" ? (
        <Box component="form" onSubmit={validateSingle} noValidate>
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
              inputProps={{ inputMode: "numeric" }}
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
        </Box>
      ) : (
        <Box component="form" onSubmit={validateBatch} noValidate>
          <TextField
            fullWidth
            multiline
            minRows={5}
            label="Um documento por linha"
            placeholder={"123.456.789-09\n12.345.678/0001-95\n..."}
            value={batch}
            onChange={event => {
              setBatch(event.target.value);
              setRows(null);
            }}
            helperText="Aceita CPF e CNPJ misturados, com ou sem pontuação. Também separa por vírgula ou ponto e vírgula."
            InputProps={{ sx: { fontFamily: monoFontFamily } }}
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" size="large" disabled={!batch.trim()}>
              Validar lista
            </Button>
            <CopyButton value={report} label="Copiar relatório" size="large" />
          </Stack>

          {rows && (
            <Box sx={{ mt: 3 }} aria-live="polite">
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
                <Chip size="small" label={`${rows.length} verificados`} />
                {Object.entries(summary).map(([status, n]) => (
                  <Chip
                    key={status}
                    size="small"
                    color={STATUS[status].color}
                    label={`${n} ${STATUS[status].label}${
                      n > 1 && status !== "unknown" ? "s" : ""
                    }`}
                  />
                ))}
              </Stack>
              <TableContainer
                sx={{ border: 1, borderColor: "divider", borderRadius: 2, maxHeight: 360 }}
              >
                <Table size="small" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700 }}>#</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Documento</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Tipo</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Resultado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell sx={{ fontFamily: monoFontFamily }}>
                          {row.type ? maskDocument(row.input) : row.input}
                        </TableCell>
                        <TableCell>{row.type ?? "—"}</TableCell>
                        <TableCell>
                          <Chip
                            size="small"
                            color={STATUS[row.status].color}
                            label={STATUS[row.status].label}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
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
