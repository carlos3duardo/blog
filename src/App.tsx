import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/themes/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Github blog</h1>
    </ThemeProvider>
  );
}

export default App;
