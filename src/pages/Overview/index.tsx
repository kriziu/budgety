import { FC } from 'react';
import styled from 'styled-components';

import { Header2 } from '../../components/Header';
import { breakpoints } from '../../constant/style/breakpoints';
import FrequentTransactionsList from './components/FrequentTransactionsList';
import MoneyLastMonth from './components/MoneyLastMonth';
import MostValuableBudget from './components/MostValuableBudget';

const Container = styled.div`
  display: block;

  @media (min-width: ${breakpoints.laptop}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 75%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const Overview: FC = () => {
  return (
    <div>
      <Header2>Overview</Header2>
      <MoneyLastMonth />
      <Container>
        <MostValuableBudget />
        <FrequentTransactionsList />
      </Container>
    </div>
  );
};

export default Overview;
