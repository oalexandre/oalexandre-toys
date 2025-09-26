import { Button, Hidden, Tooltip } from "@mui/material";
import { useState } from "react";
import { FileCopyOutlined, FileCopyRounded } from "@mui/icons-material";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <Tooltip title={copied ? "Copiado!" : "Copiar"}>
      <Button aria-label="Copiar" onClick={handleCopy} variant="contained">
        <Hidden smDown>{copied ? "Copiado" : "Copiar"}</Hidden>
        <Hidden mdUp>{copied ? <FileCopyRounded /> : <FileCopyOutlined />}</Hidden>
      </Button>
    </Tooltip>
  );
};

export default CopyButton;
