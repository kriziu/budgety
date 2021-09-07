import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  transition: var(--trans-default);
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.background};
  font-family: inherit;
  width: 100%;

  color: ${({ theme }) => theme.text};

  :focus {
    outline: none;
    border-color: var(--color-blue-light);
  }
`;

export const Label = styled.label`
  font-size: 2.3rem;
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
`;
