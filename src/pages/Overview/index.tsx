import { FC } from 'react';
import { Header } from '../../components/Form/Elements';
import FrequentTransactionsList from './components/FrequentTransactionsList';
import MoneyLastMonth from './components/MoneyLastMonth';
import MostValuableBudget from './components/MostValuableBudget';

const Overview: FC = () => {
  return (
    <>
      <Header>Overview</Header>
      <MoneyLastMonth />
      <MostValuableBudget />
      <FrequentTransactionsList />
    </>
  );
};

export default Overview;
