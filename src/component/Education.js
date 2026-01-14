import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
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
    <Box id="education" sx={{ py: 10, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle>Education</SectionTitle>
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Timeline position="alternate">
            {educations.map((edu, index) => (
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
                      {edu.period} {edu.status && `(${edu.status})`}
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
                    <SchoolIcon sx={{ color: 'white' }} />
                  </TimelineDot>
                  {index < educations.length - 1 && (
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
                      {edu.period} {edu.status && `(${edu.status})`}
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
                      {edu.title}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, opacity: 0.9, textAlign: 'left' }}>
                      {edu.institution}
                    </Typography>
                    {edu.description && (
                      <Typography variant="body2" sx={{ lineHeight: 1.8, textAlign: 'left' }}>
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
