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
  font-size: 15px;
  color: #d5ccff;
  font-weight: 400;
  font-family: 'Inter-VariableFont_sInt,wght';
  margin: 64px 0 24px;
  line-height: 25px;
  margin-left: -150px;
`;

export const ContainerSmallLogo = styled.Text`
  margin-top: -200px;
`;

export const SpaceBLogo = styled.View`
  margin-bottom: -200px;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const ContainerText = styled.View`
  margin-bottom: -70px;
  margin-left: -60px;
`;
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'Inter-VariableFont_sInt,wght';
  margin-left: 120px;
  margin-top: -20px;
`;

export const RememberPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'Inter-VariableFont_sInt,wght';
  margin-left: -16px;
  margin-top: -20px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
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

export const ContainerImageLogo = styled.View`
  margin-left: 140px;
  margin-bottom: 40px;
  margin-top: 10px;
`;
export const ContainerImage = styled.View`
  margin-left: -10px;
  margin-bottom: 100px;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ffc042;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const ContainerCheckbox = styled.View`
  margin-left: -230px;
  display: flex;
`;

export const ContainerPassword = styled.View`
  margin-top: -30px;
  display: flex;
  margin-bottom: 26px;
  margin-left: 5px;
`;

export const ContainerCheckboxText = styled.View`
  margin-top: -27px;
  margin-bottom: 26px;
  margin-left: 30px;
  color: #ffff;
`;

export const SpaceText = styled.View`
  margin-top: 20px;
`;
