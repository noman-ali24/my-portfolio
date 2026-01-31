import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, useMediaQuery, useTheme } from '@mui/material';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css-3.png';
import jsIcon from '../assets/java-script.png';
import bootstrapIcon from '../assets/bootstrap.png';
import reactIcon from '../assets/react.png';
import materialIcon from '../assets/material.png';
import reduxIcon from '../assets/redux.png';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const languages = [
    { name: 'HTML5', icon: htmlIcon, color: '#e34c26' },
    { name: 'CSS3', icon: cssIcon, color: '#264de4' },
    { name: 'JavaScript', icon: jsIcon, color: '#f7df1e' },
  ];

  const frameworks = [
    { name: 'React.js', icon: reactIcon, color: '#61dafb' },
    { name: 'React Native (iOS & Android)', icon: reactIcon, color: '#61dafb' },
    { name: 'Material-UI', icon: materialIcon, color: '#007fff' },
    { name: 'Bootstrap', icon: bootstrapIcon, color: '#7952b3' },
    { name: 'Redux', icon: reduxIcon, color: '#764abc' },
  ];

  const SectionTitle = ({ children }) => (
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        mb: { xs: 3, md: 5 },
        fontWeight: 700,
        color: '#333',
        fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 60, sm: 80 },
          height: 4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 2,
        },
      }}
    >
      {children}
    </Typography>
  );

  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8f9fa', px: { xs: 2, sm: 3, md: 4 } }}>
      <Container maxWidth="lg" sx={{ px: 0 }}>
        <SectionTitle>Skills</SectionTitle>
        
        {isMobile ? (
          /* Mobile Layout - Vertical with icons and names */
          <Box>
            {/* Languages Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#333', textAlign: 'center' }}>
                Languages
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {languages.map((lang, index) => (
                  <Paper
                    key={index}
                    elevation={2}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      borderRadius: 2,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Avatar 
                      src={lang.icon} 
                      alt={lang.name}
                      sx={{ 
                        bgcolor: 'white', 
                        width: 40, 
                        height: 40,
                        p: 1,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1rem' }}>
                      {lang.name}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>

            {/* Frameworks Section */}
            <Box>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#333', textAlign: 'center' }}>
                Frameworks & Libraries
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {frameworks.map((framework, index) => (
                  <Paper
                    key={index}
                    elevation={2}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      borderRadius: 2,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Avatar 
                      src={framework.icon} 
                      alt={framework.name}
                      sx={{ 
                        bgcolor: 'white', 
                        width: 40, 
                        height: 40,
                        p: 1,
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1rem' }}>
                      {framework.name}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          /* Desktop Layout - Original Grid */
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                Languages
              </Typography>
              <Grid container spacing={2}>
                {languages.map((lang, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: 2,
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Avatar 
                        src={lang.icon} 
                        alt={lang.name}
                        sx={{ 
                          bgcolor: 'white', 
                          width: 50, 
                          height: 50,
                          p: 1,
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {lang.name}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                Frameworks & Libraries
              </Typography>
              <Grid container spacing={2}>
                {frameworks.map((framework, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: 2,
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Avatar 
                        src={framework.icon} 
                        alt={framework.name}
                        sx={{ 
                          bgcolor: 'white', 
                          width: 50, 
                          height: 50,
                          p: 1,
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {framework.name}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Skills;
