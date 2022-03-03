import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BasicDetails from '../../components/BasicDetails';
import BottomButtons from '../../components/BottomButtons';
import Background from '../../components/reusable/Background';
import Loader from '../../components/reusable/Loader';
import { Text } from '../../components/reusable/styled';
import { RootState } from '../../redux';
import { GetAdvertsAction } from '../../redux/actions/advert';
import { IUser } from '../../redux/interfaces/user.interface';
import { theme } from '../../theme';
import { getGameIncome } from '../../utils';
import { BottomConatiner, Container, DailyHistoryConatiner } from './styles';

const WalletScreen: FC = () => {
  const { user, adverts, getAdvertsLoading } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    GetAdvertsAction()(dispatch);

    return () => controller.abort();
  }, []);

  if (getAdvertsLoading) {
    return <Loader />;
  }

  const depositOption = user?.subscription === 0 ? 'deposit' : 'upgrade';
  const withdrawOption = user?.balance === 0 ? '' : 'withdraw';
  const dailyIncome = getGameIncome(user?.subscription as number) * adverts.length;
  const gamesMsg = adverts.length === 1 ? 'game' : 'games';

  return (
    <Background>
      <>
        <Container>
          {user ? <BasicDetails user={user as IUser} /> : null}
          {adverts.length !== 0 ? (
            <DailyHistoryConatiner>
              <Text size={21} alignment="center" marginBottom={10}>
                Daily Earnings
              </Text>
              <Text textTransform="none">
                You have advertized{' '}
                <Text weight="bold" color={theme.colors.danger}>
                  {adverts.length}
                </Text>{' '}
                {gamesMsg} today
              </Text>
              <Text>
                Earnings:{' '}
                <Text size={21} weight="bold" color={theme.colors.danger}>
                  {dailyIncome}
                </Text>{' '}
                <Text textTransform="uppercase">USD</Text>
              </Text>
            </DailyHistoryConatiner>
          ) : (
            <>
              {user?.subscription && user?.subscription !== 0 ? (
                <Text alignment="center">
                  You have no advert today, do not miss your profit. Please go to activty and
                  advertize your games
                </Text>
              ) : null}
            </>
          )}
        </Container>
        <BottomConatiner>
          <BottomButtons buttons={[depositOption, withdrawOption]} />
        </BottomConatiner>
      </>
    </Background>
  );
};

export default WalletScreen;
