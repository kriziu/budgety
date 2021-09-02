import { FC } from 'react';

import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';

const Budgets: FC = (): JSX.Element => {
  return (
    <div>
      <BudgetForm />
      <BudgetList />
    </div>
  );
};

export default Budgets;
