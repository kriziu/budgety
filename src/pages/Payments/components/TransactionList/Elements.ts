import styled from 'styled-components';
import { breakpoints } from '../../../../constant/style/breakpoints';

export const List = styled.ul`
  list-style-type: none;
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

  li {
    margin: 0;
    padding: 0;

    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;
