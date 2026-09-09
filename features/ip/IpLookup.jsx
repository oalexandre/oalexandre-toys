import RefreshIcon from "@mui/icons-material/RefreshRounded";
import { Alert, Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";

const fetchJson = async url => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

const IpLookup = () => {
  const [state, setState] = useState({ status: "loading", ip: "", details: null });
  const [copies, setCopies] = useState(0);

  const load = useCallback(async () => {
    setState({ status: "loading", ip: "", details: null });
    try {
      const { ip } = await fetchJson("https://api.ipify.org?format=json");
      let details = null;
      try {
        details = await fetchJson(`https://ipapi.co/${ip}/json/`);
      } catch {
        details = null;
      }
      setState({ status: "ready", ip, details });
    } catch {
      setState({ status: "error", ip: "", details: null });
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const rows = state.details
    ? [
        ["Cidade", [state.details.city, state.details.region].filter(Boolean).join(", ")],
        ["País", state.details.country_name],
        ["Provedor", state.details.org],
        ["ASN", state.details.asn],
        ["Fuso horário", state.details.timezone],
      ].filter(([, value]) => value)
    : [];

  return (
    <ToolPanel>
      {state.status === "error" ? (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={load}>
              Tentar de novo
            </Button>
          }
        >
          Não foi possível consultar seu IP. Um bloqueador de anúncios ou a rede podem estar
          barrando a consulta.
        </Alert>
      ) : (
        <ResultBox
          label="Seu IP público"
          value={state.status === "loading" ? "" : state.ip}
          ariaLabel="Endereço IP"
          flashKey={copies}
          actions={
            <>
              <CopyButton
                value={state.ip}
                label="Copiar"
                size="large"
                onCopied={() => setCopies(c => c + 1)}
              />
              <Button
                variant="outlined"
                size="large"
                aria-label={"Consultar novamente"}
                onClick={load}
                startIcon={<RefreshIcon />}
                sx={{
                  "& .MuiButton-startIcon": { mr: { xs: 0, sm: 1 } },
                  px: { xs: 1.5, sm: 2.5 },
                }}
              >
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                  Consultar de novo
                </Box>
              </Button>
            </>
          }
        >
          {state.status === "loading" ? <Skeleton variant="text" width={220} height={44} /> : null}
        </ResultBox>
      )}

      {state.status === "ready" && (
        <Grid container spacing={1.5} sx={{ mt: 1 }}>
          {rows.map(([label, value]) => (
            <Grid item xs={12} sm={6} key={label}>
              <Typography variant="body2" color="text.secondary">
                {label}
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>{value}</Typography>
            </Grid>
          ))}
          {!state.details && (
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Não foi possível obter provedor e localização desta vez.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Localização é aproximada, baseada no registro do provedor, não no GPS. Consulta feita nos
        serviços públicos ipify e ipapi.
      </Typography>
    </ToolPanel>
  );
};

export default IpLookup;
