import React from 'react';
import { Box, Typography, Container, IconButton, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 250,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        size="small"
        onClick={handleClick}
        aria-label="scroll back to top"
        className="btn-primary-gradient"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          width: 44,
          height: 44,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Education', path: '/education' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#05060f',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        pt: { xs: 6, md: 8 },
        pb: 5,
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
            pb: 5,
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                mb: 0.5,
              }}
            >
              Noman <span className="gradient-text">Ali</span>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#94a3b8',
                fontSize: '0.78rem',
              }}
            >
              React Native Full Stack Developer
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 3 },
            }}
          >
            {navLinks.map((item) => (
              <Box
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#22d3ee',
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            {[
              {
                icon: <GitHubIcon fontSize="small" />,
                href: 'https://github.com/noman-ali24',
                label: 'GitHub',
              },
              {
                icon: <LinkedInIcon fontSize="small" />,
                href: 'https://www.linkedin.com/in/muhammad-noman-ali-70351b24a/',
                label: 'LinkedIn',
              },
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
            ].map((s, idx) => (
              <IconButton
                key={idx}
                component="a"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                sx={{
                  width: 38,
                  height: 38,
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#94a3b8',
                  '&:hover': {
                    color: '#22d3ee',
                    borderColor: 'rgba(34, 211, 238, 0.4)',
                    backgroundColor: 'rgba(99, 102, 241, 0.15)',
                  },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            pt: 4,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#64748b',
              fontSize: '0.78rem',
            }}
          >
            © {currentYear} Muhammad Noman Ali. Crafted with precision & React Native expertise.
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: '#64748b',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
            }}
          >
            Karachi, Pakistan
          </Typography>
        </Box>
      </Container>

      <ScrollToTopFab />
    </Box>
  );
};

export default Footer;
