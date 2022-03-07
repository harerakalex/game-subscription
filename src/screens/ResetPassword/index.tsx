import React, { FC, useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/reusable/Button';
import InputBox from '../../components/reusable/InputBox';
import Link from '../../components/reusable/Link';
import { Text } from '../../components/reusable/styled';
import { theme } from '../../theme';
import { Container, KeyboardStyles } from './styles';
import CustomAlert from '../../components/CustomAlert';

const ResetPasswordScreen: FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any>('');

  const navigation = useNavigation<any>();

  const handleResetPwd = () => {
    if (!password) {
      return setErrorMsg('Passowrd is Required');
    }
    if (!confirmPassword) {
      return setErrorMsg('Confirming password is Required');
    }
    if (password !== confirmPassword) {
      return setErrorMsg('Password do not match!');
    }
  };

  return (
    <KeyboardAvoidingView behavior={'height'} enabled style={KeyboardStyles}>
      <Container>
        <Text alignment="center" color={theme.colors.dark} marginBottom={30}>
          Reset password
        </Text>
        {errorMsg ? <CustomAlert message={errorMsg} type="error" /> : null}
        <InputBox
          value={password}
          placeholder={'Password'}
          secureText={true}
          onChangeText={password => setPassword(password)}
        />
        <InputBox
          value={confirmPassword}
          placeholder={'Confirm Password'}
          secureText={true}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        />

        <Button label="Continue" pressHandler={handleResetPwd} isLoading={loading} />
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen;
