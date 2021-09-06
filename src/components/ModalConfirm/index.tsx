import { FC, useContext } from 'react';

import { ButtonsContainer } from './Elements';
import { ModalContext } from '../Modal';
import { Button } from '../Button';
import { Header4 } from '../Header';

interface ModalConfirmProps {
  handleAction: () => void;
}

const ModalConfirm: FC<ModalConfirmProps> = ({ handleAction }): JSX.Element => {
  const context = useContext(ModalContext);

  const handleClose = (): void => context.handleClose();

  const handleActionClicked = (): void => {
    context.handleClose();

    handleAction();
  };

  return (
    <div>
      <Header4 style={{ marginBottom: '2rem' }}>Are you sure?</Header4>
      <ButtonsContainer>
        <Button
          color="gray-dark"
          textColor="gray-dark"
          secondary
          style={{ width: '48%' }}
          onClick={handleClose}
          type="button"
        >
          Cancel
        </Button>
        <Button
          color="gray-dark"
          textColor="white"
          style={{ width: '48%' }}
          onClick={handleActionClicked}
        >
          Delete
        </Button>
      </ButtonsContainer>
    </div>
  );
};

export default ModalConfirm;
