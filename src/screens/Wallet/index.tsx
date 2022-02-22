import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BasicDetails from '../../components/BasicDetails';
import BottomButtons from '../../components/BottomButtons';
import Background from '../../components/reusable/Background';
import { Text } from '../../components/reusable/styled';
import { RootState } from '../../redux';
import { IUser } from '../../redux/interfaces/user.interface';
import { BottomConatiner, Container } from './styles';

const WalletScreen: FC = () => {
  const { user } = useSelector((state: RootState) => state.users);

  const depositOption = user?.subscription === 0 ? 'deposit' : 'upgrade';
  const withdrawOption = user?.balance === 0 ? '' : 'withdraw';
  return (
    <Background>
      <>
        <Container>
          <BasicDetails user={user as IUser} />
          <Text size={21} alignment="center" marginBottom={10}>
            Daily Earnings
          </Text>
          <Text>You advertized 3 games today</Text>
          <Text>Earnings: {'30 USD'}</Text>
        </Container>
        <BottomConatiner>
          <BottomButtons buttons={[depositOption, withdrawOption]} />
        </BottomConatiner>
      </>
    </Background>
  );
};

export default WalletScreen;
