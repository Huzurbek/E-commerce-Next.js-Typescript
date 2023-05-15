import { useMemo, ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";
import breakpoints from "./breakpoints";

type Props = {
  children: ReactNode;
};
const preset = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: "#2065D1",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};
export default function ThemeProvider({ children }: Props) {
  const isLight = true;
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight
        ? { ...palette.light, primary: preset }
        : { ...palette.dark, primary: preset },
      typography,
      breakpoints,
      direction: "ltr",
      shadows: isLight
        ? { ...shadows.light, primary: preset }
        : { ...shadows.dark, primary: preset },
      customShadows: isLight
        ? { ...customShadows.light, primary: preset }
        : { ...customShadows.dark, primary: preset },
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
