import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#646cff',
      },
    },
    typography: {
      fontFamily: '"Inter", system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
  });

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
  );
}

export default App;