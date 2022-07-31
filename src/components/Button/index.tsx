import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Text
} from './styles';

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  color: string;
  icon?: string; 
}

export function Button({ title, color, icon: Icon, ...rest }: ButtonProps ){
  return (
    <Container onPress={() => {}} {...rest}>
      <Text>
        {
          Icon &&
          <Icon />
        }

        {title}
      </Text>
    </Container>
  );
};