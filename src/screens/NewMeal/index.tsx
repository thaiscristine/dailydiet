import { BackIcon, Container, Input, Title, Button } from "./styles";
import { BackButton } from "@components/Header/styles";
import { useNavigation } from "@react-navigation/native";


export function NewMeal() {
  const navigation = useNavigation();

  function handleGoNewMeal() {
    navigation.navigate('dashboard');
  }
    return (
      <Container>
          <BackButton onPress={handleGoNewMeal}>
            <BackIcon />
          </BackButton>
          <Title>Adicionar nova refeição</Title>
          <Input placeholder="Nome da refeição" />
          <Input placeholder="Calorias" />
          <Input placeholder="Data" />
          <Button>add</Button>
        </Container>
    );
} 