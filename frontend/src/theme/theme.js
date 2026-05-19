import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#020617",
      paper: "#0f172a",
    },
    primary: {
      main: "#38bdf8",
    },
    secondary: {
      main: "#22c55e",
    },
    text: {
      primary: "#e5e7eb",
      secondary: "#94a3b8",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: ["Inter", "system-ui", "Arial", "sans-serif"].join(","),
  },
});