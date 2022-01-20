import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../../screens/Home';
import { theme } from '../../theme';

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
      name="Search"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => <Ionicons name="search" color={color} size={26} />
      }}
    />
    <Tab.Screen
      name="Order"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Order',
        tabBarIcon: ({ color }) => <Ionicons name="time" color={color} size={26} />
      }}
    />
    <Tab.Screen
      name="Account"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => <Ionicons name="person" color={color} size={26} />
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
