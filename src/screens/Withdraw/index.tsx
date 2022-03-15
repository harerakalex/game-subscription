import React, { FC, useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CustomAlert from '../../components/CustomAlert';
import Background from '../../components/reusable/Background';
import Button from '../../components/reusable/Button';
import InputBox from '../../components/reusable/InputBox';
import { Text } from '../../components/reusable/styled';
import { Container, KeyboardStyles } from './styles';
import Loader from '../../components/reusable/Loader';
import { theme } from '../../theme';
import { RootState } from '../../redux';
import { WithdrawAction } from '../../redux/actions/withdraw';

const WithdrawScreen: FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [error, setError] = useState<any>();
  const [isWithdrown, setIsWithdrown] = useState(false);

  const dispatch = useDispatch();

  const { user, withdrawLoading, withdrawError, withdraw } = useSelector(
    (state: RootState) => state.users
  );

  //   useEffect(() => {
  //     if (isWithdrown && withdraw) console.log('====', withdraw);
  //   }, [withdraw?.id, isWithdrown]);

  const handleWithdraw = () => {
    if (!amount) {
      setError({ message: 'Please provide amount to withdraw' });
      return;
    }

    if (parseFloat(amount) < 20) {
      setError({ message: 'Minimum amount should be 20 USD' });
      return;
    }

    if (!walletAddress) {
      setError({ message: 'Please provide your wallet address' });
      return;
    }

    if (user) {
      const userBalance = user.balance as number;
      if (amount && parseFloat(amount) > userBalance) {
        setError({ message: 'Insufficient funds' });
        return;
      }
    }

    WithdrawAction(parseFloat(amount), walletAddress)(dispatch);
  };

  if (withdrawLoading) {
    return <Loader />;
  }

  return (
    <Background>
      <KeyboardAvoidingView behavior={'height'} enabled style={KeyboardStyles}>
        <Container>
          <Text alignment="center" size={20} marginBottom={30} marginTop={30}>
            Withdraw is done in 2 hours from the time initiated.
          </Text>

          {error ? <CustomAlert message={error.message || withdrawError} type="error" /> : null}

          <InputBox
            keyboardType="numeric"
            value={amount}
            onChangeText={value => setAmount(value)}
            placeholder="Amount in USD"
          />

          <InputBox
            keyboardType="default"
            value={walletAddress}
            onChangeText={value => setWalletAddress(value.trim())}
            placeholder="Wallet Address"
          />

          <Button
            label="Withdraw"
            pressHandler={handleWithdraw}
            bgColor={'blue'}
            marginTop="30px"
          />
        </Container>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default WithdrawScreen;
