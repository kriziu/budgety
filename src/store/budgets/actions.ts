import { action } from 'typesafe-actions';
import store from '..';
import { BudgetType } from './types';
import { TransactionType } from '../transactions/types';
import { Constants } from './constants';
import { CurrencyType } from '../currency/types';

export const addBudgetAction = (budget: BudgetType) => {
  return action(Constants.ADD_BUDGET, { budget });
};

export const removeBudgetAction = (budgetId: string) => {
  return action(Constants.REMOVE_BUDGET, { budgetId });
};

export const editBudgetAction = (budget: BudgetType) => {
  return action(Constants.EDIT_BUDGET, { budget });
};

export const changeTransactions = () => {
  const transactions: TransactionType[] = store.getState().transactions;
  const currency: CurrencyType = store.getState().currency;
  return action(Constants.CHANGE_TRANSACTIONS, { transactions, currency });
};

export const removeAllBudgetsAction = () => {
  return action(Constants.REMOVE_BUDGET_ALL);
};
