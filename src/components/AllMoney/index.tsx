import axios from 'axios';
import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { dbUrl } from '../../constant/routes';

import { RootState } from '../../store';
import { setPrimaryCurrency } from '../../store/currency/actions';
import { setLoaderAction, unsetLoaderAction } from '../../store/loader';
import { getMoneyColor } from '../../utils/ux';
import CurrencySelector from '../CurrencySelector';
import { Header2 } from '../Header';

const AllMoney: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const budgets = useSelector((state: RootState) => state.budgets);
  const currency = useSelector((state: RootState) => state.currency);
  const primaryCurrency = useSelector(
    (state: RootState) => state.currency.primaryCurrency
  );
  const googleId = useSelector(
    (state: RootState) => state.googleUser?.googleId
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
    if (googleId) {
      dispatch(setLoaderAction());

      axios
        .patch(`${dbUrl}/users/${googleId}`, {
          currency: e.target.value,
        })
        .then(() => {
          dispatch(setPrimaryCurrency(e.target.value));
          dispatch(unsetLoaderAction());
        });
    } else dispatch(setPrimaryCurrency(e.target.value));
  };

  return (
    <Header2 $color={getMoneyColor(money)}>
      {money.toFixed(2)}{' '}
      <CurrencySelector
        color={getMoneyColor(money)}
        onChangeAction={handleCurrencyChange}
      />
    </Header2>
  );
};

export default AllMoney;
