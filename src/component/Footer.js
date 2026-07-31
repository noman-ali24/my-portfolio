import React from 'react';
import { Box, Typography, Container, IconButton, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
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
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0f172a 0%, #090d16 100%)',
        color: '#f8fafc',
        pt: { xs: 5, sm: 6 },
        pb: { xs: 6, sm: 5 },
        px: { xs: 2.5, sm: 4 },
        width: '100%',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2.5,
            mb: 3.5,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 800, 
                color: '#ffffff', 
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                letterSpacing: '-0.01em',
              }}
            >
              MUHAMMAD NOMAN ALI
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#a5b4fc', 
                fontWeight: 600, 
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                mt: 0.3,
              }}
            >
              React Native Full Stack Developer
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center' }}>
            <IconButton
              component="a"
              href="mailto:nomanali01241@gmail.com"
              aria-label="Email"
              sx={{ 
                color: '#ffffff', 
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                p: 1.2,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
                } 
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/noman-ali24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ 
                color: '#ffffff', 
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                p: 1.2,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
                } 
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/muhammad-noman-ali-70351b24a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ 
                color: '#ffffff', 
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                p: 1.2,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
                } 
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mb: 0.8, color: '#e2e8f0', fontWeight: 500, fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
            &copy; {currentYear} Muhammad Noman Ali. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.8rem' }}>
            Built with <span style={{ color: '#ef4444' }}>❤️</span> using React.js & Material UI
          </Typography>
        </Box>
      </Container>

      {/* Floating Scroll to top button */}
      <ScrollToTopFab />
    </Box>
  );
};

export default Footer;
