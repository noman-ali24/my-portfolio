import React from 'react';
import { Box } from '@mui/material';
import Education from '../component/Education';
import BreadcrumbHeader from '../component/BreadcrumbHeader';

const EducationPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <BreadcrumbHeader currentPage="Education" />
      <Education />
    </Box>
  );
};

export default EducationPage;
