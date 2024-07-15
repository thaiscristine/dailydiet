import { Container, Title, Icon } from "./styles";

import { Text } from "react-native"


type NewMealnButtonProps = {
  handler: () => void;
};

export function Button({ handler }: NewMealnButtonProps) {
  return (
    <Container
        onPress={handler}
        // colorType={colorType}
        // {...rest}
    >
      <Icon />
      <Title>New meal</Title>
    </Container>
  );
}