import React, { FC, useEffect } from 'react';

import { Text } from '../../components/reusable/styled';
import GameItem from './gameItem';
import { Container } from './styles';
import { IGame } from '../../redux/interfaces/game.interface';

interface Props {
  games: IGame[];
}
const Games: FC<Props> = ({ games }) => {
  return (
    <Container>
      {games.map(game => (
        <GameItem key={game.id} game={game} />
      ))}
    </Container>
  );
};

export default Games;
