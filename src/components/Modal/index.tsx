import ReactDOM from 'react-dom';
import { FC, useRef } from 'react';

import { Background, Container } from './Elements';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

const modalRoot = document.getElementById('modal') as HTMLElement;

export const ModalContext = createContext({ handleClose: () => {} });

interface ModalProps {
  children: JSX.Element;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ children, closeModal }): JSX.Element => {
  const [animating, setAnimating] = useState(true);
  const bgRef = useRef(null);

  useEffect(() => {
    setAnimating(false);
  }, []);

  const handleClose = (): void => {
    setAnimating(true);
    setTimeout(() => closeModal(), 200);
  };

  const handleBgClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (e.target === bgRef.current) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <Background
      animating={animating}
      ref={bgRef}
      onClick={e => handleBgClick(e)}
    >
      <Container>
        <ModalContext.Provider value={{ handleClose }}>
          {children}
        </ModalContext.Provider>
      </Container>
    </Background>,
    modalRoot
  );
};

export default Modal;
