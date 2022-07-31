import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';


export const Container = styled(TouchableOpacity)`
  height: 43px;
  width: 100%;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;