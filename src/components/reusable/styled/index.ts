import styled from 'styled-components/native';

import { TextTransformType, TextAlignmentType } from '../../../constants/types';
import { theme } from '../../../theme';

interface ITextProps {
  textTransform?: TextTransformType;
  size?: number;
  alignment?: TextAlignmentType;
  marginTop?: number;
  marginBottom?: number;
  color?: string;
  weight?: string;
}

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const Text = styled.Text<ITextProps>`
  color: ${props => props.color || theme.colors.white};
  text-transform: ${props => props.textTransform || 'capitalize'};
  font-size: ${props => props.size || 16}px;
  text-align: ${props => props.alignment || 'left'};
  margin-top: ${props => props.marginTop || 3}px;
  margin-bottom: ${props => props.marginBottom || 3}px;
  font-weight: ${props => props.weight || 300};
`;

export const Image = styled.Image`
  width: ${props => props.width || 100}px;
  height: ${props => props.height || 100}px;
  border-width: 1px;
  border-color: ${theme.colors.gray};
  border-radius: 50px;
`;
