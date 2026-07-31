import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#0f172a',
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          backgroundColor: '#f8fafc',
          overflowX: 'hidden',
          pt: {
            xs: '58px',
            sm: '64px',
          },
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
