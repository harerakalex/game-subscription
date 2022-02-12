import React, { FC, useEffect } from 'react';

import { theme } from '../../theme';
import Button from '../reusable/Button';
import { Container, Line } from './styles';

const BottomButtons: FC = () => {
  return (
    <>
      <Line />
      <Container>
        <Button
          label="Invite"
          pressHandler={() => console.log('Invite')}
          width="50%"
          bgColor={theme.colors.inactive}
        />
        <Button
          label="Withdraw"
          pressHandler={() => console.log('Withdraw')}
          width="50%"
          bgColor={theme.colors.darkWhite}
        />
      </Container>
    </>
  );
};

export default BottomButtons;
