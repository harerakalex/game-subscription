import React, { FC, useEffect } from 'react';
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { Container, ItemContainer, ItemDetail, ItemIcon, ItemTitle } from './styles';
import { Text } from '../reusable/styled';
import { theme } from '../../theme';

const BasicDetails: FC = () => {
  return (
    <Container>
      <ItemContainer>
        <ItemIcon>
          <FontAwesome name="balance-scale" size={24} color={theme.colors.active} />
        </ItemIcon>
        <ItemTitle>
          <Text>Balance</Text>
        </ItemTitle>
        <ItemDetail>
          <Text textTransform="uppercase">USD 30</Text>
        </ItemDetail>
      </ItemContainer>
      <ItemContainer>
        <ItemIcon>
          <Ionicons name="trending-up-sharp" size={24} color={theme.colors.danger} />
        </ItemIcon>
        <ItemTitle>
          <Text>Sales</Text>
        </ItemTitle>
        <ItemDetail>
          <Text>20 games</Text>
        </ItemDetail>
      </ItemContainer>
      <ItemContainer>
        <ItemIcon>
          <FontAwesome5 name="gift" size={24} color={theme.colors.active} />
        </ItemIcon>
        <ItemTitle>
          <Text>Subscription</Text>
        </ItemTitle>
        <ItemDetail>
          <Text textTransform="uppercase">USD 100</Text>
        </ItemDetail>
      </ItemContainer>
    </Container>
  );
};

export default BasicDetails;
