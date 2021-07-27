import { Constants } from './constants';
import { TransactionActions, TransactionState } from './types';

export const transactionReducer = (
  state: TransactionState = [],
  action: TransactionActions
) => {
  let newState = state;

  switch (action.type) {
    case Constants.ADD_TRANSACTION:
      return [...state, action.payload.transaction];

    case Constants.REMOVE_TRANSACTION:
      newState = state.filter(
        transaction => transaction.id !== action.payload.transactionId
      );
      return newState;

    case Constants.REMOVE_TRANSACTIONS_BUDGET:
      newState = state.filter(
        transaction => transaction.budgetId !== action.payload.budgetId
      );
      return newState;

    case Constants.EDIT_TRANSACTION:
      newState = state.map(transaction => {
        if (transaction.id === action.payload.transaction.id) {
          return action.payload.transaction;
        }
        return transaction;
      });
      return newState;

    default:
      return state;
  }
};
