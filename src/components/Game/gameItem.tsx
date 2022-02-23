import React, { FC, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import { Image, Text } from '../../components/reusable/styled';
import { IAdvert } from '../../redux/interfaces/advert.interface';
import { IGame } from '../../redux/interfaces/game.interface';
import { theme } from '../../theme';
import Button from '../reusable/Button';
import { Item, ItemImageWrapper, PackageTextWrapper } from './styles';
import { CreateAdvertAction } from '../../redux/actions/advert';

interface Props {
  game: IGame;
  adverts: IAdvert[];
}

const images = {
  game_1: require('../../assets/images/game_1.jpeg'),
  game_2: require('../../assets/images/game_2.jpeg'),
  game_3: require('../../assets/images/game_3.jpeg'),
  game_4: require('../../assets/images/game_4.jpeg')
};

const PackageItem: FC<Props> = ({ game, adverts }) => {
  const dispatch = useDispatch();

  const getGameImage = (name: string) => {
    if (name === 'sekiro') return images.game_1;
    else if (name === 'call of duty') return images.game_2;
    else if (name === 'world of warcraft') return images.game_3;
    else if (name === 'overwatch') return images.game_4;
    else return images.game_1;
  };

  const checkIfGameIsAdvertised = () => {
    const advertsedGames = adverts.map(advert => advert.id);

    if (advertsedGames.includes(game.id)) return true;

    return false;
  };

  const handleCreateAdvert = () => {
    CreateAdvertAction(game.id as number)(dispatch);
  };

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
        {checkIfGameIsAdvertised() ? (
          <Text color={theme.colors.dark} weight="300" size={19}>
            <Entypo name="check" size={24} color={theme.colors.active} /> Advertized
          </Text>
        ) : (
          <Button label="Advertise" pressHandler={handleCreateAdvert} marginTop={'5px'} />
        )}
      </PackageTextWrapper>
    </Item>
  );
};

export default PackageItem;
