import axios from 'axios';
import { GoogleLoginResponse } from 'react-google-login';
import { BudgetType } from '../store/budgets/types';
import { CurrencyType } from '../store/currency/types';
import { TransactionType } from '../store/transactions/types';

interface ReturnResponseType {
  budgets: BudgetType[];
  transactions: TransactionType[];
  userCurrency: string;
}

const { REACT_APP_SERVER_URL } = process.env;

export const fetchUserData = async (
  googleUser: GoogleLoginResponse['profileObj'],
  setLoading: () => void,
  unsetLoading: () => void
): Promise<ReturnResponseType> => {
  setLoading();

  let budgets: BudgetType[] = await (
    await axios.get(`${REACT_APP_SERVER_URL}/budgets`, {
      params: {
        userId: googleUser?.googleId,
      },
    })
  ).data;

  let transactions: TransactionType[] = await (
    await axios.get(`${REACT_APP_SERVER_URL}/transactions`, {
      params: {
        userId: googleUser?.googleId,
      },
    })
  ).data;

  let userCurrency: string = '';

  await axios
    .get(`${REACT_APP_SERVER_URL}/users/${googleUser?.googleId}`)
    .then(res => {
      userCurrency = res.data.currency;
    })
    .catch(() => {
      axios.post(`${REACT_APP_SERVER_URL}/users`, {
        _id: googleUser?.googleId,
        currency: 'USD',
      });
    });

  budgets = budgets.map(budget => {
    budget.date = new Date(budget.date);
    return budget;
  });

  transactions.map(transaction => {
    transaction.date = new Date(transaction.date);
    return transaction;
  });

  unsetLoading();
  return { budgets, transactions, userCurrency };
};

export const fetchExchangeRates = async (
  primaryCurrency: string
): Promise<CurrencyType> => {
  interface rate {
    [key: string]: number;
  }

  interface dataFetchedType {
    rates: rate;
    source: string;
    date: string;
    timestamp: number;
  }

  const currencies: dataFetchedType = await (
    await axios.get(`${REACT_APP_SERVER_URL}/currency`)
  ).data;

  const currency: CurrencyType = {
    source: currencies.source,
    currencies: currencies.rates,
    primaryCurrency: primaryCurrency,
  };

  return currency;
};
