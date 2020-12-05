import React from 'react';
import { Image, Text } from 'react-native';
import ForgotPassword from '../../assets/forgot.svg';

const Forgot: React.FC = () => {
  return (
    <>
      <Text>Forgot Passowrd</Text>
      <Image source={ForgotPassword} />
    </>
  );
};
export default Forgot;
