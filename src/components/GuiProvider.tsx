"use client";
import themeBuilder from "@/theme/themeBuilder";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { type Theme, ThemeProvider } from "@mui/material/styles";
import type * as React from "react";

const GuiProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => {
  return (
    <>
      <InitColorSchemeScript attribute="class" />
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={themeBuilder(theme)}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default GuiProvider;
