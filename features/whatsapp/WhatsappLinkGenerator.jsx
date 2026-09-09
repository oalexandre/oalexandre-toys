import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import { formatPhone } from "../../lib/ddd";
import { monoFontFamily } from "../../theme";

/** Monta o link wa.me a partir do país, telefone e mensagem. */
export const buildWhatsappLink = ({ country, phone, message }) => {
  const digits = `${country}${phone}`.replace(/\D/g, "");
  if (digits.length < 10) return "";
  const text = message.trim() ? `?text=${encodeURIComponent(message.trim())}` : "";
  return `https://wa.me/${digits}${text}`;
};

const WhatsappLinkGenerator = () => {
  const [country, setCountry] = useState("55");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const qrRef = useRef(null);

  const link = buildWhatsappLink({ country, phone, message });

  const downloadQr = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;
    const anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "whatsapp-qrcode.png";
    anchor.click();
  };

  return (
    <ToolPanel>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={3}>
          <TextField
            fullWidth
            label="País"
            value={country}
            inputMode="numeric"
            onChange={event => setCountry(event.target.value.replace(/\D/g, "").slice(0, 3))}
            InputProps={{
              startAdornment: (
                <Box component="span" sx={{ mr: 0.5, color: "text.secondary" }}>
                  +
                </Box>
              ),
            }}
          />
        </Grid>
        <Grid item xs={8} sm={9}>
          <TextField
            fullWidth
            label="Número com DDD"
            placeholder="(11) 99999-9999"
            value={phone}
            inputMode="tel"
            autoComplete="tel-national"
            onChange={event => setPhone(formatPhone(event.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            minRows={2}
            label="Mensagem pronta (opcional)"
            placeholder="Olá! Vi seu anúncio e gostaria de mais informações."
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 3,
          p: 2,
          bgcolor: "#f7f8fa",
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
          Seu link
        </Typography>
        <Typography
          component="output"
          aria-live="polite"
          sx={{
            display: "block",
            fontFamily: monoFontFamily,
            fontSize: "0.95rem",
            wordBreak: "break-all",
            color: link ? "text.primary" : "text.secondary",
          }}
        >
          {link || "Preencha o número para gerar o link."}
        </Typography>
      </Box>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 2 }}>
        <CopyButton value={link} label="Copiar link" variant="contained" size="large" />
        <Button
          variant="outlined"
          size="large"
          color="success"
          startIcon={<WhatsAppIcon />}
          href={link || undefined}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!link}
        >
          Abrir no WhatsApp
        </Button>
      </Stack>

      {link && (
        <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 3 }}>
          <Box
            ref={qrRef}
            sx={{
              p: 1.5,
              bgcolor: "#fff",
              border: 1,
              borderColor: "divider",
              borderRadius: 2,
              lineHeight: 0,
            }}
          >
            <QRCodeCanvas value={link} size={160} level="M" includeMargin={false} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 600 }}>QR code do link</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              Quem escanear abre a conversa com a mensagem já preenchida.
            </Typography>
            <Button variant="outlined" startIcon={<DownloadIcon />} onClick={downloadQr}>
              Baixar PNG
            </Button>
          </Box>
        </Box>
      )}
    </ToolPanel>
  );
};

export default WhatsappLinkGenerator;
