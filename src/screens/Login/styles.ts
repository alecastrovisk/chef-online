import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.danger};
`;

export const Text = styled.Text`
  font-size: 24px;
`;