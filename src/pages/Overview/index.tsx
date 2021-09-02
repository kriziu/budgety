import { FC } from 'react';
import { Header } from '../../components/Form/Elements';
import FrequentTransactionsList from './components/FrequentTransactionsList';
import MoneyLastMonth from './components/MoneyLastMonth';
import MostValuableBudget from './components/MostValuableBudget';

const Overview: FC = () => {
  return (
    <div>
      <Header>Overview</Header>
      <MoneyLastMonth />
      <MostValuableBudget />
      <FrequentTransactionsList />
    </div>
  );
};

export default Overview;
