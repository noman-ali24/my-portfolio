import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AtomStack from './AtomStack';
import profileImage from '../assets/486203702_1883682939041971_2560599721687666200_n.jpg';
import cvFile from '../assets/Noman.Ali.cv.pdf';

const ROLES = [
  'React Native Developer.',
  'Full-Stack Developer.',
  'Mobile App Specialist.',
  'Node.js & MongoDB Engineer.',
  'Frontend Engineer.',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Noman.Ali.cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: '1+', label: 'Year Experience' },
    { number: '6+', label: 'Projects Delivered' },
    { number: '100%', label: 'Mobile & Web Responsive' },
    { number: '3+', label: 'Companies & Teams' },
  ];

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        pt: { xs: 12, sm: 14, md: 16 },
        pb: { xs: 6, md: 8 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        {/* Hero Grid: Left Content & Right 3D Atom */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.9fr' },
            gap: { xs: 5, md: 4 },
            alignItems: 'center',
            minHeight: { md: '520px' },
          }}
        >
          {/* Left Column */}
          <Box sx={{ zIndex: 1 }}>
            {/* Top Pill: Avatar + Status */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                p: '5px 14px 5px 6px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                mb: 3,
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={profileImage}
                  alt="Muhammad Noman Ali"
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid #22d3ee',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    border: '1.5px solid #05060f',
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span className="pulse-green-dot" />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: '0.72rem', sm: '0.8rem' },
                    color: '#e2e8f0',
                  }}
                >
                  Available for work · Karachi, Pakistan
                </Typography>
              </Box>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.25rem' },
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                mb: 1.5,
              }}
            >
              Hi, I'm <span className="gradient-text">Noman Ali</span>
            </Typography>

            {/* Typewriter Subtitle */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.25rem', sm: '1.65rem', md: '1.85rem' },
                color: '#ffffff',
                mb: 2.5,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Box component="span" sx={{ mr: 1, color: '#e2e8f0' }}>
                a
              </Box>
              <Box component="span" className="gradient-cyan-text" sx={{ fontWeight: 700 }}>
                {displayedText}
              </Box>
              <span className="typewriter-cursor">|</span>
            </Typography>

            {/* Bio Description */}
            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                fontSize: { xs: '0.92rem', sm: '1.02rem' },
                lineHeight: 1.7,
                maxWidth: 580,
                mb: 3.5,
              }}
            >
              Full-Stack React Native Developer with 1 year of professional experience building user-friendly mobile and web applications. Skilled in developing responsive frontends with React Native and React.js, and building backend services and REST APIs using Node.js, Express.js, and MongoDB. Passionate about creating scalable, efficient, and high-quality end-to-end solutions.
            </Typography>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3.5, alignItems: 'center' }}>
              <Button
                onClick={handleDownloadCV}
                startIcon={<DownloadIcon />}
                className="btn-primary-gradient"
                sx={{
                  px: 3.5,
                  py: 1.25,
                  fontSize: '0.92rem',
                  textTransform: 'none',
                }}
              >
                Download CV
              </Button>

              <Button
                onClick={scrollToProjects}
                endIcon={<ArrowForwardIcon />}
                className="btn-secondary-glass"
                sx={{
                  px: 3.5,
                  py: 1.25,
                  fontSize: '0.92rem',
                  textTransform: 'none',
                }}
              >
                View Work
              </Button>
            </Box>

            {/* Social Links Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              {[
                {
                  icon: <EmailIcon fontSize="small" />,
                  href: 'mailto:nomanali01241@gmail.com',
                  label: 'Email',
                },
                {
                  icon: <PhoneIcon fontSize="small" />,
                  href: 'tel:+923484622870',
                  label: 'Phone',
                },
                {
                  icon: <LinkedInIcon fontSize="small" />,
                  href: 'https://www.linkedin.com/in/muhammad-noman-ali-70351b24a/',
                  label: 'LinkedIn',
                  target: '_blank',
                },
                {
                  icon: <GitHubIcon fontSize="small" />,
                  href: 'https://github.com/noman-ali24',
                  label: 'GitHub',
                  target: '_blank',
                },
                {
                  icon: <LocationOnIcon fontSize="small" />,
                  href: null,
                  label: 'Karachi, Pakistan',
                },
              ].map((s, idx) => (
                <IconButton
                  key={idx}
                  component={s.href ? 'a' : 'div'}
                  href={s.href || undefined}
                  target={s.target}
                  rel={s.target ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  sx={{
                    width: 42,
                    height: 42,
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#94a3b8',
                    transition: 'all 0.25s ease',
                    '&:hover': s.href
                      ? {
                          backgroundColor: 'rgba(99, 102, 241, 0.2)',
                          borderColor: '#22d3ee',
                          color: '#22d3ee',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 0 15px rgba(34, 211, 238, 0.35)',
                        }
                      : {},
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Right Column: 3D Atom Orbiting Stack */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
            }}
          >
            <AtomStack />
          </Box>
        </Box>

        {/* Stats Row */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 2, sm: 2.5 },
            mt: { xs: 6, md: 8 },
          }}
        >
          {stats.map((stat, idx) => (
            <Box
              key={idx}
              className="glass-panel glass-panel-hover"
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: '16px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
                  color: '#22d3ee',
                  lineHeight: 1.1,
                  mb: 0.75,
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: { xs: '0.65rem', sm: '0.72rem' },
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#94a3b8',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
