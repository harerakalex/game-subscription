import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

const statusBarHeight = `${StatusBar.currentHeight}px`;
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? statusBarHeight : 0};
  background: ${theme.colors.primary};
`;
