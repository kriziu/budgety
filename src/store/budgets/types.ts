import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface BudgetType {
  id: string;
  userId: string | null;
  title: string;
  amount: {
    actual: number;
    diff: number;
    starting: number;
  };
  date: Date;
}

export type BudgetsState = BudgetType[];

export type BudgetsActions = ActionType<typeof actions>;
