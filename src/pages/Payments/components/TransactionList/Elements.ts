import styled from 'styled-components';
import { breakpoints } from '../../../../constant/style/breakpoints';

export const List = styled.ul`
  list-style-type: none;
  margin-top: 4rem;

  @media (min-width: ${breakpoints.mobile}) {
    width: 80%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 60%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 55%;
  }

  li {
    margin: 0;
    padding: 0;

    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

export const Select = styled.select`
  padding: 1rem 2rem;
  border: 1px solid var(--color-gray);
  border-radius: 1rem;
  transition: var(--trans-default);
  font-size: 1.6rem;
  background-color: var(--color-white);
  font-family: inherit;
  width: 100%;

  :focus {
    outline: none;
    border-color: var(--color-blue-light);
  }
`;
