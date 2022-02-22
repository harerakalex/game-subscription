import React, { FC, useEffect } from 'react';

import { Image, Text } from '../../components/reusable/styled';
import { IGame } from '../../redux/interfaces/game.interface';
import { theme } from '../../theme';
import Button from '../reusable/Button';
import { Item, ItemImageWrapper, PackageTextWrapper } from './styles';

interface Props {
  game: IGame;
}

const images = {
  game_1: require('../../assets/images/game_1.jpeg'),
  game_2: require('../../assets/images/game_2.jpeg'),
  game_3: require('../../assets/images/game_3.jpeg'),
  game_4: require('../../assets/images/game_4.jpeg')
};

const PackageItem: FC<Props> = ({ game }) => {
  const getGameImage = (name: string) => {
    if (name === 'sekiro') return images.game_1;
    else if (name === 'call of duty') return images.game_2;
    else if (name === 'world of warcraft') return images.game_3;
    else if (name === 'overwatch') return images.game_4;
    else return images.game_1;
  };

  // const url = images.sekiro;
  return (
    <Item>
      <ItemImageWrapper>{<Image source={getGameImage(game.name)} />}</ItemImageWrapper>
      <PackageTextWrapper>
        <Text color={theme.colors.dark} weight="bold">
          {game.name}
        </Text>
        <Text color={theme.colors.dark} size={13}>
          {game.description}
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
