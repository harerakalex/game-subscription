import styled from 'styled-components/native';

import { theme } from '../../../theme';

interface IButtonContainerProps {
  width: string;
  marginTop: string;
  marginBottom: string;
  bgColor: string;
}

export const ButtonContainer = styled.TouchableOpacity<IButtonContainerProps>`
  width: ${props => props.width};
  align-items: center;
  background-color: ${props => (props.disabled ? theme.colors.secondary : props.bgColor)};
  padding: 10px 0;
  border-width: 1px;
  border-radius: 25px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;
