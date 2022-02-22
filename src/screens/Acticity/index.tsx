import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Games from '../../components/Game';
import Background from '../../components/reusable/Background';
import { Container } from './styles';
import { Text } from '../../components/reusable/styled';
import { RootState } from '../../redux';
import Loader from '../../components/reusable/Loader';
import { GetGamesAction } from '../../redux/actions/game';

const ActivityScreen: FC = () => {
  const dispatch = useDispatch();

  const { getGameLoading, games } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    GetGamesAction()(dispatch);
  }, []);

  if (getGameLoading) {
    return <Loader />;
  }

  return (
    <Background>
      <Container showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Text size={22} alignment="center" marginBottom={10}>
          Advertize your games
        </Text>
        <Games games={games} />
      </Container>
    </Background>
  );
};

export default ActivityScreen;
