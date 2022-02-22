import React, { FC, ReactElement, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../../theme';

interface Props {
  children: ReactElement;
}

const Background: FC<Props> = ({ children }) => {
  return (
    <LinearGradient
      colors={[theme.colors.gray, theme.colors.darkBlue, theme.colors.primary, theme.colors.dark]}
      style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
