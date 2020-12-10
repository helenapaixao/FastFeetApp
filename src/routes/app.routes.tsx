import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../pages/Dashboard';
import Done from '../pages/Done';
import TabRoutes from './tab.routes';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Dashboard">
      <App.Screen
        options={{
          cardStyle: { backgroundColor: '#003049' },
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
        name="Done"
        component={Done}
        options={() => ({
          headerLeftContainerStyle: {
            marginLeft: 24,
          },

          headerRightContainerStyle: {
            marginRight: 24,
          },
          headerTitle: 'Feito',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: '#003049',
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
