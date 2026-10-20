import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import SectionHeader from './SectionHeader';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    dotColor: '#818cf8',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend & Mobile',
    dotColor: '#22d3ee',
    skills: [
      'React Native (iOS & Android)',
      'React.js',
      'Redux & Redux Toolkit',
      'Material-UI',
      'Tailwind CSS & Bootstrap',
    ],
  },
  {
    title: 'Backend & Data',
    dotColor: '#a78bfa',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB & Mongoose',
      'REST APIs',
      'Supabase & Firebase',
      'JWT Auth & WebSockets',
    ],
  },
  {
    title: 'Tooling & Delivery',
    dotColor: '#34d399',
    skills: [
      'Git & GitHub Actions',
      'Postman API Testing',
      'Android Studio & Xcode',
      'Responsive UI/UX Architecture',
      'Offline Data Support',
    ],
  },
];

const LANGUAGES_SPOKEN = [
  { name: 'Urdu', level: 'Native / Fluent', percentage: 100 },
  { name: 'English', level: 'Professional Working', percentage: 85 },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        <SectionHeader
          eyebrow="WHAT I WORK WITH"
          title="Skill Constellation"
          subtitle="A full-stack toolkit spanning languages, mobile frameworks, backend systems, and infrastructure."
        />

        {/* 4 Skill Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
            mb: 4,
          }}
        >
          {SKILL_GROUPS.map((group, idx) => (
            <Box
              key={idx}
              className="glass-panel glass-panel-hover"
              sx={{
                p: { xs: 3, sm: 3.5 },
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Card Header with Dot */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: group.dotColor,
                    boxShadow: `0 0 10px ${group.dotColor}`,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.title}
                </Typography>
              </Box>

              {/* Skills List with > bullet */}
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                  flexGrow: 1,
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <Box
                    key={sIdx}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 1.25,
                      color: '#cbd5e1',
                      fontSize: '0.88rem',
                      lineHeight: 1.4,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: group.dotColor,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        fontSize: '0.82rem',
                      }}
                    >
                      ›
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.88rem',
                        fontWeight: 400,
                        transition: 'color 0.2s ease',
                        '&:hover': { color: '#ffffff' },
                      }}
                    >
                      {skill}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Spoken Languages Proficiency Bars */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {LANGUAGES_SPOKEN.map((lang, idx) => (
            <Box
              key={idx}
              className="glass-panel"
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: '16px',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: '#ffffff',
                    fontSize: '0.95rem',
                  }}
                >
                  {lang.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#94a3b8',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                  }}
                >
                  {lang.level}
                </Typography>
              </Box>

              {/* Progress track */}
              <Box
                sx={{
                  width: '100%',
                  height: 6,
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: `${lang.percentage}%`,
                    height: '100%',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #6366f1 0%, #22d3ee 100%)',
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
