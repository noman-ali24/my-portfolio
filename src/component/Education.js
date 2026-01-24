import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const educations = [
    {
      title: 'Bachelors in Computer Science',
      institution: 'Federal Urdu University Art Science Technology',
      period: '2022 to 2026',
      status: 'Continue',
      description: 'Pursuing Bachelor\'s degree in Computer Science with focus on software development, algorithms, and modern web technologies.',
    },
    {
      title: 'Diploma in CIT',
      institution: 'Associate Engineering Sindh Technical Board',
      period: '2019 - 2021',
      description: 'Completed Diploma in Computer Information Technology covering fundamentals of programming, database management, and software engineering.',
    },
  ];

  const SectionTitle = ({ children }) => (
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        mb: 5,
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
    <Box id="education" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Education</SectionTitle>
        <Box sx={{ maxWidth: { xs: '100%', md: 1000 }, mx: 'auto' }}>
          <Timeline position={isMobile ? 'right' : 'alternate'}>
            {educations.map((edu, index) => (
              <TimelineItem key={index}>
                {index % 2 === 1 && (
                  <TimelineContent sx={{ 
                    display: { xs: 'none', md: 'flex' },
                    flex: '0 0 auto',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#333',
                        fontWeight: 500,
                        textAlign: 'right',
                        pr: 2,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      }}
                    >
                      {edu.period} {edu.status && `(${edu.status})`}
                    </Typography>
                  </TimelineContent>
                )}
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: '#667eea',
                      width: { xs: 40, sm: 45, md: 50 },
                      height: { xs: 40, sm: 45, md: 50 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SchoolIcon sx={{ color: 'white', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                  </TimelineDot>
                  {index < educations.length - 1 && (
                    <TimelineConnector sx={{ backgroundColor: '#667eea', height: { xs: 60, md: 100 } }} />
                  )}
                </TimelineSeparator>
                {index % 2 === 0 && (
                  <TimelineContent sx={{ 
                    display: { xs: 'none', md: 'flex' },
                    flex: '0 0 auto',
                    alignItems: 'center'
                  }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#333',
                        fontWeight: 500,
                        textAlign: 'left',
                        pl: 2,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      }}
                    >
                      {edu.period} {edu.status && `(${edu.status})`}
                    </Typography>
                  </TimelineContent>
                )}
                <TimelineContent sx={{ 
                  py: { xs: 1, md: 0 },
                  px: { xs: 1, md: 2 },
                  maxWidth: { xs: 'calc(100vw - 80px)', md: 'none' },
                  minWidth: { xs: 0, md: 'auto' },
                  flex: { xs: '1', md: 'none' },
                  ml: { xs: 1, md: 0 }
                }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 1.5, sm: 2, md: 3 },
                      backgroundColor: '#667eea',
                      color: 'white',
                      borderRadius: { xs: 2, md: 3 },
                      maxWidth: { xs: '100%', sm: 320, md: 400 },
                      width: { xs: '100%', md: 'auto' },
                      ml: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                      mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                      textAlign: 'left',
                      boxShadow: { xs: 2, md: 3 },
                      overflow: 'hidden',
                      wordBreak: 'break-word',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: -7,
                        top: 20,
                        width: 0,
                        height: 0,
                        borderTop: '7px solid transparent',
                        borderBottom: '7px solid transparent',
                        borderRight: '7px solid #667eea',
                        zIndex: 1,
                      },
                    }}
                  >
                    {/* Mobile date display */}
                    <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '0.75rem',
                          fontStyle: 'italic',
                        }}
                      >
                        {edu.period} {edu.status && `(${edu.status})`}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1, 
                        textAlign: 'left',
                        fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      {edu.title}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 2, 
                        opacity: 0.9, 
                        textAlign: 'left',
                        fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem' },
                      }}
                    >
                      {edu.institution}
                    </Typography>
                    {edu.description && (
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          lineHeight: 1.6, 
                          textAlign: 'left',
                          fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' },
                        }}
                      >
                        {edu.description}
                      </Typography>
                    )}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
