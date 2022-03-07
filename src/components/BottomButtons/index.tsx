import React, { FC, Fragment, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Share } from 'react-native';

import { theme } from '../../theme';
import Button from '../reusable/Button';
import { Container, Line } from './styles';

interface Props {
  buttons?: string[]; // invite, deposit, upgrade, withdraw
}

const BottomButtons: FC<Props> = props => {
  const { buttons } = props;

  const navigation = useNavigation<any>();

  const onShare = async () => {
    try {
      await Share.share({
        message: 'https://github.com/harerakalex/game-subscription'
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <Line />
      <Container>
        {buttons?.map(button => (
          <Fragment key={button}>
            {button == 'invite' && (
              <Button
                label="Invite"
                pressHandler={onShare}
                width="50%"
                bgColor={theme.colors.inactive}
              />
            )}

            {button == 'deposit' && (
              <Button
                label="Deposit"
                pressHandler={() => navigation.navigate('Payment')}
                width="50%"
                bgColor={'blue'}
              />
            )}

            {button == 'upgrade' && (
              <Button
                label="upgrade"
                pressHandler={() => navigation.navigate('Payment')}
                width="50%"
                bgColor={'blue'}
              />
            )}

            {button == 'withdraw' && (
              <Button
                label="withdraw"
                pressHandler={() => navigation.navigate('Withdraw')}
                width="50%"
                bgColor={theme.colors.gray}
              />
            )}
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export default BottomButtons;
