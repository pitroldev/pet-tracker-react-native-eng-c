import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@root/pages/Home';

const Tab = createMaterialBottomTabNavigator();

const Router = () => {
  const styles = {
    activeColor: '#fff',
    bar: {backgroundColor: '#d0aba0'},
  };

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={styles.activeColor}
      barStyle={styles.bar}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pets"
        component={Home}
        options={{
          tabBarLabel: 'Pets',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="dog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;
