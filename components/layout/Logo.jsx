import { Box } from "@mui/material";
import Link from "next/link";

import { colors } from "../../theme";

/** Símbolo: bloco arredondado com um brilho de quatro pontas, o "toy" da marca. */
export const LogoMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect width="32" height="32" rx="9" fill={colors.accent} />
    <path
      d="M16 6c.9 5.2 4.8 9.1 10 10-5.2.9-9.1 4.8-10 10-.9-5.2-4.8-9.1-10-10 5.2-.9 9.1-4.8 10-10z"
      fill="#fff"
    />
  </svg>
);

const Logo = ({ size = 28, compact = false }) => (
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
      borderRadius: 2,
    }}
  >
    <LogoMark size={size} />
    {!compact && (
      <Box
        component="span"
        sx={{ fontWeight: 700, fontSize: "1.0625rem", letterSpacing: "-0.01em", lineHeight: 1 }}
      >
        oAlexandre{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          Toys
        </Box>
      </Box>
    )}
  </Box>
);

export default Logo;
