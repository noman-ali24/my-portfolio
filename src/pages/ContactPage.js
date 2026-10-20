import React from 'react';
import { Box } from '@mui/material';
import Contact from '../component/Contact';
import BreadcrumbHeader from '../component/BreadcrumbHeader';

const ContactPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <BreadcrumbHeader currentPage="Contact" />
      <Contact />
    </Box>
  );
};

export default ContactPage;
