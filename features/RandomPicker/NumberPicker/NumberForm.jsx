import { Grid, Paper, Stack } from "@mui/material";

import Presets from "./Presets";
import NumberOptions from "./NumberOptions";
import NumberRange from "./NumberRange";
import ActionGroup from "../ActionGroup";
import Output from "./Output";
import OutputMessage from "../../../components/common/OutputMessage";

const NumberForm = ({
  resultRef,
  values,
  handleChange,
  handleClick,
  handleCopy,
  handleReset,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <>
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <NumberOptions
              values={values}
              handleChange={handleChange}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />

            {/* <Presets values={values} handleChange={handleChange} /> */}

            <NumberRange values={values} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} md={5}>
            <ActionGroup
              isDisabled={!values?.randomNumber?.length}
              generateAria="gerar números aleatórios"
              handleClick={handleClick}
              handleCopy={handleCopy}
              handleReset={handleReset}
            />

            <Stack
              ref={resultRef}
              flexDirection="row"
              justifyContent={values.resultIsCentered ? "center" : "flex-start"}
              flexWrap="wrap"
              gap={2}
              mt={5}
              mb={2}
            >
              {values.randomNumber.length > 0 ? (
                <>
                  {values.randomNumber.map((number, index) => (
                    <Output key={index} number={number} isLottery={values.isLottery} />
                  ))}
                  {values?.lotteryPower && (
                    <Output
                      number={values.lotteryPower}
                      isLottery={values.isLottery}
                      isLotteryPower={true}
                    />
                  )}
                </>
              ) : (
                <OutputMessage message="Nenhum número para mostrar." />
              )}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default NumberForm;
