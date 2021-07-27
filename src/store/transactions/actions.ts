import { action } from 'typesafe-actions';
import { TransactionType } from './types';
import { Constants } from './constants';

export const addTransactionAction = (transaction: TransactionType) => {
  return action(Constants.ADD_TRANSACTION, { transaction });
};

export const removeTransactionAction = (transactionId: number) => {
  return action(Constants.REMOVE_TRANSACTION, { transactionId });
};

export const removeTransactionsByBudgetIdAction = (budgetId: number) => {
  return action(Constants.REMOVE_TRANSACTIONS_BUDGET, { budgetId });
};

export const editTransactionAction = (transaction: TransactionType) => {
  return action(Constants.EDIT_TRANSACTION, { transaction });
};
