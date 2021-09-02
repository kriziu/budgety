import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import Transaction from '../../../Payments/components/Transaction';

import { Container, Header } from './Elements';

const FrequentTransactionsList: FC = (): JSX.Element => {
  const transactions = useSelector((state: RootState) =>
    state.transactions
      .sort((a, b) => {
        return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
      })
      .slice(0, 3)
  );

  const renderTransactions = (): JSX.Element[] => {
    return transactions.map(transaction => {
      return (
        <Transaction {...transaction} key={transaction._id} deletable={false} />
      );
    });
  };

  return (
    <>
      <Header>Frequent Payments</Header>
      <Container>{transactions && renderTransactions()}</Container>
    </>
  );
};

export default FrequentTransactionsList;
