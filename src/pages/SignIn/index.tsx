import React, { useCallback, useRef, useState } from 'react';

import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  CheckBox,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import ImageBack from '../../assets/background.png';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/Logo.png';
import texto from '../../assets/texto.png';
import logoImg2 from '../../assets/Logo2.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  ContainerLogo,
  ContainerImage,
  ContainerImageLogo,
  ContainerText,
  ContainerPassword,
  SpaceText,
  ContainerCheckbox,
  RememberPasswordText,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const passwordRef = useRef(null);
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  const { signIn } = useAuth();
  const [isSelected, setSelection] = useState(false);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <ImageBackground source={ImageBack} style={styles.image}>
              <ContainerLogo>
                <ContainerImage>
                  <Image source={logoImg2} />
                </ContainerImage>
                <ContainerImageLogo>
                  <Image source={logoImg} />
                </ContainerImageLogo>
              </ContainerLogo>
            </ImageBackground>

            <ContainerText>
              <Image source={texto} />
            </ContainerText>
            <SpaceText>
              <Title>Faça seu login para {'\n'} começar suas entregas.</Title>
            </SpaceText>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="text"
                icon="user"
                placeholder="CPF"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                autoCapitalize="none"
                autoCorrect={false}
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <ContainerCheckbox>
                <CheckBox value={isSelected} onValueChange={setSelection} />
              </ContainerCheckbox>
              <ForgotPassword onPress={() => navigation.navigate('Forgot')}>
                <ContainerPassword>
                  <RememberPasswordText>Lembrar-me</RememberPasswordText>
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ContainerPassword>
              </ForgotPassword>

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color=" #FFC042" />
        <CreateAccountButtonText>Crie uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: 250,
    height: 200,
    left: -20,
    top: 20,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
export default SignIn;
