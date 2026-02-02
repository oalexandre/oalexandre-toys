import KeyIcon from "@mui/icons-material/Key";
import { Button, Typography } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import PasswordContainer from "../../../features/PasswordGenerator/PasswordContainer";
import PasswordOptions from "../../../features/PasswordGenerator/PasswordOptions";
import PasswordOutput from "../../../features/PasswordGenerator/PasswordOutput";
import SliderInput from "../../../features/PasswordGenerator/SliderInput";
import { usePasswordGeneratorFormControls } from "../../../features/PasswordGenerator/usePasswordGeneratorFormControls";

const PasswordGenerator = () => {
  const { values, handleChange, handleSlider, handleClick, handleShowPassword } =
    usePasswordGeneratorFormControls();

  return (
    <>
      <SEO
        description=" Crie senhas fortes"
        title="Gerador de Senhas"
        url="/seguranca/password"
        imageUrl="/password-generator.png"
      />

      <PageTitle>Gerador de Senhas</PageTitle>

      <Typography paragraph mb={5}>
        Crie senhas fortes
      </Typography>

      <PasswordContainer
        top={
          <>
            <PasswordOutput
              password={values.password}
              showPassword={values.showPassword}
              handleShowPassword={handleShowPassword}
            />

            <SliderInput slider={values.slider} handleSlider={handleSlider} />
          </>
        }
        center={<PasswordOptions values={values} handleChange={handleChange} />}
        bottom={
          <Button
            fullWidth
            variant="contained"
            onClick={handleClick}
            endIcon={<KeyIcon />}
            sx={{ fontSize: 16 }}
          >
            Gerar
          </Button>
        }
      />
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default PasswordGenerator;
