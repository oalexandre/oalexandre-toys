import { Warning } from "@mui/icons-material";
import { Box, Typography, Alert } from "@mui/material";

const Disclaimer = () => {
  return (
    <Box sx={{ mt: 4, mb: 2, maxWidth: 900, mx: "auto", px: 2 }}>
      <Alert
        severity="warning"
        icon={<Warning />}
        sx={{
          backgroundColor: "rgba(255, 152, 0, 0.1)",
          border: "1px solid rgba(255, 152, 0, 0.3)",
          "& .MuiAlert-icon": {
            color: "warning.main",
          },
        }}
      >
        <Typography variant="body2" sx={{ textAlign: "justify", fontSize: 12 }}>
          <strong>AVISO LEGAL:</strong> Ferramentas exclusivamente educacionais. NÃO use para
          decisões críticas, produção ou transações financeiras. Software fornecido &ldquo;como
          está&rdquo;, sem garantias. Uso por sua conta e risco. Dados gerados podem não ser
          precisos ou seguros.
        </Typography>
      </Alert>
    </Box>
  );
};

export default Disclaimer;
