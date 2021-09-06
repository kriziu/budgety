import React, { FC, useRef, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Calendar from 'react-calendar';
import { CSSTransition } from 'react-transition-group';
import 'react-calendar/dist/Calendar.css';

import { RootState } from '../../../../store';
import { addTransactionAction } from '../../../../store/transactions/actions';
import { TransactionType } from '../../../../store/transactions/types';
import Form from '../../../../components/Form';
import { changeTransactions } from '../../../../store/budgets/actions';
import {
  Select,
  Container,
  StyledP,
  SmallContainer,
  AnimatedSmallContainer,
} from './Elements';
import { Label } from '../../../../components/Input';
import BudgetInfo from '../../../../components/BudgetInfo';
import { Button } from '../../../../components/Button';
import { dbUrl } from '../../../../constant/routes';
import { setLoaderAction, unsetLoaderAction } from '../../../../store/loader';
import { CheckBox } from '../../../../components/Checkbox';
import { Input } from '../../../../components/Input';
import '../../../../constant/style/animations.css';
import { handleEnterPressed } from '../../../../utils/utility';

const PaymentForm: FC = () => {
  const dispatch = useDispatch();
  const budgets = useSelector((state: RootState) => state.budgets);
  const googleUser = useSelector((state: RootState) => state.googleUser);
  const [selectedBudgetId, setSelectedBudgetId] = useState('');
  const [repeatTransaction, setRepeatTransaction] = useState({
    repeat: false,
    every: '1',
    type: 'hours',
  });
  const [startDate, setStartDate] = useState(new Date());
  const [dateCheck, setDateCheck] = useState(false);
  const check = useRef(null);

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
      repeat: {
        ...repeatTransaction,
        every: parseInt(repeatTransaction.every),
      },
      date: dateCheck ? startDate : new Date(),
    };

    setRepeatTransaction({
      repeat: false,
      every: '1',
      type: 'hours',
    });

    setDateCheck(false);
    setStartDate(new Date());

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

  const handleCheckboxCheck = (e: React.SyntheticEvent): void => {
    setRepeatTransaction({
      ...repeatTransaction,
      repeat: true,
    });

    if (e.target === check.current) {
      setRepeatTransaction({
        ...repeatTransaction,
        repeat: !repeatTransaction.repeat,
      });
    }
  };

  const handleInputRepeatChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (
      (!isNaN(parseInt(e.target.value)) && parseInt(e.target.value) > 0) ||
      e.target.value === ''
    ) {
      setRepeatTransaction({
        ...repeatTransaction,
        every: e.target.value,
      });
    }
  };

  const handleSelectTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setRepeatTransaction({ ...repeatTransaction, type: e.target.value });
  };

  const handleDateChange = (date: Date): void => {
    const nowDate = new Date();

    if (nowDate.getTime() - date.getTime() > 0) setStartDate(date);
  };

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
        <SmallContainer>
          <CheckBox
            checked={dateCheck}
            onClick={() => setDateCheck(!dateCheck)}
            tabIndex={0}
            onKeyPress={e =>
              handleEnterPressed(e, () => setDateCheck(!dateCheck))
            }
          />
          <StyledP checked={dateCheck} onClick={() => setDateCheck(!dateCheck)}>
            Select date
          </StyledP>

          <CSSTransition
            in={dateCheck}
            timeout={200}
            classNames="fade"
            unmountOnExit
          >
            <Calendar
              value={startDate}
              onChange={handleDateChange}
              className="calendar"
            />
          </CSSTransition>
        </SmallContainer>
        <AnimatedSmallContainer
          animate={dateCheck}
          onClick={handleCheckboxCheck}
        >
          <CheckBox
            checked={repeatTransaction.repeat}
            tabIndex={0}
            onKeyPress={e => handleEnterPressed(e, handleCheckboxCheck)}
            ref={check}
          />
          <StyledP checked={repeatTransaction.repeat}>
            Repeat every
            <Input
              style={{
                width: '4rem',
                padding: '.5rem',
                color: !repeatTransaction.repeat ? 'lightgray' : 'black',
              }}
              onChange={handleInputRepeatChange}
              maxLength={3}
              value={repeatTransaction.every}
              disabled={!repeatTransaction.repeat}
            />
            <Select
              style={{
                width: '8rem',
                padding: '.5rem',
              }}
              value={repeatTransaction.type}
              onChange={handleSelectTypeChange}
              disabled={!repeatTransaction.repeat}
            >
              <option value="hours">hours</option>
              <option value="days">days</option>
              <option value="month">month</option>
              <option value="year">year</option>
            </Select>
          </StyledP>
        </AnimatedSmallContainer>

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
