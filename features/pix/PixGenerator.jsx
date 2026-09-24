import DownloadIcon from "@mui/icons-material/DownloadRounded";
import PixIcon from "@mui/icons-material/PixRounded";
import { Box, Button, Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import { formatMoney } from "../../lib/money";
import {
  assemblePayload,
  descriptionLimit,
  detectKeyType,
  KEY_TYPES,
  LIMITS,
  normalizeAmount,
  validatePix,
} from "../../lib/pix";
import { colors } from "../../theme";

const KEY_HINTS = {
  cpf: { placeholder: "000.000.000-00", inputMode: "numeric" },
  cnpj: { placeholder: "00.000.000/0000-00", inputMode: "numeric" },
  phone: { placeholder: "(11) 91234-5678", inputMode: "tel" },
  email: { placeholder: "voce@exemplo.com.br", inputMode: "email" },
  evp: { placeholder: "123e4567-e89b-12d3-a456-426614174000", inputMode: "text" },
};

const INITIAL = {
  keyType: "cpf",
  key: "",
  name: "",
  city: "",
  amount: "",
  txid: "",
  description: "",
};

const PixGenerator = () => {
  const [form, setForm] = useState(INITIAL);
  const [typeChosen, setTypeChosen] = useState(false);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [dataUrl, setDataUrl] = useState("");
  const [copies, setCopies] = useState(0);
  const qrRef = useRef(null);
  const instanceRef = useRef(null);

  const { errors, values } = validatePix(form);
  const valid = Object.keys(errors).length === 0;
  const payload = submitted && valid ? assemblePayload(values) : "";
  const amountInfo = normalizeAmount(form.amount);
  const descMax = descriptionLimit(values.key ?? "");

  const showError = name => (submitted || touched[name]) && errors[name];

  const setField = name => event => {
    const { value } = event.target;
    setForm(prev => {
      const next = { ...prev, [name]: value };
      // Enquanto a pessoa não escolheu o tipo, ele acompanha o que foi digitado.
      if (name === "key" && !typeChosen) {
        const detected = detectKeyType(value);
        if (detected) next.keyType = detected;
      }
      return next;
    });
  };

  const touch = name => () => setTouched(prev => ({ ...prev, [name]: true }));

  const submit = event => {
    event.preventDefault();
    setSubmitted(true);
  };

  // QR code só no cliente; recria sempre que o código muda.
  useEffect(() => {
    if (!qrRef.current) return undefined;
    let cancelled = false;

    const render = async () => {
      const { default: QRCode } = await import("easyqrcodejs");
      if (cancelled || !qrRef.current) return;
      instanceRef.current?.clear();
      qrRef.current.innerHTML = "";
      if (!payload) {
        setDataUrl("");
        return;
      }
      instanceRef.current = new QRCode(qrRef.current, {
        text: payload,
        width: 512,
        height: 512,
        colorDark: "#000000",
        colorLight: "#ffffff",
        quietZone: 32,
        quietZoneColor: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M,
        onRenderingEnd: (_, url) => {
          if (!cancelled) setDataUrl(url);
        },
      });
    };

    const timer = setTimeout(render, 150);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [payload]);

  const keyHint = KEY_HINTS[form.keyType];

  return (
    <ToolPanel component="form" onSubmit={submit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            fullWidth
            label="Tipo de chave"
            value={form.keyType}
            onChange={event => {
              setTypeChosen(true);
              setField("keyType")(event);
            }}
            helperText=" "
          >
            {KEY_TYPES.map(type => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Chave Pix"
            value={form.key}
            onChange={setField("key")}
            onBlur={touch("key")}
            placeholder={keyHint.placeholder}
            autoComplete="off"
            inputProps={{ inputMode: keyHint.inputMode, autoCapitalize: "none", spellCheck: false }}
            error={Boolean(showError("key"))}
            helperText={showError("key") || "A chave cadastrada no seu banco."}
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <TextField
            fullWidth
            label="Nome de quem recebe"
            value={form.name}
            onChange={setField("name")}
            onBlur={touch("name")}
            autoComplete="name"
            error={Boolean(showError("name"))}
            helperText={
              showError("name") || `Vai no código sem acentos, até ${LIMITS.name} letras.`
            }
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            label="Cidade"
            value={form.city}
            onChange={setField("city")}
            onBlur={touch("city")}
            autoComplete="address-level2"
            error={Boolean(showError("city"))}
            helperText={showError("city") || `Até ${LIMITS.city} letras.`}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Valor (opcional)"
            value={form.amount}
            onChange={setField("amount")}
            onBlur={touch("amount")}
            placeholder="0,00"
            inputProps={{ inputMode: "decimal" }}
            InputProps={{
              startAdornment: (
                <Typography component="span" color="text.secondary" sx={{ mr: 1 }}>
                  R$
                </Typography>
              ),
            }}
            error={Boolean(showError("amount"))}
            helperText={
              showError("amount") ||
              (amountInfo.value
                ? `Quem paga verá ${formatMoney(amountInfo.value)}.`
                : "Em branco: quem paga digita o valor.")
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Identificador (opcional)"
            value={form.txid}
            onChange={setField("txid")}
            onBlur={touch("txid")}
            placeholder="PEDIDO123"
            autoComplete="off"
            inputProps={{ maxLength: LIMITS.txid, autoCapitalize: "none", spellCheck: false }}
            error={Boolean(showError("txid"))}
            helperText={showError("txid") || "Letras e números, sem espaços. Aparece no extrato."}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mensagem (opcional)"
            value={form.description}
            onChange={setField("description")}
            placeholder="Pedido 42"
            disabled={descMax === 0}
            helperText={
              descMax === 0
                ? "Esta chave é longa e não deixa espaço para mensagem."
                : `Até ${descMax} caracteres, sem acentos. Nem todo banco mostra a mensagem.`
            }
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<PixIcon />}
        sx={{ mt: 1, mb: 3, width: { xs: "100%", sm: "auto" } }}
      >
        Gerar QR Code Pix
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <ResultBox
            label="Pix copia e cola"
            value={payload}
            size="md"
            placeholder={
              submitted && !valid
                ? "Corrija os campos marcados acima."
                : "Preencha os dados e clique em Gerar QR Code Pix."
            }
            flashKey={copies}
            actions={
              payload ? (
                <CopyButton
                  value={payload}
                  label="Copiar código"
                  size="large"
                  onCopied={() => setCopies(c => c + 1)}
                />
              ) : null
            }
          />
          {payload && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              No código: {values.name}, {values.city}
              {values.amount ? `, ${formatMoney(Number(values.amount))}` : ", valor livre"}. Confira
              no app do banco antes de divulgar.
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={1.5}>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                aspectRatio: "1 / 1",
                maxWidth: 320,
                width: "100%",
                mx: "auto",
                p: 2,
                bgcolor: colors.surfaceSunken,
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                "& canvas, & img": {
                  width: "100% !important",
                  height: "auto !important",
                  maxWidth: 280,
                },
              }}
            >
              <Box
                ref={qrRef}
                aria-label="QR code Pix"
                role="img"
                sx={{ display: payload ? "block" : "none", width: "100%" }}
              />
              {!payload && (
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                  O QR code aparece aqui.
                </Typography>
              )}
            </Box>
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              href={dataUrl || undefined}
              download="qrcode-pix.png"
              disabled={!payload || !dataUrl}
            >
              Baixar PNG
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        O código é montado no seu navegador. A chave e os dados não são enviados a nenhum servidor.
      </Typography>
    </ToolPanel>
  );
};

export default PixGenerator;
