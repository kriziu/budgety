import { FC } from 'react';

import { Header2 } from '../../components/Header';
import FrequentTransactionsList from './components/FrequentTransactionsList';
import MoneyLastMonth from './components/MoneyLastMonth';
import MostValuableBudget from './components/MostValuableBudget';

const Overview: FC = () => {
  return (
    <div>
      <Header2>Overview</Header2>
      <MoneyLastMonth />
      <MostValuableBudget />
      <FrequentTransactionsList />
    </div>
  );
};

export default Overview;
