import { getMultiplier } from '../../utils/utility';
import { Constants } from './constants';
import { BudgetsActions, BudgetsState } from './types';

export const budgetsReducer = (
  state: BudgetsState = [],
  action: BudgetsActions
) => {
  let newState = state;

  switch (action.type) {
    case Constants.ADD_BUDGET:
      return [...state, action.payload.budget];

    case Constants.REMOVE_BUDGET:
      newState = state.filter(budget => budget._id !== action.payload.budgetId);
      return newState;

    case Constants.EDIT_BUDGET:
      newState = state.map(budget => {
        if (budget._id === action.payload.budget._id) {
          return action.payload.budget;
        }
        return budget;
      });
      return newState;

    case Constants.CHANGE_TRANSACTIONS:
      newState = state.map(budget => {
        budget.amount.actual = budget.amount.starting;
        const currency = action.payload.currency;

        action.payload.transactions.forEach(transaction => {
          let money =
            (transaction.amount / currency.currencies[transaction.currency]) *
            currency.currencies[budget.amount.currency];

          const multiplier = getMultiplier(transaction);

          if (transaction.repeat.repeat) money = money + money * multiplier;

          if (transaction.budgetId === budget._id) {
            budget = {
              ...budget,
              amount: {
                ...budget.amount,
                actual: budget.amount.actual + money,
              },
            };
          }
        });

        budget = {
          ...budget,
          amount: {
            ...budget.amount,
            diff: budget.amount.actual - budget.amount.starting,
          },
        };

        return budget;
      });
      return newState;

    case Constants.REMOVE_BUDGET_ALL:
      return [];

    default:
      return state;
  }
};
