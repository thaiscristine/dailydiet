import { Text, View } from 'react-native';
import { Container, Divider, Item, LeftInfo, Status, Time } from './styles';

type ListItemProps = {
  itemTitle: string;
  itemTime: string;
  inDietStatus: boolean;
};  

export function ListItem({ itemTitle, itemTime, inDietStatus }: ListItemProps) {
  return (
    <>
      <Container>
        <LeftInfo>
          <Time>{itemTime}</Time>
          <Divider>|</Divider>
          <Item>{itemTitle}</Item>
        </LeftInfo>
        <Status isDiet>{inDietStatus}</Status>
      </Container>
    </>
  );
}