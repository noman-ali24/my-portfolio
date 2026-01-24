import React from 'react';
import { Container } from '@mui/material';
import Projects from '../component/Projects';

const PortfolioPage = () => {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
      <Projects />
    </Container>
  );
};

export default PortfolioPage;
