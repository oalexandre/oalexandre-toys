import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Box, Button, Chip, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import { useDeferredValue, useMemo, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ToolPanel from "../../components/tool/ToolPanel";
import {
  countGraphemes,
  formatDuration,
  getTextStats,
  PLATFORM_LIMITS,
  smsInfo,
  toLower,
  toTitleCase,
  toUpper,
} from "../../lib/textStats";
import { colors } from "../../theme";

const formatNumber = value => value.toLocaleString("pt-BR");

const StatTile = ({ value, label }) => (
  <Box
    sx={{
      p: { xs: 1.5, sm: 2 },
      borderRadius: 2.5,
      border: 1,
      borderColor: colors.line,
      bgcolor: colors.surfaceSunken,
      minWidth: 0,
    }}
  >
    <Typography
      component="div"
      sx={{
        fontSize: { xs: "1.375rem", sm: "1.625rem" },
        fontWeight: 700,
        lineHeight: 1.2,
        color: "text.primary",
        fontVariantNumeric: "tabular-nums",
        overflowWrap: "anywhere",
      }}
    >
      {value}
    </Typography>
    <Typography component="div" variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
      {label}
    </Typography>
  </Box>
);

const LimitRow = ({ label, used, limit, approximate, note }) => {
  const over = used - limit;
  const exceeded = over > 0;
  return (
    <Box component="li" sx={{ py: 1.5, borderTop: 1, borderColor: colors.line }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "space-between",
          columnGap: 1.5,
          rowGap: 0.5,
          mb: 0.75,
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1 }}>
          <Typography component="span" sx={{ fontWeight: 600 }}>
            {label}
          </Typography>
          {approximate && (
            <Chip
              size="small"
              label="aproximado"
              sx={{ height: 22, fontSize: "0.75rem", bgcolor: colors.surfaceSunken }}
            />
          )}
        </Box>
        <Typography
          component="span"
          variant="body2"
          sx={{
            fontVariantNumeric: "tabular-nums",
            color: exceeded ? "error.main" : "text.secondary",
            fontWeight: exceeded ? 600 : 400,
          }}
        >
          {formatNumber(used)} / {formatNumber(limit)}
          {exceeded && ` · passou ${formatNumber(over)}`}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={Math.min(100, (used / limit) * 100)}
        color={exceeded ? "error" : "primary"}
        aria-label={`${label}: ${used} de ${limit}`}
        sx={{ height: 6, borderRadius: 3, bgcolor: colors.line }}
      />
      {note && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
          {note}
        </Typography>
      )}
    </Box>
  );
};

const TextCounter = () => {
  const [text, setText] = useState("");
  // Contagens seguem o texto com prioridade baixa: digitar continua fluido
  // mesmo com dezenas de milhares de caracteres.
  const deferredText = useDeferredValue(text);

  const stats = useMemo(() => getTextStats(deferredText), [deferredText]);
  const sms = useMemo(() => smsInfo(deferredText), [deferredText]);
  // O Google e as redes cortam por linha única; conta sem as quebras de linha.
  const characters = stats.characters;
  const singleLine = useMemo(
    () => countGraphemes(deferredText.replace(/\s*[\r\n]+\s*/g, " ").trim()),
    [deferredText]
  );

  const tiles = [
    { label: "Caracteres", value: formatNumber(stats.characters) },
    { label: "Sem espaços", value: formatNumber(stats.charactersNoSpaces) },
    { label: "Palavras", value: formatNumber(stats.words) },
    { label: "Frases", value: formatNumber(stats.sentences) },
    { label: "Parágrafos", value: formatNumber(stats.paragraphs) },
    { label: "Linhas", value: formatNumber(stats.lines) },
    { label: "Tempo de leitura", value: formatDuration(stats.readingSeconds) },
    { label: "Tempo de fala", value: formatDuration(stats.speakingSeconds) },
  ];

  const smsNote = sms.gsm
    ? "Sem acentos especiais nem emoji: cabe em 160 caracteres."
    : `Com ${sms.nonGsm
        .map(char => `“${char}”`)
        .join(" ")} o SMS usa outra codificação e o limite cai para 70. Emoji ocupam 2.`;

  const convert = fn => () => setText(prev => fn(prev));

  return (
    <ToolPanel>
      <TextField
        fullWidth
        multiline
        minRows={8}
        maxRows={18}
        label="Seu texto"
        placeholder="Digite ou cole o texto aqui."
        value={text}
        onChange={event => setText(event.target.value)}
        inputProps={{ spellCheck: true, "aria-describedby": "contador-privacidade" }}
      />

      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        spacing={1}
        sx={{ mt: 1.5, mb: 3 }}
        alignItems="center"
      >
        <CopyButton value={text} label="Copiar texto" variant="outlined" />
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<DeleteOutlineIcon />}
          onClick={() => setText("")}
          disabled={!text}
        >
          Limpar
        </Button>
        <Box
          role="group"
          aria-label="Converter maiúsculas e minúsculas"
          sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
        >
          <Button size="small" onClick={convert(toUpper)} disabled={!text}>
            MAIÚSCULAS
          </Button>
          <Button size="small" onClick={convert(toLower)} disabled={!text}>
            minúsculas
          </Button>
          <Button size="small" onClick={convert(toTitleCase)} disabled={!text}>
            Primeira Letra Maiúscula
          </Button>
        </Box>
      </Stack>

      <Box
        aria-live="polite"
        aria-atomic="false"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(4, minmax(0, 1fr))" },
          gap: { xs: 1, sm: 1.5 },
          mb: 3,
        }}
      >
        {tiles.map(tile => (
          <StatTile key={tile.label} {...tile} />
        ))}
      </Box>

      <Typography component="h2" sx={{ fontSize: "1.0625rem", fontWeight: 700, mb: 1 }}>
        Limites
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
        {PLATFORM_LIMITS.map(item => (
          <LimitRow
            key={item.id}
            label={item.label}
            used={
              item.id === "google-title" || item.id === "meta-description" ? singleLine : characters
            }
            limit={item.limit}
            approximate={item.approximate}
            note={
              item.id === "x"
                ? "Contagem aproximada: o X conta todo link como 23 e alguns emoji e caracteres asiáticos como 2."
                : null
            }
          />
        ))}
        <LimitRow
          label={sms.encoding === "GSM-7" ? "SMS" : "SMS com acento ou emoji"}
          used={sms.used}
          limit={sms.limit}
          note={deferredText ? smsNote : "Acentos como ã, ç e õ e emoji reduzem o limite para 70."}
        />
      </Box>

      <Typography id="contador-privacidade" variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        A contagem é feita no seu navegador. O texto não é enviado nem guardado.
      </Typography>
    </ToolPanel>
  );
};

export default TextCounter;
