import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" sx={{ mb: 1, color: '#ccc' }}>
          &copy; {currentYear} Your Name. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ color: '#ccc' }}>
          Made with <span style={{ color: '#f5576c' }}>❤️</span> using React & Material UI
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
