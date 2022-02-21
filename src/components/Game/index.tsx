import React, { FC, useEffect } from 'react';

import { Text } from '../../components/reusable/styled';
import GameItem from './gameItem';
import { Container } from './styles';

const Games: FC = () => {
  return (
    <Container>
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
    </Container>
  );
};

export default Games;
