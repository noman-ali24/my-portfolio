import React from 'react';
import { Box, Container } from '@mui/material';
import Hero from '../component/Hero';
import Skills from '../component/Skills';
import Education from '../component/Education';
import Experience from '../component/Experience';
import Projects from '../component/Projects';
import Contact from '../component/Contact';

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </Container>
    </Box>
  );
};

export default Home;
