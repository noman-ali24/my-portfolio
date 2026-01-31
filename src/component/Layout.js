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
        backgroundColor: '#f8f9fa',
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: {
            xs: '64px',   // mobile header height
            sm: '70px',
            md: '80px',   // desktop header height
          },
          px: {
            xs: 1,
            sm: 2,
            md: 0,
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
