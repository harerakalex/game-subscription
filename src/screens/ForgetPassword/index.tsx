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

const ForgetPasswordScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<any>('');

  const navigation = useNavigation<any>();

  const handleSendTempPwd = () => {
    if (!email) {
      return setErrorMsg('Email is Required');
    }
  };

  return (
    <KeyboardAvoidingView behavior={'height'} enabled style={KeyboardStyles}>
      <Container>
        <Text alignment="left" color={theme.colors.dark} marginBottom={30}>
          A temporary password may only be used once and you must change it after you login
        </Text>
        {errorMsg ? <CustomAlert message={errorMsg} type="error" /> : null}
        <InputBox
          value={email}
          placeholder={'Email'}
          onChangeText={email => setEmail(email.trim())}
          keyboardType="email-address"
          autoComplete="email"
        />

        <Button label="Continue" pressHandler={handleSendTempPwd} isLoading={loading} />

        <Link
          marginTop="20px"
          size={18}
          label="Go Back To Login"
          pressHandler={() => navigation.navigate('Login')}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ForgetPasswordScreen;
