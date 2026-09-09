import { createTheme } from "@mui/material/styles";

const fontFamily =
  'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const monoFontFamily =
  'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';

const base = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2f5bea", dark: "#2447c4", light: "#5f83f2", contrastText: "#fff" },
    secondary: { main: "#0f766e" },
    success: { main: "#15803d" },
    error: { main: "#b91c1c" },
    warning: { main: "#b45309" },
    background: { default: "#f7f8fa", paper: "#ffffff" },
    text: { primary: "#16181d", secondary: "#5c6370" },
    divider: "#e3e6eb",
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily,
    h1: { fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 },
    h2: { fontSize: "1.375rem", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.3 },
    h3: { fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.4 },
    h4: { fontSize: "1rem", fontWeight: 600 },
    subtitle1: { fontSize: "1.0625rem", lineHeight: 1.6 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.9rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});

const theme = createTheme(base, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: base.palette.background.default },
        "::selection": { backgroundColor: "#dbe4ff" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, paddingInline: 18 },
        sizeLarge: { paddingBlock: 10 },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { border: `1px solid ${base.palette.divider}` },
      },
    },
    MuiCard: {
      styleOverrides: { root: { border: `1px solid ${base.palette.divider}` } },
    },
    MuiTextField: { defaultProps: { size: "medium" } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { backgroundColor: "#fff", borderRadius: 8 },
        notchedOutline: { borderColor: base.palette.divider },
      },
    },
    MuiAlert: {
      styleOverrides: { root: { borderRadius: 8 } },
    },
    MuiTooltip: {
      styleOverrides: { tooltip: { fontSize: "0.8rem" } },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
    },
  },
});

export default theme;
