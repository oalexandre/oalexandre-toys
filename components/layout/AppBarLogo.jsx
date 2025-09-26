import { Box, Typography } from "@mui/material";
import Image from "next/image";

import logo from "../../public/logos/oalexandre-logo.png";

const AppBarLogo = ({ logoSize, textSize, open }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          "@media (min-width:600px)": {
            ...(open && { display: "none" }),
          },
          "@media (max-width:599px)": {
            ...(open === true && { display: "none" }),
          },
        }}
      >
        <Box
          sx={{
            width: logoSize,
            height: logoSize,
          }}
        >
          <Image
            src={logo}
            alt="Logo oAlexandre Toys"
            width={logoSize}
            height={logoSize}
            style={{
              width: logoSize,
              height: logoSize,
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography
          fontFamily={`'Lato', sans-serif`}
          fontWeight={700}
          letterSpacing={2}
          sx={{
            paddingBottom: "5px",
            fontSize: textSize,
          }}
        >
          oAlexandre Toys
        </Typography>
      </Box>
    </>
  );
};

export default AppBarLogo;
