import { Container } from "./styles";
import { Button, Input } from '@screens/NewMeal/styles';

type FormProps = {
  title?: string;
};

export function Form({ title='' }: FormProps) {
  return (
    <Container>
      {/* <Title>{title}</Title> */}
      <Input placeholder="Nome da refeição" />
      <Input placeholder="Calorias" />
      <Input placeholder="Data" />
      <Button>add</Button>      
  </Container>
  );
}