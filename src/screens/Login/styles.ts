import styled from 'styled-components/native';
import { ImageBackground } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonColor {
  color: string;
}

interface TextColor {
  color: string;
}

interface InputError {
  error?: boolean;
}

export const Container = styled(ImageBackground).attrs({
  resizeMode: 'cover'
})`
  flex: 1;

  width: 102%;
  height: 102%;

  background-color: ${({ theme }) => theme.colors.danger};
`;

export const Header = styled.View`
  margin-top: ${RFValue(84)}px;

  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: ${RFValue(164)}px;
  padding: 0 54px;
`;

export const Input = styled.TextInput<InputError>`
  width: 100%;
  height: ${RFValue(40)}px;

  margin-bottom: 15px;
  padding-left: 12px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.white};

  border: ${({ error }) => error ? 2 : 0}px;
  border-color: ${({ error, theme }) => error ? theme.colors.danger : null};
`;

export const SocialButtonsContainer = styled.View`
  margin-top: ${RFValue(68)}px;
  padding: 0 54px;
`;

export const SocialButton = styled.TouchableOpacity<ButtonColor>`
  width: 100%;
  height: 43px;

  flex-direction: row;
  margin-top: 12px;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color};
`;

export const Text = styled.Text<TextColor>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;

  margin-left: 22px;
  color: ${(props) => props.color}
`;

export const Footer = styled.View`
  margin-top: ${RFValue(75)}px;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

export const ForgotPassword = styled.Text`
  margin-top: ${RFValue(4)}px;

  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white}
`;
