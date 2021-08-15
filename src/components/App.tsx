import { FC } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import GlobalStyle from './GlobalStyles';
import NavBar from './NavBar';
import { breakpoints } from '../constant/style/breakpoints';
import AnimatedRouter from './AnimatedRouter';
import { useEffect } from 'react';
import { BudgetType } from '../store/budgets/types';
import { useDispatch, useSelector } from 'react-redux';
import { addBudgetAction, changeTransactions } from '../store/budgets/actions';
import { RootState } from '../store';
import { TransactionType } from '../store/transactions/types';
import { addTransactionAction } from '../store/transactions/actions';
import { dbUrl } from '../constant/routes';

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

  useEffect(() => {
    const fetchData = async () => {
      const budgets: BudgetType[] = await (
        await axios.get(`${dbUrl}/budgets`, {
          params: {
            userId: googleUser?.googleId,
          },
        })
      ).data;

      const transactions: TransactionType[] = await (
        await axios.get(`${dbUrl}/transactions`, {
          params: {
            userId: googleUser?.googleId,
          },
        })
      ).data;

      console.log(budgets);
      console.log(transactions);
      budgets.forEach(budget => {
        budget.date = new Date(budget.date);
        dispatch(addBudgetAction(budget));
      });

      transactions.forEach(transaction => {
        transaction.date = new Date(transaction.date);
        dispatch(addTransactionAction(transaction));
      });

      dispatch(changeTransactions());
    };

    if (googleUser) fetchData();
  }, [googleUser, dispatch]);

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
