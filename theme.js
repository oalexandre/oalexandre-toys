import { createTheme } from "@mui/material/styles";

/**
 * Sistema visual do oAlexandre Toys.
 * Uma família (Onest), um acento (violeta), raio único, controles de 48px.
 * Referência de acabamento: Stripe Docs, 1Password, Nubank.
 */

export const fontFamily =
  'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const monoFontFamily =
  'var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';

export const colors = {
  canvas: "#f6f7f9",
  surface: "#ffffff",
  surfaceSunken: "#f1f2f6",
  line: "#e4e7ec",
  lineStrong: "#d3d7df",
  ink: "#15171d",
  inkSecondary: "#5f6675",
  inkMuted: "#8a90a0",
  accent: "#5b2fd1",
  accentHover: "#4a25ad",
  accentActive: "#3c1d8f",
  accentTint: "#efeafc",
  accentTintStrong: "#e2d9fa",
  success: "#1a7f4b",
  successTint: "#e6f4ec",
  error: "#c8322b",
  errorTint: "#fbeaea",
  warning: "#b45309",
  warningTint: "#fdf1e3",
  info: "#2757a8",
  infoTint: "#e8effa",
  // Tinta de texto sobre os fundos tingidos dos alertas (contraste AA).
  successInk: "#0f5a34",
  errorInk: "#8f231e",
  warningInk: "#7c3a06",
  infoInk: "#1d4079",
  successTintHover: "#d5ebdd",
};

const radius = { control: 10, panel: 14 };

const base = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.accent,
      dark: colors.accentHover,
      light: colors.accentTintStrong,
      contrastText: "#fff",
    },
    secondary: { main: colors.info },
    success: { main: colors.success, light: colors.successTint, contrastText: "#fff" },
    error: { main: colors.error, light: colors.errorTint, contrastText: "#fff" },
    warning: { main: colors.warning, light: colors.warningTint, contrastText: "#fff" },
    info: { main: colors.info, light: colors.infoTint, contrastText: "#fff" },
    background: { default: colors.canvas, paper: colors.surface },
    text: { primary: colors.ink, secondary: colors.inkSecondary, disabled: colors.inkMuted },
    divider: colors.line,
    action: {
      hover: "rgba(21, 23, 29, 0.04)",
      selected: colors.accentTint,
      focus: colors.accentTint,
      disabledBackground: colors.surfaceSunken,
      disabled: colors.inkMuted,
    },
  },
  // Unidade de raio no sx: borderRadius: 2 = 8px, 3 = 12px. Controles e painéis fixam 10 e 14.
  shape: { borderRadius: 4 },
  typography: {
    fontFamily,
    fontSize: 15,
    h1: { fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 },
    h2: { fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.3 },
    h3: { fontSize: "1.25rem", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.35 },
    h4: { fontSize: "1.0625rem", fontWeight: 600, lineHeight: 1.4 },
    subtitle1: { fontSize: "1.0625rem", lineHeight: 1.6 },
    subtitle2: { fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.5 },
    body1: { fontSize: "1.0625rem", lineHeight: 1.65 },
    body2: { fontSize: "0.9375rem", lineHeight: 1.6 },
    caption: { fontSize: "0.8125rem", lineHeight: 1.5, color: colors.inkSecondary },
    button: { textTransform: "none", fontWeight: 600, fontSize: "0.9375rem", letterSpacing: 0 },
  },
});

const focusRing = {
  outline: "none",
  borderColor: colors.accent,
  boxShadow: `0 0 0 3px ${colors.accentTintStrong}`,
};

