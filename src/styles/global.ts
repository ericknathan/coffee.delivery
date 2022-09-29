import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 2px solid ${({ theme }) => theme['purple-500']};
    outline-offset: 2px;
  }

  body {
    background-color: ${({ theme }) => theme['gray-100']};
    color: ${({ theme }) => theme['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
    line-height: 1.3;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
  }
`;
