import styled from 'styled-components';

export const Header1 = styled.h1<{ $color?: string }>`
  transition: var(--trans-default);
  font-size: 4rem;
  font-weight: 400;
  color: ${props =>
    props.$color ? `var(--color-${props.$color})` : 'var(--color-black)'};
  letter-spacing: 1px;
  text-align: center;
  margin: 1.5rem 0;
`;

export const Header2 = styled.h2<{ $color?: string }>`
  transition: var(--trans-default);
  font-size: 3.5rem;
  font-weight: 400;
  color: ${props =>
    props.$color ? `var(--color-${props.$color})` : 'var(--color-black)'};
  letter-spacing: 1px;
  text-align: center;
  margin: 1rem 0;
`;

export const Header3 = styled.h3<{ $color?: string }>`
  transition: var(--trans-default);
  font-size: 3rem;
  font-weight: 400;
  color: ${props =>
    props.$color ? `var(--color-${props.$color})` : 'var(--color-black)'};
  letter-spacing: 1px;
  text-align: center;
  margin: 1rem 0;
`;

export const Header4 = styled.h4<{ $color?: string }>`
  transition: var(--trans-default);
  font-size: 2.5rem;
  font-weight: 500;
  color: ${props =>
    props.$color ? `var(--color-${props.$color})` : 'var(--color-black)'};
  text-align: center;
  margin: 0.75rem 0;
`;

export const Header5 = styled.h5<{ $color?: string }>`
  transition: var(--trans-default);
  font-size: 2.3rem;
  font-weight: 500;
  color: ${props =>
    props.$color ? `var(--color-${props.$color})` : 'var(--color-black)'};
  text-align: center;
  margin: 0.5rem 0;
`;

export const Header6 = styled.h6<{ $color?: string }>`
  transition: var(--trans-default);
  font-size: 2rem;
  font-weight: 500;
  color: ${props =>
    props.$color ? `var(--color-${props.$color})` : 'var(--color-black)'};
  text-align: center;
  margin: 0.5rem 0;
`;

export const NoMessage = styled.h3`
  font-weight: 600;
  color: var(--color-gray-dark);
  opacity: 0.3;
`;
