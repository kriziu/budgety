import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../store';
import { changeTransactions } from '../../../../store/budgets/actions';
import { removeTransactionAction } from '../../../../store/transactions/actions';
import { TransactionType } from '../../../../store/transactions/types';
import { getMoneyColor } from '../../../../utils/ux';
import {
  CloseIcon,
  Container,
  DateHeader,
  DeleteBtn,
  DeleteText,
  Money,
  SmallTitle,
  Title,
} from './Elements';

const Transaction: FC<TransactionType> = ({
  id,
  budgetId,
  title,
  amount,
  date,
}): JSX.Element => {
  const dispatch = useDispatch();

  const budget = useSelector((state: RootState) =>
    state.budgets.filter(budget => budget.id === budgetId)
  )[0];

  const dateN = new Date(date);

  const handleDeleteButton = (): void => {
    dispatch(removeTransactionAction(id));
    dispatch(changeTransactions());
  };

  return (
    <Container>
      <div style={{ flex: 1 }}>
        <Title>{title}</Title>
        <SmallTitle>{budget.title}</SmallTitle>
        <DateHeader>
          {dateN.getFancyDate()} | {dateN.getFancyHours()}
        </DateHeader>
      </div>
      <Money color={getMoneyColor(amount)}>{amount}$</Money>
      <div>
        <DeleteBtn color="red" textColor="white" onClick={handleDeleteButton}>
          <CloseIcon />
          <DeleteText>Delete</DeleteText>
        </DeleteBtn>
      </div>
    </Container>
  );
};

export default Transaction;
