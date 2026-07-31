import React from 'react';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Education = () => {
  const educations = [
    {
      title: 'Bachelors in Computer Science',
      institution: 'Federal Urdu University of Arts, Sciences & Technology',
      period: '2022 - 2026',
      status: 'In Progress',
      description: "Pursuing Bachelor's degree in Computer Science with focus on software engineering, data structures, algorithms, and modern web & mobile technologies.",
    },
    {
      title: 'Diploma in Computer Information Technology (CIT)',
      institution: 'Sindh Board of Technical Education',
      period: '2019 - 2021',
      status: 'Completed',
      description: 'Completed Diploma in CIT covering fundamentals of computer programming, database management systems, networking, and software engineering.',
    },
  ];

  const SectionTitle = ({ children }) => (
    <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          color: '#0f172a',
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
          letterSpacing: '-0.02em',
          mb: 1.5,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 70,
            height: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2,
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );

  return (
    <Box id="education" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Education & Qualifications</SectionTitle>

        <Box
          sx={{
            maxWidth: 850,
            mx: 'auto',
            position: 'relative',
            pl: { xs: 2, sm: 4 },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 10,
              bottom: 10,
              left: { xs: 15, sm: 23 },
              width: 3,
              background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 2,
            },
          }}
        >
          {educations.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                mb: { xs: 4, sm: 5 },
                '&:last-child': { mb: 0 },
              }}
            >
              {/* Timeline Icon Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -23, sm: -32 },
                  top: 0,
                  width: { xs: 36, sm: 44 },
                  height: { xs: 36, sm: 44 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(118, 75, 162, 0.4)',
                  zIndex: 2,
                }}
              >
                <SchoolIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
              </Box>

              {/* Education Content Card */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  ml: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(118, 75, 162, 0.12)',
                    borderColor: '#764ba2',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a',
                      fontSize: { xs: '1.1rem', sm: '1.3rem' },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {item.status && (
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          backgroundColor: item.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                          color: item.status === 'Completed' ? '#059669' : '#d97706',
                          fontWeight: 700,
                          fontSize: { xs: '0.7rem', sm: '0.75rem' },
                          borderRadius: '12px',
                        }}
                      />
                    )}
                    <Chip
                      icon={<CalendarTodayIcon sx={{ fontSize: '0.85rem !important', color: '#764ba2' }} />}
                      label={item.period}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(118, 75, 162, 0.1)',
                        color: '#764ba2',
                        fontWeight: 700,
                        fontSize: { xs: '0.75rem', sm: '0.8rem' },
                        borderRadius: '12px',
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <AccountBalanceIcon sx={{ color: '#667eea', fontSize: '1.1rem' }} />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#667eea',
                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    }}
                  >
                    {item.institution}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#334155',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.875rem', sm: '0.95rem' },
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
