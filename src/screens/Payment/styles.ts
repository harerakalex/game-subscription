import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const KeyboardStyles: StyleProp<ViewStyle> = {
  flex: 1
};

export const QRCodeContainer = styled.View`
  flex: 1;
`;

export const QRCodeImage = styled.Image`
  width: 100%;
  height: 350px;
`;

export const CopyableRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;
