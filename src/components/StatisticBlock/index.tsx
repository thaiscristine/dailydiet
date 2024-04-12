import { Text } from "react-native";

import { ButtonMore, Container, Icon, Porcentage } from "./styles";
import { useNavigation } from "@react-navigation/native";

type StatisticBlockProps = {
  isGreen?: boolean;
};

export function StatisticBlock({ isGreen = true }: StatisticBlockProps) {

  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate('statistics', { isGreen });
  }
  
  return (
    <Container isGreen>
      <ButtonMore
        onPress={handleOpenStatistics}
      >
        <Icon isGreen />
      </ButtonMore>
      <Porcentage>90,56%</Porcentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
