import React from 'react';
import { Image, Text, ImageBackground, StyleSheet } from 'react-native';
import ForgotPassword from '../../assets/forgot.svg';
import ImageBack from '../../assets/background.png';

const Forgot: React.FC = () => {
  return (
    <>
      <ImageBackground source={ImageBack} style={styles.image}>
        <Text>Forgot Passowrd</Text>
        <Image source={ForgotPassword} />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    width: 279,
    height: 312,

    left: -20,
    top: 10,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
export default Forgot;
