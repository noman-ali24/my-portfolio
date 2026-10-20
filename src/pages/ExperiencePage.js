import React from 'react';
import { Box } from '@mui/material';
import Experience from '../component/Experience';
import BreadcrumbHeader from '../component/BreadcrumbHeader';

const ExperiencePage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <BreadcrumbHeader currentPage="Experience" />
      <Experience />
    </Box>
  );
};

export default ExperiencePage;
