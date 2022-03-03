import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BottomConatiner, Container, HowItWorkContainer, ImageView } from './styles';
import BottomButtons from '../../components/BottomButtons';
import { Text } from '../../components/reusable/styled';
import Background from '../../components/reusable/Background';
import { RootState } from '../../redux';
import { GetProfileAction } from '../../redux/actions/user';
import { decodeToken, getToken } from '../../utils';
import Loader from '../../components/reusable/Loader';
import { theme } from '../../theme';

const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const [loading = false, setLoading] = useState<boolean>();

  const { user, getProfileLoading } = useSelector((state: RootState) => state.users);

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

  const depositOption = user?.subscription === 0 ? 'deposit' : 'upgrade';

  return (
    <Background>
      <>
        <Container showsVerticalScrollIndicator={false}>
          <Text weight="500" size={22} alignment="center" marginTop={15} marginBottom={10}>
            Diver Adz
          </Text>
          <Text size={18} alignment="left" marginBottom={30} textTransform="none">
            Diver adz is an application cooperate with Activision blizzard which spreads ads of
            games via internet users. All you have to do is to buy a right/contract then start to
            advertise daily.
          </Text>

          <Text size={18} alignment="left" marginBottom={30} textTransform="none">
            Game is beyond pleasure it could be a treasure, By using our app you can easily gain a
            lot of money in terms of helping us to advertise our games. furthermore let your friends
            know this opportunity and gain some wage too.
          </Text>
          <Text
            style={{ fontStyle: 'italic' }}
            size={18}
            alignment="center"
            marginBottom={30}
            textTransform="none"
          >
            <Text size={20} color={theme.colors.active}>
              "
            </Text>
            💪Your work, 💰Your worth
            <Text size={20} color={theme.colors.active}>
              "
            </Text>
          </Text>
          <HowItWorkContainer>
            <Text size={21} alignment="center" marginBottom={10} marginTop={10}>
              Our Games
            </Text>
            <ImageView source={require('../../assets/images/home_1.jpeg')} />
            <ImageView source={require('../../assets/images/game_1.jpeg')} />
            <ImageView source={require('../../assets/images/home_2.jpeg')} />
            <ImageView source={require('../../assets/images/game_2.jpeg')} />
          </HowItWorkContainer>
        </Container>
        <BottomConatiner>
          <BottomButtons buttons={['invite', depositOption]} />
        </BottomConatiner>
      </>
    </Background>
  );
};

export default HomeScreen;
