import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { type createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
// biome-ignore lint/style/useImportType: React needed to render component
import * as React from "react";
import themeBuilder from "@/theme/themeBuilder";

const GuiProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: Parameters<typeof createTheme>[0];
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
