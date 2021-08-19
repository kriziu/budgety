import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface multiplier {
  [key: string]: number;
}

export interface CurrencyType {
  dateFetched: Date;
  source: String;
  currencies: multiplier;
  primaryCurrency: string;
}

export type CurrencyActions = ActionType<typeof actions>;
