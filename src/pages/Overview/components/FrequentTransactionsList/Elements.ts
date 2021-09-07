import styled from 'styled-components';
import { breakpoints } from '../../../../constant/style/breakpoints';

export const Container = styled.ul`
  width: 75%;
  margin-left: 50%;
  transform: translateX(-50%);
  list-style: none;

  @media (min-width: ${breakpoints.mobile}) {
    width: 65%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;
  }
`;
