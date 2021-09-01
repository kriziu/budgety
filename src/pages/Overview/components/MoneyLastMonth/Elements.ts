import styled from 'styled-components';
import { breakpoints } from '../../../../constant/style/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem 0;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 0 8rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 14rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 0 24rem;
  }
`;

export const SmContainer = styled(Container)`
  padding: 0;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
`;

export const Header = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  width: min-content;
  text-align: center;
`;

export const Money = styled.h2<{ color: string }>`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 500;
  color: ${props => `var(--color-${props.color})`};
  width: min-content;
`;
