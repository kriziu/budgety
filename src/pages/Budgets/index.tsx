import { FC } from 'react';

import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';
import AllMoney from '../../components/AllMoney';

const Budgets: FC = (): JSX.Element => {
  return (
    <div>
      <AllMoney />
      <BudgetForm />
      <BudgetList />
    </div>
  );
};

export default Budgets;
