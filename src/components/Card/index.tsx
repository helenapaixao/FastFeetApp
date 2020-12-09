import React from 'react';
import { Image, Text, Slider, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const Card: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <ContainerImage>
          <Image source={Package} />
        </ContainerImage>

        <ContainerText>
          <Title>Pacote 03</Title>
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
