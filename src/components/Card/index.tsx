import React from 'react';
import { Image, Text } from 'react-native';
import {
  Container,
  Title,
  ContainerImage,
  ContainerText,
  ContainerFooter,
  TitleFooter,
  Date,
  ContainerDate,
} from './styles';
import Package from '../../assets/package.png';

const Card: React.FC = () => {
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
      </Container>
      <ContainerFooter>
        <TitleFooter>Detalhes</TitleFooter>
      </ContainerFooter>
    </>
  );
};

export default Card;
