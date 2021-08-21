import { FC, useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyles';
import NavBar from './NavBar';
import { breakpoints } from '../constant/style/breakpoints';
import AnimatedRouter from './AnimatedRouter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBudgetAction,
  changeTransactions,
  removeAllBudgetsAction,
} from '../store/budgets/actions';
import { RootState } from '../store';
import {
  addTransactionAction,
  removeAllTransactionsAction,
} from '../store/transactions/actions';
import { setPrimaryCurrency, updateCurrency } from '../store/currency/actions';
import { useRef } from 'react';
import { currencyExchangeAPI } from '../api/currencyExchange';
import { dbAPI } from '../api/db';

const Container = styled.div`
  width: 100vw;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoints.desktop}) {
    width: 75vw;
  }
`;

const App: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const googleUser = useSelector((state: RootState) => state.googleUser);
  const currencyFromState = useSelector((state: RootState) => state.currency);
  const firstRender = useRef(true);

  // DATABASE
  useEffect(() => {
    if (!firstRender.current) {
      dispatch(removeAllTransactionsAction());
      setTimeout(() => dispatch(removeAllBudgetsAction()), 250);
      dispatch(changeTransactions());
    }

    if (googleUser) {
      dbAPI(googleUser).then(response => {
        response.budgets.forEach(budget => {
          dispatch(addBudgetAction(budget));
        });
        response.transactions.forEach(transaction => {
          dispatch(addTransactionAction(transaction));
        });

        dispatch(setPrimaryCurrency(response.userCurrency));

        dispatch(changeTransactions());
      });
    }

    return () => {
      firstRender.current = false;
    };
  }, [googleUser, dispatch]);

  // CURRENCY
  useEffect(() => {
    currencyExchangeAPI(currencyFromState).then(currency => {
      dispatch(updateCurrency(currency));
    });
  }, [currencyFromState, dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <NavBar />
          <main style={{ position: 'relative' }}>
            <AnimatedRouter />
          </main>
        </Router>
      </Container>
    </>
  );
};

export default App;
