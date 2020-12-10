/* eslint-disable @typescript-eslint/interface-name-prefix */
import React, { useEffect, useState } from 'react';
import { Image, Text, Slider, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  Container,
  Title,
  ContainerImage,
  ContainerText,
  ContainerFooter,
  TitleFooter,
  Date,
  ContainerDate,
  SpaceImage,
  TextInit,
  TextMedium,
  TextFinal,
} from './styles';
import Package from '../../assets/package.png';
import Arrow from '../../assets/seta.png';

interface IPackage {
  id: number;
  name: string;
}

const Card: React.FC = () => {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadPackages(): Promise<void> {
      const response = await api.get('/packages');
      setPackages(response.data);
    }
    loadPackages();
  }, []);
  return (
    <>
      <Container>
        {packages.map(item => (
          <>
            <ContainerImage>
              <Image source={Package} />
            </ContainerImage>

            <ContainerText>
              <Title>{item.name}</Title>
            </ContainerText>
            <ContainerDate>
              <Date>01/07/2020</Date>
            </ContainerDate>
            <Slider
              style={{ width: 315, height: 40, top: 30 }}
              minimumValue={0}
              maximumValue={3}
              minimumTrackTintColor="#00DA6D"
              maximumTrackTintColor="#000000"
            />
            <TextInit>AGUARDANDO</TextInit>
            <TextMedium>RETIRADO</TextMedium>
            <TextFinal>ENTREGUE</TextFinal>
          </>
        ))}
      </Container>
      <ContainerFooter>
        <TitleFooter>Detalhes</TitleFooter>

        <SpaceImage>
          <TouchableOpacity
            onPress={() => navigation.navigate('PackageDetail')}
          >
            <Image source={Arrow} />
          </TouchableOpacity>
        </SpaceImage>
      </ContainerFooter>
    </>
  );
};

export default Card;
