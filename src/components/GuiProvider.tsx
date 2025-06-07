import themeBuilder from "@/theme/themeBuilder";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider, type createTheme } from "@mui/material/styles";
// biome-ignore lint/style/useImportType: React need to render component
import * as React from "react";

const GuiProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Parameters<typeof createTheme>[0];
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
