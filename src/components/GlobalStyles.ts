import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: Roboto;
    box-sizing: border-box;

    color: var(--color-black)
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
