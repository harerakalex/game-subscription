import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';

import Router from './src/navigation/Router';
import CustomStatusBar from './src/components/reusable/CustomStatusBar';
import store from './src/redux';
import { theme } from './src/theme';
import { SafeArea } from './src/components/SafeArea';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Router />
          <CustomStatusBar />
          <Toast />
        </SafeArea>
      </ThemeProvider>
    </Provider>
  );
}
