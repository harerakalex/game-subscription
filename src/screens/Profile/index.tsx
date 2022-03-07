import React, { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

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
import { RootState } from '../../redux';
import Link from '../../components/reusable/Link';

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

  const renderRow = (label: string, value: string | undefined) => {
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
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {user?.firstName} {user?.lastName}
              </Text>
            </NameContainer>
          </PictureContainer>

          <Line />

          {renderRow('Username', user?.username)}
          {renderRow('Email', user?.email)}
          {renderRow('Invitation code', user?.username)}

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
