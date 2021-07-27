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

export const Label = styled.label`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
  width: max-content;
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
