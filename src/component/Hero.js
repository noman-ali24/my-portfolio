import React from 'react';

import { Container, Box, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import EmailIcon from '@mui/icons-material/Email';

import PhoneIcon from '@mui/icons-material/Phone';

import cvFile from '../assets/Noman.Ali.cv.pdf';



const Hero = () => {

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  

  const handleDownloadCV = () => {

    const link = document.createElement('a');

    link.href = cvFile;

    link.download = 'Noman.Ali.cv.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  };



  return (

    <Box

      id="home"

      sx={{

        minHeight: '100vh',

        display: 'flex',

        alignItems: 'center',

        pt: { xs: 4, md: 0 },

        pb: { xs: 4, md: 5 },

        background: 'white',

      }}

    >

      <Container maxWidth="lg" sx={{ px: 0 }}>

          {/* Desktop Layout - Original */}

          <Box>

            <Box

              sx={{

                display: 'flex',

                justifyContent: 'center',

                mb: 3,

              }}

            >

              <Box sx={{ textAlign: 'center' }}>

            {/* Name Introduction */}

            <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>

              Hi, I'm{' '}

              <Box component="span" sx={{ }}>

                Muhammad Noman Ali

              </Box>

            </Typography>

            

            {/* Role Description */}

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 500, color: '#555' }}>

                Web and Mobile App Developer

              

            </Typography>

            

              <Box

                sx={{

                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

                  borderRadius: 3,

                  p: 4,

                  color: 'white',

                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',

                  maxWidth: 800,

                  width: '100%',

                }}

              >

                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>

                  Objective

                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>

                  Passionate Web and Mobile App Developer with hands-on experience in React.js

                  and React Native. Skilled in building responsive web applications and cross-platform 

                  mobile apps (iOS & Android), with a focus on clean UI/UX, performance optimization, 

                  and seamless integration with backend APIs. Seeking opportunities to contribute to 

                  modern applications while expanding technical expertise.

                </Typography>

              </Box>

            </Box>

            </Box>



            <Box

              sx={{

                display: 'flex',

                flexDirection: 'column',

                alignItems: 'center',

              }}

            >

              <Button

                variant="contained"

                onClick={handleDownloadCV}

                sx={{

                  backgroundColor: 'black',

                  color: 'white',

                  px: 4,

                  py: 1.5,

                  borderRadius: '50px',

                  textTransform: 'none',

                  fontSize: '1rem',

                  fontWeight: 600,

                  mb: 4,

                  '&:hover': {

                    backgroundColor: '#333',

                  },

                }}

              >

                DOWNLOAD CV

              </Button>

              

              <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>

                <IconButton

                  component="a"

                  href="mailto:nomanali01241@gmail.com"

                  sx={{

                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

                    color: 'white',

                    width: 50,

                    height: 50,

                    '&:hover': {

                      transform: 'translateY(-3px)',

                      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',

                    },

                  }}

                >

                  <EmailIcon />

                </IconButton>

                <IconButton

                  component="a"

                  href="tel:+923484622870"

                  sx={{

                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

                    color: 'white',

                    width: 50,

                    height: 50,

                    '&:hover': {

                      transform: 'translateY(-3px)',

                      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',

                    },

                  }}

                >

                  <PhoneIcon />

                </IconButton>

                <IconButton

                  component="a"

                  href="https://www.linkedin.com/in/muhammad-noman-ali-70351b24a/"

                  target="_blank"

                  rel="noopener noreferrer"

                  sx={{

                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

                    color: 'white',

                    width: 50,

                    height: 50,

                    '&:hover': {

                      transform: 'translateY(-3px)',

                      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',

                    },

                  }}

                >

                  <LinkedInIcon />

                </IconButton>

                <IconButton

                  component="a"

                  href="https://github.com/noman-ali24"

                  target="_blank"

                  rel="noopener noreferrer"

                  sx={{

                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

                    color: 'white',

                    width: 50,

                    height: 50,

                    '&:hover': {

                      transform: 'translateY(-3px)',

                      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',

                    },

                  }}

                >

                  <GitHubIcon />

                </IconButton>

              </Box>

            </Box>

          </Box>

      </Container>

    </Box>

  );

};



export default Hero;

