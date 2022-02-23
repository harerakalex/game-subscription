import React, { FC, useEffect } from 'react';

import GameItem from './gameItem';
import { Container } from './styles';
import { IGame } from '../../redux/interfaces/game.interface';
import { IAdvert } from '../../redux/interfaces/advert.interface';

interface Props {
  games: IGame[];
  adverts: IAdvert[];
}
const Games: FC<Props> = ({ games, adverts }) => {
  return (
    <Container>
      {games.map(game => (
        <GameItem key={game.id} game={game} adverts={adverts} />
      ))}
    </Container>
  );
};

export default Games;
