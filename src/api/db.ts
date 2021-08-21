import axios from 'axios';
import { GoogleLoginResponse } from 'react-google-login';
import { dbUrl } from '../constant/routes';
import { BudgetType } from '../store/budgets/types';
import { TransactionType } from '../store/transactions/types';
import { timeout } from '../utils/utility';

interface ReturnResponseType {
  budgets: BudgetType[];
  transactions: TransactionType[];
  userCurrency: string;
}

export const dbAPI = async (
  googleUser: GoogleLoginResponse['profileObj']
): Promise<ReturnResponseType> => {
  await timeout(250);

  let budgets: BudgetType[] = await (
    await axios.get(`${dbUrl}/budgets`, {
      params: {
        userId: googleUser?.googleId,
      },
    })
  ).data;

  let transactions: TransactionType[] = await (
    await axios.get(`${dbUrl}/transactions`, {
      params: {
        userId: googleUser?.googleId,
      },
    })
  ).data;

  let userCurrency: string = '';

  await axios
    .get(`${dbUrl}/users/${googleUser?.googleId}`)
    .then(res => {
      userCurrency = res.data.currency;
    })
    .catch(() => {
      axios.post(`${dbUrl}/users`, {
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

  return { budgets, transactions, userCurrency };
};
