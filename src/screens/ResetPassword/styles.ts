import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const KeyboardStyles: StyleProp<ViewStyle> = {
  flex: 1
};

export const Container = styled.View`
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 10px;
  padding-right: 10px;
`;
