import { FormControlLabel, FormGroup, Switch } from "@mui/material";

import FieldsetContainer from "../FieldsetContainer";
import Counter from "../../../components/common/Counter";

const NumberOptions = ({ values, handleChange, handleDecrease, handleIncrease }) => {
  const isDisabled = values.isLottery;

  return (
    <>
      <FieldsetContainer
        title="Opções de resultado"
        helperText={
          values.total
            ? `Haverá ${values.total} número${values.total > 1 ? "s" : ""} que ${
                values.total > 1 ? "são" : "é"
              } ${values.unique ? "Único" : "não único"} e ${
                values.sorted ? "Ordenado" : "não ordenado"
              }.`
            : "Não haverá resultados."
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
          <Counter
            values={values}
            isDisabled={isDisabled}
            handleChange={handleChange}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />

          <FormControlLabel
            control={
              <Switch
                disabled={isDisabled}
                checked={values.unique}
                onChange={handleChange}
                name="unique"
              />
            }
            label="Único"
          />
          <FormControlLabel
            control={
              <Switch
                disabled={isDisabled}
                checked={values.sorted}
                onChange={handleChange}
                name="sorted"
              />
            }
            label="Ordenado"
          />
        </FormGroup>
      </FieldsetContainer>
    </>
  );
};

export default NumberOptions;
