import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageTitle from "../../components/common/PageTitle";
import axios from "axios";
import { blue, purple } from "@mui/material/colors";
import { CircularProgress } from "@mui/material";

const Form = () => {
  const [ipDetails, setIpDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true); // novo estado
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      const ipAddress = res.data.ip;
      axios
        .get(`https://ipapi.co/${ipAddress}/json/`)
        .then((res) => {
          setIpDetails(res.data);
          setIsLoading(false); // atualiza o estado para indicar que os dados foram carregados
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <Container component="main">

      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        {/* Adiciona o CircularProgress enquanto isLoading for verdadeiro */}
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item>
                <Typography variant="h5">Seu IP:</Typography>
              </Grid>
              <Grid item>
                <Card>
                  <Box sx={{ bgcolor: "#4F6792", p: 1.2 }}>
                    <Typography
                      variant={isLargeScreen ? "h4" : "h6"}
                      sx={{ color: purple[50], fontWeight: 700 }}
                    >
                      {ipDetails.ip}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Localização aproximada:
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              {`${ipDetails.city}, ${ipDetails.region}, ${ipDetails.country_name}`}
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Provedor de Internet:
            </Typography>
            <Typography variant="subtitle1">{ipDetails.org}</Typography>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Form;
