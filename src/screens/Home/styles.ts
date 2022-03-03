import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const HowItWorkContainer = styled.View`
  display: flex;
  margin-bottom: 30px;
`;

export const BottomConatiner = styled.View``;

export const ImageView = styled.Image`
  width: 100%;
  height: 200px;
  border-width: 1px;
  border-color: ${theme.colors.gray};
  margin-top: 10px;
  margin-bottom: 5px;
`;
