import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  /* updateSearch = (search) => {
    setSearch({ search });
  }; */

  return (
    <>
      <ContainerHeader>
        <TitleHeader>Bem vinda, {'\n'} Helena Paixão</TitleHeader>
        <ContainerImage>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Image source={Exit} />
          </TouchableOpacity>
        </ContainerImage>
      </ContainerHeader>

      <ContainerSend>
        <Title>Entregas</Title>
        <Image source={Local} />
        <TitleLocal>Mato Grosso do Sul</TitleLocal>
      </ContainerSend>

      <ContainerContent>
        <ContentSearch>
          <SearchInput placeholder="Filtrar por bairro" />
        </ContentSearch>
        <ScrollView>
          <Card />
        </ScrollView>
      </ContainerContent>
    </>
  );
};

export default Dashboard;
