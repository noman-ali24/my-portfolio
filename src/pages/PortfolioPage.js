import React from 'react';
import { Box } from '@mui/material';
import Projects from '../component/Projects';

const PortfolioPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Projects />
    </Box>
  );
};

export default PortfolioPage;
