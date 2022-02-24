import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Games from '../../components/Game';
import Background from '../../components/reusable/Background';
import { BottomConatiner, Container, NoSubscriptionContainer } from './styles';
import { Text } from '../../components/reusable/styled';
import { RootState } from '../../redux';
import Loader from '../../components/reusable/Loader';
import { GetGamesAction } from '../../redux/actions/game';
import { GetAdvertsAction } from '../../redux/actions/advert';
import BottomButtons from '../../components/BottomButtons';
import { theme } from '../../theme';

const ActivityScreen: FC = () => {
  const dispatch = useDispatch();

  const { user, getGameLoading, games, adverts, getAdvertsLoading, createAdvertLoading } =
    useSelector((state: RootState) => state.users);

  useEffect(() => {
    GetGamesAction()(dispatch);
    GetAdvertsAction()(dispatch);
  }, []);

  if (getGameLoading || getAdvertsLoading || createAdvertLoading) {
    return <Loader />;
  }

  if (user?.subscription === 0) {
    return (
      <Background>
        <>
          <NoSubscriptionContainer>
            <Text size={20} alignment="center" marginBottom={10}>
              You have no subscription, please deposit atleast
              <Text size={20} weight="500" textTransform="uppercase" color={theme.colors.active}>
                {' '}
                50 USD
              </Text>
              , to start making profit.
            </Text>
          </NoSubscriptionContainer>
          <BottomConatiner>
            <BottomButtons buttons={['deposit']} />
          </BottomConatiner>
        </>
      </Background>
    );
  }

  return (
    <Background>
      <Container showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Text size={22} alignment="center" marginTop={10} marginBottom={10}>
          Advertize your games
        </Text>
        {games && adverts && <Games games={games} adverts={adverts} />}
      </Container>
    </Background>
  );
};

export default ActivityScreen;
