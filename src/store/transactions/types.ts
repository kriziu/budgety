import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface TransactionType {
  id: string;
  budgetId: string;
  currency: string;
  userId: string | null;
  title: string;
  amount: number;
  date: Date;
}

export type TransactionState = TransactionType[];

export type TransactionActions = ActionType<typeof actions>;
