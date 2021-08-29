import styled from 'styled-components';

export const CheckBox = styled.div<{ checked: boolean }>`
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid var(--color-gray-dark);
  display: inline-block;
  border-radius: 50%;
  position: relative;
  transition: var(--trans-default);

  ::after {
    content: '';
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background-color: ${props =>
      `var(--color-${props.checked ? 'gray-dark)' : 'white)'}`};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: var(--trans-default);
  }
`;
