import { FC, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Header4, Header5, Header6 } from '../../../../components/Header';

import { RootState } from '../../../../store';
import { getMultiplier } from '../../../../utils/utility';
import { getMoneyColor } from '../../../../utils/ux';
import { Container, SmContainer } from './Elements';

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
      const multiplier = getMultiplier(transaction, true);

      if (
        transactionDate.getMonth() === nowDate.getMonth() ||
        transaction.repeat.repeat
      )
        if (transaction.amount > 0) {
          let amountToAdd =
            (transaction.amount / currency.currencies[transaction.currency]) *
            currency.currencies[currency.primaryCurrency];

          if (transaction.repeat.repeat)
            amountToAdd = amountToAdd + amountToAdd * multiplier;

          money.income += amountToAdd;
        } else if (transaction.amount < 0) {
          let amountToAdd =
            (transaction.amount / currency.currencies[transaction.currency]) *
            currency.currencies[currency.primaryCurrency];

          if (transaction.repeat.repeat)
            amountToAdd = amountToAdd + amountToAdd * multiplier;

          money.spent += amountToAdd;
        }
      money.total = money.income + money.spent;
    });

    setMoneyLastMonth(money);
  }, [transactions, currency.currencies, currency.primaryCurrency]);

  return (
    <>
      <Header4 style={{ marginTop: '2rem' }}>Outgoings last month</Header4>
      <Container>
        <SmContainer>
          <Header6>Income</Header6>
          <Header5 $color="green">
            {moneyLastMonth.income.toFixed()} {currency.primaryCurrency}
          </Header5>
        </SmContainer>

        <SmContainer>
          <Header6>Income</Header6>
          <Header5 $color={getMoneyColor(moneyLastMonth.total)}>
            {moneyLastMonth.total.toFixed()} {currency.primaryCurrency}
          </Header5>
        </SmContainer>
        <SmContainer>
          <Header6>Income</Header6>
          <Header5 $color="red">
            {moneyLastMonth.spent.toFixed()} {currency.primaryCurrency}
          </Header5>
        </SmContainer>
      </Container>
    </>
  );
};

export default MoneyLastMonth;
