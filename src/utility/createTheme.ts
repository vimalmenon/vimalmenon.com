import { createTheme, Theme } from '@mui/material/styles';

export const generateTheme = (isDark: boolean): Theme =>
  createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
    },
  });
