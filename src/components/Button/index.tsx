import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Text
} from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export function Button({title, ...rest }:ButtonProps ){
  return (
    <Container onPress={() => {}} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
};