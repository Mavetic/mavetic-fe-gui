"use client";
import { createTheme } from "@mui/material/styles";
import type { NextFontWithVariable } from "@next/font";

const setUpFont = (
  font: (options: object) => NextFontWithVariable,
): NextFontWithVariable =>
  font({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
  });

// Create a theme instance
const theme = ({ font }: { font: (options: object) => NextFontWithVariable }) =>
  createTheme({
    typography: {
      fontFamily: setUpFont(font).style.fontFamily,
    },
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

export default theme;
