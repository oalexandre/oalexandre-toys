import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { cpf as cpfValidator, cnpj as cnpjValidator } from "cpf-cnpj-validator";
import { Container, Typography, Alert, Paper, TextField } from "@mui/material";
import PageTitle from "../../components/common/PageTitle";
import { Send } from "@mui/icons-material";
import { mask } from "./mask";

const Validator = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = event => {
    setInputValue(event.target.value);
    setIsValid(null);
    const { value } = event.target;
    setInputValue(mask(value));
  };

  const handleValidate = () => {
    const isCpf = inputValue.length === 14;
    const isCnpj = inputValue.length === 18;
    if (isCpf) {
      const isValid = cpfValidator.isValid(inputValue.replace(/\D/g, ""));
      setIsValid(isValid || inputValue.length === 0 ? isValid : false);
    } else if (isCnpj) {
      const isValid = cnpjValidator.isValid(inputValue.replace(/\D/g, ""));
      setIsValid(isValid || inputValue.length === 0 ? isValid : false);
    } else {
      setIsValid(false);
    }
  };
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "20vh",
    //   }}
    // >
    <Container component="main">
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField onChange={handleInputChange} value={inputValue} label="CPF ou CNPJ" />
          {isValid !== null && (
            <Box sx={{ display: "flex", mt: 2 }}>
              {isValid ? (
                <Alert severity="success" sx={{ width: "100%" }}>
                  {inputValue.length === 14 ? "CPF" : "CNPJ"} válido
                </Alert>
              ) : (
                <Alert severity="error" sx={{ width: "100%" }}>
                  {inputValue.length === 0
                    ? "Documento inválido"
                    : `${inputValue.length === 14 ? "CPF" : "CNPJ"} inválido`}
                </Alert>
              )}
            </Box>
          )}
          <Box sx={{ display: "flex", mt: 2 }}>
            <Button variant="contained" onClick={handleValidate} endIcon={<Send />}>
              Validar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
    // </Box>
  );
};

export default Validator;
