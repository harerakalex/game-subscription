import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.primary};
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: ${theme.colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;
