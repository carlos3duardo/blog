import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/themes/global';
import { defaultTheme } from './styles/themes/default';
import { Header } from './components/Header';
import { Profile } from './components/Profile';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <Profile />
    </ThemeProvider>
  );
}

export default App;
