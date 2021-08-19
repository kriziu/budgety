import { action } from 'typesafe-actions';
import { CurrencyType } from './types';
import { Constants } from './constants';

export const updateCurrency = (currency: CurrencyType) => {
  return action(Constants.UPDATE_CURRENCY, { currency });
};

export const setPrimaryCurrency = (currencyString: string) => {
  return action(Constants.SET_PRIMARY_CURRENCY, { currencyString });
};
