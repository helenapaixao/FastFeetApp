import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const ContainerContent = styled.View`
  background: #f7f5fa;
  height: 100%;
`;

export const Container = styled.View`
  flex: 3;
  /*   align-items: center; */
  /*  justify-content: center; */
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;
