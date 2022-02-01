import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Text = styled.Text`
  color: ${theme.colors.dark};
  text-transform: capitalize;
`;

export const BalanceContainer = styled.View`
  background: ${theme.colors.white};
  padding: 8px;
`;
