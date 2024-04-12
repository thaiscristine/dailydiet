import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'
import { View } from "react-native";

export type StatisticBlockProps = true | false;

type StatisticBlockComponentStyleProps = {
  isGreen: StatisticBlockProps;
}

export const Container = styled(View)<StatisticBlockComponentStyleProps>`
  background-color: ${({ theme, isGreen }) => isGreen ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  width: 100%;
  
  border-radius: 10px;
  margin-top: 20px;
  padding: 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonMore = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
  color: red;
`;


export const Icon = styled(ArrowUpRight).attrs<StatisticBlockComponentStyleProps>(({ theme, isGreen }) => ({
  size: 32,
  color: isGreen ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const Porcentage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 5px;
`;