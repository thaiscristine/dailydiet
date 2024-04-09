import React from 'react';

import { Container } from './styles';
import { Header } from '@components/Header';
import { StatisticBlock } from '@components/StatisticBlock';

export function Dashboard() {
  return (
    <Container>
      <Header showBackButton />
      <StatisticBlock />
    </Container>  
  );
};
