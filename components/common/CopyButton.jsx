import CheckIcon from "@mui/icons-material/CheckRounded";
import ContentCopyIcon from "@mui/icons-material/ContentCopyRounded";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

/**
 * Botão "Copiar" com confirmação: vira "Copiado" em verde por 1,8 s, com
 * um leve crescimento com ease-out. `onCopied` avisa o pai (para o ResultBox piscar).
 * Renderiza um IconButton quando `iconOnly` é true. Desabilitado sem `value`.
 */
const CopyButton = ({ value, label = "Copiar", iconOnly = false, onCopied, sx, ...props }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
    } catch {
      setCopied(false);
    }
  };

  const spring = {
    transition:
      "background-color 150ms, color 150ms, transform 220ms cubic-bezier(0.16, 1, 0.3, 1)",
    transform: copied ? "scale(1.04)" : "scale(1)",
  };

  if (iconOnly) {
    return (
      <Tooltip title={copied ? "Copiado" : label} arrow>
        <span>
          <IconButton
            aria-label={label}
            onClick={copy}
            disabled={!value}
            sx={{
              color: copied ? "success.main" : "primary.main",
              bgcolor: copied ? "success.light" : "transparent",
              ...spring,
              ...sx,
            }}
            {...props}
          >
            {copied ? <CheckIcon /> : <ContentCopyIcon />}
          </IconButton>
        </span>
      </Tooltip>
    );
  }

  return (
    <Button
      variant={props.variant ?? "contained"}
      onClick={copy}
      disabled={!value}
      color={copied ? "success" : "primary"}
      startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
      aria-live="polite"
      {...props}
      sx={{ minWidth: 132, ...spring, ...sx }}
    >
      {copied ? "Copiado" : label}
    </Button>
  );
};

export default CopyButton;
