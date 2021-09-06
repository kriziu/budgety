import { FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Container, StyledList } from './Elements';
import Budget from '../Budget';
import { RootState } from '../../../../store';
import '../../../../constant/style/animations.css';
import { Select } from '../../../Payments/components/TransactionList/Elements';
import { Label } from '../../../../components/Input';

const BudgetList: FC = (): JSX.Element => {
  const budgets = useSelector((state: RootState) => state.budgets);
  const [selectedSort, setSelectedSort] = useState('date');

  const renderBudgets = (): JSX.Element[] => {
    const sortedBudgets = [...budgets];
    sortedBudgets.sort((a, b) => {
      let compare: number;

      switch (selectedSort.split('_')[0]) {
        case 'title':
          compare = a.title.localeCompare(b.title);
          break;
        case 'date':
          compare = a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
          break;
        case 'amount':
          compare =
            a.amount.actual > b.amount.actual
              ? -1
              : a.amount.actual < b.amount.actual
              ? 1
              : 0;
          break;
        default:
          compare = 0;
          break;
      }

      return compare;
    });

    if (selectedSort.split('_')[1] === 'r') sortedBudgets.reverse();

    return sortedBudgets.map(budget => (
      <CSSTransition timeout={200} classNames="slide" key={budget._id}>
        <li>
          <Budget {...budget} />
        </li>
      </CSSTransition>
    ));
  };

  const handleSelectSortChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedSort(e.target.value);
  };

  return (
    <Container>
      <Label htmlFor="sortBy" style={{ marginTop: '3rem' }}>
        Sort by
      </Label>
      <Select
        id="sortBy"
        onChange={handleSelectSortChange}
        value={selectedSort}
      >
        <option value="date">Newest</option>
        <option value="date_r">Oldest</option>
        <option value="title">A...Z</option>
        <option value="title_r">Z...A</option>
        <option value="amount">Most money</option>
        <option value="amount_r">Least money</option>
      </Select>
      <StyledList>
        <TransitionGroup component={null}>{renderBudgets()}</TransitionGroup>
      </StyledList>
    </Container>
  );
};

export default BudgetList;
