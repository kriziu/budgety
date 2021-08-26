import { FC, useRef, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { RootState } from '../../../../store';
import { addTransactionAction } from '../../../../store/transactions/actions';
import { TransactionType } from '../../../../store/transactions/types';
import Form from '../../../../components/Form';
import { changeTransactions } from '../../../../store/budgets/actions';
import { Select, Container } from './Elements';
import { Label } from '../../../../components/Form/Elements';
import BudgetInfo from '../../../../components/BudgetInfo';
import { Button } from '../../../../components/Button';
import { dbUrl } from '../../../../constant/routes';
import { setLoaderAction, unsetLoaderAction } from '../../../../store/loader';

const PaymentForm: FC = () => {
  const dispatch = useDispatch();
  const budgets = useSelector((state: RootState) => state.budgets);
  const googleUser = useSelector((state: RootState) => state.googleUser);
  const [selectedBudgetId, setSelectedBudgetId] = useState('');
  let budgetsLength = useRef(-1);

  useEffect(() => {
    if (budgetsLength.current !== budgets.length) {
      if (budgets[0]) setSelectedBudgetId(budgets[0]._id);
      else setSelectedBudgetId('');
    }
    return () => {
      budgetsLength.current = budgets.length;
    };
  }, [budgets]);

  const handleSubmit = (
    title: string,
    amount: number,
    currency: string
  ): void => {
    const newTransaction: TransactionType = {
      _id: uuidv4(),
      currency,
      budgetId: selectedBudgetId,
      userId: googleUser ? googleUser.googleId : null,
      title,
      amount,
      date: new Date(),
    };

    if (googleUser) {
      dispatch(setLoaderAction());
      axios
        .post(`${dbUrl}/transactions`, {
          ...newTransaction,
        })
        .then(transaction => {
          dispatch(addTransactionAction(transaction.data));
          dispatch(changeTransactions());
          dispatch(unsetLoaderAction());
        });
    } else {
      dispatch(addTransactionAction(newTransaction));
      dispatch(changeTransactions());
    }
  };

  const renderOptions = (): JSX.Element[] => {
    return budgets.map(budget => {
      return (
        <option key={budget._id} value={budget._id}>
          {budget.title}: {budget.amount.actual.toFixed(2)}{' '}
          {budget.amount.currency}
        </option>
      );
    });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedBudgetId(e.target.value);
  };

  const selectedBudget = budgets.filter(
    budget => budget._id === selectedBudgetId
  )[0];

  return (
    <Form
      handleSubmit={handleSubmit}
      disabled={!budgets.length}
      button={false}
      currency={selectedBudget && selectedBudget.amount.currency}
      childrenBefore={
        <>
          <Label htmlFor="selectBudget">Select a budget</Label>
          <Select
            id="selectBudget"
            onChange={handleSelectChange}
            value={selectedBudgetId}
          >
            {renderOptions()}
          </Select>
        </>
      }
      pageTitle="Payments"
    >
      <>
        {budgets[0] && (
          <Container>
            {selectedBudgetId && <BudgetInfo {...selectedBudget} />}
          </Container>
        )}
        <Button
          color="green"
          textColor="white"
          style={{ marginTop: '3rem', opacity: !budgets[0] ? 0.6 : 1 }}
          onClick={e => !budgets[0] && e.preventDefault()}
        >
          {!budgets[0] ? 'Add a budget' : 'Add'}
        </Button>
      </>
    </Form>
  );
};

export default PaymentForm;
