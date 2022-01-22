import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import ChatScreen from '../../screens/Chat';
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
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color }) => <Ionicons name="chatbox-sharp" color={color} size={26} />
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
