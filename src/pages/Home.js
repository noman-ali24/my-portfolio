import React from 'react';
import Hero from '../component/Hero';
import Skills from '../component/Skills';
import Education from '../component/Education';
import Experience from '../component/Experience';
import Projects from '../component/Projects';
import Contact from '../component/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
