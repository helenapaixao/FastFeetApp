import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background: #ffc042;
  border-radius: 4px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-VariableFont_sInt,wght';
  font-weight: 500;
  color: #4c4766;
  font-size: 18px;
`;
