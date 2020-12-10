import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, ScrollView } from 'react-native';
import {
  Title,
  TitleHeader,
  ContainerHeader,
  ContainerImage,
  ContainerSend,
  TitleLocal,
  ContainerContent,
  ContentSearch,
} from './styles';
import Exit from '../../assets/exit.png';
import Local from '../../assets/local.png';
import { useAuth } from '../../hooks/auth';
import Card from '../../components/Card';

/* import Input from '../../components/Input';
import api from '../../services/api'; */
import SearchInput from '../../components/SearchInput';

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
        <ContentSearch>
          <SearchInput />
        </ContentSearch>
        <ScrollView>
          <Card />
        </ScrollView>
      </ContainerContent>
    </>
  );
};

export default Dashboard;
