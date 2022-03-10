import React, { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Alert, TouchableOpacity } from 'react-native';

import Button from '../../components/reusable/Button';
import {
  Container,
  PictureContainer,
  ProfilePictureContainer,
  NameContainer,
  ProfilePicture,
  Line,
  UserInfoContainer,
  LogoutButtonContainer,
  CopyableRow
} from './styles';
import { Text } from '../../components/reusable/styled';
import { EToastType, removeToken, toast } from '../../utils';
import { LOGOUT_SUCCESS } from '../../redux/action-types/logout';
import Background from '../../components/reusable/Background';
import { RootState } from '../../redux';
import Link from '../../components/reusable/Link';
import { theme } from '../../theme';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.users);

  const handleLogout = async () => {
    await removeToken();

    toast(EToastType.SUCCESS, 'Message', 'Successfully logged out');

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: { defaultValue: undefined }
    });

    return navigation.replace('Login');
  };

  const copyToClipboard = () => {
    if (user?.username) Clipboard.setString(user?.username);

    Alert.alert('Copied to clipboard', '', [{ text: 'OK' }]);
  };

  const renderRow = (label: string, value: string | undefined) => {
    return (
      <UserInfoContainer>
        <Text>{label}:</Text>
        <Text weight="bold" textTransform="lowercase">
          {value}
        </Text>
      </UserInfoContainer>
    );
  };

  const renderCopyableRow = (label: string, value: string | undefined) => {
    return (
      <UserInfoContainer>
        <Text>{label}:</Text>
        <CopyableRow>
          <Text style={{ width: '90%' }} textTransform="lowercase">
            {value}
          </Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <FontAwesome name="copy" size={24} color={theme.colors.white} />
          </TouchableOpacity>
        </CopyableRow>
      </UserInfoContainer>
    );
  };

  return (
    <Background>
      <>
        <Container>
          <PictureContainer>
            <ProfilePictureContainer>
              <ProfilePicture source={require('../../assets/images/avatar.jpg')} />
            </ProfilePictureContainer>
            <NameContainer>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {user?.firstName} {user?.lastName}
              </Text>
            </NameContainer>
          </PictureContainer>

          <Line />

          {renderRow('Username', user?.username)}
          {renderRow('Email', user?.email)}
          {renderCopyableRow('Invitation code', user?.username)}

          <Link
            marginTop="20px"
            size={18}
            label="Reset Password"
            pressHandler={() => navigation.navigate('ResetPassword')}
          />
        </Container>
        <LogoutButtonContainer>
          <Button label="Logout" pressHandler={handleLogout} width="50%" />
        </LogoutButtonContainer>
      </>
    </Background>
  );
};

export default ProfileScreen;
