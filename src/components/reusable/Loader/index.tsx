import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { theme } from '../../../theme';

interface Props {
  size?: number | 'small' | 'large';
}

const Loader: FC<Props> = ({ size }) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={size || 'large'} color={theme.colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.white
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default Loader;
