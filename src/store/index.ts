import { GoogleLoginResponse } from 'react-google-login';
import { combineReducers, createStore, compose } from 'redux';

import { budgetsReducer } from './budgets/reducer';
import { BudgetsState } from './budgets/types';
import { currencyReducer } from './currency/reducer';
import { CurrencyType } from './currency/types';
import { googleUserReducer } from './googleUser/reducer';
import { loaderReducer } from './loader';
import { loadState, saveState } from './localstorage';
import { themeReducer } from './theme';
import { transactionReducer } from './transactions/reducer';
import { TransactionState } from './transactions/types';

export interface RootState {
  budgets: BudgetsState;
  transactions: TransactionState;
  googleUser: GoogleLoginResponse['profileObj'] | null;
  currency: CurrencyType;
  loader: boolean;
  theme: 'light' | 'dark';
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
    theme: themeReducer,
  }),
  persistedState,
  composeEnhancers()
);

store.subscribe((): void => {
  const state = store.getState();

  const budgets = state.budgets.filter(budget => budget.userId === null);
  const transactions = state.transactions.filter(
    transaction => transaction.userId === null
  );

  if (state.googleUser === null)
    saveState({
      ...state,
      budgets,
      transactions,
      googleUser: null,
    });
  else {
    const localState = loadState();

    localState && saveState({ ...localState, theme: state.theme });
  }
});

export default store;
