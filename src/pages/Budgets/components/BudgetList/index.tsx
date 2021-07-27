import { FC } from 'react';

import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { StyledList } from './Elements';
import Budget from '../Budget';
import { RootState } from '../../../../store';
import '../../../../constant/style/animations.css';

const BudgetList: FC = (): JSX.Element => {
  const budgets = useSelector((state: RootState) => state.budgets);

  const renderBudgets = (): JSX.Element[] => {
    return budgets.map(budget => (
      <CSSTransition timeout={200} classNames="slide" key={budget.id}>
        <li>
          <Budget {...budget} />
        </li>
      </CSSTransition>
    ));
  };

  return (
    <StyledList>
      <TransitionGroup component={null}>{renderBudgets()}</TransitionGroup>
    </StyledList>
  );
};

export default BudgetList;
