import { FC } from 'react';

import {
  TitleHeader,
  MoneyHeader,
  SmallMoneyHeader,
  DiffSpan,
  DiffIcon,
} from './Elements';
import { BiCaretUp, BiCaretDown, BiMinus } from 'react-icons/bi';
import { getMoneyColor } from '../../utils/ux';
import { BudgetType } from '../../store/budgets/types';

const BudgetInfo: FC<BudgetType> = (budget): JSX.Element => {
  const { title, amount } = budget;

  return (
    <>
      <TitleHeader>{title}</TitleHeader>
      <div>
        <MoneyHeader color={getMoneyColor(amount.actual)}>
          {amount.actual.toFixed(2)} {amount.currency}
        </MoneyHeader>
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
