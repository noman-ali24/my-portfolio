import React from 'react';
import { Box } from '@mui/material';
import Projects from '../component/Projects';
import BreadcrumbHeader from '../component/BreadcrumbHeader';

const PortfolioPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <BreadcrumbHeader currentPage="Portfolio" />
      <Projects isFullPage={true} />
    </Box>
  );
};

export default PortfolioPage;
