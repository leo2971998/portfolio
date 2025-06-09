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
  useMediaQuery
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Code as CodeIcon,
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
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
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
    document.getElementById('about-preview').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
      <div className="home-container">
        {/* Hero Section */}
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
                    Leo
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
                    I craft beautiful, responsive web applications with modern technologies.
                    Passionate about clean code, great UX, and solving complex problems.
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
                      View My Work
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        component={Link}
                        to="/contact"
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
                      Let's Talk
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
                        href="https://linkedin.com/in/leo-chen"
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
                        href="mailto:leo.chen@example.com"
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
                  {/* Animated Background Elements */}
                  <Box className="floating-shapes">
                    <Box className="shape shape-1"></Box>
                    <Box className="shape shape-2"></Box>
                    <Box className="shape shape-3"></Box>
                  </Box>

                  {/* Main Visual */}
                  <Box
                      className="hero-image-container"
                      sx={{
                        position: 'relative',
                        display: 'inline-block',
                        opacity: 0,
                        animation: 'fadeInUp 1s ease 0.5s forwards'
                      }}
                  >
                    <img
                        src="/hero.svg"
                        alt="Developer Illustration"
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          maxHeight: '400px'
                        }}
                    />
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
                        icon={<LightbulbIcon />}
                        label="JavaScript"
                        className="floating-tech tech-2"
                        color="secondary"
                    />
                    <Chip
                        icon={<RocketIcon />}
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

        {/* Quick Preview Cards */}
        <section id="about-preview" className="preview-section">
          <Container maxWidth="lg">
            <Typography
                variant="h3"
                textAlign="center"
                sx={{ mb: 6, fontWeight: 600 }}
            >
              What I Do
            </Typography>

            <Grid container spacing={4}>
              {[
                {
                  title: 'Frontend Development',
                  description: 'Creating beautiful, responsive interfaces with React, TypeScript, and modern CSS',
                  icon: '🎨',
                  color: '#667eea'
                },
                {
                  title: 'Backend Development',
                  description: 'Building robust APIs and server-side applications with Node.js and databases',
                  icon: '⚙️',
                  color: '#764ba2'
                },
                {
                  title: 'Full-Stack Projects',
                  description: 'End-to-end application development with modern tools and best practices',
                  icon: '🚀',
                  color: '#f093fb'
                }
              ].map((service, index) => (
                  <Grid item xs={12} md={4} key={service.title}>
                    <Card
                        className="service-card"
                        sx={{
                          height: '100%',
                          background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                          border: `1px solid ${service.color}20`,
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: `0 20px 40px ${service.color}20`
                          }
                        }}
                    >
                      <CardContent sx={{ p: 4, textAlign: 'center' }}>
                        <Typography
                            variant="h2"
                            sx={{ fontSize: '3rem', mb: 2 }}
                        >
                          {service.icon}
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
                            sx={{ lineHeight: 1.6 }}
                        >
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
              ))}
            </Grid>
          </Container>
        </section>
      </div>
  );
}