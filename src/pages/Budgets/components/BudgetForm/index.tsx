import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { RootState } from '../../../../store';
import { addBudgetAction } from '../../../../store/budgets/actions';
import { BudgetType } from '../../../../store/budgets/types';
import Form from '../../../../components/Form';
import { dbUrl } from '../../../../constant/routes';
import { setLoaderAction, unsetLoaderAction } from '../../../../store/loader';

const BudgetForm: FC = () => {
  const dispatch = useDispatch();
  const googleUser = useSelector((state: RootState) => state.googleUser);

  const handleSubmit = (
    title: string,
    amount: number,
    currency: string
  ): void => {
    const newBudget: BudgetType = {
      _id: uuidv4(),
      userId: googleUser ? googleUser?.googleId : null,
      title: title,
      amount: { actual: amount, currency, diff: 0, starting: amount },
      date: new Date(),
    };

    if (googleUser) {
      dispatch(setLoaderAction());

      axios
        .post(`${dbUrl}/budgets`, {
          ...newBudget,
        })
        .then(budget => {
          dispatch(addBudgetAction(budget.data));
          dispatch(unsetLoaderAction());
        });
    } else dispatch(addBudgetAction(newBudget));
  };

  return <Form handleSubmit={handleSubmit} pageTitle="Budgets" />;
};

export default BudgetForm;
