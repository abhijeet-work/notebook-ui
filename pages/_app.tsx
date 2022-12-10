import * as React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CacheProvider, EmotionCache, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../styles/globals.css';
import { store } from '../store';
import createEmotionCache from '../utils/createEmotionCache';
import { lightTheme, emotionLightTheme } from '../styles/theme/lightTheme';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <EmotionThemeProvider theme={emotionLightTheme}>
            <Component {...pageProps} />
          </EmotionThemeProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;