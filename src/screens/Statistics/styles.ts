import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const BackButton = styled.TouchableOpacity`
  padding-left: 24px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
  align-self: center;
`;

export const Porcentage = styled.Text`
  align-self: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 16px;
`;

export const ContainerStatistics = styled.View`
  margin-top: 35px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  padding: 24px;
`;

export const StatisticsCard = styled.View`
  padding: 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-top: 12px;
  border-radius: 10px;
  justify-content: space-between;
`;

export const Quantity = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.L}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  align-self: center;
`;

export const StatisticsCardGreen = styled(StatisticsCard)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  flex: 1;
  margin-right: 12px

`;

export const StatisticsCardRed = styled(StatisticsCard)`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  flex: 1;
`;

export const ViewColors = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;