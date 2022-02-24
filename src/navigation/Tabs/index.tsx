import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import { theme } from '../../theme';
import ActivityScreen from '../../screens/Activity';
import WalletScreen from '../../screens/Wallet';

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
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={26} />
      }}
    />
    <Tab.Screen
      name="Activity"
      component={ActivityScreen}
      options={{
        tabBarLabel: 'Activity',
        tabBarIcon: ({ color }) => <Feather name="activity" color={color} size={26} />
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
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
