import { createTheme } from "@mui/material/styles";
import type { Roboto } from "@next/font/google";

const defaultFontProps: Parameters<typeof Roboto>[0] = {
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
};

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

export { defaultFontProps };

export default themeBuilder;
