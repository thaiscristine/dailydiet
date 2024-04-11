import React from 'react';

import { Container, ListTitle, Title } from './styles';
import { Header } from '@components/Header';
import { StatisticBlock } from '@components/StatisticBlock';
import { Button } from '@components/Button';
import { ListItem } from '@components/ListItem';
import { Loading } from '@components/Loading';

import { SectionList } from 'react-native';

export function Dashboard() {

  const [isLoading, setIsLoading] = React.useState(false);
  const DATA = [
    {
      title: 'Main dishes',
      data: [
        { meal: 'Pizza', time: '10.00', inDietStatus: true  },
        { meal: 'Burger', time: '10.00', inDietStatus: true},
        { meal: 'Risotto', time: '10.00', inDietStatus: true }
      ],
    },
    {
      title: 'Sides',
      data: [
        { meal:'Pizza', time: '10.00', inDietStatus: true},
        { meal:'Pizza', time: '10.00', inDietStatus: true},
        { meal:'Pizza', time: '10.00', inDietStatus: true},
        { meal:'Pizza', time: '10.00', inDietStatus: true},
        { meal:'Burger', time: '10.00', inDietStatus: true},
        { meal: 'Risotto', time: '10.00', inDietStatus: true }
      ],
    },
    {
      title: 'Drinks',
      data: [
        { meal:'Pizza', time: '10.00', inDietStatus: true},
        { meal:'Burger', time: '10.00', inDietStatus: true},
        { meal: 'Risotto', time: '10.00', inDietStatus: true }
      ],
    },
  ];
  return (
    <Container>
      <Header showBackButton />
      <StatisticBlock />
      <Title>Meals </Title>
      <Button></Button>
      {isLoading ? <Loading /> :
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.meal + index}
          renderItem={({ item }) => <ListItem itemTitle={item.meal} itemTime={item.time} inDietStatus />}
          renderSectionHeader={({ section: { title } }) => (
            <ListTitle>{title}</ListTitle>
          )}
        />
      }
    </Container>
  );
}
