import DownloadIcon from "@mui/icons-material/DownloadRounded";
import RefreshIcon from "@mui/icons-material/RefreshRounded";
import WarningIcon from "@mui/icons-material/WarningAmberRounded";
import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import { states } from "../../lib/ddd";
import {
  generateCnpj,
  generateCpf,
  generateMany,
  maskCnpj,
  maskCpf,
  regionDigitForUf,
} from "../../lib/documents";
import { monoFontFamily } from "../../theme";

const COUNTS = [1, 10, 50, 100, 500];

const CONFIG = {
  cpf: { mask: maskCpf, label: "CPF", file: "cpfs" },
  cnpj: { mask: maskCnpj, label: "CNPJ", file: "cnpjs" },
};

const sortedStates = [...states].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

/** Gera um ou vários CPFs/CNPJs válidos. `type` é "cpf" ou "cnpj". */
const DocumentGenerator = ({ type }) => {
  const { mask, label, file } = CONFIG[type];
  const [count, setCount] = useState(1);
  const [uf, setUf] = useState("ANY");
  const [branch, setBranch] = useState("1");
  const [masked, setMasked] = useState(true);
  const [docs, setDocs] = useState([]);
  const [copies, setCopies] = useState(0);

  const generateOne = useCallback(
    () =>
      type === "cpf"
        ? generateCpf({ region: uf === "ANY" ? null : regionDigitForUf(uf) })
        : generateCnpj({ branch: Number(branch) || 1 }),
    [type, uf, branch]
  );

  const regenerate = useCallback(
    () => setDocs(generateMany(generateOne, count)),
    [generateOne, count]
  );

  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const formatted = useMemo(() => docs.map(d => (masked ? mask(d) : d)), [docs, masked, mask]);
  const single = count === 1;
  const text = formatted.join("\n");
  const csvUrl = useMemo(
    () => `data:text/csv;charset=utf-8,${encodeURIComponent(`${label.toLowerCase()}\n${text}\n`)}`,
    [label, text]
  );

  return (
    <ToolPanel>
      {single ? (
        <ResultBox
          label={`${label} gerado`}
          value={formatted[0]}
          ariaLabel={`${label} gerado`}
          flashKey={copies}
          actions={
            <>
              <CopyButton
                value={formatted[0]}
                label="Copiar"
                size="large"
                onCopied={() => setCopies(c => c + 1)}
              />
              <Button
                variant="outlined"
                size="large"
                aria-label={`Gerar novo ${label}`}
                onClick={regenerate}
                startIcon={<RefreshIcon />}
                sx={{
                  "& .MuiButton-startIcon": { mr: { xs: 0, sm: 1 } },
                  px: { xs: 1.5, sm: 2.5 },
                }}
              >
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                  Gerar outro
                </Box>
              </Button>
            </>
          }
          sx={{ mb: 1.5 }}
        />
      ) : (
        <TextField
          fullWidth
          multiline
          minRows={6}
          maxRows={12}
          value={text}
          InputProps={{ readOnly: true, sx: { fontFamily: monoFontFamily, fontSize: "0.95rem" } }}
          aria-label={`${count} ${label}s gerados`}
          sx={{ mb: 2 }}
        />
      )}

      <Alert severity="warning" icon={<WarningIcon fontSize="small" />} sx={{ mb: 2.5 }}>
        Números válidos apenas para testes de software. Não são documentos reais e não devem ser
        usados em cadastros.
      </Alert>

      <Grid container spacing={1.5} sx={{ mb: 2 }}>
        <Grid item xs={6} sm={3}>
          <TextField
            select
            fullWidth
            size="small"
            label="Quantidade"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
          >
            {COUNTS.map(n => (
              <MenuItem key={n} value={n}>
                {n}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {type === "cpf" ? (
          <Grid item xs={6} sm={5}>
            <TextField
              select
              fullWidth
              size="small"
              label="Estado de emissão"
              value={uf}
              onChange={e => setUf(e.target.value)}
            >
              <MenuItem value="ANY">Qualquer</MenuItem>
              {sortedStates.map(s => (
                <MenuItem key={s.uf} value={s.uf}>
                  {s.name} ({s.uf})
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        ) : (
          <Grid item xs={6} sm={5}>
            <TextField
              fullWidth
              size="small"
              label="Estabelecimento"
              value={branch}
              inputProps={{ inputMode: "numeric" }}
              onChange={e => setBranch(e.target.value.replace(/\D/g, "").slice(0, 4))}
              helperText="1 = matriz (0001); 2 em diante = filiais"
            />
          </Grid>
        )}
        <Grid item xs={12} sm={4} sx={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={<Switch checked={masked} onChange={e => setMasked(e.target.checked)} />}
            label="Com pontuação"
          />
        </Grid>
      </Grid>

      {!single && (
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button variant="contained" size="large" startIcon={<RefreshIcon />} onClick={regenerate}>
            Gerar {count} novos
          </Button>
          <CopyButton value={text} label="Copiar todos" variant="outlined" size="large" />
          <Button
            variant="outlined"
            size="large"
            startIcon={<DownloadIcon />}
            href={csvUrl}
            download={`${file}.csv`}
          >
            Baixar CSV
          </Button>
        </Stack>
      )}
    </ToolPanel>
  );
};

export default DocumentGenerator;
