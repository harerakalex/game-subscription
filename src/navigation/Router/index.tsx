import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators
} from '@react-navigation/stack';

import TabNavigation from '../Tabs';
import LoginScreen from '../../screens/Login';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* LOGIN SCREEN */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ route }: any) => ({
            headerShown: false,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          })}
        />

        {/* TABS SCREEN */}
        <Stack.Screen
          name="Tabs"
          component={TabNavigation}
          options={{
            headerShown: false,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
