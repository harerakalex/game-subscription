import styled from 'styled-components/native';

import { theme } from '../../../theme';

interface ILinkContainerProps {
  marginTop: string;
  marginBottom: string;
}

interface ILinkTextProps {
  size: number;
}

export const LinkContainer = styled.TouchableOpacity<ILinkContainerProps>`
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

export const LinkText = styled.Text<ILinkTextProps>`
  font-size: ${props => props.size}px;
  color: ${theme.colors.link};
`;
