import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 327px;
  height: 56px;
  padding: 0 16px;
  background: #FFFFFF;
  border-radius: 4px;
  border-width: 2px;
  border-color: #f0f0f5;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 8px 24px rgba(21, 6, 51, 0.08);

  ${props =>
    props.isFocused &&
    css`
      border-color: #c72828;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6c6c80;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
