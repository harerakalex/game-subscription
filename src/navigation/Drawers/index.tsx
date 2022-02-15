import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import PackagesScreen from '../../screens/Packages';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent props={props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Packages" component={PackagesScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
