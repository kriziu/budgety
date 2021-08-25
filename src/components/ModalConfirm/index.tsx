import { FC, useContext } from 'react';

import { ButtonsContainer, Header } from './Elements';
import { ModalContext } from '../Modal';
import { Button } from '../Button';

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
      <Header>Are you sure?</Header>
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
