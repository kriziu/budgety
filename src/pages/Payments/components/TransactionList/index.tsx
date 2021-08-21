import { FC } from 'react';

import { useSelector } from 'react-redux';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RootState } from '../../../../store';
import Transaction from '../Transaction';
import { List } from './Elements';
import '../../../../constant/style/animations.css';

const TransactionList: FC = (): JSX.Element => {
  const transactions = useSelector((state: RootState) => state.transactions);

  const renderTransactions = (): JSX.Element[] => {
    return transactions.map(transaction => (
      <CSSTransition timeout={200} classNames="slide" key={transaction._id}>
        <li>
          <Transaction {...transaction} />
        </li>
      </CSSTransition>
    ));
  };

  return (
    <List>
      <TransitionGroup component={null}>{renderTransactions()}</TransitionGroup>
    </List>
  );
};

export default TransactionList;
