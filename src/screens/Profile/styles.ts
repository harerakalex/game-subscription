import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.ScrollView`
  flex: 1;
  padding-right: 10px;
  padding-left: 10px;
`;

export const PictureContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px;
`;

export const ProfilePictureContainer = styled.View`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const NameContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100px;
`;

export const ProfilePicture = styled.Image`
  width: 100px;
  height: 100px;
  border-width: 1px;
  border-color: ${theme.colors.gray};
  border-style: solid;
  border-radius: 50px;
`;

export const Text = styled.Text`
  color: ${theme.colors.dark};
  text-transform: capitalize;
`;

export const Line = styled.View`
  border: 1px solid ${theme.colors.dark};
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const UserInfoContainer = styled.View`
  margin-bottom: 10px;
`;

export const LogoutButtonContainer = styled.View`
  display: flex;
  align-items: center;
  padding-top: 5px;
  background: ${theme.colors.lightGray};
`;
