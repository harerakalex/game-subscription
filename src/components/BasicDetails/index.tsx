import React, { FC, useEffect } from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { Container, ItemContainer, ItemDetail, ItemIcon, ItemTitle } from './styles';
import { Text } from '../reusable/styled';
import { theme } from '../../theme';
import { IUser } from '../../redux/interfaces/user.interface';

interface Props {
  user: IUser;
}

const BasicDetails: FC<Props> = ({ user }) => {
  const formatAmount = (value: number) => {
    if (Math.floor(value) === value) return value;
    const numOfDecimal = value.toString().split('.')[1].length || 0;
    if (numOfDecimal > 5) return value.toFixed(5);
    return value;
  };
  return (
    <Container>
      <ItemContainer>
        <ItemIcon>
          <FontAwesome5 name="gift" size={24} color={theme.colors.danger} />
        </ItemIcon>
        <ItemTitle>
          <Text>Subscription</Text>
        </ItemTitle>
        <ItemDetail>
          <Text textTransform="uppercase">USD {formatAmount(user.subscription as number)}</Text>
        </ItemDetail>
      </ItemContainer>
      <ItemContainer>
        <ItemIcon>
          <FontAwesome name="balance-scale" size={24} color={theme.colors.active} />
        </ItemIcon>
        <ItemTitle>
          <Text>Balance</Text>
        </ItemTitle>
        <ItemDetail>
          <Text textTransform="uppercase">USD {formatAmount(user.balance as number)}</Text>
        </ItemDetail>
      </ItemContainer>
    </Container>
  );
};

export default BasicDetails;
