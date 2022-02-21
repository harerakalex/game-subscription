import React, { FC, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Games from '../../components/Game';
import Background from '../../components/reusable/Background';
import { Container } from './styles';
import { Text } from '../../components/reusable/styled';

const ActivityScreen: FC = () => {
  return (
    <Background>
      <Container>
        <Text size={22} alignment="center" marginBottom={10}>
          Advertize your games
        </Text>
        <Games />
      </Container>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});

export default ActivityScreen;
