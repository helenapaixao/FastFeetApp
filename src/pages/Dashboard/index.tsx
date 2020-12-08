import React from 'react';
import { Image, Text } from 'react-native';
import {
  Title,
  TitleHeader,
  ContainerHeader,
  ContainerImage,
  ContainerSend,
  TitleLocal,
} from './styles';
import Exit from '../../assets/exit.png';
import Local from '../../assets/local.png';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <ContainerHeader>
        <TitleHeader>Bem vinda, {'\n'} Helena Paixão</TitleHeader>
        <ContainerImage>
          <Image source={Exit} />
        </ContainerImage>
      </ContainerHeader>

      <Title>Entregas</Title>
      <ContainerSend>
        <Image source={Local} />
        <TitleLocal>Mato Grosso do Sul</TitleLocal>
      </ContainerSend>
    </>
  );
};

export default Dashboard;
