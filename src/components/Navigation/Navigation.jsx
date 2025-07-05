import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Button,
    useTheme,
    useMediaQuery,
    LinearProgress,
    Tooltip
} from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Home as HomeIcon,
    Work as WorkIcon,
    Article as ArticleIcon,
    ContactMail as ContactIcon,
    Person as PersonIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useThemeMode } from '../../contexts/ThemeContext.jsx';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.jsx';
import './Navigation.css';

const navigationItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'About', path: '/about', icon: <PersonIcon /> },
    { label: 'Projects', path: '/projects', icon: <WorkIcon /> },
    { label: 'Blog', path: '/blog', icon: <ArticleIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactIcon /> }
];

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const { darkMode, toggleDarkMode } = useThemeMode();

    // Handle scroll effects and section detection
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);

            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Section-aware navigation (for single-page sections)
            if (location.pathname === '/') {
                const sections = ['hero', 'education', 'projects', 'certifications'];
                const currentSection = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top <= 100 && rect.bottom >= 100;
                    }
                    return false;
                });
                setActiveSection(currentSection || '');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const closeDrawer = () => {
        setMobileOpen(false);
    };

    // Mobile drawer content
    const drawer = (
        <Box className="mobile-drawer">
            <Box className="drawer-header">
                <IconButton onClick={closeDrawer} className="close-button">
                    <CloseIcon />
                </IconButton>
            </Box>
            <List className="mobile-nav-list">
                {navigationItems.map((item) => (
                    <ListItem
                        key={item.path}
                        component={Link}
                        to={item.path}
                        onClick={closeDrawer}
                        className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <Box className="mobile-nav-icon">{item.icon}</Box>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
                <ListItem className="mobile-nav-item">
                    <ThemeSwitch />
                    <ListItemText primary={darkMode ? 'Light Mode' : 'Dark Mode'} />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                className={`navigation-bar ${isScrolled ? 'scrolled' : ''}`}
                elevation={isScrolled ? 4 : 0}
            >
                <Toolbar className="navigation-toolbar">
                    {/* Logo/Brand */}
                    <Box component={Link} to="/" className="brand-logo">
                        <span className="brand-text">Portfolio</span>
                    </Box>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <Box className="desktop-nav">
                            {navigationItems.map((item) => (
                                <Button
                                    key={item.path}
                                    component={Link}
                                    to={item.path}
                                    className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
                                    startIcon={item.icon}
                                >
                                    {item.label}
                                </Button>
                            ))}

                            {/* Theme Toggle */}
                            <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                                <ThemeSwitch />
                            </Tooltip>
                        </Box>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            className="mobile-menu-button"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>

                {/* Scroll Progress Bar */}
                <LinearProgress
                    variant="determinate"
                    value={scrollProgress}
                    className="scroll-progress"
                />
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                className="mobile-drawer-container"
            >
                {drawer}
            </Drawer>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <Toolbar />
        </>
    );
}