import styled from 'styled-components';

export interface ColorType {
  color: 'green' | 'red' | 'black';
}

export const DiffSpan = styled.div<ColorType>`
  font-size: 2.5rem;
  color: ${props =>
    props.color === 'black' ? props.theme.text : `var(--color-${props.color})`};
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
  width: max-content;
  transform: translateY(-50%) translateX(-50%);
`;

export const DiffIcon = styled.i<{ amount: number }>`
  position: absolute;
  top: ${props => (props.amount > 0 ? '25%' : '90%')};
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
