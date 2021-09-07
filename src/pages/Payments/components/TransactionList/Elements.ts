import styled from 'styled-components';
import { breakpoints } from '../../../../constant/style/breakpoints';

export const List = styled.ul`
  list-style-type: none;
  margin-top: 4rem;

  li {
    margin: 0;
    padding: 0;

    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

export const Container = styled.div`
  padding: 0 4rem;

  @media (min-width: ${breakpoints.mobile}) {
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 60%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    margin-left: 0;
    transform: translateX(0);
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 55%;
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

export const Flex = styled.div`
  display: block;

  @media (min-width: ${breakpoints.laptop}) {
    display: flex;

    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Line = styled.div`
  margin: 4rem 0;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background-color: var(--color-gray-dark);
  opacity: 0.3;

  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`;
