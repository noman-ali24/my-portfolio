

import React from 'react';
import { Container, Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineContent } from '@mui/lab';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const educations = [
      {
        type: 'work',
        title: 'React Native Developer',
        organization: 'JTechSight',
        period: '10-November-2025 - 10-January-2026',
        duration: '2 Months Project-based',
        description: 'Cross-platform mobile app development with React Native. Added features: Join Table, Activity Tracking, Achievements, Friend Invitations, Chat. Implemented clean UI/UX and modular component structure. Connected app with backend APIs for real-time operations.',
        // achievements: [
        //   'Cross-platform (iOS & Android) app built with React Native.',
        //   'Added features: Join Table, Activity Tracking, Achievements, Friend Invitations, Chat.',
        //   'Implemented clean UI/UX and modular component structure.',
        //   'Connected app with backend APIs for real-time operations.',
        // ],
      },
      {
        type: 'work',
        title: 'Web & Mobile App Development',
        organization: 'WGTechsol',
        period: 'September 2025 - November 2025',
        duration: 'Internship',
        description: 'Developed responsive web applications and cross-platform mobile apps. Collaborated with the team to design and implement new features.',
        // achievements: [
        //   'Developed responsive web applications using React.js.',
        //   'Built cross-platform mobile apps using React Native.',
        //   'Collaborated with the team to design and implement new features.',
        //   'Debugged and optimized code for performance and scalability.',
        //   'Gained practical experience with version control (Git/GitHub) and agile workflows.',
        // ],
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
        <SectionTitle>Experience</SectionTitle>
        <Box sx={{ maxWidth: { xs: '100%', md: 1000 }, mx: 'auto' }}>
          <Timeline position={isMobile ? 'right' : 'alternate'} sx={{ '& .MuiTimelineItem-missingOppositeContent:before': { flex: 0 } }}>
            {educations.map((edu, index) => (
              <TimelineItem key={index}>
                {index % 2 === 1 && !isMobile && (
                  <TimelineContent sx={{ 
                    display: { xs: 'flex', md: 'flex' },
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
                {/* <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: '#667eea',
                      width: { xs: 35, sm: 40, md: 45 },
                      height: { xs: 35, sm: 40, md: 45 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SchoolIcon sx={{ color: 'white', fontSize: { xs: 18, sm: 20, md: 22 } }} />
                  </TimelineDot>
                  {index < educations.length - 1 && (
                    <TimelineConnector sx={{ backgroundColor: '#667eea', height: { xs: 50, sm: 60, md: 80 } }} />
                  )}
                </TimelineSeparator> */}
                <Box sx={{py:20}}>

                </Box>
                {index % 2 === 0 && !isMobile && (
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
                  maxWidth: { xs: 'calc(100vw - 60px)', md: 'none' },
                  minWidth: { xs: 0, md: 'auto' },
                  flex: { xs: '1', md: 'none' },
                  ml: { xs: 1, md: 0 },
                  alignSelf: { xs: 'flex-start', md: 'auto' }
                }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, sm: 2.5, md: 3 },
                      backgroundColor: '#667eea',
                      color: 'white',
                      borderRadius: { xs: 2, md: 3 },
                      maxWidth: { xs: '100%', sm: 350, md: 400 },
                      width: { xs: '100%', md: 'auto' },
                      ml: { xs: 0, md: !isMobile && index % 2 === 0 ? 0 : 'auto' },
                      mr: { xs: 0, md: !isMobile && index % 2 === 0 ? 'auto' : 0 },
                      textAlign: 'left',
                      boxShadow: { xs: 2, md: 3 },
                      overflow: 'hidden',
                      wordBreak: 'break-word',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: isMobile ? -7 : (index % 2 === 0 ? -7 : 'auto'),
                        right: isMobile ? 'auto' : (index % 2 === 0 ? 'auto' : -7),
                        top: 20,
                        width: 0,
                        height: 0,
                        borderTop: '7px solid transparent',
                        borderBottom: '7px solid transparent',
                        borderRight: isMobile || index % 2 === 0 ? '7px solid #667eea' : 'auto',
                        borderLeft: !isMobile && index % 2 === 1 ? '7px solid #667eea' : 'auto',
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
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
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
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
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
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
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

export default Experience;
