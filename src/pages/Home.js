import React from 'react';
import { Box } from '@mui/material';
import Hero from '../component/Hero';
import Skills from '../component/Skills';
import Education from '../component/Education';
import Experience from '../component/Experience';
import Projects from '../component/Projects';
import Contact from '../component/Contact';

const Home = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
