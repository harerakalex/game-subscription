import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators
} from '@react-navigation/stack';

import PaymentScreen from '../../screens/Payment';
import ActivityScreen from '../../screens/Activity';

const HomeStackNavigation = createStackNavigator();

const ActivityStackNavigationNavigator = () => {
  return (
    <>
      <HomeStackNavigation.Navigator>
        <HomeStackNavigation.Screen
          name="My Activity"
          component={ActivityScreen}
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

export default ActivityStackNavigationNavigator;
