import React from 'react';
import { Container, Box, Typography, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SectionHeader from './SectionHeader';

const EXPERIENCES = [
  {
    type: 'Work',
    role: 'React Native Full Stack Developer',
    company: 'QF Network',
    period: 'May 2026 - Present',
    description:
      'Working as a React Native Full Stack Developer managing both frontend and backend development. Developing intuitive cross-platform mobile applications with React Native and building robust, scalable backend REST APIs using Node.js, Express, and MongoDB.',
    skills: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Redux', 'Git & GitHub'],
  },
  {
    type: 'Work',
    role: 'React Native Full Stack Developer',
    company: 'JTechSight',
    period: '10 Nov 2025 - 10 Jan 2026',
    description:
      'Built cross-platform mobile app features with React Native including Join Table, Activity Tracking, Achievements, Friend Invitations, and Chat. Developed backend services and REST APIs using Node.js, Express.js, and Supabase for real-time data sync and authentication.',
    skills: ['React Native', 'Node.js', 'Express.js', 'Supabase', 'REST APIs', 'Redux', 'UI/UX Design'],
  },
  {
    type: 'Work',
    role: 'Web & Mobile App Developer',
    company: 'WGTechsol',
    period: 'Sep 2025 - Nov 2025',
    description:
      'Developed responsive web applications and cross-platform mobile apps. Collaborated closely with the team to design and implement new feature sets, debugged code, and optimized application performance.',
    skills: ['React.js', 'React Native', 'JavaScript', 'Responsive Web', 'Git & GitHub'],
  },
];

const Experience = ({ showHeader = true }) => {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        {showHeader && (
          <SectionHeader
            eyebrow="1 YEAR · BUILDING PRODUCTS"
            title="Work Experience"
            subtitle="The path from engineering fundamentals to shipping production apps across mobile and web."
          />
        )}

        {/* Central Timeline */}
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
              background: 'linear-gradient(180deg, #6366f1 0%, #22d3ee 50%, #a78bfa 100%)',
              opacity: 0.7,
            },
          }}
        >
          {EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: isEven ? 'row-reverse' : 'row' },
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
                    border: '2px solid #22d3ee',
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
                    zIndex: 2,
                  }}
                >
                  <WorkIcon sx={{ fontSize: '1.15rem' }} />
                </Box>

                {/* Card Content (Occupies half width on desktop) */}
                <Box
                  sx={{
                    width: { xs: '100%', md: '44%' },
                    ml: { md: isEven ? 'auto' : 0 },
                    mr: { md: !isEven ? 'auto' : 0 },
                  }}
                >
                  <Box
                    className="glass-panel glass-panel-hover"
                    sx={{
                      p: { xs: 3, sm: 3.5 },
                      borderRadius: '20px',
                    }}
                  >
                    {/* Top Row: Type Pill & Period */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1.5,
                      }}
                    >
                      <Chip
                        label={exp.type}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(99, 102, 241, 0.15)',
                          color: '#818cf8',
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          borderRadius: '9999px',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
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
                        {exp.period}
                      </Typography>
                    </Box>

                    {/* Role Title */}
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
                      {exp.role}
                    </Typography>

                    {/* Company */}
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#22d3ee',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        mb: 1.5,
                      }}
                    >
                      {exp.company}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.86rem',
                        lineHeight: 1.6,
                        mb: 2.5,
                      }}
                    >
                      {exp.description}
                    </Typography>

                    {/* Skills Badges */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {exp.skills.map((skill, sIdx) => (
                        <Box
                          key={sIdx}
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
                          {skill}
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

export default Experience;
