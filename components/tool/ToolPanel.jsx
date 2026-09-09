import { Paper } from "@mui/material";

/** Painel branco que envolve a parte interativa de cada ferramenta. */
const ToolPanel = ({ children, sx, ...props }) => (
  <Paper sx={{ p: { xs: 2, sm: 3 }, ...sx }} {...props}>
    {children}
  </Paper>
);

export default ToolPanel;
