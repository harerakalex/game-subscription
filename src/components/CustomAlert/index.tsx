import React, { FC } from 'react';

import { theme } from '../../theme';
import { Text } from '../reusable/styled';
import { Container } from './styles';

interface Props {
  message: string;
  type?: 'error' | 'success';
}

const CustomAlert: FC<Props> = ({ type, message }) => {
  const selectColor = () => {
    if (type == 'success') return theme.colors.active;
    else if (type == 'error') return theme.colors.danger;
    else return theme.colors.primary;
  };

  return (
    <Container bgColor={selectColor()}>
      <Text textTransform="none" weight="300" size={15}>
        {message}
      </Text>
    </Container>
  );
};

export default CustomAlert;
