import { FC, useState } from 'react';

import { Container } from './Elements';
import { Button } from '../../../../components/Button';
import BudgetModal from '../BudgetModal';
import Modal from '../../../../components/Modal';
import { BudgetType } from '../../../../store/budgets/types';
import BudgetInfo from '../../../../components/BudgetInfo';

const Budget: FC<BudgetType> = (budget): JSX.Element => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Container>
        <BudgetInfo {...budget} />
        <Button
          color="gray-dark"
          textColor="white"
          onClick={() => setModalOpened(true)}
        >
          Edit
        </Button>
      </Container>
      {modalOpened && (
        <Modal closeModal={() => setModalOpened(false)}>
          <BudgetModal {...budget} />
        </Modal>
      )}
    </>
  );
};

export default Budget;
