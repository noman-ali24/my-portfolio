import React from 'react';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';

const Experience = () => {
  const experiences = [
    {
      title: 'React Native Developer',
      organization: 'JTechSight',
      period: '10 Nov 2025 - 10 Jan 2026',
      duration: '2 Months • Project-based',
      description: 'Built cross-platform mobile app features with React Native including Join Table, Activity Tracking, Achievements, Friend Invitations, and Chat. Implemented clean UI/UX and modular component structure, integrated with backend APIs for real-time operations.',
      skills: ['React Native', 'Mobile App Dev', 'API Integration', 'UI/UX Design'],
    },
    {
      title: 'Web & Mobile App Developer',
      organization: 'WGTechsol',
      period: 'Sep 2025 - Nov 2025',
      duration: 'Internship',
      description: 'Developed responsive web applications and cross-platform mobile apps. Collaborated closely with the team to design and implement new feature sets, debugged code, and optimized application performance.',
      skills: ['React.js', 'React Native', 'Responsive Web', 'Git / GitHub'],
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
    <Box id="experience" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Work Experience</SectionTitle>

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
          {experiences.map((item, index) => (
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
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                  zIndex: 2,
                }}
              >
                <WorkIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
              </Box>

              {/* Experience Content Card */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3.5 },
                  ml: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(102, 126, 234, 0.12)',
                    borderColor: '#667eea',
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

                  <Chip
                    icon={<CalendarTodayIcon sx={{ fontSize: '0.85rem !important', color: '#667eea' }} />}
                    label={item.period}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      fontWeight: 700,
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      borderRadius: '12px',
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <BusinessIcon sx={{ color: '#764ba2', fontSize: '1.1rem' }} />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#764ba2',
                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    }}
                  >
                    {item.organization}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      ml: 1,
                    }}
                  >
                    ({item.duration})
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#334155',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.875rem', sm: '0.95rem' },
                    mb: 2,
                  }}
                >
                  {item.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {item.skills.map((skill, sIdx) => (
                    <Chip
                      key={sIdx}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: 'white',
                        border: '1px solid #cbd5e1',
                        color: '#475569',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
