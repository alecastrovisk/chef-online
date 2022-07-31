import React from 'react';

import {
  Container,
  Header,
  Form,
  Input,
  SocialButtonsContainer,
  Text,
  SocialButton,
  Footer,
  FooterText,
  ForgotPassword,
} from './styles';

import loginBackground from '../../assets/loginBackground.png';
import Logo from '../../assets/logo2.svg';

import FacebookLogo from '../../assets/facebook-logo.svg';
import GoogleLogo from '../../assets/google-logo.svg';

import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { StatusBar } from 'react-native';

export function Login(){
  const theme = useTheme();
  return (
    <Container source={loginBackground} >
      <StatusBar translucent barStyle='light-content' />

      <Header>
        <Logo width={200} height={66} color={theme.colors.white} />
      </Header>

      <Form>
        <Input
          placeholder='Informe seu email'
          placeholderTextColor={theme.colors.secondary}
        />
        <Input
          placeholder='Informe sua senha'
          placeholderTextColor={theme.colors.secondary}
        />
        
        <Button title='Entrar' color={theme.colors.primary} />
      </Form>

      <SocialButtonsContainer>
        <SocialButton color={theme.colors.blue}>
          <FacebookLogo height={16} width={16} />
          <Text color={theme.colors.white}>
            Entrar com o Facebook
          </Text>
        </SocialButton>

        <SocialButton color={theme.colors.white}>
          <GoogleLogo height={16} width={16} />
          <Text color={theme.colors.blue_light}>Entrar com o Google</Text>
        </SocialButton>

      </SocialButtonsContainer>

      <Footer>
        <FooterText>Ainda não tem uma conta? Cadastre-se aqui!</FooterText>
        <ForgotPassword>Esqueci a senha</ForgotPassword>
      </Footer>
    </Container>
  );
};
