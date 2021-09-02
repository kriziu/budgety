import { FC } from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BudgetInfo from '../../../../components/BudgetInfo';
import { RootState } from '../../../../store';
import { handleEnterPressed } from '../../../../utils/utility';
import { NoMessage } from '../../../Payments/components/TransactionList/Elements';
import { Container } from '../FrequentTransactionsList/Elements';
import { Dash } from '../MoneyLastMonth/Elements';

import { BudgetContainer, Header } from './Elements';

const MostValuableBudget: FC = (): JSX.Element => {
  const history = useHistory();
  const budget = useSelector(
    (state: RootState) =>
      state.budgets.sort((a, b) => {
        return a.amount.actual > b.amount.actual
          ? -1
          : a.amount.actual < b.amount.actual
          ? 1
          : 0;
      })[0]
  );

  return (
    <>
      <Header>
        Most valuable Budget{' '}
        <Dash
          tabIndex={0}
          onClick={() => history.push('budgets')}
          onKeyPress={e =>
            handleEnterPressed(e, () => history.push('payments'))
          }
        >
          See all
        </Dash>
      </Header>

      {budget ? (
        <BudgetContainer>
          <BudgetInfo {...budget} />
        </BudgetContainer>
      ) : (
        <Container>
          <NoMessage style={{ marginTop: '1.5rem' }}>
            There is no payments
          </NoMessage>
        </Container>
      )}
    </>
  );
};

export default MostValuableBudget;
