import React, { useEffect } from 'react';

import { Container, ListTitle, Title } from './styles';
import { Header } from '@components/Header';
import { StatisticBlock } from '@components/StatisticBlock';
import { Button } from '@components/Button';
import { ListItem } from '@components/ListItem';
import { Loading } from '@components/Loading';

import { SectionList } from 'react-native';

export function Dashboard() {

  const [isLoading, setIsLoading] = React.useState(false);
  const CONTENT = [
    {
      title: '12.04.2024',
      data: [
        { meal: 'Pizza asda asdas dasd asdasd as dasd asdaasd asd12', time: '10.00', inDietStatus: true },
        { meal: 'Burger22', time: '10.00', inDietStatus: true },
        { meal: 'Risottoee', time: '10.00', inDietStatus: true }
      ],
    },
    {
      title: '11.04.2024',
      data: [
        { meal:'Pizzaq', time: '10.00', inDietStatus: true},
        { meal:'Salada', time: '10.00', inDietStatus: true},
        { meal:'Pizza2', time: '10.00', inDietStatus: true},
        { meal:'Pizza3', time: '10.00', inDietStatus: true},
        { meal:'Burgea', time: '10.00', inDietStatus: true},
        { meal:'Risotto',time: '10.00', inDietStatus: true }
      ],
    },
    {
      title: '10.04.2024',
      data: [
        { meal:'Pizza', time: '10.00', inDietStatus: true },
        { meal:'Burger', time: '10.00', inDietStatus: true },
        { meal: 'Risotto2', time: '10.00', inDietStatus: true }
      ],
    },
  ];
      
  return (
    <Container>
      <Header showBackButton />
      <StatisticBlock />
      <Title>Meals</Title>
      <Button></Button>
      {isLoading ? <Loading /> :
        <SectionList
          sections={CONTENT}
          keyExtractor={(item, index) => item.meal + index}
          renderItem={({ item }) => <ListItem itemTitle={item.meal} itemTime={item.time} inDietStatus />}
          renderSectionHeader={({ section: { title } }) => (
            <ListTitle>{title}</ListTitle>
          )}
          showsVerticalScrollIndicator={false}
          CellRendererComponent={({ children }) => children}
        />
      }
    </Container>
  );
}
