import React from 'react';
import { Container } from '@mui/material';
import Skills from '../component/Skills';

const SkillsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
      <Skills />
    </Container>
  );
};

export default SkillsPage;
