import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { theme } from '../../../theme';

const CustomStatusBar = () => {
  return (
    <>
      <StatusBar style="auto" backgroundColor={theme.colors.white} />
    </>
  );
};

export default CustomStatusBar;
