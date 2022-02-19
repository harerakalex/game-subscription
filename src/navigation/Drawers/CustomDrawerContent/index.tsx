import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import Background from '../../../components/reusable/Background';
import { theme } from '../../../theme';
import { Text } from '../../../components/reusable/styled';
import { EToastType, removeToken, toast } from '../../../utils';
import { LOGOUT_SUCCESS } from '../../../redux/action-types/logout';

interface Props {
  props: any;
}
const CustomDrawerContent: FC<Props> = ({ props }) => {
  const { navigation, state } = props;
  const { routes, index } = state;
  // const focusedRoute = routes[index].name;
  // console.log('Props===', props);
  // console.log('Active route===', focusedRoute);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    await removeToken();

    toast(EToastType.SUCCESS, 'Message', 'Successfully logged out');

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: { defaultValue: undefined }
    });

    return navigation.replace('Login');
  };

  return (
    <Background>
      <>
        <View style={styles.container}>
          <DrawerItem
            {...props}
            label={({ focused, color }) => {
              console.log('color====', color);
              console.log('focused====', focused);
              return <Text color={focused ? theme.colors.link : theme.colors.white}>Home</Text>;
            }}
            icon={({ focused, color }) => <Ionicons name="home" size={24} color={color} />}
            onPress={() => navigation.navigate('Home')}
            inactiveTintColor={theme.colors.white}
            activeTintColor={theme.colors.link}
          />

          <DrawerItem
            {...props}
            label="Packages"
            icon={({ focused, color }) => <FontAwesome5 name="gift" size={24} color={color} />}
            onPress={() => navigation.navigate('Packages')}
            inactiveTintColor={theme.colors.white}
            activeTintColor={theme.colors.link}
          />

          <DrawerItem
            {...props}
            label="Profile"
            icon={({ focused, color }) => <Ionicons name="person" size={24} color={color} />}
            onPress={() => navigation.navigate('Profile')}
            inactiveTintColor={theme.colors.white}
            activeTintColor={theme.colors.link}
          />
        </View>
        <View style={styles.logoutWrapper}>
          <DrawerItem
            {...props}
            label={({ focused, color }) => (
              <Text color={focused ? theme.colors.link : theme.colors.white}>Logout</Text>
            )}
            icon={({ focused, color }) => (
              <MaterialIcons name="logout" size={24} color={theme.colors.danger} />
            )}
            onPress={handleLogout}
            inactiveTintColor={theme.colors.white}
            activeTintColor={theme.colors.link}
          />
        </View>
      </>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoutWrapper: {
    bottom: 0
  }
});

export default CustomDrawerContent;
