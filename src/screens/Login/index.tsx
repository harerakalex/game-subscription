import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../theme';
import InputBox from '../../components/reusable/InputBox';
import Button from '../../components/reusable/Button';

const { height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading = false, setLoading] = useState<boolean>();

  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === 'hareraloston@gmail.com' || email === 'carlos') {
        if (password === 'butare') {
          navigation.replace('Tabs');
        }
      }
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.titleDescription}>Login into your account</Text>
      </View>
      <View>
        <View style={styles.contentWrapper}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <InputBox
              value={email}
              placeholder={'Email'}
              onChangeText={email => setEmail(email)}
              keyboardType="email-address"
              autoComplete="email"
            />
            <InputBox
              value={password}
              placeholder={'Password'}
              secureText={true}
              onChangeText={password => setPassword(password)}
            />
            <Button label="Login" pressHandler={handleLogin} width="100%" isLoading={loading} />
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  title: {
    color: theme.colors.primary,
    fontSize: 30,
    textAlign: 'center'
  },
  titleDescription: {
    color: theme.colors.primary,
    fontSize: 15,
    textAlign: 'center'
  },
  contentWrapper: {
    marginTop: (height * 5) / 100,
    paddingLeft: (height * 2) / 100,
    paddingRight: (height * 2) / 100
  }
});

export default LoginScreen;
