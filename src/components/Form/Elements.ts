import styled from 'styled-components';
import { breakpoints } from '../../constant/style/breakpoints';

export const StyledForm = styled.form`
  margin: 5rem auto;
  padding: 0 4rem;
  margin-top: 0;

  @media (min-width: ${breakpoints.mobile}) {
    width: 80%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 60%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 55%;
  }
`;

export const Container = styled.div`
  :not(:first-child) {
    margin: 4rem 0;
  }
`;

export const Warning = styled.p`
  font-size: 1.3rem;
  color: var(--color-red);
  position: absolute;
  margin-top: 0.7rem;
`;

export const MinPlus = styled.div`
  padding: 1.83rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  font-size: 1.6rem;
  width: min-content;
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  cursor: pointer;
`;

export const MinPlusIcon = styled.div<{ minus: boolean }>`
  pointer-events: none;
  width: 1.3rem;
  height: 2px;
  background-color: ${props =>
    props.minus ? 'var(--color-green)' : 'var(--color-red)'};

  transform: ${props => (props.minus ? 'rotate(180deg)' : 'rotate(0)')};

  transition: var(--trans-default);

  ::after {
    content: '';
    display: block;
    width: inherit;
    height: inherit;
    background-color: ${props =>
      props.minus ? 'var(--color-green)' : 'var(--color-red)'};
    transition: var(--trans-default);
    transform: ${props => (props.minus ? `rotate(270deg)` : `rotate(0)`)};
  }
`;
