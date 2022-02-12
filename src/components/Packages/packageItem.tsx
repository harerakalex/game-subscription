import React, { FC, useEffect } from 'react';

import { Image, Text } from '../../components/reusable/styled';
import { theme } from '../../theme';
import { Item, ItemImageWrapper, PackageTextWrapper } from './styles';

const PackageItem: FC = () => {
  return (
    <Item onPress={() => console.log('Pressed a package')}>
      <ItemImageWrapper>
        <Image source={require('../../assets/images/gold.jpg')} />
      </ItemImageWrapper>
      <PackageTextWrapper>
        <Text color={theme.colors.dark}>Silver Package</Text>
        <Text color={theme.colors.dark} size={14}>
          This package contains 20 games. Make profits from helping us advertise our games
        </Text>
      </PackageTextWrapper>
    </Item>
  );
};

export default PackageItem;
