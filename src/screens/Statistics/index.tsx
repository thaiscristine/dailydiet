import { Text } from "react-native";
import { Container } from "./styles";

export function Statistics() {
  return (
    <Container>
      <BackButton>
        <BackIcon />
      </BackButton>
      <Porcentage>100%</Porcentage>
      <Text>of the meals in the diet</Text>
      <ContainerStatistics>
        <Text>General Statistics</Text>
        <StatisticsCard>
          <Text>Calories</Text>
          <Text>2000</Text>
        </StatisticsCard>
        <StatisticsCard>
          <Text>Proteins</Text>
          <Text>200g</Text>
        </StatisticsCard>
        <StatisticsCardGreen>
          <Text>Carbs</Text>
          <Text>200g</Text>
        </StatisticsCardGreen>
        <StatisticsCardRed>
          <Text>Fats</Text>
          <Text>200g</Text>
        </StatisticsCardRed>
      </ContainerStatistics>
    </Container>
  );
}