import DownloadIcon from "@mui/icons-material/DownloadRounded";
import UploadIcon from "@mui/icons-material/UploadFileRounded";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import ToolPanel from "../../components/tool/ToolPanel";
import { colors } from "../../theme";

import ColorField from "./ColorField";

const SIZES = [256, 512, 1024];

const INITIAL = {
  text: "https://toys.oalexandre.com.br",
  size: 512,
  dark: "#16181d",
  light: "#ffffff",
  eyeOuter: "#2f5bea",
  eyeInner: "#16181d",
  logo: "",
  logoName: "",
  logoTransparent: false,
};

const QrCodeGenerator = () => {
  const [values, setValues] = useState(INITIAL);
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");
  const containerRef = useRef(null);
  const instanceRef = useRef(null);

  const set = (name, value) => setValues(prev => ({ ...prev, [name]: value }));

  // Renderiza sempre que os valores mudam. easyqrcodejs só roda no cliente.
  useEffect(() => {
    if (!containerRef.current) return undefined;
    let cancelled = false;

    const render = async () => {
      const { default: QRCode } = await import("easyqrcodejs");
      if (cancelled) return;
      instanceRef.current?.clear();
      containerRef.current.innerHTML = "";
      if (!values.text.trim()) {
        setDataUrl("");
        return;
      }
      try {
        instanceRef.current = new QRCode(containerRef.current, {
          text: values.text,
          width: values.size,
          height: values.size,
          colorDark: values.dark,
          colorLight: values.light,
          PO: values.eyeOuter,
          PI: values.eyeInner,
          logo: values.logo || undefined,
          logoBackgroundTransparent: values.logoTransparent,
          correctLevel: QRCode.CorrectLevel.H,
          onRenderingEnd: (_, url) => {
            if (!cancelled) setDataUrl(url);
          },
        });
        setError("");
      } catch {
        setError("Conteúdo grande demais para um QR code. Tente um texto menor.");
        setDataUrl("");
      }
    };

    const timer = setTimeout(render, 250);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [values]);

  const handleLogo = event => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setValues(prev => ({ ...prev, logo: reader.result, logoName: file.name }));
    reader.readAsDataURL(file);
  };

  return (
    <ToolPanel>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              multiline
              minRows={2}
              label="Link ou texto"
              value={values.text}
              onChange={event => set("text", event.target.value)}
              error={Boolean(error)}
              helperText={error || "Endereço de site, texto livre, telefone, e-mail, Wi-Fi..."}
            />

            <Grid container spacing={1.5}>
              <Grid item xs={6}>
                <ColorField
                  label="Cor dos pontos"
                  value={values.dark}
                  onChange={v => set("dark", v)}
                />
              </Grid>
              <Grid item xs={6}>
                <ColorField
                  label="Cor de fundo"
                  value={values.light}
                  onChange={v => set("light", v)}
                />
              </Grid>
              <Grid item xs={6}>
                <ColorField
                  label="Olhos (externo)"
                  value={values.eyeOuter}
                  onChange={v => set("eyeOuter", v)}
                />
              </Grid>
              <Grid item xs={6}>
                <ColorField
                  label="Olhos (interno)"
                  value={values.eyeInner}
                  onChange={v => set("eyeInner", v)}
                />
              </Grid>
            </Grid>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              alignItems={{ sm: "center" }}
            >
              <TextField
                select
                size="small"
                label="Tamanho"
                value={values.size}
                onChange={event => set("size", Number(event.target.value))}
                sx={{ minWidth: 140 }}
              >
                {SIZES.map(size => (
                  <MenuItem key={size} value={size}>
                    {size} × {size} px
                  </MenuItem>
                ))}
              </TextField>
              <Button component="label" variant="outlined" startIcon={<UploadIcon />}>
                {values.logoName ? "Trocar logo" : "Adicionar logo"}
                <input type="file" accept="image/*" hidden onChange={handleLogo} />
              </Button>
              {values.logoName && (
                <Button
                  size="small"
                  onClick={() => setValues(prev => ({ ...prev, logo: "", logoName: "" }))}
                >
                  Remover logo
                </Button>
              )}
            </Stack>
            {values.logo && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.logoTransparent}
                    onChange={event => set("logoTransparent", event.target.checked)}
                  />
                }
                label="Fundo do logo transparente"
              />
            )}
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ position: "sticky", top: 88 }}>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                aspectRatio: "1 / 1",
                p: 2,
                bgcolor: colors.surfaceSunken,
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                mb: 1.5,
                "& canvas, & img": {
                  width: "100% !important",
                  height: "auto !important",
                  maxWidth: 260,
                },
              }}
            >
              <div ref={containerRef} aria-label="Pré-visualização do QR code" />
            </Box>
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              href={dataUrl || undefined}
              download="qrcode.png"
              disabled={!dataUrl}
            >
              Baixar PNG
            </Button>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              Correção de erro nível H: continua legível mesmo com logo cobrindo o centro.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ToolPanel>
  );
};

export default QrCodeGenerator;
