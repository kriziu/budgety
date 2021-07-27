import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { addBudgetAction } from '../../../../store/budgets/actions';
import { getUniqueId } from '../../../../utils/utility';
import { BudgetType } from '../../../../store/budgets/types';
import Form from '../../../../components/Form';

const BudgetForm: FC = () => {
  const dispatch = useDispatch();
  const budgets = useSelector((state: RootState) => state.budgets);

  const handleSubmit = (title: string, amount: number): void => {
    const newBudget: BudgetType = {
      id: getUniqueId(budgets),
      title: title,
      amount: { actual: amount, diff: 0, starting: amount },
      date: new Date(),
    };

    dispatch(addBudgetAction(newBudget));
  };

  return <Form handleSubmit={handleSubmit} />;
};

export default BudgetForm;
