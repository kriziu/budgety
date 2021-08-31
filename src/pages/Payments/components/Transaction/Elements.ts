import { BiX } from 'react-icons/bi';
import styled from 'styled-components';
import { ColorType } from '../../../../components/BudgetInfo/Elements';
import { Button } from '../../../../components/Button';
import { breakpoints } from '../../../../constant/style/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Money = styled.div<ColorType>`
  color: ${props => `var(--color-${props.color})`};
  font-size: 2.1rem;
  margin: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

export const MediumTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  width: max-content;
`;

export const SmallTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-dark);
  opacity: 0.9;
`;

export const DateHeader = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-gray-dark);
  opacity: 0.8;
`;

export const DeleteBtn = styled(Button)`
  padding: 0.5rem;
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const CloseIcon = styled(BiX)`
  font-size: 3rem;

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const DeleteText = styled.p`
  display: none;

  @media (min-width: ${breakpoints.mobile}) {
    display: inline;
  }
`;
