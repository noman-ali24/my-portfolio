import React from 'react';
import { Box } from '@mui/material';
import Contact from '../component/Contact';

const ContactPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Contact />
    </Box>
  );
};

export default ContactPage;
