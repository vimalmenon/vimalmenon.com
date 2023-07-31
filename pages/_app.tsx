import React from 'react';

import createCache from '@emotion/cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

export const clientSideEmotionCache = createCache({
  key: 'css',
});

const MyApp: React.FC<AppProps & { emotionCache: EmotionCache }> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <React.StrictMode>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </React.StrictMode>
  );
};

export default MyApp;
