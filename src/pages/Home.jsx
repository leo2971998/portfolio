import { useRef, useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Button,
    Box,
    Grid,
    Card,
    CardContent,
    Chip,
    IconButton,
    useTheme,
    useMediaQuery,
    Divider
} from '@mui/material';
import {
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Email as EmailIcon,
    KeyboardArrowDown as ArrowDownIcon,
    Code as CodeIcon,
    Cloud as CloudIcon,
    Storage as DatabaseIcon,
    Web as WebIcon,
    Business as BusinessIcon,
    School as EducationIcon,
    Work as WorkIcon,
    EmojiEvents as AchievementIcon,
    Lightbulb as LightbulbIcon,
    Rocket as RocketIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const [typedText, setTypedText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const roles = [
        'Full-Stack Developer',
        'Software Engineer',
        'Cloud Solutions Architect',
        'React Specialist',
        'Problem Solver'
    ];

    // Static stats
    const stats = [
        { number: '25+', label: 'Projects Completed', icon: <CodeIcon /> },
        { number: '3+', label: 'Years Experience', icon: <WorkIcon /> },
        { number: '12+', label: 'Technologies', icon: <WebIcon /> },
        { number: '8', label: 'Certifications', icon: <AchievementIcon /> }
    ];

    // Technologies from resume
    const technologies = [
        { name: 'React', category: 'Frontend', color: '#61DAFB' },
        { name: 'Node.js', category: 'Backend', color: '#339933' },
        { name: 'Python', category: 'Backend', color: '#3776AB' },
        { name: 'JavaScript', category: 'Language', color: '#F7DF1E' },
        { name: 'TypeScript', category: 'Language', color: '#3178C6' },
        { name: 'AWS', category: 'Cloud', color: '#FF9900' },
        { name: 'Azure', category: 'Cloud', color: '#0078D4' },
        { name: 'MySQL', category: 'Database', color: '#4479A1' },
        { name: 'MongoDB', category: 'Database', color: '#47A248' },
        { name: 'Docker', category: 'DevOps', color: '#2496ED' },
        { name: 'Git', category: 'Tools', color: '#F05032' },
        { name: 'Spring Boot', category: 'Framework', color: '#6DB33F' }
    ];

    // Featured projects - using external illustrations
    const featuredProjects = [
        {
            title: 'Museum Management System',
            description: 'Full-stack React, Node.js, and MySQL application for museum operations with comprehensive CRUD functionality',
            tech: ['React', 'Node.js', 'MySQL', 'Azure'],
            category: 'Full-Stack',
            illustration: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Museum+System' // Placeholder image
        },
        {
            title: 'Azure Static Web App',
            description: 'Production hosting solution with live demo deployment and CI/CD pipeline integration',
            tech: ['Azure', 'Static Web Apps', 'CI/CD'],
            category: 'Cloud',
            illustration: 'https://via.placeholder.com/300x200/0078D4/ffffff?text=Azure+Web+App' // Placeholder image
        },
        {
            title: 'MusicBot Application',
            description: 'Python and Discord API integration for music management with queue controls and bot interaction',
            tech: ['Python', 'Discord.py', 'APIs'],
            category: 'Backend',
            illustration: 'https://via.placeholder.com/300x200/3776AB/ffffff?text=Music+Bot' // Placeholder image
        }
    ];

    // Typewriter effect
    useEffect(() => {
        let timeout;
        const currentText = roles[currentRole];

        if (typedText.length < currentText.length) {
            timeout = setTimeout(() => {
                setTypedText(currentText.substring(0, typedText.length + 1));
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setTypedText('');
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [typedText, currentRole, roles]);

    const scrollToNext = () => {
        document.getElementById('stats-section').scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Inline SVG component for hero section
    const HeroSVG = () => (
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background circle */}
            <circle cx="200" cy="200" r="180" fill="url(#gradient1)" fillOpacity="0.1"/>

            {/* Computer/Monitor */}
            <rect x="120" y="150" width="160" height="100" rx="8" fill="#667eea" fillOpacity="0.8"/>
            <rect x="130" y="160" width="140" height="80" rx="4" fill="#ffffff"/>

            {/* Code lines */}
            <rect x="140" y="170" width="60" height="4" rx="2" fill="#667eea"/>
            <rect x="140" y="180" width="80" height="4" rx="2" fill="#764ba2"/>
            <rect x="140" y="190" width="45" height="4" rx="2" fill="#667eea"/>
            <rect x="140" y="200" width="70" height="4" rx="2" fill="#764ba2"/>

            {/* Floating elements */}
            <circle cx="100" cy="100" r="20" fill="#61DAFB" fillOpacity="0.3"/>
            <circle cx="320" cy="120" r="15" fill="#339933" fillOpacity="0.3"/>
            <circle cx="80" cy="300" r="25" fill="#FF9900" fillOpacity="0.3"/>
            <circle cx="330" cy="280" r="18" fill="#3776AB" fillOpacity="0.3"/>

            {/* Gradient definition */}
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="home-container">
            {/* Enhanced Hero Section */}
            <section className="hero-section">
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center" minHeight="100vh">
                        <Grid item xs={12} md={6}>
                            <Box className="hero-content">
                                <Typography
                                    variant="h6"
                                    className="greeting"
                                    sx={{
                                        color: 'primary.main',
                                        fontWeight: 500,
                                        mb: 2,
                                        opacity: 0,
                                        animation: 'slideInLeft 0.8s ease forwards'
                                    }}
                                >
                                    👋 Hello, I'm
                                </Typography>

                                <Typography
                                    variant="h1"
                                    className="main-title"
                                    sx={{
                                        fontSize: { xs: '2.5rem', md: '4rem' },
                                        fontWeight: 700,
                                        mb: 2,
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        opacity: 0,
                                        animation: 'slideInLeft 0.8s ease 0.2s forwards'
                                    }}
                                >
                                    Leo Nguyen
                                </Typography>

                                <Box className="typewriter-container" sx={{ minHeight: '60px', mb: 3 }}>
                                    <Typography
                                        variant="h4"
                                        className="typewriter-text"
                                        sx={{
                                            fontSize: { xs: '1.5rem', md: '2rem' },
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            opacity: 0,
                                            animation: 'slideInLeft 0.8s ease 0.4s forwards'
                                        }}
                                    >
                                        {typedText}
                                        <span className="cursor">|</span>
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '1.1rem',
                                        lineHeight: 1.7,
                                        mb: 4,
                                        color: 'text.secondary',
                                        maxWidth: '500px',
                                        opacity: 0,
                                        animation: 'slideInLeft 0.8s ease 0.6s forwards'
                                    }}
                                >
                                    Computer Science graduate from University of Houston with 3+ years of experience
                                    building scalable web applications and cloud solutions. Passionate about clean code,
                                    modern frameworks, and solving complex business problems.
                                </Typography>

                                {/* Action Buttons */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        mb: 4,
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        opacity: 0,
                                        animation: 'slideInLeft 0.8s ease 0.8s forwards'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        component={Link}
                                        to="/projects"
                                        className="cta-button primary"
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: 3,
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
                                            }
                                        }}
                                    >
                                        View My Projects
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        size="large"
                                        href="/resume.pdf"
                                        target="_blank"
                                        className="cta-button secondary"
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            borderRadius: 3,
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
                                            borderWidth: 2,
                                            '&:hover': {
                                                borderWidth: 2,
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                                            }
                                        }}
                                    >
                                        Download Resume
                                    </Button>
                                </Box>

                                {/* Social Links */}
                                <Box
                                    className="social-links"
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        opacity: 0,
                                        animation: 'slideInLeft 0.8s ease 1s forwards'
                                    }}
                                >
                                    <IconButton
                                        href="https://github.com/leo2971998"
                                        target="_blank"
                                        className="social-icon"
                                        sx={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                            '&:hover': {
                                                backgroundColor: '#333',
                                                color: 'white',
                                                transform: 'translateY(-3px)'
                                            }
                                        }}
                                    >
                                        <GitHubIcon />
                                    </IconButton>

                                    <IconButton
                                        href="https://linkedin.com/in/leo-nguyen-8498821b"
                                        target="_blank"
                                        className="social-icon"
                                        sx={{
                                            backgroundColor: 'rgba(0, 119, 181, 0.1)',
                                            '&:hover': {
                                                backgroundColor: '#0077b5',
                                                color: 'white',
                                                transform: 'translateY(-3px)'
                                            }
                                        }}
                                    >
                                        <LinkedInIcon />
                                    </IconButton>

                                    <IconButton
                                        href="mailto:leonguyen290798@gmail.com"
                                        className="social-icon"
                                        sx={{
                                            backgroundColor: 'rgba(234, 67, 53, 0.1)',
                                            '&:hover': {
                                                backgroundColor: '#ea4335',
                                                color: 'white',
                                                transform: 'translateY(-3px)'
                                            }
                                        }}
                                    >
                                        <EmailIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box className="hero-visual" sx={{ textAlign: 'center', position: 'relative' }}>
                                {/* Using inline SVG instead of external file */}
                                <Box
                                    className="hero-image-container"
                                    sx={{
                                        position: 'relative',
                                        display: 'inline-block',
                                        opacity: 0,
                                        animation: 'fadeInUp 1s ease 0.5s forwards'
                                    }}
                                >
                                    <HeroSVG />
                                </Box>

                                {/* Floating Tech Icons */}
                                <Box className="tech-icons">
                                    <Chip
                                        icon={<CodeIcon />}
                                        label="React"
                                        className="floating-tech tech-1"
                                        color="primary"
                                    />
                                    <Chip
                                        icon={<CloudIcon />}
                                        label="AWS"
                                        className="floating-tech tech-2"
                                        color="secondary"
                                    />
                                    <Chip
                                        icon={<DatabaseIcon />}
                                        label="Node.js"
                                        className="floating-tech tech-3"
                                        color="success"
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Scroll Indicator */}
                    <Box
                        className="scroll-indicator"
                        sx={{
                            position: 'absolute',
                            bottom: 30,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            textAlign: 'center',
                            cursor: 'pointer',
                            opacity: 0,
                            animation: 'fadeIn 1s ease 2s forwards'
                        }}
                        onClick={scrollToNext}
                    >
                        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                            Scroll to explore
                        </Typography>
                        <ArrowDownIcon
                            sx={{
                                animation: 'bounce 2s infinite',
                                color: 'primary.main'
                            }}
                        />
                    </Box>
                </Container>
            </section>

            {/* Professional Stats Section */}
            <section id="stats-section" className="stats-section" sx={{ py: 8, backgroundColor: 'grey.50' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            {/* Create a visual representation instead of external image */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '400px',
                                    background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                                    borderRadius: 4,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        p: 4
                                    }}
                                >
                                    <Typography variant="h2" sx={{ fontSize: '4rem', mb: 2 }}>
                                        📊
                                    </Typography>
                                    <Typography variant="h5" color="primary.main" fontWeight={600}>
                                        Professional Growth
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                        Continuous learning and development
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ mb: 4, fontWeight: 600 }}>
                                Professional Journey
                            </Typography>
                            <Grid container spacing={3}>
                                {stats.map((stat, index) => (
                                    <Grid item xs={6} key={stat.label}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Box sx={{ mb: 2, color: 'primary.main' }}>
                                                {stat.icon}
                                            </Box>
                                            <Typography
                                                variant="h3"
                                                color="primary.main"
                                                fontWeight="bold"
                                                sx={{ mb: 1 }}
                                            >
                                                {stat.number}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {stat.label}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            {/* What I Do Section */}
            <section className="services-section" sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        textAlign="center"
                        sx={{ mb: 2, fontWeight: 600 }}
                    >
                        What I Do
                    </Typography>
                    <Typography
                        variant="h6"
                        textAlign="center"
                        color="text.secondary"
                        sx={{ mb: 8 }}
                    >
                        Full-stack development with modern technologies and cloud solutions
                    </Typography>

                    <Grid container spacing={4}>
                        {[
                            {
                                title: 'Frontend Development',
                                description: 'Creating responsive, interactive UIs with React, TypeScript, and modern CSS frameworks',
                                icon: <WebIcon sx={{ fontSize: '4rem' }} />,
                                color: '#667eea',
                                technologies: ['React', 'TypeScript', 'Material-UI', 'CSS3'],
                                emoji: '🎨'
                            },
                            {
                                title: 'Backend Development',
                                description: 'Building scalable APIs and server applications with Node.js, Python, and Spring Boot',
                                icon: <CodeIcon sx={{ fontSize: '4rem' }} />,
                                color: '#764ba2',
                                technologies: ['Node.js', 'Python', 'Spring Boot', 'REST APIs'],
                                emoji: '⚙️'
                            },
                            {
                                title: 'Cloud & DevOps',
                                description: 'Deploying and managing applications on AWS and Azure with CI/CD pipelines',
                                icon: <CloudIcon sx={{ fontSize: '4rem' }} />,
                                color: '#f093fb',
                                technologies: ['AWS', 'Azure', 'Docker', 'CI/CD'],
                                emoji: '☁️'
                            }
                        ].map((service, index) => (
                            <Grid item xs={12} md={4} key={service.title}>
                                <Card
                                    className="service-card"
                                    sx={{
                                        height: '100%',
                                        background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                                        border: `1px solid ${service.color}20`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: `0 20px 40px ${service.color}20`
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                        {/* Large Emoji as illustration */}
                                        <Typography variant="h1" sx={{ fontSize: '6rem', mb: 2 }}>
                                            {service.emoji}
                                        </Typography>

                                        <Typography
                                            variant="h5"
                                            gutterBottom
                                            sx={{ fontWeight: 600, mb: 2 }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{ lineHeight: 1.6, mb: 3 }}
                                        >
                                            {service.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                                            {service.technologies.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: `${service.color}20`,
                                                        color: service.color,
                                                        fontWeight: 500
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>

            {/* Featured Projects Section */}
            <section className="featured-projects" sx={{ py: 8, backgroundColor: 'grey.50' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                            Featured Projects
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            A showcase of my recent work and technical expertise
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {featuredProjects.map((project, index) => (
                            <Grid item xs={12} md={4} key={project.title}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 16px 32px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    {/* Using placeholder images with proper styling */}
                                    <Box sx={{ p: 3, textAlign: 'center', backgroundColor: 'grey.50' }}>
                                        <img
                                            src={project.illustration}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '150px',
                                                objectFit: 'cover',
                                                borderRadius: '8px'
                                            }}
                                        />
                                    </Box>

                                    <CardContent sx={{ p: 3 }}>
                                        <Chip
                                            label={project.category}
                                            size="small"
                                            color="primary"
                                            sx={{ mb: 2 }}
                                        />
                                        <Typography variant="h6" gutterBottom fontWeight={600}>
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 3, lineHeight: 1.6 }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {project.tech.map((tech) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <Button
                            component={Link}
                            to="/projects"
                            variant="contained"
                            size="large"
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                textTransform: 'none',
                                fontSize: '1.1rem'
                            }}
                        >
                            View All Projects
                        </Button>
                    </Box>
                </Container>
            </section>

            {/* Technologies Section */}
            <section className="technologies-section" sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ mb: 4, fontWeight: 600 }}>
                                Technologies I Master
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem' }}>
                                I work with cutting-edge technologies to build robust, scalable applications.
                                From frontend frameworks to cloud platforms, I choose the right tools for each project.
                            </Typography>

                            <Grid container spacing={2}>
                                {Object.entries(
                                    technologies.reduce((acc, tech) => {
                                        if (!acc[tech.category]) acc[tech.category] = [];
                                        acc[tech.category].push(tech);
                                        return acc;
                                    }, {})
                                ).map(([category, techs]) => (
                                    <Grid item xs={12} sm={6} key={category}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="h6" gutterBottom color="primary.main" fontWeight={600}>
                                                {category}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {techs.map((tech) => (
                                                    <Chip
                                                        key={tech.name}
                                                        label={tech.name}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: `${tech.color}20`,
                                                            color: tech.color,
                                                            fontWeight: 500,
                                                            '&:hover': {
                                                                backgroundColor: `${tech.color}30`,
                                                                transform: 'scale(1.05)'
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            {/* Tech stack visual representation */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '400px',
                                    background: 'linear-gradient(135deg, #667eea10 0%, #764ba210 100%)',
                                    borderRadius: 4,
                                    position: 'relative'
                                }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography variant="h1" sx={{ fontSize: '6rem', mb: 2 }}>
                                        💻
                                    </Typography>
                                    <Typography variant="h5" color="primary.main" fontWeight={600}>
                                        Tech Stack
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                                        Modern tools for modern solutions
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            {/* Enhanced CTA Section */}
            <section className="cta-section" sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Card sx={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} md={8}>
                                <Box sx={{ p: 6 }}>
                                    <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
                                        Ready to Build Something Amazing?
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, fontSize: '1.1rem' }}>
                                        Let's discuss how my skills in full-stack development and cloud solutions
                                        can help bring your project to life. I'm always excited to work on new challenges!
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            component={Link}
                                            to="/contact"
                                            sx={{
                                                backgroundColor: 'white',
                                                color: 'primary.main',
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 3,
                                                textTransform: 'none',
                                                fontSize: '1.1rem',
                                                '&:hover': {
                                                    backgroundColor: 'grey.100',
                                                    transform: 'translateY(-2px)'
                                                }
                                            }}
                                        >
                                            Get In Touch
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            component={Link}
                                            to="/projects"
                                            sx={{
                                                borderColor: 'white',
                                                color: 'white',
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 3,
                                                textTransform: 'none',
                                                fontSize: '1.1rem',
                                                borderWidth: 2,
                                                '&:hover': {
                                                    borderColor: 'grey.300',
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    borderWidth: 2,
                                                    transform: 'translateY(-2px)'
                                                }
                                            }}
                                        >
                                            View Portfolio
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ p: 3, textAlign: 'center' }}>
                                    <Typography variant="h1" sx={{ fontSize: '8rem', opacity: 0.7 }}>
                                        🚀
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </section>
        </div>
    );
}