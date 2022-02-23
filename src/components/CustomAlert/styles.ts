import styled from 'styled-components/native';

import { theme } from '../../theme';

interface IProps {
  bgColor: string;
}

export const Container = styled.View<IProps>`
  background-color: ${props => props.bgColor || theme.colors.primary};
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
