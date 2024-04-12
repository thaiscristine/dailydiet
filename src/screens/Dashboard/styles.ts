import styled from "styled-components/native";

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-top: 20px;
`;

export const ListTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 20px 0 5px;
`;

