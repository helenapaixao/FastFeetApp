import React, { useState } from 'react';
import { Image, Text, TextInput } from 'react-native';
import {
  Title,
  TitleHeader,
  ContainerHeader,
  ContainerImage,
  ContainerSend,
  TitleLocal,
  ContainerContent,
} from './styles';
import Exit from '../../assets/exit.png';
import Local from '../../assets/local.png';
import { useAuth } from '../../hooks/auth';
import Card from '../../components/Card';

import Input from '../../components/Input';

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const { signOut } = useAuth();

  /* updateSearch = (search) => {
    setSearch({ search });
  }; */

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

      <ContainerContent>
        <Card />
      </ContainerContent>
    </>
  );
};

export default Dashboard;
