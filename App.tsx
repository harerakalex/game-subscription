import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import Router from './src/navigation/Router';
import CustomStatusBar from './src/components/reusable/CustomStatusBar';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Router />
        <CustomStatusBar />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
