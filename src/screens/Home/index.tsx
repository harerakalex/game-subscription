import React, { FC, useEffect } from 'react';
import { StyleSheet, Platform } from 'react-native';

import { BalanceContainer, Container, Text } from './styles';
import { theme } from '../../theme';

const HomeScreen: FC = () => {
  return (
    <Container>
      <BalanceContainer
        style={Platform.OS == 'ios' ? styles.dropShadowIOS : styles.dropShadowAndroid}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>$29</Text>
      </BalanceContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  dropShadowIOS: {
    shadowColor: theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.55,
    shadowRadius: 7
  },
  dropShadowAndroid: {
    elevation: 20
  }
});

export default HomeScreen;
