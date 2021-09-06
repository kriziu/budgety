import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem 2rem;
  border: 1px solid var(--color-gray);
  border-radius: 1rem;
  transition: var(--trans-default);
  font-size: 1.6rem;
  background-color: var(--color-white);
  font-family: inherit;
  width: 100%;

  :focus {
    outline: none;
    border-color: var(--color-blue-light);
  }
`;

export const Label = styled.label`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
`;
