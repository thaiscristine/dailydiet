import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.M}px;

  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.M}px;
      color: ${theme.COLORS.WHITE};
      font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    padding: 10px;
`;
export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_100,
}))``;