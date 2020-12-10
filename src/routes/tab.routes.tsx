import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Dashboard from '../pages/Dashboard';
import Done from '../pages/Done';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: '#FFFFFF',
      labelStyle: {
        color: '#4C33CC',
        fontFamily: 'Inter-VariableFont_sInt,wght',
        fontSize: 15,
        fontWeight: '500',
      },
      inactiveTintColor: '#F7F5FA',
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Icon size={25} name="list" color={color} />,
        title: 'Pendentes',
      }}
      name="DashboardStack"
      component={Dashboard}
    />

    <Tab.Screen
      name="Favorites"
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={25} name="heart" color={color} />
        ),
        title: 'Feitas',
      }}
      component={Done}
    />
  </Tab.Navigator>
);

export default TabRoutes;
