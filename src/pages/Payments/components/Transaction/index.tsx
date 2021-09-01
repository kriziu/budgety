import { useEffect, useState } from 'react';
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
  MediumTitle,
  Money,
  SmallTitle,
  Title,
} from './Elements';
import { dbUrl } from '../../../../constant/routes';
import { BudgetType } from '../../../../store/budgets/types';
import { setLoaderAction, unsetLoaderAction } from '../../../../store/loader';

interface TransactionProps extends TransactionType {
  deletable?: boolean;
}

const Transaction: FC<TransactionProps> = ({
  _id,
  budgetId,
  title,
  amount,
  repeat,
  date,
  currency,
  deletable = true,
}): JSX.Element => {
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);

  const [budget, setBudget] = useState<null | BudgetType>(null);
  const budgets = useSelector((state: RootState) => state.budgets);
  const googleUser = useSelector((state: RootState) => state.googleUser);

  const dateN = new Date(date);

  useEffect(() => {
    const selectedBudget = budgets.filter(budget => budget._id === budgetId)[0];

    if (selectedBudget) {
      setBudget(selectedBudget);
    }
  }, [budgets, budgetId]);

  const handleDeleteTransaction = (): void => {
    if (googleUser) {
      dispatch(setLoaderAction());
      axios.delete(`${dbUrl}/transactions/${_id}`).then(() => {
        dispatch(removeTransactionAction(_id));
        dispatch(changeTransactions());
        dispatch(unsetLoaderAction());
      });
    } else {
      dispatch(removeTransactionAction(_id));
      dispatch(changeTransactions());
    }
  };

  return (
    <>
      <Container>
        <div style={{ flex: 1 }}>
          <Title>{title}</Title>

          {budget && <SmallTitle>{budget.title}</SmallTitle>}

          <DateHeader>
            {dateN.getFancyDate()} | {dateN.getFancyHours()}
          </DateHeader>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          {repeat.repeat && (
            <MediumTitle>
              Every {repeat.every} {repeat.type}
            </MediumTitle>
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Money color={getMoneyColor(amount)}>
              {amount} {currency}
            </Money>

            {deletable && (
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
            )}
          </div>
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
