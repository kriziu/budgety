import styled from 'styled-components';
import { breakpoints } from '../../../../style/breakpoints';

export const StyledList = styled.ul`
  list-style: none;
  margin: 4rem auto;
  padding: 0;
  justify-content: center;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, 23rem);
  padding: 0 4rem;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 0 8rem;
  }

  display: grid;
`;

export const Container = styled.div`
  margin: 4rem auto;
  padding: 0 4rem;

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
