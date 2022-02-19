import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';

import Router from './src/navigation/Router';
import CustomStatusBar from './src/components/reusable/CustomStatusBar';
import store from './src/redux';
import { theme } from './src/theme';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <Router />
          <CustomStatusBar />
          <Toast />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
