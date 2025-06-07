import theme from "@/theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import type { NextFontWithVariable } from "@next/font";
import type * as React from "react";

const GuiProvider = ({
  children,
  font,
}: {
  children: React.ReactNode;
  font: (options: object) => NextFontWithVariable;
}) => {
  return (
    <>
      <InitColorSchemeScript attribute="class" />
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme({ font })}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default GuiProvider;
