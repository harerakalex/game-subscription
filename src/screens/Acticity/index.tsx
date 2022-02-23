import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Games from '../../components/Game';
import Background from '../../components/reusable/Background';
import { Container } from './styles';
import { Text } from '../../components/reusable/styled';
import { RootState } from '../../redux';
import Loader from '../../components/reusable/Loader';
import { GetGamesAction } from '../../redux/actions/game';
import { GetAdvertsAction } from '../../redux/actions/advert';

const ActivityScreen: FC = () => {
  const dispatch = useDispatch();

  const { getGameLoading, games, adverts, getAdvertsLoading, createAdvertLoading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    GetGamesAction()(dispatch);
    GetAdvertsAction()(dispatch);
  }, []);

  if (getGameLoading || getAdvertsLoading || createAdvertLoading) {
    return <Loader />;
  }

  if (createAdvertLoading) {
    console.log('Loadin', createAdvertLoading);
  }

  return (
    <Background>
      <Container showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Text size={22} alignment="center" marginBottom={10}>
          Advertize your games
        </Text>
        {games && adverts && <Games games={games} adverts={adverts} />}
      </Container>
    </Background>
  );
};

export default ActivityScreen;
