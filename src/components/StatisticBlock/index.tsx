import { Text } from "react-native";

import { ButtonMore, Container, Icon, Porcentage } from "./styles";

type StatisticBlockProps = {
  isGreen?: boolean;
};

export function StatisticBlock({ isGreen = true }: StatisticBlockProps) {
  return (
    <Container isGreen>
      <ButtonMore>
        <Icon isGreen />
      </ButtonMore>
      <Porcentage>90,56%</Porcentage>
      <Text>das refeições dentro da dieta</Text>
    </Container>
  );
}
