import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/themes/global';
import { defaultTheme } from './styles/themes/default';
import { Header } from './components/Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
