import React from 'react';
import { Text } from 'react-native';
import { ContainerContent, Container } from './styles';

const PackageDetail: React.FC = () => {
  return (
    <Container>
      <ContainerContent>
        <Text>Package</Text>
      </ContainerContent>
    </Container>
  );
};

export default PackageDetail;
