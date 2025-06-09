import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { CustomThemeProvider } from './contexts/ThemeContext.jsx';

function App() {
    return (
        <CustomThemeProvider>
            <CssBaseline />
            <Navigation />
            <main>
                <Outlet />
            </main>
        </CustomThemeProvider>
    );
}

export default App;