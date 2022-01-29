import React, { FC, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/reusable/Button';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<any>();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>My Profile</Text>

      <Button label="Logout" pressHandler={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});

export default ProfileScreen;
