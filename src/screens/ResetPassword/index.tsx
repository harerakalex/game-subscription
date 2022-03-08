import React, { FC, useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/reusable/Button';
import InputBox from '../../components/reusable/InputBox';
import { Text } from '../../components/reusable/styled';
import { theme } from '../../theme';
import { Container, KeyboardStyles } from './styles';
import CustomAlert from '../../components/CustomAlert';
import { EToastType, putRequest, toast } from '../../utils';

const ResetPasswordScreen: FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any>('');

  const navigation = useNavigation<any>();

  const handleResetPwd = async () => {
    if (!password) {
      return setErrorMsg('Passowrd is Required');
    }
    if (!confirmPassword) {
      return setErrorMsg('Confirming password is Required');
    }
    if (password !== confirmPassword) {
      return setErrorMsg('Password do not match!');
    }

    try {
      setLoading(true);
      await putRequest('/users/reset-password', { password });
      setLoading(false);

      toast(EToastType.SUCCESS, 'Password Reset', `Password reset successfully`);

      navigation.goBack();
    } catch (err) {
      const error = Array.isArray(err) ? err[0] : err;
      const { response } = error;

      setErrorMsg(response ? response.data.message || response.data.error : 'Please try again');
      setLoading(false);
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
