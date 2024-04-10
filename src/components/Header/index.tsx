import logoImg from '../../assets/Logo.png';
import profileImg from '../../assets/Ellipse.png';
import { BackButton, Container, Logo, ProfileImg, Title } from "./styles";

type HeaderProps = {
    showBackButton?: boolean;
};
export function Header({ showBackButton = false }: HeaderProps) {
  
  return (
    <Container>
    {!showBackButton && (
      <BackButton ></BackButton>
    )}
    <Logo source={logoImg} />
    <ProfileImg source={profileImg} />
  </Container>
  );
}