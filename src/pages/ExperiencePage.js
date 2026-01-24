import React from 'react';
import { Container } from '@mui/material';
import Experience from '../component/Experience';

const ExperiencePage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
      <Experience />
    </Container>
  );
};

export default ExperiencePage;
