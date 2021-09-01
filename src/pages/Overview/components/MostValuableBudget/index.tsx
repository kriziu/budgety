import { FC } from 'react';
import { useSelector } from 'react-redux';
import BudgetInfo from '../../../../components/BudgetInfo';
import { RootState } from '../../../../store';

import { BudgetContainer, Header } from './Elements';

const MostValuableBudget: FC = (): JSX.Element => {
  const budget = useSelector(
    (state: RootState) =>
      state.budgets.sort((a, b) => {
        return a.amount.actual > b.amount.actual
          ? -1
          : a.amount.actual < b.amount.actual
          ? 1
          : 0;
      })[0]
  );

  return (
    <>
      <Header>Most valuable Budget</Header>
      <BudgetContainer>
        <BudgetInfo {...budget} />
      </BudgetContainer>
    </>
  );
};

export default MostValuableBudget;
