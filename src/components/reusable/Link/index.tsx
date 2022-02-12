import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { LinkContainer, LinkText } from './styles';
import { theme } from '../../../theme';

interface Props {
  label: string;
  marginTop?: string;
  marginBottom?: string;
  size?: number;
  pressHandler: () => void;
}

const Link: FC<Props> = props => {
  const { label, pressHandler, marginTop, marginBottom, size } = props;

  return (
    <LinkContainer
      marginTop={marginTop || '0px'}
      marginBottom={marginBottom || '0px'}
      onPress={pressHandler}
    >
      <LinkText size={size || 14}>{label}</LinkText>
    </LinkContainer>
  );
};

export default Link;
