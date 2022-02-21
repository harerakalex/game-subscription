import React, { FC, useEffect } from 'react';
import BasicDetails from '../../components/BasicDetails';
import BottomButtons from '../../components/BottomButtons';
import Background from '../../components/reusable/Background';
import { Text } from '../../components/reusable/styled';
import { BottomConatiner, Container } from './styles';

const WalletScreen: FC = () => {
  return (
    <Background>
      <>
        <Container>
          <BasicDetails />
          <Text size={21} alignment="center" marginBottom={10}>
            Daily Earnings
          </Text>
          <Text>You advertized 3 games today</Text>
          <Text>Earnings: {'30 USD'}</Text>
        </Container>
        <BottomConatiner>
          <BottomButtons buttons={['upgrade', 'withdraw']} />
        </BottomConatiner>
      </>
    </Background>
  );
};

export default WalletScreen;
