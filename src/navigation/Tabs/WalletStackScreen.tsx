import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators
} from '@react-navigation/stack';

import PaymentScreen from '../../screens/Payment';
import WithdrawScreen from '../../screens/Withdraw';
import WalletScreen from '../../screens/Wallet';

const WalletStackNavigation = createStackNavigator();

const WalletStackNavigationNavigator = () => {
  return (
    <>
      <WalletStackNavigation.Navigator>
        <WalletStackNavigation.Screen
          name="My Wallet"
          component={WalletScreen}
          options={{
            headerShown: false,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <WalletStackNavigation.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerShown: true,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />

        <WalletStackNavigation.Screen
          name="Withdraw"
          component={WithdrawScreen}
          options={{
            headerShown: true,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
      </WalletStackNavigation.Navigator>
    </>
  );
};

export default WalletStackNavigationNavigator;
