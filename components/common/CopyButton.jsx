import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

/**
 * Botão "Copiar" com confirmação visual. Renderiza um IconButton quando
 * `iconOnly` é true. Desabilitado enquanto `value` estiver vazio.
 */
const CopyButton = ({ value, label = "Copiar", iconOnly = false, ...props }) => {
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
    } catch {
      setCopied(false);
    }
  };

  if (iconOnly) {
    return (
      <Tooltip title={copied ? "Copiado" : label}>
        <span>
          <IconButton
            aria-label={label}
            onClick={copy}
            disabled={!value}
            color={copied ? "success" : "default"}
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
      variant="outlined"
      onClick={copy}
      disabled={!value}
      color={copied ? "success" : "primary"}
      startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
      {...props}
    >
      {copied ? "Copiado" : label}
    </Button>
  );
};

export default CopyButton;
