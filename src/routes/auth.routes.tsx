import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Forgot from '../pages/Forgot';
import PackageDetail from '../pages/PackageDetail';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#4C33CC' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="PackageDetail" component={PackageDetail} />
    <Auth.Screen name="Forgot" component={Forgot} />
  </Auth.Navigator>
);

export default AuthRoutes;
