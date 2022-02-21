import React, { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import Button from '../../components/reusable/Button';
import {
  Container,
  PictureContainer,
  ProfilePictureContainer,
  NameContainer,
  ProfilePicture,
  Line,
  UserInfoContainer,
  LogoutButtonContainer
} from './styles';
import { Text } from '../../components/reusable/styled';
import { EToastType, removeToken, toast } from '../../utils';
import { LOGOUT_SUCCESS } from '../../redux/action-types/logout';
import Background from '../../components/reusable/Background';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    await removeToken();

    toast(EToastType.SUCCESS, 'Message', 'Successfully logged out');

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: { defaultValue: undefined }
    });

    return navigation.replace('Login');
  };

  const renderRow = (label: string, value: string) => {
    return (
      <UserInfoContainer>
        <Text>{label}:</Text>
        <Text style={{ fontWeight: 'bold' }} textTransform="lowercase">
          {value}
        </Text>
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
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Carlos Harerimana</Text>
            </NameContainer>
          </PictureContainer>

          <Line />

          {renderRow('Username', 'harerakalex')}
          {renderRow('Email', 'harera@gmail.com')}
          {renderRow('Invitation code', 'harerakalex')}
          {renderRow('Referral link', 'coin.com/harerakalex')}
          {renderRow('Phone number', '+250780289165')}
        </Container>
        <LogoutButtonContainer>
          <Button label="Logout" pressHandler={handleLogout} width="50%" />
        </LogoutButtonContainer>
      </>
    </Background>
  );
};

export default ProfileScreen;
