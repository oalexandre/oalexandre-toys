import { FormControlLabel, FormGroup, Switch } from "@mui/material";

import FieldsetContainer from "../FieldsetContainer";

const Presets = ({ values, handleChange }) => {
  return (
    <>
      <FieldsetContainer
        title="Presets"
        size="small"
        helperText={
          values.isPowerball
            ? "Quatro números entre 1-69 e um número entre 1-26 para a powerball."
            : values.isMegaMillions
            ? "Quatro números entre 1-70 e um número entre 1-25 para o megaball."
            : "Opcional: selecione uma predefinição."
        }
      >
        <FormGroup
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: {
              xs: 0,
              sm: 2,
            },
            marginBottom: 1,
          }}
        >
          <FormControlLabel
            control={
              <Switch checked={values.isPowerball} onChange={handleChange} name="powerball" />
            }
            label="Powerball"
          />
          <FormControlLabel
            control={
              <Switch checked={values.isMegaMillions} onChange={handleChange} name="megaMillions" />
            }
            label="Mega Millions"
          />
        </FormGroup>
      </FieldsetContainer>
    </>
  );
};

export default Presets;
