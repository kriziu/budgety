import { FC, useState } from 'react';

import { useSelector } from 'react-redux';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RootState } from '../../../../store';
import Transaction from '../Transaction';
import { List, Select } from './Elements';
import '../../../../constant/style/animations.css';
import { Label } from '../../../../components/Form/Elements';
import { Container } from './Elements';

const TransactionList: FC = (): JSX.Element => {
  const transactions = useSelector((state: RootState) => state.transactions);
  const budgets = useSelector((state: RootState) => state.budgets);
  const [selectedBudgetId, setSelectedBudgetId] = useState('');
  const [selectedSort, setSelectedSort] = useState('date');

  const renderTransactions = (): (JSX.Element | undefined)[] => {
    const selectedTransactions = selectedBudgetId
      ? transactions.filter(
          transaction => transaction.budgetId === selectedBudgetId
        )
      : transactions;

    selectedTransactions.sort((a, b) => {
      let compare: number;

      switch (selectedSort.split('_')[0]) {
        case 'title':
          compare = a.title.localeCompare(b.title);
          break;
        case 'date':
          compare = a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
          break;
        case 'amount':
          compare = a.amount > b.amount ? -1 : a.amount < b.amount ? 1 : 0;
          break;
        default:
          compare = 0;
          break;
      }

      return compare;
    });

    if (selectedSort.split('_')[1] === 'r') selectedTransactions.reverse();

    return selectedTransactions.map(transaction => {
      return (
        <CSSTransition timeout={200} classNames="slide" key={transaction._id}>
          <li>
            <Transaction {...transaction} />
          </li>
        </CSSTransition>
      );
    });
  };

  const renderOptions = (): JSX.Element[] => {
    return budgets.map(budget => (
      <option key={budget._id} value={budget._id}>
        {budget.title}: {budget.amount.actual.toFixed(2)}{' '}
        {budget.amount.currency}
      </option>
    ));
  };

  const handleSelectFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedBudgetId(e.target.value);
  };

  const handleSelectSortChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedSort(e.target.value);
  };

  return (
    <Container>
      <Label>Filter transactions</Label>
      <Select onChange={handleSelectFilterChange} value={selectedBudgetId}>
        <option value="">All</option>
        {renderOptions()}
      </Select>
      <Label style={{ marginTop: '3rem' }}>Sort by</Label>
      <Select onChange={handleSelectSortChange} value={selectedSort}>
        <option value="date">Newest</option>
        <option value="date_r">Oldest</option>
        <option value="title">A...Z</option>
        <option value="title_r">Z...A</option>
        <option value="amount">Most money</option>
        <option value="amount_r">Least money</option>
      </Select>
      <List>
        <TransitionGroup component={null}>
          {renderTransactions()}
        </TransitionGroup>
      </List>
    </Container>
  );
};

export default TransactionList;
