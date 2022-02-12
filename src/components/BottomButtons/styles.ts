import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  bottom: 0;
`;

export const Line = styled.View`
  border-top-color: ${theme.colors.white};
  border-top-width: 1px;
  margin-bottom: 10px;
`;
