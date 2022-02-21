import React, { FC, useEffect } from 'react';

import { BottomConatiner, Container, HowItWorkContainer } from './styles';
import VideoPlayer from '../../components/VideoPlayer';
import BottomButtons from '../../components/BottomButtons';
import { Text } from '../../components/reusable/styled';
import Background from '../../components/reusable/Background';

const HomeScreen: FC = () => {
  return (
    <Background>
      <>
        <Container>
          <Text size={22} alignment="center" marginBottom={10}>
            Advertize Game
          </Text>
          <Text size={18} alignment="center" marginBottom={30}>
            Make profits from helping us advertize our games
          </Text>
          <HowItWorkContainer>
            <Text size={21} alignment="center" marginBottom={10} marginTop={10}>
              How it works
            </Text>
            <VideoPlayer />
          </HowItWorkContainer>
        </Container>
        <BottomConatiner>
          <BottomButtons buttons={['invite', 'deposit']} />
        </BottomConatiner>
      </>
    </Background>
  );
};

export default HomeScreen;
