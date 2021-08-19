import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { setPrimaryCurrency } from '../../store/currency/actions';
import CurrencySelector from '../CurrencySelector';
import { Header } from './Elements';

const AllMoney: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const budgets = useSelector((state: RootState) => state.budgets);
  const currency = useSelector((state: RootState) => state.currency);
  const primaryCurrency = useSelector(
    (state: RootState) => state.currency.primaryCurrency
  );

  let money = 0;
  budgets.forEach(
    budget =>
      (money +=
        budget.amount.actual / currency.currencies[budget.amount.currency])
  );

  money =
    (money / currency.currencies['USD']) * currency.currencies[primaryCurrency];

  const handleCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(setPrimaryCurrency(e.target.value));
  };

  return (
    <Header>
      {money.toFixed(2)}{' '}
      <CurrencySelector color="green" onChangeAction={handleCurrencyChange} />
    </Header>
  );
};

export default AllMoney;
