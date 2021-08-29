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

          if (transaction.repeat.repeat) {
            const hour = 1000 * 60 * 60 * transaction.repeat.every;
            const nowDate = new Date().getTime();
            const transactionDate = new Date(transaction.date).getTime();
            let multiplier = 1;

            switch (transaction.repeat.type) {
              case 'hours':
                multiplier = Math.floor((nowDate - transactionDate) / hour);
                break;
              case 'days':
                multiplier = Math.floor(
                  (nowDate - transactionDate) / (hour * 24)
                );
                break;
              case 'month':
                multiplier = Math.floor(
                  (nowDate - transactionDate) / (hour * 24 * 31)
                );
                break;
              case 'year':
                multiplier = Math.floor(
                  (nowDate - transactionDate) / (hour * 24 * 365)
                );
                break;
              default:
                multiplier = 1;
            }

            money = money + money * multiplier;
          }

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

        return budget;
      });
      return newState;

    case Constants.REMOVE_BUDGET_ALL:
      return [];

    default:
      return state;
  }
};
