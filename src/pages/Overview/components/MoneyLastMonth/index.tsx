import { useEffect } from 'react';
import { useState } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { Container, Header, Money, SmContainer } from './Elements';

const nowDate = new Date();

const MoneyLastMonth: FC = (): JSX.Element => {
  const transactions = useSelector((state: RootState) => state.transactions);
  const currency = useSelector((state: RootState) => state.currency);
  const [moneyLastMonth, setMoneyLastMonth] = useState({
    income: 0,
    spent: 0,
    total: 0,
  });

  useEffect(() => {
    let money = { income: 0, spent: 0, total: 0 };

    transactions.forEach(transaction => {
      const transactionDate = new Date(transaction.date);
      if (transactionDate.getMonth() === nowDate.getMonth())
        if (transaction.amount > 0) {
          money.income +=
            (transaction.amount / currency.currencies[transaction.currency]) *
            currency.currencies[currency.primaryCurrency];
        } else if (transaction.amount < 0) {
          money.spent +=
            (transaction.amount / currency.currencies[transaction.currency]) *
            currency.currencies[currency.primaryCurrency];
        }
      money.total = money.income + money.spent;
    });

    setMoneyLastMonth(money);
  }, [transactions, currency.currencies, currency.primaryCurrency]);

  return (
    <Container>
      <SmContainer>
        <Header>Income in last month</Header>
        <Money color="green">
          {moneyLastMonth.income.toFixed()} {currency.primaryCurrency}
        </Money>
      </SmContainer>

      <SmContainer>
        <Header>Total in last month</Header>
        <Money color="green">
          {moneyLastMonth.total.toFixed()} {currency.primaryCurrency}
        </Money>
      </SmContainer>
      <SmContainer>
        <Header>Spent in last month</Header>
        <Money color="red">
          {moneyLastMonth.spent.toFixed()} {currency.primaryCurrency}
        </Money>
      </SmContainer>
    </Container>
  );
};

export default MoneyLastMonth;
