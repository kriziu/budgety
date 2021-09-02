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

  @media (min-width: ${breakpoints.desktop}) {
    width: 40%;
  }
`;

export const Header = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 4rem;
  text-align: center;
`;
