import React from 'react';
import { Container, Box, Typography, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SectionHeader from './SectionHeader';

const EDUCATIONS = [
  {
    type: 'Completed',
    status: 'Completed',
    title: 'Bachelors in Computer Science',
    institution: 'Federal Urdu University of Arts, Sciences & Technology',
    period: '2022 - 2026',
    description:
      "Graduated with Bachelor's degree in Computer Science focusing on software engineering, data structures, algorithms, and modern web & mobile technologies.",
    tags: ['Computer Science', 'Software Engineering', 'Data Structures', 'Web & Mobile'],
  },
  {
    type: 'Completed',
    status: 'Completed',
    title: 'Diploma in Computer Information Technology (CIT)',
    institution: 'Sindh Board of Technical Education',
    period: '2019 - 2021',
    description:
      'Completed Diploma in CIT covering fundamentals of computer programming, database management systems, networking, and software engineering.',
    tags: ['CIT', 'Programming', 'Databases', 'Networking'],
  },
];

const Education = ({ showHeader = true }) => {
  return (
    <Box id="education" sx={{ py: { xs: 8, md: 10 }, position: 'relative' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        {showHeader && (
          <SectionHeader
            eyebrow="ACADEMIC BACKGROUND"
            title="Education & Credentials"
            subtitle="Formal technical qualifications in computer science, software engineering, and applied computing."
          />
        )}

        <Box
          sx={{
            position: 'relative',
            maxWidth: 1000,
            mx: 'auto',
            mt: 4,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: { xs: 24, md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              width: 2,
              background: 'linear-gradient(180deg, #22d3ee 0%, #a78bfa 100%)',
              opacity: 0.7,
            },
          }}
        >
          {EDUCATIONS.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                  mb: { xs: 5, md: 6 },
                  position: 'relative',
                  pl: { xs: 7, md: 0 },
                }}
              >
                {/* Timeline Node Badge Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 24, md: '50%' },
                    top: { xs: 0, md: '50%' },
                    transform: { xs: 'translate(-50%, 0)', md: 'translate(-50%, -50%)' },
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: '#0a0b1a',
                    border: '2px solid #a78bfa',
                    boxShadow: '0 0 15px rgba(167, 139, 250, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a78bfa',
                    zIndex: 2,
                  }}
                >
                  <SchoolIcon sx={{ fontSize: '1.15rem' }} />
                </Box>

                {/* Card Content */}
                <Box
                  sx={{
                    width: { xs: '100%', md: '44%' },
                    mr: { md: isEven ? 'auto' : 0 },
                    ml: { md: !isEven ? 'auto' : 0 },
                  }}
                >
                  <Box
                    className="glass-panel glass-panel-hover"
                    sx={{
                      p: { xs: 3, sm: 3.5 },
                      borderRadius: '20px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1.5,
                      }}
                    >
                      <Chip
                        label={edu.status || edu.type}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(34, 197, 94, 0.12)',
                          color: '#4ade80',
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(74, 222, 128, 0.3)',
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: '#94a3b8',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      >
                        {edu.period}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.05rem', sm: '1.2rem' },
                        color: '#ffffff',
                        lineHeight: 1.3,
                        mb: 0.5,
                      }}
                    >
                      {edu.title}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#22d3ee',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        mb: 1.5,
                      }}
                    >
                      {edu.institution}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.86rem',
                        lineHeight: 1.6,
                        mb: 2.5,
                      }}
                    >
                      {edu.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {edu.tags.map((tag, tIdx) => (
                        <Box
                          key={tIdx}
                          sx={{
                            px: 1.4,
                            py: 0.4,
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#cbd5e1',
                            fontSize: '0.74rem',
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
