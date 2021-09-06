import { FC } from 'react';

import { SmallMoneyHeader, DiffSpan, DiffIcon } from './Elements';
import { BiCaretUp, BiCaretDown, BiMinus } from 'react-icons/bi';
import { getMoneyColor } from '../../utils/ux';
import { BudgetType } from '../../store/budgets/types';
import { Header3, Header5 } from '../Header';

const BudgetInfo: FC<BudgetType> = (budget): JSX.Element => {
  const { title, amount } = budget;

  return (
    <>
      <Header3>{title}</Header3>
      <div>
        <Header5 $color={getMoneyColor(amount.actual)}>
          {amount.actual.toFixed(2)} {amount.currency}
        </Header5>
        <DiffSpan color={getMoneyColor(amount.diff)}>
          <SmallMoneyHeader>
            {amount.diff.toFixed(2)} {amount.currency}
          </SmallMoneyHeader>
          <DiffIcon amount={amount.diff}>
            {amount.diff > 0 ? (
              <BiCaretUp />
            ) : amount.diff < 0 ? (
              <BiCaretDown />
            ) : (
              <BiMinus />
            )}
          </DiffIcon>
        </DiffSpan>
      </div>
    </>
  );
};

export default BudgetInfo;
