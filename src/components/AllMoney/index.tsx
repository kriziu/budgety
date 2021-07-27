import { useState } from 'react';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Header } from './Elements';

const AllMoney: FC = (): JSX.Element => {
  const budgets = useSelector((state: RootState) => state.budgets);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    let tempMoney = 0;

    budgets.forEach(budget => (tempMoney += budget.amount.actual));

    setMoney(tempMoney);
  }, [budgets]);

  return <Header>{money.toFixed(2)}$</Header>;
};

export default AllMoney;
