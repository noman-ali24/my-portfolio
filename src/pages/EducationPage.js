import React from 'react';
import { Container } from '@mui/material';
import Education from '../component/Education';

const EducationPage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
      <Education />
    </Container>
  );
};

export default EducationPage;
