"use client";
import { type Theme, createTheme } from "@mui/material/styles";

const defaultFontProps = {
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
};

const theme = (customTheme: Theme) =>
  createTheme(customTheme, {
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#9c27b0",
      },
    },
  });

export { defaultFontProps };

export default theme;
