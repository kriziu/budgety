import styled from 'styled-components';

export interface ColorType {
  color: 'green' | 'red' | 'black';
}

export const TitleHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
`;

export const MoneyHeader = styled.h2<ColorType>`
  font-size: 2.5rem;
  color: ${props => `var(--color-${props.color})`};
  font-weight: 400;
  text-align: center;
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const DiffSpan = styled.div<ColorType>`
  font-size: 2.5rem;
  color: ${props => `var(--color-${props.color})`};
  font-weight: 400;
  text-align: center;
  margin-left: 0;
  margin-bottom: 0.5rem;
  position: relative;
  height: 5rem;
`;

export const SmallMoneyHeader = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

export const DiffIcon = styled.i<{ amount: number }>`
  position: absolute;
  top: ${props => (props.amount > 0 ? '25%' : '90%')};
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
