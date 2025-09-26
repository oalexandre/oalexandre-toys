import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { getCurrencyName } from "../../utilities/currencyUtils";

const CurrencyConverter = () => {
  const [moedas, setMoedas] = useState([]);
  const [currencyInit, setCurrencyInit] = useState(null);
  const [currencyFinal, setCurrencyFinal] = useState(null);
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then(response => {
        const currencyArray = Object.keys(response.data.rates);
        setMoedas(
          currencyArray.map(currency => ({
            name: currency,
            label: `${currency} (${getCurrencyName(currency)})`,
            currency: getCurrencyName(currency),
          }))
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleConverter = () => {
    if (!currencyInit || !currencyFinal) {
      alert("Por favor, selecione as moedas de origem e destino antes de converter.");
      return;
    }

    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${currencyInit.name}`)
      .then(response => {
        const rate = response.data.rates[currencyFinal.name];
        setResultado(
          (valor * rate).toLocaleString("pt-br", {
            style: "currency",
            currency: currencyFinal.name,
          })
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChangeCurrencyInit = (event, value) => {
    setCurrencyInit(value);
  };

  const handleChangeCurrencyFinal = (event, value) => {
    setCurrencyFinal(value);
  };

  const handleChangeValor = event => {
    setValor(event.target.value);
  };

  return (
    <Grid container spacing={2} justifyContent="flex-end">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  id="de-select"
                  options={moedas}
                  getOptionLabel={option =>
                    option.currency && option.name
                      ? `${option.name} (${option.currency})`
                      : option.name
                  }
                  onChange={handleChangeCurrencyInit}
                  renderInput={params => (
                    <TextField {...params} label="De:" variant="outlined" fullWidth />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  id="para-select"
                  options={moedas}
                  getOptionLabel={option =>
                    option.currency && option.name
                      ? `${option.name} (${option.currency})`
                      : option.name
                  }
                  onChange={handleChangeCurrencyFinal}
                  renderInput={params => (
                    <TextField {...params} label="Para:" variant="outlined" fullWidth />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="valor"
                  label="Valor"
                  variant="outlined"
                  onChange={handleChangeValor}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleConverter}>
                  Converter
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
            <Typography variant="h6" gutterBottom>
              Resultado:
            </Typography>
            <Typography variant="h3" color="primary">
              {resultado}
            </Typography>
            {resultado !== "" && (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: "error.main",
                  color: "error.contrastText",
                  borderRadius: 1,
                }}
              >
                <Typography variant="subtitle1" align="center">
                  ATENÇÃO: Os valores exibidos podem não ser precisos ou atualizados devido a
                  possíveis variações na API ou fechamento do mercado local.
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CurrencyConverter;
