import { Text, View } from "react-native";
import {
  BackButton,
  BackIcon,
  Container,
  ContainerStatistics,
  Description,
  Porcentage,
  StatisticsCard,
  Title,
  StatisticsCardGreen,
  StatisticsCardRed,
  ViewColors,
  Quantity
} from "./styles";
import { useNavigation } from "@react-navigation/native";

type StatisticScreenProps = {
  isGreen?: boolean;
};

export function Statistics({ isGreen = true }: StatisticScreenProps) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('dashboard');
  }
  
  return (
    <Container isGreen>

      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>

      <Porcentage>100%</Porcentage>
      <Description>of the meals in the diet</Description>

      <ContainerStatistics>

        <Title>General Statistics</Title>

        <StatisticsCard>
          <Quantity>22</Quantity>
          <Description>Best sequence</Description>
        </StatisticsCard>

        <StatisticsCard>
          <Quantity>22</Quantity>
          <Description>meals registered</Description>
        </StatisticsCard>

        <ViewColors>
          <StatisticsCardGreen>
            <Quantity>22</Quantity>
            <Text>meals in the diet</Text>
          </StatisticsCardGreen>
          <StatisticsCardRed>
            <Quantity>2</Quantity>
            <Text>meals out of the diet</Text>
          </StatisticsCardRed>
        </ViewColors>
      </ContainerStatistics>
    </Container>
  );
}