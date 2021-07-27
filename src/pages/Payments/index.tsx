import { FC } from 'react';
import AllMoney from '../../components/AllMoney';

import PaymentForm from './components/PaymentForm';
import TransactionList from './components/TransactionList';

const Payments: FC = () => {
  return (
    <div>
      <AllMoney />
      <PaymentForm />
      <TransactionList />
    </div>
  );
};

export default Payments;
