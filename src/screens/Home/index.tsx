import React, { FC, useEffect } from 'react';

import { BottomConatiner, Container, HowItWorkContainer } from './styles';
import VideoPlayer from '../../components/VideoPlayer';
import BottomButtons from '../../components/BottomButtons';
import { Text } from '../../components/reusable/styled';
import Background from '../../components/reusable/Background';
import BasicDetails from '../../components/BasicDetails';

const HomeScreen: FC = () => {
  return (
    <Background>
      <>
        <Container>
          <BasicDetails />
          <HowItWorkContainer>
            <Text size={21} alignment="center" marginBottom={10}>
              How it works
            </Text>
            <VideoPlayer />
          </HowItWorkContainer>
        </Container>
        <BottomConatiner>
          <BottomButtons />
        </BottomConatiner>
      </>
    </Background>
  );
};

export default HomeScreen;
