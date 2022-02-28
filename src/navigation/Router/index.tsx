import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators
} from '@react-navigation/stack';

import TabNavigation from '../Tabs';
import LoginScreen from '../../screens/Login';
import SignupScreen from '../../screens/Signup';
import PackagesScreen from '../../screens/Packages';
import PaymentScreen from '../../screens/Payment';

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
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
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

        <Stack.Screen
          name="Packages"
          component={PackagesScreen}
          options={{
            headerShown: true,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />

        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerShown: true,
            headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />

        {/* <Stack.Screen
          name="Drawers"
          component={DrawerNavigation}
          options={{
            headerShown: false
            // headerTintColor: '#fff'
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
