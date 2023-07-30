'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ReactChildren } from '@types';

import { Footer } from './Footer';
import { Header } from './Header';

const theme = createTheme({});

export const PageLayout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
};
