import React, { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/reusable/Button';
import {
  Container,
  Text,
  PictureContainer,
  ProfilePictureContainer,
  NameContainer,
  ProfilePicture,
  Line,
  UserInfoContainer,
  LogoutButtonContainer
} from './styles';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<any>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const renderRow = (label: string, value: string) => {
    return (
      <UserInfoContainer>
        <Text>{label}:</Text>
        <Text style={{ fontWeight: 'bold' }}>{value}</Text>
      </UserInfoContainer>
    );
  };

  return (
    <>
      <Container>
        <PictureContainer>
          <ProfilePictureContainer>
            <ProfilePicture source={require('../../assets/images/my.jpeg')} />
          </ProfilePictureContainer>
          <NameContainer>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Carlos Harerimana</Text>
          </NameContainer>
        </PictureContainer>

        <Line />

        {renderRow('Username', '@harerakalex')}
        {renderRow('Email', 'harera@gmail.com')}
        {renderRow('Invitation code', 'harerakalex')}
        {renderRow('Referral link', 'coin.com/harerakalex')}
        {renderRow('Phone number', '+250780289165')}

        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
        {renderRow('Phone number', '+250780289165')}
      </Container>
      <LogoutButtonContainer>
        <Button label="Logout" pressHandler={handleLogout} />
      </LogoutButtonContainer>
    </>
  );
};

export default ProfileScreen;
