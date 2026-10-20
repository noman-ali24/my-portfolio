import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import SpaceCanvas from './SpaceCanvas';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#05060f',
        color: '#f8fafc',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background Starry Particle Canvas */}
      <SpaceCanvas />

      {/* Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
          overflowX: 'hidden',
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
