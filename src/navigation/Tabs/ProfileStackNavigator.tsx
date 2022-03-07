import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators
} from '@react-navigation/stack';

import ResetPasswordScreen from '../../screens/ResetPassword';
import ProfileScreen from '../../screens/Profile';

const HomeStackNavigation = createStackNavigator();

const ProfileStackNavigationNavigator = () => {
  return (
    <>
      <HomeStackNavigation.Navigator>
        <HomeStackNavigation.Screen
          name="My Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <HomeStackNavigation.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
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

export default ProfileStackNavigationNavigator;
