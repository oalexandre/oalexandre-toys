import { useState } from "react";
import { Container, Typography, Box, Paper, Grid, Card } from "@mui/material";
import { ArrowDownward, MyLocation, Phone } from "@mui/icons-material";
import Button from "@mui/material/Button";
import MaskedInput from "./MaskedInput";
import PageTitle from "../../components/common/PageTitle";
import statesData from "./state.json";
import { blue } from "@mui/material/colors";

function getStateFromPhone(phone) {
  const phoneDigits = phone.replace(/[^\d]/g, "");
  for (const [key, value] of Object.entries(statesData[0])) {
    if (value.areaCodes?.some((code) => phoneDigits.startsWith(code))) {
      return key;
    }
  }
  return "Não encontrado";
}

function App() {
  const [phone, setPhone] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleButtonClick = () => {
    const state = getStateFromPhone(phone);
    const message =
      state !== "Não encontrado" ? `O estado é ${state}` : "Telefone inválido";
    setResultMessage(message);
    setShowResult(true);
  };
  return (
    <Container component="main">

      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="h5">
            Preencha um número de telefone abaixo
          </Typography>
          <ArrowDownward sx={{ mr: 1 }} />
        </Box>

        <MaskedInput
          mask="(99) 99999-9999"
          label="Número de telefone"
          value={phone}
          onChange={handlePhoneChange}
          margin="normal"
          variant="outlined"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              onClick={handleButtonClick}
              endIcon={<MyLocation />}
              sx={{ mt: 2, width: "100%" }}
            >
              Verificar estado
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            {showResult && (
              <Card sx={{ mt: 3 }}>
                <Box sx={{ bgcolor: blue[600], p: 1.2 }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Phone sx={{ color: "common.white" }} />
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "common.white" }}
                    >
                      {resultMessage}
                    </Typography>
                  </div>
                </Box>
              </Card>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
