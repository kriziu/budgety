import { FC } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '../../../../store';
import { handleEnterPressed } from '../../../../utils/utility';
import Transaction from '../../../Payments/components/Transaction';
import { NoMessage } from '../../../../components/Header';
import { Dash } from '../MoneyLastMonth/Elements';
import { Header4 } from '../../../../components/Header';
import { Container } from './Elements';

const FrequentTransactionsList: FC = (): JSX.Element => {
  const history = useHistory();
  const transactions = useSelector((state: RootState) => state.transactions)
    .filter(transaction => !transaction.repeat.repeat)
    .sort((a, b) => {
      return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
    })
    .slice(0, 3);

  const transactionsRepeated = useSelector(
    (state: RootState) => state.transactions
  )
    .filter(transaction => transaction.repeat.repeat)
    .sort((a, b) => {
      return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
    })
    .slice(0, 3);

  const renderTransactions = (): JSX.Element[] => {
    return transactions.map(transaction => {
      return (
        <li key={transaction._id}>
          <Transaction {...transaction} deletable={false} />
        </li>
      );
    });
  };

  const renderTransactionsRepeated = (): JSX.Element[] => {
    return transactionsRepeated.map(transaction => {
      return (
        <li key={transaction._id}>
          <Transaction {...transaction} deletable={false} />
        </li>
      );
    });
  };

  return (
    <>
      <div>
        <Header4 style={{ marginTop: '8rem' }}>
          Repeat Payments{' '}
          <Dash
            tabIndex={0}
            onClick={() => history.push('payments')}
            onKeyPress={e =>
              handleEnterPressed(e, () => history.push('payments'))
            }
          >
            See all
          </Dash>
        </Header4>
        <Container>
          {' '}
          {transactionsRepeated.length ? (
            renderTransactionsRepeated()
          ) : (
            <NoMessage style={{ marginTop: '1.5rem' }}>
              There is no payments
            </NoMessage>
          )}
        </Container>
      </div>
      <div>
        <Header4 style={{ marginTop: '8rem' }}>
          Frequent Payments{' '}
          <Dash
            tabIndex={0}
            onClick={() => history.push('payments')}
            onKeyPress={e =>
              handleEnterPressed(e, () => history.push('payments'))
            }
          >
            See all
          </Dash>
        </Header4>

        <Container>
          {' '}
          {transactions.length ? (
            renderTransactions()
          ) : (
            <NoMessage style={{ marginTop: '1.5rem' }}>
              There is no payments
            </NoMessage>
          )}
        </Container>
      </div>
    </>
  );
};

export default FrequentTransactionsList;
