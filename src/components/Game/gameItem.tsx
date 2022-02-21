import React, { FC, useEffect } from 'react';

import { Image, Text } from '../../components/reusable/styled';
import { theme } from '../../theme';
import Button from '../reusable/Button';
import { Item, ItemImageWrapper, PackageTextWrapper } from './styles';

const PackageItem: FC = () => {
  return (
    <Item>
      <ItemImageWrapper>
        <Image source={require('../../assets/images/game_1.jpeg')} />
      </ItemImageWrapper>
      <PackageTextWrapper>
        <Text color={theme.colors.dark}>Sekiro</Text>
        <Text color={theme.colors.dark} size={14}>
          Shodows die twice!
        </Text>
        <Button
          label="Advertise"
          pressHandler={() => console.log('Pressed a package')}
          marginTop={'5px'}
        />
      </PackageTextWrapper>
    </Item>
  );
};

export default PackageItem;
