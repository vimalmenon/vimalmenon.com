import React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import { SsrWrapper } from '@common';
import { theme, createEmotionCache } from '@config';

const clientSideEmotionCache = createEmotionCache();

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
