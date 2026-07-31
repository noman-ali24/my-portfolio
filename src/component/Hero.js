import React from 'react';
import { Container, Box, Typography, Button, IconButton, Avatar, Chip, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import profileImage from '../assets/486203702_1883682939041971_2560599721687666200_n.jpg';
import cvFile from '../assets/Noman.Ali.cv.pdf';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Noman.Ali.cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    { number: '2+', label: 'Years Experience' },
    { number: '5+', label: 'Featured Projects' },
    { number: '100%', label: 'Mobile & Web Responsive' },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 6, md: 10 },
        background: 'radial-gradient(circle at 50% 0%, rgba(102, 126, 234, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Avatar Showcase with Ring & Badges */}
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Box
              sx={{
                p: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 12px 30px rgba(102, 126, 234, 0.35)',
              }}
            >
              <Avatar
                src={profileImage}
                alt="Muhammad Noman Ali"
                sx={{
                  width: { xs: 120, sm: 150, md: 170 },
                  height: { xs: 120, sm: 150, md: 170 },
                  border: '4px solid white',
                }}
              />
            </Box>

            {/* Floating Tech Badges */}
            <Chip
              icon={<SmartphoneIcon sx={{ fontSize: '1rem !important', color: '#667eea' }} />}
              label="React Native"
              size="small"
              className="floating-element"
              sx={{
                position: 'absolute',
                top: 0,
                left: { xs: -25, sm: -45 },
                backgroundColor: 'white',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                fontWeight: 700,
                color: '#334155',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                py: 0.5,
              }}
            />

            <Chip
              icon={<CodeIcon sx={{ fontSize: '1rem !important', color: '#764ba2' }} />}
              label="Full Stack Dev"
              size="small"
              className="floating-element"
              sx={{
                position: 'absolute',
                bottom: 10,
                right: { xs: -25, sm: -45 },
                backgroundColor: 'white',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                fontWeight: 700,
                color: '#334155',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                py: 0.5,
                animationDelay: '1.5s',
              }}
            />
          </Box>

          {/* Name & Role Header */}
          <Box sx={{ maxWidth: 800 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
              <Chip
                label="✨ Available for Opportunities"
                size="small"
                sx={{
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  color: '#667eea',
                  fontWeight: 700,
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  px: 1,
                  py: 0.5,
                  borderRadius: '20px',
                }}
              />
            </Box>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 1.5,
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.25rem' },
                color: '#0f172a',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Hi, I'm{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Muhammad Noman Ali
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: '#475569',
                fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.6rem' },
              }}
            >
              React Native Full Stack Developer
            </Typography>

            {/* Objective Glass Card */}
            <Paper
              elevation={0}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: { xs: 3, md: 4 },
                p: { xs: 3, sm: 4 },
                color: 'white',
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.25)',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                Professional Summary & Objective
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.95, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                React Native Full Stack Mobile Application Developer passionate about creating modern, scalable, and high-performance mobile applications. Skilled in React Native, Node.js, Express.js, MongoDB, Firebase, REST APIs, and Socket.IO, with a strong focus on clean architecture, efficient backend development, and exceptional mobile user experiences.
              </Typography>
            </Paper>
          </Box>

          {/* Quick Metrics Bar */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 2, sm: 4 },
              width: '100%',
              maxWidth: 700,
              my: 1,
            }}
          >
            {highlights.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  flex: { xs: '1 1 120px', sm: '1 1 160px' },
                  p: { xs: 2, sm: 2.5 },
                  borderRadius: 3,
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: '#667eea',
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    mb: 0.5,
                  }}
                >
                  {item.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#64748b',
                    fontWeight: 600,
                    fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  }}
                >
                  {item.label}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Action Buttons & Social Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2.5,
              mt: 1,
            }}
          >
            <Button
              variant="contained"
              onClick={handleDownloadCV}
              startIcon={<DownloadIcon />}
              sx={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: 'white',
                px: { xs: 4, sm: 5 },
                py: { xs: 1.4, sm: 1.6 },
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                fontWeight: 700,
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.25)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 25px rgba(102, 126, 234, 0.4)',
                },
              }}
            >
              Download CV
            </Button>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <IconButton
                component="a"
                href="mailto:nomanali01241@gmail.com"
                aria-label="Email"
                sx={{
                  background: 'white',
                  color: '#667eea',
                  border: '1px solid #e2e8f0',
                  width: { xs: 46, sm: 50 },
                  height: { xs: 46, sm: 50 },
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderColor: 'transparent',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.35)',
                  },
                }}
              >
                <EmailIcon />
              </IconButton>

              <IconButton
                component="a"
                href="tel:+923484622870"
                aria-label="Phone"
                sx={{
                  background: 'white',
                  color: '#667eea',
                  border: '1px solid #e2e8f0',
                  width: { xs: 46, sm: 50 },
                  height: { xs: 46, sm: 50 },
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderColor: 'transparent',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.35)',
                  },
                }}
              >
                <PhoneIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/muhammad-noman-ali-70351b24a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  background: 'white',
                  color: '#667eea',
                  border: '1px solid #e2e8f0',
                  width: { xs: 46, sm: 50 },
                  height: { xs: 46, sm: 50 },
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderColor: 'transparent',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.35)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://github.com/noman-ali24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  background: 'white',
                  color: '#667eea',
                  border: '1px solid #e2e8f0',
                  width: { xs: 46, sm: 50 },
                  height: { xs: 46, sm: 50 },
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderColor: 'transparent',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.35)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

