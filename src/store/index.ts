import { combineReducers, createStore, compose } from 'redux';

import { budgetsReducer } from './budgets/reducer';
import { BudgetsState } from './budgets/types';
import { loadState, saveState } from './localstorage';
import { transactionReducer } from './transactions/reducer';
import { TransactionState } from './transactions/types';

export interface RootState {
  budgets: BudgetsState;
  transactions: TransactionState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(
  combineReducers<RootState>({
    budgets: budgetsReducer,
    transactions: transactionReducer,
  }),
  persistedState,
  composeEnhancers()
);

store.subscribe((): void => {
  saveState({ ...store.getState() });
});

export default store;
