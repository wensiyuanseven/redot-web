// @mui
import { createTheme } from '@mui/material/styles';

// @project
import palette from './palette';
import componentsOverride from './overrides';
import typography from './typography';

/*************************** CRM THEME - MAIN ***************************/

export default function ThemeCustomization(config) {
  const { mode, themeDirection } = config;

  const themePalette = palette(mode);

  let themeDefault = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1440
      }
    },
    direction: themeDirection,
    palette: themePalette
  });

  // create duplicate theme due to responsive typography and fontFamily
  let theme = createTheme({
    ...themeDefault,
    typography: typography(themeDefault)
  });

  theme.components = componentsOverride(theme);

  return theme;
}
