import styled from 'styled-components';

export const Select = styled.select<{ color: string }>`
  padding: 0.2rem 0.2rem;
  border: 1px solid var(--color-gray);
  border-radius: 1rem;
  transition: var(--trans-default);
  font-size: 3rem;
  background-color: var(--color-white);
  font-family: inherit;
  color: ${props => `var(--color-${props.color})`};

  :focus {
    outline: none;
    border-color: var(--color-blue-light);
  }
`;
