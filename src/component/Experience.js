import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const experiences = [
    {
      type: 'work',
      title: 'React Native Developer',
      organization: 'JTechSight',
      period: '10-November-2025 - 10-January-2026',
      duration: '2 Months Project-based',
      description: 'Cross-platform mobile app development with React Native.',
      achievements: [
        'Cross-platform (iOS & Android) app built with React Native.',
        'Added features: Join Table, Activity Tracking, Achievements, Friend Invitations, Chat.',
        'Implemented clean UI/UX and modular component structure.',
        'Connected app with backend APIs for real-time operations.',
      ],
    },
    {
      type: 'work',
      title: 'Web & Mobile App Development',
      organization: 'WGTechsol',
      period: 'September 2025 - November 2025',
      duration: 'Internship',
      description: 'Developed responsive web applications and cross-platform mobile apps.',
      achievements: [
        'Developed responsive web applications using React.js.',
        'Built cross-platform mobile apps using React Native.',
        'Collaborated with the team to design and implement new features.',
        'Debugged and optimized code for performance and scalability.',
        'Gained practical experience with version control (Git/GitHub) and agile workflows.',
      ],
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
    <Box id="experience" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Experience</SectionTitle>
        <Box sx={{ maxWidth: { xs: '100%', md: 1000 }, mx: 'auto' }}>
          <Timeline position={isMobile ? 'right' : 'alternate'}>
            {experiences.map((exp, index) => (
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
                      {exp.period}
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
                    {exp.type === 'education' ? (
                      <SchoolIcon sx={{ color: 'white', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                    ) : (
                      <WorkIcon sx={{ color: 'white', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                    )}
                  </TimelineDot>
                  {index < experiences.length - 1 && (
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
                      {exp.period}
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
                        {exp.period}
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
                      {exp.title}
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
                      {exp.organization}
                    </Typography>
                    {exp.achievements && (
                      <Box sx={{ mt: 2 }}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <Typography
                            key={achIndex}
                            variant="body2"
                            sx={{
                              mt: 0.5,
                              pl: 1.5,
                              position: 'relative',
                              fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' },
                              '&::before': {
                                content: '"•"',
                                position: 'absolute',
                                left: 0,
                                color: 'rgba(255, 255, 255, 0.8)',
                              },
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
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

export default Experience;
