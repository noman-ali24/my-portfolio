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
import cvFile from '../assets/Muhammad-Noman-Ali.pdf';

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
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      // Full word completed: pause for 2.6 seconds so it can be comfortably read
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
    } else if (isDeleting && displayedText === '') {
      // Word cleared: pause 450ms before typing the next role
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 450);
    } else {
      // Typing pace: 110ms per char (calm & natural), Deleting: 55ms per char
      const speed = isDeleting ? 55 : 110;
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const handleDownloadCV = () => {
    const fileUrl = cvFile || `${process.env.PUBLIC_URL}/Muhammad-Noman-Ali.pdf`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Muhammad-Noman-Ali.pdf');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
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
        pt: { xs: 10, sm: 12, md: 16 },
        pb: { xs: 6, md: 8 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        {/* Hero Grid: On Mobile (Image 3), AtomStack is at TOP (order 1), Content is below (order 2) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.9fr' },
            gap: { xs: 4, sm: 5, md: 4 },
            alignItems: 'center',
            minHeight: { md: '520px' },
          }}
        >
          {/* 3D Atom Orbiting Stack: order 1 on mobile (xs), order 2 on desktop (md) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
              order: { xs: 1, md: 2 },
              mb: { xs: 1, md: 0 },
            }}
          >
            <AtomStack />
          </Box>

          {/* Left Column (Content): order 2 on mobile (xs), order 1 on desktop (md) */}
          <Box
            className="animate-fade-in-up"
            sx={{
              zIndex: 1,
              order: { xs: 2, md: 1 },
              textAlign: { xs: 'center', md: 'left' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            {/* Top Pill: Avatar + Status (matching Image 3) */}
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
                mb: 2.5,
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

            {/* Main Heading: Hi, I'm Noman Ali */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.3rem', sm: '3.25rem', md: '4.25rem' },
                lineHeight: 1.12,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                mb: 1.5,
                textAlign: { xs: 'center', md: 'left' },
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
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
                textAlign: { xs: 'center', md: 'left' },
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

            {/* Bio Description (Exact 1-year professional experience bio) */}
            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                fontSize: { xs: '0.92rem', sm: '1.02rem' },
                lineHeight: 1.7,
                maxWidth: 580,
                mb: 3.5,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Full-Stack React Native Developer with 1 year of professional experience building user-friendly mobile and web applications. Skilled in developing responsive frontends with React Native and React.js, and building backend services and REST APIs using Node.js, Express.js, and MongoDB. Passionate about creating scalable, efficient, and high-quality end-to-end solutions.
            </Typography>

            {/* Action Buttons (Download CV + View Work) */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                mb: 3.5,
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                width: '100%',
              }}
            >
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

            {/* Social Links Row (Matching Image 3) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1.5,
                width: '100%',
              }}
            >
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
        </Box>

        {/* Stats Row */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 1.5, sm: 2.5 },
            mt: { xs: 6, md: 8 },
          }}
        >
          {stats.map((stat, idx) => (
            <Box
              key={idx}
              className="glass-panel glass-panel-hover"
              sx={{
                p: { xs: 2, sm: 3 },
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
                  fontSize: { xs: '1.6rem', sm: '2.25rem', md: '2.5rem' },
                  color: '#22d3ee',
                  lineHeight: 1.1,
                  mb: 0.5,
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: { xs: '0.62rem', sm: '0.72rem' },
                  fontWeight: 600,
                  letterSpacing: '0.06em',
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
