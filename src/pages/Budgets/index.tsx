import { FC } from 'react';

import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';

const Budgets: FC = (): JSX.Element => {
  return (
    <>
      <BudgetForm />
      <BudgetList />
    </>
  );
};

export default Budgets;
