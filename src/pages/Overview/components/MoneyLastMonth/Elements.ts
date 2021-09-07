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
