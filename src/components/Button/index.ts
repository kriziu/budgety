import styled from 'styled-components';

interface ButtonProps {
  color: string;
  textColor: string;
  secondary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 1rem;
  border: ${props =>
    props.secondary ? `2px solid var(--color-${props.color})` : 'none'};
  width: 100%;
  font-size: 1.8rem;
  padding: 1.1rem;
  color: ${props => `var(--color-${props.textColor})`};
  background-color: ${props =>
    props.secondary ? 'var(--color-white)' : `var(--color-${props.color})`};
  font-family: inherit;
  transition: var(--trans-default);

  :hover,
  :focus {
    outline: none;
    transform: translateY(-5%);
    cursor: pointer;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.3);
    ${props =>
      props.secondary &&
      `background-color: var(--color-${props.color}); color: var(--color-white)`};
  }

  :active {
    transform: translateY(2%);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
  }
`;
