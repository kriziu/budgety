import styled from 'styled-components';

export const Select = styled.select`
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

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  height: 14rem;
  flex-direction: column;
`;

export const StyledP = styled.p<{ checked: boolean }>`
  font-size: 2rem;
  margin-left: 1rem;
  transition: var(--trans-default);
  display: flex;
  align-items: center;
  color: ${props => `var(--color-gray${props.checked ? '-dark)' : ')'}`};
`;

export const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
