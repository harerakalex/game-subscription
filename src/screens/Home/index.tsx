import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BottomConatiner, Container, HowItWorkContainer } from './styles';
import VideoPlayer from '../../components/VideoPlayer';
import BottomButtons from '../../components/BottomButtons';
import { Text } from '../../components/reusable/styled';
import Background from '../../components/reusable/Background';
import { RootState } from '../../redux';
import { GetProfileAction } from '../../redux/actions/user';
import { decodeToken, getToken } from '../../utils';
import Loader from '../../components/reusable/Loader';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const [loading = false, setLoading] = useState<boolean>();

  const { user, getProfileLoading, getProfileError } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (!user) {
      (async () => {
        setLoading(true);
        const token = await getToken();
        if (token) {
          const data = decodeToken(token as string);
          setLoading(false);
          GetProfileAction(data.username)(dispatch);
        }
      })();
    }
  }, [user]);

  if (getProfileLoading || loading) {
    return <Loader />;
  }

  return (
    <Background>
      <>
        <Container>
          <Text size={22} alignment="center" marginBottom={10}>
            Advertize Game
          </Text>
          <Text size={18} alignment="center" marginBottom={30}>
            Make profits from helping us advertize our games
          </Text>
          <HowItWorkContainer>
            <Text size={21} alignment="center" marginBottom={10} marginTop={10}>
              How it works
            </Text>
            <VideoPlayer />
          </HowItWorkContainer>
        </Container>
        <BottomConatiner>
          <BottomButtons buttons={['invite', 'deposit']} />
        </BottomConatiner>
      </>
    </Background>
  );
};

export default HomeScreen;
