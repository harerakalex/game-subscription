import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../theme';
import InputBox from '../../components/reusable/InputBox';
import Button from '../../components/reusable/Button';
import Link from '../../components/reusable/Link';

const { height } = Dimensions.get('window');

const SignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading = false, setLoading] = useState<boolean>();

  const navigation = useNavigation<any>();

  const handleSignup = async () => {
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
      <View style={styles.mainWrapper}>
        <View>
          <Text style={styles.title}>Welcome onboard!</Text>
          <Text style={styles.titleDescription}>
            Make profits from helping us advertize our games
          </Text>
        </View>
        <View>
          <View style={styles.contentWrapper}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <InputBox
                value={fullName}
                placeholder={'Full name'}
                onChangeText={fullName => setFullName(fullName)}
                autoComplete="name"
              />
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
              <InputBox
                value={confirmPassword}
                placeholder={'Confirm Password'}
                secureText={true}
                onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
              />
              <View style={styles.forgetPWDContainer}>
                <Link
                  label="Forget password?"
                  pressHandler={() => console.log('Forget Passowrd')}
                />
              </View>
              <Button label="Register" pressHandler={handleSignup} isLoading={loading} />
              <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Already have an account? </Text>
                <Link label="Login" pressHandler={() => navigation.navigate('Login')} />
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    </View>
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
  }
});

export default SignupScreen;
