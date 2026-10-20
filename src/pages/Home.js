import React from 'react';
import { Box } from '@mui/material';
import Hero from '../component/Hero';
import TechTicker from '../component/TechTicker';
import Skills from '../component/Skills';
import Projects from '../component/Projects';
import Experience from '../component/Experience';
import Education from '../component/Education';
import Contact from '../component/Contact';

const Home = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <TechTicker />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </Box>
  );
};

export default Home;
