import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ProfileScreen from '../../screens/Profile';
import { theme } from '../../theme';
import ActivityScreen from '../../screens/Activity';
import HomeStackNavigationNavigator from './HomeStackNavigator';
import WalletStackNavigationNavigator from './WalletStackScreen';
import ActivityStackNavigationNavigator from './ActivityStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    activeColor={theme.colors.dark}
    inactiveColor={theme.colors.gray}
    labeled={true}
    shifting={false}
    barStyle={{
      backgroundColor: theme.colors.white
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackNavigationNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={26} />
      }}
    />
    <Tab.Screen
      name="Activity"
      component={ActivityStackNavigationNavigator}
      options={{
        tabBarLabel: 'Activity',
        tabBarIcon: ({ color }) => <Feather name="activity" color={color} size={26} />
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletStackNavigationNavigator}
      options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: ({ color }) => <Ionicons name="wallet" color={color} size={26} />
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => <Ionicons name="person" color={color} size={26} />
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
