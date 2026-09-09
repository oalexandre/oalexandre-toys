import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logos/oalexandre-logo.png";

const Logo = ({ size = 32 }) => (
  <Box
    component={Link}
    href="/"
    aria-label="oAlexandre Toys, página inicial"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1.25,
      textDecoration: "none",
      color: "text.primary",
    }}
  >
    <Image src={logo} alt="" width={size} height={size} priority style={{ objectFit: "contain" }} />
    <Typography
      component="span"
      sx={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}
    >
      oAlexandre{" "}
      <Box component="span" sx={{ color: "primary.main" }}>
        Toys
      </Box>
    </Typography>
  </Box>
);

export default Logo;
