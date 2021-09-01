import { FC } from 'react';
import { Header } from '../../components/Form/Elements';
import MoneyLastMonth from './components/MoneyLastMonth';
import MostValuableBudget from './components/MostValuableBudget';

const Overview: FC = () => {
  return (
    <>
      <Header>Overview</Header>
      <MoneyLastMonth />
      <MostValuableBudget />
    </>
  );
};

export default Overview;
