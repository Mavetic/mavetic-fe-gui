import { createTheme } from "@mui/material/styles";

const themeBuilder = (customTheme: Parameters<typeof createTheme>[0]) =>
  createTheme(
    {
      palette: {
        mode: "light",
        primary: {
          main: "#2578e1",
        },
        secondary: {
          main: "#9c27b0",
        },
      },
    },
    customTheme as object,
  );

export default themeBuilder;
