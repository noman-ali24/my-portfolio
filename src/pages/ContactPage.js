import React from 'react';
import { Container } from '@mui/material';
import Contact from '../component/Contact';

const ContactPage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
      <Contact />
    </Container>
  );
};

export default ContactPage;
