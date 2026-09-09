import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { colors, monoFontFamily } from "../../theme";

/**
 * Área de resultado padrão das ferramentas: superfície tingida, rótulo,
 * valor em mono e ações à direita (abaixo no celular).
 *
 * - `value`: texto do resultado (string). Use `children` para conteúdo
 *   customizado no lugar do valor.
 * - `actions`: botões (Copiar, Gerar outra...).
 * - `flashKey`: quando muda, o fundo pisca do violeta ao branco (usado
 *   ao copiar). Única animação autoral do site.
 * - `size`: "lg" (28px) ou "md" (20px).
 */
const ResultBox = ({
  label = "Resultado",
  value,
  children,
  actions,
  flashKey,
  size = "lg",
  placeholder,
  ariaLabel,
  sx,
}) => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (flashKey === undefined || flashKey === 0) return undefined;
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 450);
    return () => clearTimeout(timer);
  }, [flashKey]);

  const empty = !value && !children;

  return (
    <Box
      sx={{
        position: "relative",
        p: { xs: 2, sm: 2.5 },
        borderRadius: "14px",
        border: 1,
        borderColor: colors.accentTintStrong,
        bgcolor: flash ? colors.surface : colors.accentTint,
        transition: flash
          ? "background-color 60ms"
          : "background-color 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        ...sx,
      }}
    >
      <Typography
        component="div"
        sx={{ fontSize: "0.9375rem", fontWeight: 600, color: "primary.main", mb: 1 }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "center" },
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {children ?? (
            <Typography
              component="output"
              aria-live="polite"
              aria-label={ariaLabel ?? label}
              sx={{
                display: "block",
                fontFamily: monoFontFamily,
                fontSize:
                  size === "lg" ? { xs: "1.35rem", sm: "1.75rem" } : { xs: "1rem", sm: "1.125rem" },
                fontWeight: 500,
                lineHeight: 1.35,
                letterSpacing: "0.01em",
                wordBreak: "break-all",
                color: empty ? "text.secondary" : "text.primary",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {value || placeholder || ""}
            </Typography>
          )}
        </Box>
        {actions && (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexShrink: 0,
              flexWrap: "wrap",
              // Botão tonal sobre fundo tingido vira branco com borda, para não sumir.
              "& .MuiButton-outlined": {
                bgcolor: "background.paper",
                boxShadow: `inset 0 0 0 1.5px ${colors.accentTintStrong}`,
                "&:hover": { bgcolor: colors.surfaceSunken },
              },
            }}
          >
            {actions}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ResultBox;
