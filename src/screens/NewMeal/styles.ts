import styled from "styled-components/native";

import { SafeAreaView } from 'react-native-safe-area-context';
import { CaretLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  padding-left: 24px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const Button = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-top: 20px;
`;