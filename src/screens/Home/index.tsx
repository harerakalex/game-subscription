import React, { FC, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});

export default HomeScreen;
