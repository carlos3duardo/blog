import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme.baseBackground};
    color: ${(props) => props.theme.baseText};
    -webkit-font-smoothig: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.baseTitle};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`;
