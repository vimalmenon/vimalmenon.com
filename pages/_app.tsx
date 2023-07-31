import React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import NoSsr from '@mui/base/NoSsr';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import { theme, createEmotionCache } from '@config';
import { ReactChildren } from '@types';

const clientSideEmotionCache = createEmotionCache();

const SsrWrapper: React.FC<ReactChildren> = ({ children }) => {
  if (process.env.NODE_ENV === 'development') {
    return <NoSsr>{children}</NoSsr>;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};

console.log(process.env.NODE_ENV);

const MyApp: React.FC<AppProps & { emotionCache: EmotionCache }> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <React.StrictMode>
      <SsrWrapper>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </SsrWrapper>
    </React.StrictMode>
  );
};

export default MyApp;
