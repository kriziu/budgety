import { Constants } from './constants';
import { CurrencyActions, CurrencyType } from './types';

export const currencyReducer = (
  state: CurrencyType = {
    source: 'USD',
    currencies: {},
    primaryCurrency: 'USD',
  },
  action: CurrencyActions
) => {
  switch (action.type) {
    case Constants.UPDATE_CURRENCY:
      return action.payload.currency;

    case Constants.SET_PRIMARY_CURRENCY:
      return { ...state, primaryCurrency: action.payload.currencyString };

    default:
      return state;
  }
};
