import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators
} from '@react-navigation/stack';

import PaymentScreen from '../../screens/Payment';
import HomeScreen from '../../screens/Home';

const HomeStackNavigation = createStackNavigator();

const HomeStackNavigationNavigator = () => {
  return (
    <>
      <HomeStackNavigation.Navigator>
        <HomeStackNavigation.Screen
          name="My Home"
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
      </HomeStackNavigation.Navigator>
    </>
  );
};

export default HomeStackNavigationNavigator;