const theme = createTheme(base, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: {
          backgroundColor: colors.canvas,
          color: colors.ink,
          caretColor: colors.accent,
          accentColor: colors.accent,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "::selection": { backgroundColor: colors.accentTintStrong, color: colors.ink },
        "*:focus-visible": {
          outline: `2px solid ${colors.accent}`,
          outlineOffset: 2,
          boxShadow: `0 0 0 5px ${colors.accentTintStrong}`,
          borderRadius: 6,
        },
        "*": { scrollbarWidth: "thin", scrollbarColor: `${colors.lineStrong} transparent` },
        "*::-webkit-scrollbar": { width: 10, height: 10 },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: colors.lineStrong,
          borderRadius: 10,
          border: "2px solid transparent",
          backgroundClip: "padding-box",
        },
        a: { textUnderlineOffset: "0.15em", textDecorationThickness: "1px" },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            transitionDuration: "0.01ms !important",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // MUI zera o outline; o anel de foco volta aqui, para todo controle.
          "&.Mui-focusVisible, &:focus-visible": {
            outline: `2px solid ${colors.accent}`,
            outlineOffset: 2,
            boxShadow: `0 0 0 5px ${colors.accentTintStrong}`,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true, disableFocusRipple: true },
      styleOverrides: {
        root: {
          borderRadius: radius.control,
          paddingInline: 18,
          minHeight: 44,
          "&.Mui-focusVisible": { boxShadow: `0 0 0 5px ${colors.accentTintStrong}` },
          transition: "background-color 150ms, color 150ms, box-shadow 150ms, transform 150ms",
          "&:active": { transform: "translateY(1px)" },
        },
        sizeLarge: { minHeight: 48, paddingInline: 22 },
        sizeSmall: { minHeight: 36, paddingInline: 14, fontSize: "0.875rem" },
        containedPrimary: {
          "&:hover": { backgroundColor: colors.accentHover },
          "&:active": { backgroundColor: colors.accentActive },
        },
        containedSuccess: { color: "#fff" },
        // "outlined" vira botão tonal: fundo tingido, sem borda dura.
        outlined: { borderWidth: 0, "&:hover": { borderWidth: 0 } },
        outlinedPrimary: {
          backgroundColor: colors.accentTint,
          color: colors.accent,
          "&:hover": { backgroundColor: colors.accentTintStrong },
          "&.Mui-disabled": { backgroundColor: colors.surfaceSunken },
        },
        outlinedSuccess: {
          backgroundColor: colors.successTint,
          color: colors.success,
          "&:hover": { backgroundColor: colors.successTintHover },
        },
        outlinedInherit: {
          backgroundColor: colors.surfaceSunken,
          "&:hover": { backgroundColor: colors.line },
        },
        text: { paddingInline: 12 },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { borderRadius: radius.control, transition: "background-color 150ms, color 150ms" },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: `1px solid ${colors.line}`,
          borderRadius: radius.panel,
          backgroundImage: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          boxShadow: "0 12px 32px -8px rgba(21,23,29,0.18), 0 2px 6px rgba(21,23,29,0.06)",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: { boxShadow: "0 12px 32px -8px rgba(21,23,29,0.18), 0 2px 6px rgba(21,23,29,0.06)" },
      },
    },
    MuiDrawer: {
      styleOverrides: { paper: { border: 0, borderRadius: 0 } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surface,
          borderRadius: radius.control,
          minHeight: 48,
          transition: "box-shadow 150ms, border-color 150ms",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.lineStrong,
            borderWidth: 1.5,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: colors.inkMuted },
          "&.Mui-focused": { boxShadow: focusRing.boxShadow },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.accent,
            borderWidth: 1.5,
          },
          "&.Mui-error.Mui-focused": { boxShadow: `0 0 0 3px ${colors.errorTint}` },
        },
        input: { paddingBlock: 12.5 },
        inputSizeSmall: { paddingBlock: 8.5 },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: colors.inkSecondary, "&.Mui-focused": { color: colors.accent } },
      },
    },
    MuiFormHelperText: {
      styleOverrides: { root: { marginLeft: 2, fontSize: "0.8125rem" } },
    },
    MuiFormControlLabel: {
      styleOverrides: { label: { fontSize: "0.9375rem" } },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: { color: colors.inkMuted, "&.Mui-checked": { color: colors.accent } },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: { padding: 8 },
        track: { borderRadius: 11, backgroundColor: colors.lineStrong, opacity: 1 },
        thumb: { boxShadow: "0 1px 2px rgba(21,23,29,0.2)" },
        switchBase: {
          "&.Mui-checked + .MuiSwitch-track": { backgroundColor: colors.accent, opacity: 1 },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: { height: 6 },
        rail: { backgroundColor: colors.lineStrong, opacity: 1 },
        thumb: {
          width: 22,
          height: 22,
          backgroundColor: colors.surface,
          border: `2px solid ${colors.accent}`,
          boxShadow: "0 1px 3px rgba(21,23,29,0.15)",
          "&:hover, &.Mui-focusVisible": { boxShadow: `0 0 0 6px ${colors.accentTint}` },
        },
        markLabel: { fontSize: "0.8125rem", color: colors.inkSecondary },
        valueLabel: { borderRadius: 8, backgroundColor: colors.ink },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surfaceSunken,
          padding: 4,
          borderRadius: radius.control,
          gap: 4,
        },
        grouped: {
          border: 0,
          borderRadius: `${radius.control - 4}px !important`,
          "&:not(:first-of-type), &:first-of-type": { borderRadius: radius.control - 4, margin: 0 },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.9375rem",
          color: colors.inkSecondary,
          paddingInline: 16,
          minHeight: 40,
          transition: "background-color 150ms, color 150ms, box-shadow 150ms",
          "&.Mui-selected": {
            backgroundColor: colors.surface,
            color: colors.ink,
            boxShadow: `inset 0 0 0 1px ${colors.line}`,
            "&:hover": { backgroundColor: colors.surface },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: 8 },
        colorDefault: { backgroundColor: colors.surfaceSunken },
        outlined: { borderColor: colors.lineStrong },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: radius.control, alignItems: "flex-start", fontSize: "0.9375rem" },
        standardSuccess: { backgroundColor: colors.successTint, color: colors.successInk },
        standardError: { backgroundColor: colors.errorTint, color: colors.errorInk },
        standardWarning: { backgroundColor: colors.warningTint, color: colors.warningInk },
        standardInfo: { backgroundColor: colors.infoTint, color: colors.infoInk },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "0.8125rem",
          backgroundColor: colors.ink,
          borderRadius: 8,
          paddingInline: 10,
        },
        arrow: { color: colors.ink },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottomColor: colors.line, fontSize: "0.9375rem", paddingBlock: 12 },
        head: {
          fontWeight: 700,
          color: colors.inkSecondary,
          fontSize: "0.8125rem",
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          backgroundColor: colors.surfaceSunken,
        },
      },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0, square: true },
      styleOverrides: {
        root: { border: 0, "&::before": { display: "none" }, backgroundColor: "transparent" },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: { minHeight: 56, paddingInline: 20, "&.Mui-expanded": { minHeight: 56 } },
        content: { marginBlock: 14, "&.Mui-expanded": { marginBlock: 14 } },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: { separator: { color: colors.inkMuted, marginInline: 6 } },
    },
    MuiLink: { defaultProps: { underline: "hover" } },
    MuiSkeleton: { styleOverrides: { root: { backgroundColor: colors.surfaceSunken } } },
  },
});

export default theme;
