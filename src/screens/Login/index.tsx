import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { theme } from '../../theme';
import InputBox from '../../components/reusable/InputBox';
import Button from '../../components/reusable/Button';
import Link from '../../components/reusable/Link';
import { RootState } from '../../redux';
import { LoginAction } from '../../redux/actions/login';
import { EToastType, getToken, storeToken, toast } from '../../utils';
import Loader from '../../components/reusable/Loader';
import CustomAlert from '../../components/CustomAlert';

const { height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading = false, setLoading] = useState<boolean>();

  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const { user, loginLoading, errorLogin } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const token = await getToken();
      setLoading(false);
      if (token) return navigation.replace('Tabs');
    })();
  }, []);

  useEffect(() => {
    if (user) {
      const { token } = user;

      (async () => {
        if (token) await storeToken(token);
      })();

      // return navigation.replace('Drawers', { screen: 'HomeScreen' });
      return navigation.replace('Tabs');
    }
  }, [user]);

  const handleLogin = async () => {
    const taostTitle = 'Bad Request';
    if (!email) {
      return toast(EToastType.ERROR, taostTitle, 'Email is Required');
    }

    if (!password) {
      return toast(EToastType.ERROR, taostTitle, 'Password is required');
    }

    LoginAction({ email, password })(dispatch);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <KeyboardAvoidingView behavior={'height'} enabled style={styles.KeyboardStyles}>
      <View style={styles.container}>
        <View style={styles.mainWrapper}>
          <View>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.titleDescription}>Login into your account</Text>
          </View>
          <View>
            <View style={styles.contentWrapper}>
              {errorLogin && <CustomAlert message={errorLogin} type="error" />}
              <InputBox
                value={email}
                placeholder={'Email'}
                onChangeText={email => setEmail(email.trim())}
                keyboardType="email-address"
                autoComplete="email"
              />
              <InputBox
                value={password}
                placeholder={'Password'}
                secureText={true}
                onChangeText={password => setPassword(password)}
              />
              <View style={styles.forgetPWDContainer}>
                <Link
                  label="Forget password?"
                  pressHandler={() => console.log('Forget Passowrd')}
                />
              </View>
              <Button label="Login" pressHandler={handleLogin} isLoading={loginLoading} />
              <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Don't have an account? </Text>
                <Link label="Sign Up" pressHandler={() => navigation.navigate('Signup')} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainWrapper: {
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
  },
  forgetPWDContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 20
  },
  noAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    width: '100%',
    marginTop: 25
  },
  noAccountText: {
    // width: '70%',
  },
  KeyboardStyles: {
    flex: 1
  }
});

export default LoginScreen;
