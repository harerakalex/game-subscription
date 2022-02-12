import React, { FC, useEffect } from 'react';

import { Text } from '../../components/reusable/styled';
import PackageItem from './packageItem';
import { Container } from './styles';

const Packages: FC = () => {
  return (
    <Container>
      <PackageItem />
    </Container>
  );
};

export default Packages;
