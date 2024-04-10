import React from 'react';

import { Container, Title } from './styles';
import { Header } from '@components/Header';
import { StatisticBlock } from '@components/StatisticBlock';
import { Button } from '@components/Button';

export function Dashboard() {
  return (
    <Container>
      <Header showBackButton />
      <StatisticBlock />
      <Title>Meals </Title>
      <Button></Button>
    </Container>  
  );
};
