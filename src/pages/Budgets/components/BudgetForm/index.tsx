import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { RootState } from '../../../../store';
import { addBudgetAction } from '../../../../store/budgets/actions';
import { BudgetType } from '../../../../store/budgets/types';
import Form from '../../../../components/Form';
import { dbUrl } from '../../../../constant/routes';

const BudgetForm: FC = () => {
  const dispatch = useDispatch();
  const googleUser = useSelector((state: RootState) => state.googleUser);

  const handleSubmit = (
    title: string,
    amount: number,
    currency: string
  ): void => {
    const newBudget: BudgetType = {
      id: uuidv4(),
      userId: googleUser?.googleId ? googleUser?.googleId : null,
      title: title,
      amount: { actual: amount, currency, diff: 0, starting: amount },
      date: new Date(),
    };

    dispatch(addBudgetAction(newBudget));

    if (googleUser)
      axios.post(`${dbUrl}/budgets`, {
        ...newBudget,
      });
  };

  return <Form handleSubmit={handleSubmit} />;
};

export default BudgetForm;
