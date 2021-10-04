import { FC, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Top, IconSpan, ButtonsContainer } from './Elements';
import { BiEdit, BiX } from 'react-icons/bi';
import { ModalContext } from '../../../../components/Modal';
import { BudgetType } from '../../../../store/budgets/types';
import { Button } from '../../../../components/Button';
import {
  changeTransactions,
  editBudgetAction,
  removeBudgetAction,
} from '../../../../store/budgets/actions';
import { handleEnterPressed } from '../../../../utils/utility';
import { removeTransactionsByBudgetIdAction } from '../../../../store/transactions/actions';
import Form from '../../../../components/Form';
import { RootState } from '../../../../store';
import { setLoaderAction, unsetLoaderAction } from '../../../../store/loader';
import { Header3 } from '../../../../components/Header';

const { REACT_APP_SERVER_URL } = process.env;

const BudgetModal: FC<BudgetType> = ({ _id, title, amount }): JSX.Element => {
  const dispatch = useDispatch();
  const context = useContext(ModalContext);
  const googleUser = useSelector((state: RootState) => state.googleUser);

  const handleClose = (): void => context.handleClose();

  const handleDelete = (): void => {
    context.handleClose();

    if (googleUser) {
      dispatch(setLoaderAction());
      axios.delete(`${REACT_APP_SERVER_URL}/budgets/${_id}`).then(() => {
        dispatch(removeBudgetAction(_id));

        axios
          .delete(`${REACT_APP_SERVER_URL}/transactions?budgetId=${_id}`)
          .then(() => {
            dispatch(removeTransactionsByBudgetIdAction(_id));
            dispatch(unsetLoaderAction());
          });
      });
    } else {
      dispatch(removeBudgetAction(_id));
      dispatch(removeTransactionsByBudgetIdAction(_id));
    }
  };

  const handleSubmitForm = (
    newTitle: string,
    newAmount: number,
    newCurrency: string
  ): void => {
    const newBudget: BudgetType = {
      _id,
      userId: googleUser?.googleId ? googleUser?.googleId : null,
      title: newTitle,
      amount: {
        actual: newAmount,
        currency: newCurrency,
        diff: 0,
        starting: newAmount,
      },
      date: new Date(),
    };

    if (googleUser) {
      dispatch(setLoaderAction());
      axios
        .patch(`${REACT_APP_SERVER_URL}/budgets/${_id}`, {
          ...newBudget,
        })
        .then(budget => {
          dispatch(editBudgetAction(budget.data));
          dispatch(changeTransactions());
          dispatch(unsetLoaderAction());
        });
    } else {
      dispatch(editBudgetAction(newBudget));
      dispatch(changeTransactions());
    }
    context.handleClose();
  };

  return (
    <>
      <Top>
        <IconSpan tabIndex={0}>
          <BiEdit />
        </IconSpan>
        <Header3>Edit</Header3>
        <IconSpan
          tabIndex={0}
          style={{ fontSize: '3.5rem', height: '4.5rem' }}
          onClick={handleClose}
          onKeyPress={e => handleEnterPressed(e, handleClose)}
        >
          <BiX />
        </IconSpan>
      </Top>
      <div style={{ marginTop: '3.5rem' }}>
        <Form
          handleSubmit={handleSubmitForm}
          button={false}
          data={{
            title: { value: title, required: true },
            amount: { value: amount.starting.toFixed(2), required: true },
          }}
          style={{ padding: 0 }}
          currency={amount.currency}
        >
          <ButtonsContainer>
            <Button
              color="gray-dark"
              textColor="gray-dark"
              secondary
              style={{ width: '48%' }}
              onClick={handleDelete}
              type="button"
            >
              Delete
            </Button>
            <Button
              color="gray-dark"
              textColor="white"
              style={{ width: '48%' }}
            >
              Save
            </Button>
          </ButtonsContainer>
        </Form>
      </div>
    </>
  );
};

export default BudgetModal;
