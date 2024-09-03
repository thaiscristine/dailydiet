import logoImg from '../../assets/Logo.png';
import profileImg from '../../assets/Ellipse.png';
import { BackButton, Container, Logo, ProfileImg } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackIcon } from '@screens/NewMeal/styles';

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
};
export function Header({ showBackButton = false, title='' }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoNewMeal() {
    navigation.navigate('dashboard');
  }
  return (
    <Container>
      {!showBackButton ? (
        <>
          <BackButton onPress={handleGoNewMeal}>
            <BackIcon></BackIcon>
          </BackButton>
          {/* <Title></Title> */}
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