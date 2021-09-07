import { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    border: string;
    background: string;
  }
}

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  select {
    background-color: ${({ theme }) => theme.background} !important;
    border: 1px solid ${({ theme }) => theme.border} !important;
    color: ${({ theme }) => theme.text} !important;

    :focus {
    outline: none;
    border-color: var(--color-blue-light) !important;
  }
  }


  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: Roboto;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.body};

    color: ${({ theme }) => theme.text};
    transition: all .3s;
  }

  html {
    font-size: 62.5%;
  }


  :root {
    // COLORS
    --color-red: #E53E3E;
    --color-gray: #CBD5E0;
    --color-gray-dark: #1A202C;
    --color-green: #48BB78;
    --color-black: #222;
    --color-white: #fff;
    --color-blue-light: #90CDF4;

    // TRANSITIONS
    --trans-default: all .2s ease;
    
    // SHADOWS
    --shadow-default: 0px 5px 30px 2px rgba(0, 0, 0, 0.2);
  }
`;

export default GlobalStyle;
