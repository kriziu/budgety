import styled from 'styled-components';
import Select from 'react-select';

export const Select1 = styled.select<{ color: string }>`
  padding: 0.2rem 0.2rem;
  border: 1px solid var(--color-gray);
  border-radius: 1rem;
  transition: var(--trans-default);
  font-size: 3rem;
  background-color: var(--color-white);
  font-family: inherit;
  color: ${props =>
    props.color === 'black'
      ? props.theme.text
      : `var(--color-${props.color})`} !important;

  :focus {
    outline: none;
    border-color: var(--color-blue-light);
  }
`;

export const Container = styled.div`
  width: 13rem;
  display: inline-block;
`;

export const StyledSelect = styled(Select)<{ color?: string }>`
  .Select {
    &__control {
      background-color: ${({ theme }) => theme.background};
      border: 1px solid ${({ theme }) => theme.border};
      color: ${props =>
        props.color ? props.theme.text : `var(--color-${props.color})`};
      border-radius: 1rem;
      flex-wrap: nowrap;
    }

    &__value-container {
      color: ${({ theme }) => theme.text};
      border-radius: 1rem;
      width: 2rem;
      width: 3rem;
    }

    &__input {
      color: ${({ theme }) => theme.text};
    }

    &__single-value {
      color: ${props =>
        props.color === 'black'
          ? props.theme.text
          : `var(--color-${props.color})`} !important;
    }

    &__menu {
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
    }

    &__option--is-focused {
      background-color: var(--color-blue-light);
    }
  }
`;
