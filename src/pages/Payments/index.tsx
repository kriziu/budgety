import { FC } from 'react';

import PaymentForm from './components/PaymentForm';
import TransactionList from './components/TransactionList';

const Payments: FC = () => {
  return (
    <div>
      <PaymentForm />
      <TransactionList />
    </div>
  );
};

export default Payments;
