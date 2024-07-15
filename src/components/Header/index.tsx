import logoImg from '../../assets/Logo.png';
import profileImg from '../../assets/Ellipse.png';
import { BackButton, Container, Logo, ProfileImg, Title } from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
};
export function Header({ showBackButton = false, title='' }: HeaderProps) {
  
  return (
    <Container>
      {!showBackButton ? (
        <>
          <BackButton ></BackButton>
          <Title></Title>
          </>
      ) : (
        <>
          <Logo source={logoImg} />
          <ProfileImg source={profileImg} />
        </>
      )}
  </Container>
  );
}