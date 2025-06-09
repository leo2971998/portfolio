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
    LinearProgress
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);

            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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