import RefreshIcon from "@mui/icons-material/Refresh";
import { Alert, Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import { monoFontFamily } from "../../theme";

const fetchJson = async url => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

const IpLookup = () => {
  const [state, setState] = useState({ status: "loading", ip: "", details: null });

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
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
        Seu endereço IP público
      </Typography>

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 2,
            bgcolor: "#f7f8fa",
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
          }}
        >
          {state.status === "loading" ? (
            <Skeleton variant="text" width={220} height={40} />
          ) : (
            <Typography
              component="output"
              aria-live="polite"
              sx={{ flex: 1, fontFamily: monoFontFamily, fontSize: { xs: "1.4rem", sm: "1.9rem" } }}
            >
              {state.ip}
            </Typography>
          )}
          <CopyButton value={state.ip} iconOnly />
          <Button aria-label="Consultar novamente" onClick={load} sx={{ minWidth: 0, px: 1 }}>
            <RefreshIcon />
          </Button>
        </Box>
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
