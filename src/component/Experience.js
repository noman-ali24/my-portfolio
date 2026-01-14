import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
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
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 80,
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
    <Box id="experience" sx={{ py: 10, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <SectionTitle>Experience</SectionTitle>
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                {index % 2 === 1 && (
                  <TimelineContent sx={{ flex: index % 2 === 1 ? '0 0 auto' : '1 1 auto' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#333',
                        fontWeight: 500,
                        textAlign: 'right',
                        pr: 2,
                        minWidth: { xs: 'auto', md: 150 },
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
                      width: 50,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {exp.type === 'education' ? (
                      <SchoolIcon sx={{ color: 'white' }} />
                    ) : (
                      <WorkIcon sx={{ color: 'white' }} />
                    )}
                  </TimelineDot>
                  {index < experiences.length - 1 && (
                    <TimelineConnector sx={{ backgroundColor: '#667eea', height: 100 }} />
                  )}
                </TimelineSeparator>
                {index % 2 === 0 && (
                  <TimelineContent sx={{ flex: index % 2 === 0 ? '0 0 auto' : '1 1 auto' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#333',
                        fontWeight: 500,
                        textAlign: 'left',
                        pl: 2,
                        minWidth: { xs: 'auto', md: 150 },
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </TimelineContent>
                )}
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      backgroundColor: '#667eea',
                      color: 'white',
                      borderRadius: 3,
                      maxWidth: { xs: '100%', md: 400 },
                      ml: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                      mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                      textAlign: 'left',
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'left' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, opacity: 0.9, textAlign: 'left' }}>
                      {exp.organization}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.8, textAlign: 'left' }}>
                      {exp.description} {exp.achievements && exp.achievements.join('. ')}
                    </Typography>
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
