import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { theme } from '../../theme';
import InputBox from '../../components/reusable/InputBox';
import Button from '../../components/reusable/Button';
import Link from '../../components/reusable/Link';
import { RootState } from '../../redux';
import { EToastType, toast } from '../../utils';
import { LOGOUT_SUCCESS } from '../../redux/action-types/logout';
import { RegisterAction } from '../../redux/actions/register';
import CustomAlert from '../../components/CustomAlert';
import { KeyboardStyles } from './styles';

const { height } = Dimensions.get('window');

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referral, setReferral] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const { user, errorRegister, registerLoading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (user) {
      toast(EToastType.SUCCESS, 'Message', 'You have been successfull registered, Please login');

      // Clean  the store
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: { defaultValue: undefined }
      });

      return navigation.replace('Login');
    }

    if (errorRegister) {
      toast(EToastType.ERROR, 'Bad request', errorRegister);
    }
  }, [user]);

  const handleSignup = async () => {
    const taostTitle = 'Bad Request';

    if (!firstName) {
      return toast(EToastType.ERROR, taostTitle, 'First name is Required');
    }

    if (!lastName) {
      return toast(EToastType.ERROR, taostTitle, 'Last name is required');
    }

    if (!email) {
      return toast(EToastType.ERROR, taostTitle, 'Email is Required');
    }

    if (!password) {
      return toast(EToastType.ERROR, taostTitle, 'Password is required');
    }

    if (!confirmPassword) {
      return toast(EToastType.ERROR, taostTitle, 'Confirming password is Required');
    }

    if (password !== confirmPassword) {
      return toast(EToastType.ERROR, taostTitle, 'Password do not match!');
    }

    RegisterAction({ firstName, lastName, email, password })(dispatch);
  };

  return (
    <KeyboardAvoidingView behavior={'height'} enabled style={KeyboardStyles}>
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
              {errorRegister ? <CustomAlert message={errorRegister} type="error" /> : null}

              <InputBox
                value={firstName}
                placeholder={'First name'}
                onChangeText={firstName => setFirstName(firstName.trim())}
                autoComplete="name"
              />
              <InputBox
                value={lastName}
                placeholder={'Last name'}
                onChangeText={lastName => setLastName(lastName.trim())}
                autoComplete="name"
              />
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
              <InputBox
                value={confirmPassword}
                placeholder={'Confirm Password'}
                secureText={true}
                onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
              />
              <InputBox
                value={referral}
                placeholder={'Referal Code'}
                secureText={true}
                onChangeText={referral => setReferral(referral)}
              />

              <Button
                label="Register"
                pressHandler={handleSignup}
                isLoading={registerLoading}
                marginTop="10px"
              />
              <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Already have an account? </Text>
                <Link label="Login" pressHandler={() => navigation.navigate('Login')} />
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
  }
});

export default SignupScreen;
