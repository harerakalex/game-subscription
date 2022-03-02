import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators
} from '@react-navigation/stack';

import PaymentScreen from '../../screens/Payment';
import WithdrawScreen from '../../screens/Withdraw';
import HomeScreen from '../../screens/Home';

const HomeStackNavigation = createStackNavigator();

const HomeStackNavigationNavigator = () => {
  return (
    <>
      <HomeStackNavigation.Navigator>
        <HomeStackNavigation.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <HomeStackNavigation.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerShown: true,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />

        <HomeStackNavigation.Screen
          name="Withdraw"
          component={WithdrawScreen}
          options={{
            headerShown: true,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
      </HomeStackNavigation.Navigator>
    </>
  );
};

export default HomeStackNavigationNavigator;
