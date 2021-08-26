import styled from 'styled-components';

export const Header = styled.h2<{ color: string }>`
  font-size: 3.5rem;
  font-weight: 400;
  color: ${props => `var(--color-${props.color})`};
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 2.5rem;
`;
