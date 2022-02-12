import styled from 'styled-components/native';

import { theme } from '../../theme';

export const Container = styled.View`
  flex: 1;
`;

export const Item = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.white};
  border-width: 1px;
  border-color: ${theme.colors.gray};
  border-radius: 10px;
`;

export const ItemImageWrapper = styled.View`
  display: flex;
  width: 30%;
`;

export const PackageTextWrapper = styled.View`
  display: flex;
  width: 70%;
  padding-left: 5px;
`;
