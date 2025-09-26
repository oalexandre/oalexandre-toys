import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AppIcon from "./app-icon";
import { Button } from "@mui/material";
import { Create, Masks, MasksOutlined, MasksRounded } from "@mui/icons-material";
import Hidden from "@mui/material/Hidden";
import { ArrowsClockwise, MaskHappy, MaskSad } from "phosphor-react";

const MaskButton = ({ mask, onClick }) => {
  return (
    <Tooltip title={mask ? "Sem máscara" : "Com máscara"}>
      <Button onClick={onClick} sx={{ mr: 1 }} variant="contained">
        <Hidden smDown>{mask ? "Sem máscara" : "Com máscara"}</Hidden>
        <Hidden mdUp>{mask ? <MasksOutlined /> : <MasksRounded />}</Hidden>
      </Button>
    </Tooltip>
  );
};

const GenerateButton = ({ onClick }) => {
  return (
    <Tooltip title="Gerar novo documento">
      <Button onClick={onClick} sx={{ mr: 1 }} variant="contained">
        <Hidden smDown>{"Refazer"}</Hidden>
        <Hidden mdUp>{<Create />}</Hidden>
      </Button>
    </Tooltip>
  );
};

export { MaskButton, GenerateButton };
