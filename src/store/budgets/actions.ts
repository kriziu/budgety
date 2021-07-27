import { action } from 'typesafe-actions';
import store from '..';
import { BudgetType } from './types';
import { TransactionType } from '../transactions/types';
import { Constants } from './constants';

export const addBudgetAction = (budget: BudgetType) => {
  return action(Constants.ADD_BUDGET, { budget });
};

export const removeBudgetAction = (budgetId: number) => {
  return action(Constants.REMOVE_BUDGET, { budgetId });
};

export const editBudgetAction = (budget: BudgetType) => {
  return action(Constants.EDIT_BUDGET, { budget });
};

export const changeTransactions = () => {
  const transactions: TransactionType[] = store.getState().transactions;
  return action(Constants.CHANGE_TRANSACTIONS, { transactions });
};
