import { Alert, Box, Chip, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import ToolPanel from "../../components/tool/ToolPanel";
import { findStateByPhone, formatPhone, states } from "../../lib/ddd";

const DddLookup = () => {
  const [value, setValue] = useState("");
  const digits = value.replace(/\D/g, "");
  const state = digits.length >= 2 ? findStateByPhone(digits) : null;

  return (
    <ToolPanel>
      <TextField
        fullWidth
        label="DDD ou telefone com DDD"
        placeholder="(11) 99999-9999"
        value={value}
        inputProps={{ inputMode: "tel" }}
        autoComplete="off"
        onChange={event => setValue(formatPhone(event.target.value))}
        helperText="Basta digitar os dois primeiros dígitos."
      />

      <Box sx={{ mt: 2 }} aria-live="polite">
        {state && (
          <Alert severity="success" icon={false} sx={{ "& .MuiAlert-message": { width: "100%" } }}>
            <Typography sx={{ fontWeight: 700, fontSize: "1.15rem" }}>
              DDD {digits.slice(0, 2)}: {state.name} ({state.uf})
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Região {state.region} ·{" "}
              <Link href={`/ddd/${state.uf.toLowerCase()}`} style={{ color: "inherit" }}>
                ver cidades de cada DDD de {state.name}
              </Link>
            </Typography>
            <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
              {state.ddds.map(ddd => (
                <Chip
                  key={ddd}
                  size="small"
                  label={ddd}
                  color={ddd === digits.slice(0, 2) ? "success" : "default"}
                  variant={ddd === digits.slice(0, 2) ? "filled" : "outlined"}
                />
              ))}
            </Stack>
          </Alert>
        )}
        {!state && digits.length >= 2 && (
          <Alert severity="warning">DDD {digits.slice(0, 2)} não existe no Brasil.</Alert>
        )}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Cobre os {states.reduce((sum, s) => sum + s.ddds.length, 0)} DDDs dos 26 estados e do
        Distrito Federal.
      </Typography>
    </ToolPanel>
  );
};

export default DddLookup;
