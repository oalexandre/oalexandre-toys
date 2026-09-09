import { Paper } from "@mui/material";

/** Caixa branca que envolve a parte interativa de cada ferramenta. */
const ToolPanel = ({ children, ...props }) => (
  <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }} {...props}>
    {children}
  </Paper>
);

export default ToolPanel;
