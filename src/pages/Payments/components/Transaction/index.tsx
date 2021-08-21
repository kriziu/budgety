import { useState } from 'react';
import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { RootState } from '../../../../store';
import { changeTransactions } from '../../../../store/budgets/actions';
import { removeTransactionAction } from '../../../../store/transactions/actions';
import { TransactionType } from '../../../../store/transactions/types';
import { getMoneyColor } from '../../../../utils/ux';
import Modal from '../../../../components/Modal';
import ModalConfirm from '../../../../components/ModalConfirm';
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
import { dbUrl } from '../../../../constant/routes';

const Transaction: FC<TransactionType> = ({
  _id,
  budgetId,
  title,
  amount,
  date,
  currency,
}): JSX.Element => {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);

  const budget = useSelector((state: RootState) =>
    state.budgets.filter(budget => budget._id === budgetId)
  )[0];
  const googleUser = useSelector((state: RootState) => state.googleUser);

  const dateN = new Date(date);

  const handleDeleteTransaction = (): void => {
    dispatch(removeTransactionAction(_id));
    dispatch(changeTransactions());

    if (googleUser) axios.delete(`${dbUrl}/transactions/${_id}`);
  };

  return (
    <>
      <Container>
        <div style={{ flex: 1 }}>
          <Title>{title}</Title>
          <SmallTitle>{budget.title}</SmallTitle>
          <DateHeader>
            {dateN.getFancyDate()} | {dateN.getFancyHours()}
          </DateHeader>
        </div>
        <Money color={getMoneyColor(amount)}>
          {amount} {currency}
        </Money>
        <div>
          <DeleteBtn
            color="red"
            textColor="white"
            onClick={() => setModalOpened(true)}
          >
            <CloseIcon />
            <DeleteText>Delete</DeleteText>
          </DeleteBtn>
        </div>
      </Container>
      {modalOpened && (
        <Modal closeModal={() => setModalOpened(false)}>
          <ModalConfirm handleAction={handleDeleteTransaction} />
        </Modal>
      )}
    </>
  );
};

export default Transaction;
