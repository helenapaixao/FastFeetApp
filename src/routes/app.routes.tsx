import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';

import Dashboard from '../pages/Dashboard';
import Done from '../pages/Done';
import PackageDetail from '../pages/PackageDetail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Dashboard">
      <App.Screen
        options={{
          cardStyle: { backgroundColor: '#4C33CC' },
          headerShown: false,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        name="MainBottom"
        component={TabRoutes}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <App.Screen
        name="Dashboard"
        component={Dashboard}
        options={() => ({
          headerLeftContainerStyle: {
            marginLeft: 24,
          },
          headerRightContainerStyle: {
            marginRight: 24,
          },
          headerTitle: 'Casa',
          headerTitleStyle: {
            color: '#B634',
            /*        fontFamily: 'Poppins-Regular', */
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: '#4C33CC',
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
        })}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
