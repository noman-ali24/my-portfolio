import React from 'react';
import { Box } from '@mui/material';
import Skills from '../component/Skills';
import BreadcrumbHeader from '../component/BreadcrumbHeader';

const SkillsPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <BreadcrumbHeader currentPage="Skills" />
      <Skills />
    </Box>
  );
};

export default SkillsPage;
