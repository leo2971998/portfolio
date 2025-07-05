import { Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../../contexts/ThemeContext.jsx';
import './ThemeSwitch.css';

export default function ThemeSwitch() {
    const { darkMode, toggleDarkMode } = useThemeMode();
    return (
        <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            color="default"
            icon={<DarkModeIcon />}
            checkedIcon={<LightModeIcon />}
            className="theme-switch"
            inputProps={{ 'aria-label': 'Toggle dark mode' }}
        />
    );
}
