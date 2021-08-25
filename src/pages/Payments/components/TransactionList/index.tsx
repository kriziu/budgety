import { FC } from 'react';

import { useSelector } from 'react-redux';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RootState } from '../../../../store';
import Transaction from '../Transaction';
import { List, Select } from './Elements';
import '../../../../constant/style/animations.css';
import { Label } from '../../../../components/Form/Elements';
import { useState } from 'react';

const TransactionList: FC = (): JSX.Element => {
  const transactions = useSelector((state: RootState) => state.transactions);
  const budgets = useSelector((state: RootState) => state.budgets);
  const [selectedBudgetId, setSelectedBudgetId] = useState('');

  const renderTransactions = (): (JSX.Element | undefined)[] => {
    return transactions.map(transaction => {
      if (!selectedBudgetId)
        return (
          <CSSTransition timeout={200} classNames="slide" key={transaction._id}>
            <li>
              <Transaction {...transaction} />
            </li>
          </CSSTransition>
        );
      else if (transaction.budgetId === selectedBudgetId)
        return (
          <CSSTransition timeout={200} classNames="slide" key={transaction._id}>
            <li>
              <Transaction {...transaction} />
            </li>
          </CSSTransition>
        );
      return undefined;
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

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedBudgetId(e.target.value);
  };

  return (
    <div style={{ margin: '4rem auto', padding: '0 4rem' }}>
      <Label>Filter transactions</Label>
      <Select onChange={handleSelectChange}>
        <option value="">All</option>
        {renderOptions()}
      </Select>
      <List>
        <TransitionGroup component={null}>
          {renderTransactions()}
        </TransitionGroup>
      </List>
    </div>
  );
};

export default TransactionList;
