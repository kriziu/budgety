import { FC, useContext } from 'react';

import { useDispatch } from 'react-redux';

import { Top, Header, IconSpan, ButtonsContainer } from './Elements';
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

const BudgetModal: FC<BudgetType> = ({ id, title, amount }): JSX.Element => {
  const dispatch = useDispatch();
  const context = useContext(ModalContext);

  const handleClose = (): void => context.handleClose();

  const handleDelete = (): void => {
    context.handleClose();
    dispatch(removeBudgetAction(id));

    dispatch(removeTransactionsByBudgetIdAction(id));
  };

  const handleSubmitForm = (newTitle: string, newAmount: number): void => {
    const newBudget: BudgetType = {
      id,
      title: newTitle,
      amount: {
        actual: newAmount,
        diff: 0,
        starting: newAmount,
      },
      date: new Date(),
    };

    dispatch(editBudgetAction(newBudget));
    dispatch(changeTransactions());

    context.handleClose();
  };

  return (
    <>
      <Top>
        <IconSpan tabIndex={0}>
          <BiEdit />
        </IconSpan>
        <Header>Edit</Header>
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
