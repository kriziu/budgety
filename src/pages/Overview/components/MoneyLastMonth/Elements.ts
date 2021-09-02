import styled from 'styled-components';
import { breakpoints } from '../../../../constant/style/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 75%;
  margin-left: 50%;
  transform: translateX(-50%);

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

export const SmContainer = styled.div`
  padding: 0;
  flex-direction: column;
  align-items: center;
`;

export const BigHeader = styled.h2`
  font-size: 2.2rem;
  margin-top: 2rem;
  font-weight: 500;
  text-align: center;
`;

export const Header = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 2rem;
  width: min-content;
  text-align: center;
`;

export const Money = styled.h2<{ color: string }>`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  color: ${props => `var(--color-${props.color})`};
  width: min-content;
`;

export const Dash = styled.span`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  opacity: 0.5;
  height: min-content;
  display: inline-block;
  background-color: var(--color-gray);
  cursor: pointer;
`;
