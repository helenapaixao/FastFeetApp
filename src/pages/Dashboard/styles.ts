import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #f4ede8;
  font-family: 'Inter-VariableFont_sInt,wght';
  margin: 64px 0 24px;
  margin-left: 24px;
`;

export const ContainerHeader = styled.View``;

export const ContainerImage = styled.View`
  margin-left: 340px;
  margin-top: -50px;
`;
export const ContainerSend = styled.View`
  margin-left: 200px;
  margin-top: -50px;
`;

export const TitleHeader = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #d5ccff;
  font-family: 'Inter-VariableFont_sInt,wght';
  margin: 64px 0 24px;
  margin-left: 24px;
`;

export const ContainerContent = styled.View`
  background: #f7f5fa;
  height: 80%;
`;

export const TitleLocal = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #d5ccff;
  font-family: 'Inter-VariableFont_sInt,wght';
  margin: 64px 0 24px;
  margin-left: 24px;
  margin-top: -25px;
`;
export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #4c33cc;
  border-top-width: 1px;
  border-color: #4c33cc;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
