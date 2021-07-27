import styled from 'styled-components';
import { breakpoints } from '../../constant/style/breakpoints';

export const Background = styled.div<{ animating: boolean }>`
  position: fixed;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  transition: var(--trans-default);
  opacity: ${props => (props.animating ? '0' : '100%')};
`;

export const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 21;
  background-color: var(--color-white);
  width: 75%;
  padding: 2rem 2rem;
  border-radius: 1rem;

  @media (min-width: ${breakpoints.laptop}) {
    width: 50%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 50rem;
  }
`;
