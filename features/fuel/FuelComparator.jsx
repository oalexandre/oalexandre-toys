import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, Button, Collapse, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import { compareFuel, formatPricePerLiter } from "../../lib/fuel";
import { formatMoney, formatPercent } from "../../lib/money";
import { colors } from "../../theme";

const onlyDecimal = value => value.replace(/[^\d.,]/g, "");

const FUEL_NAME = { etanol: "etanol", gasolina: "gasolina" };

/** Linha "rótulo ... valor" do resumo; quebra em duas linhas se faltar espaço. */
const Row = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      columnGap: 2,
      py: 0.75,
      borderTop: 1,
      borderColor: colors.accentTintStrong,
    }}
  >
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body2" sx={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
      {value}
    </Typography>
  </Box>
);

const FuelComparator = () => {
  const [form, setForm] = useState({
    ethanolPrice: "",
    gasolinePrice: "",
    ethanolKmL: "",
    gasolineKmL: "",
    tankLiters: "50",
  });
  const [showCar, setShowCar] = useState(false);
  const [copies, setCopies] = useState(0);

  const setField = name => event =>
    setForm(prev => ({ ...prev, [name]: onlyDecimal(event.target.value) }));

  const result = compareFuel(form);
  const partialConsumption = !result?.usesConsumption && (form.ethanolKmL || form.gasolineKmL);

  const limitText = result
    ? result.usesConsumption
      ? `${formatPercent(result.breakEvenRatio, 1)} no seu carro`
      : "70% pela regra prática"
    : "";

  const summary = result
    ? `Etanol ${formatPricePerLiter(result.ethanol)} e gasolina ${formatPricePerLiter(
        result.gasoline
      )}: o etanol custa ${formatPercent(
        result.ratio,
        1
      )} da gasolina (limite de ${limitText}). Compensa abastecer com ${FUEL_NAME[result.winner]}.`
    : "";

  const priceAdornment = { startAdornment: <InputAdornment position="start">R$</InputAdornment> };
  const kmAdornment = { endAdornment: <InputAdornment position="end">km/l</InputAdornment> };

  return (
    <ToolPanel>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Preço do etanol (litro)"
            placeholder="4,099"
            value={form.ethanolPrice}
            onChange={setField("ethanolPrice")}
            InputProps={priceAdornment}
            inputProps={{ inputMode: "decimal" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Preço da gasolina (litro)"
            placeholder="5,899"
            value={form.gasolinePrice}
            onChange={setField("gasolinePrice")}
            InputProps={priceAdornment}
            inputProps={{ inputMode: "decimal" }}
          />
        </Grid>
      </Grid>

      <Button
        variant="text"
        onClick={() => setShowCar(open => !open)}
        aria-expanded={showCar}
        aria-controls="consumo-do-carro"
        endIcon={
          <ExpandMoreIcon
            sx={{ transform: showCar ? "rotate(180deg)" : "none", transition: "transform 200ms" }}
          />
        }
        sx={{ mt: 1.5, px: 1, ml: -1 }}
      >
        Usar o consumo do meu carro
      </Button>

      <Collapse in={showCar} id="consumo-do-carro">
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          Veja no manual, na etiqueta do Inmetro ou meça você mesmo. Com os dois valores, a conta
          usa o rendimento real do carro em vez dos 70%.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Consumo com etanol"
              placeholder="8,5"
              value={form.ethanolKmL}
              onChange={setField("ethanolKmL")}
              InputProps={kmAdornment}
              inputProps={{ inputMode: "decimal" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Consumo com gasolina"
              placeholder="12"
              value={form.gasolineKmL}
              onChange={setField("gasolineKmL")}
              InputProps={kmAdornment}
              inputProps={{ inputMode: "decimal" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Tamanho do tanque"
              value={form.tankLiters}
              onChange={setField("tankLiters")}
              InputProps={{ endAdornment: <InputAdornment position="end">litros</InputAdornment> }}
              inputProps={{ inputMode: "decimal" }}
            />
          </Grid>
        </Grid>
        {partialConsumption && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
            Preencha o consumo com os dois combustíveis. Por enquanto, vale a regra dos 70%.
          </Typography>
        )}
      </Collapse>

      <ResultBox
        label="Resultado"
        sx={{ mt: 3 }}
        flashKey={copies}
        actions={
          result ? (
            <CopyButton
              value={summary}
              label="Copiar resultado"
              size="large"
              onCopied={() => setCopies(c => c + 1)}
            />
          ) : null
        }
      >
        <Box aria-live="polite">
          {result ? (
            <>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Abasteça com{" "}
                <Box component="span" sx={{ color: colors.success }}>
                  {FUEL_NAME[result.winner]}
                </Box>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, mb: 1.5 }}>
                O etanol custa {formatPercent(result.ratio, 1)} do preço da gasolina. O limite é de{" "}
                {limitText}.
                {result.close && " A diferença é pequena: na prática, os dois saem quase iguais."}
              </Typography>

              <Row
                label="O etanol compensa até"
                value={formatPricePerLiter(result.breakEvenEthanolPrice)}
              />
              {result.usesConsumption && (
                <>
                  <Row
                    label="Custo por km"
                    value={`etanol ${formatPricePerLiter(
                      result.ethanolCostPerKm
                    )} · gasolina ${formatPricePerLiter(result.gasolineCostPerKm)}`}
                  />
                  <Row
                    label={`Economia a cada 100 km com ${FUEL_NAME[result.winner]}`}
                    value={formatMoney(result.savingsPer100Km)}
                  />
                </>
              )}
              {result.savingsPerTank !== null && (
                <Row
                  label={`Economia por tanque de ${result.tankLiters.toLocaleString("pt-BR")} L`}
                  value={formatMoney(result.savingsPerTank)}
                />
              )}
            </>
          ) : (
            <Typography color="text.secondary">
              Digite o preço do litro dos dois combustíveis para comparar.
            </Typography>
          )}
        </Box>
      </ResultBox>
    </ToolPanel>
  );
};

export default FuelComparator;
