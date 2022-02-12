import React, { FC, useEffect } from 'react';

import Packages from '../../components/Packages';
import Background from '../../components/reusable/Background';
import { Text } from '../../components/reusable/styled';
import { Container } from './styles';

const PackagesScreen: FC = () => {
  return (
    <Background>
      <Container>
        <Packages />
      </Container>
    </Background>
  );
};

export default PackagesScreen;
