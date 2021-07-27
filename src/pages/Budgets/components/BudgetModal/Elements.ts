import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.h1`
  font-weight: 400;
  font-size: 2.8rem;
`;

export const IconSpan = styled.span`
  font-size: 3rem;
  height: 4rem;
  padding: 0.5rem;
  cursor: pointer;
  border: solid 1px transparent;
  border-radius: 1rem;

  :focus,
  :hover {
    outline: none;
    border-color: var(--color-blue-light);
    transition: var(--trans-default);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
