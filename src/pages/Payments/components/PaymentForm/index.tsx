import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../../store';
import { addTransactionAction } from '../../../../store/transactions/actions';
import { getUniqueId } from '../../../../utils/utility';
import { TransactionType } from '../../../../store/transactions/types';
import Form from '../../../../components/Form';
import { changeTransactions } from '../../../../store/budgets/actions';
import { Select, Container } from './Elements';
import { Label } from '../../../../components/Form/Elements';
import BudgetInfo from '../../../../components/BudgetInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../../../../components/Button';

const PaymentForm: FC = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state: RootState) => state.transactions);
  const budgets = useSelector((state: RootState) => state.budgets);
  const [selectedBudgetId, setSelectedBudgetId] = useState(0);

  useEffect(() => {
    budgets[0] && setSelectedBudgetId(budgets[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (title: string, amount: number): void => {
    const newTransaction: TransactionType = {
      id: getUniqueId(transactions),
      budgetId: selectedBudgetId,
      title,
      amount,
      date: new Date(),
    };

    dispatch(addTransactionAction(newTransaction));
    dispatch(changeTransactions());
  };

  const renderOptions = (): JSX.Element[] => {
    return budgets.map(budget => {
      return (
        <option key={budget.id} value={budget.id}>
          {budget.title}: {budget.amount.actual.toFixed(2)}$
        </option>
      );
    });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedBudgetId(parseInt(e.target.value));
  };

  return (
    <Form handleSubmit={handleSubmit} disabled={!budgets.length} button={false}>
      <>
        <Label htmlFor="selectBudget">Select a budget</Label>
        <Select
          id="selectBudget"
          onChange={handleSelectChange}
          value={selectedBudgetId}
        >
          {renderOptions()}
        </Select>
        {budgets[0] && (
          <Container>
            <BudgetInfo
              {...budgets.filter(budget => budget.id === selectedBudgetId)[0]}
            />
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
