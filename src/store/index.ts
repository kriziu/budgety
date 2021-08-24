import { GoogleLoginResponse } from 'react-google-login';
import { combineReducers, createStore, compose } from 'redux';

import { budgetsReducer } from './budgets/reducer';
import { BudgetsState } from './budgets/types';
import { currencyReducer } from './currency/reducer';
import { CurrencyType } from './currency/types';
import { googleUserReducer } from './googleUser/reducer';
import { loaderReducer } from './loader';
import { loadState, saveState } from './localstorage';
import { transactionReducer } from './transactions/reducer';
import { TransactionState } from './transactions/types';

export interface RootState {
  budgets: BudgetsState;
  transactions: TransactionState;
  googleUser: GoogleLoginResponse['profileObj'] | null;
  currency: CurrencyType;
  loader: boolean;
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
    googleUser: googleUserReducer,
    currency: currencyReducer,
    loader: loaderReducer,
  }),
  persistedState,
  composeEnhancers()
);

store.subscribe((): void => {
  const state = store.getState();
  // const persState = loadState() as RootState;

  const budgets = state.budgets.filter(budget => budget.userId === null);
  const transactions = state.transactions.filter(
    transaction => transaction.userId === null
  );
  const currency = state.currency;
  const loader = state.loader;

  if (state.googleUser === null)
    saveState({ budgets, transactions, currency, loader, googleUser: null });
});

export default store;
