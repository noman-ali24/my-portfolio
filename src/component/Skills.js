import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar } from '@mui/material';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css-3.png';
import jsIcon from '../assets/java-script.png';
import bootstrapIcon from '../assets/bootstrap.png';
import reactIcon from '../assets/react.png';
import materialIcon from '../assets/material.png';
import reduxIcon from '../assets/redux.png';

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', icon: reactIcon, tag: 'Web Framework', level: 'Advanced' },
    { name: 'React Native', icon: reactIcon, tag: 'iOS & Android', level: 'Advanced' },
    { name: 'JavaScript', icon: jsIcon, tag: 'ES6+ Logic', level: 'Advanced' },
    { name: 'Redux', icon: reduxIcon, tag: 'State Management', level: 'Advanced' },
    { name: 'HTML5', icon: htmlIcon, tag: 'Semantic Markup', level: 'Expert' },
    { name: 'CSS3', icon: cssIcon, tag: 'Modern Styling', level: 'Expert' },
    { name: 'Material-UI', icon: materialIcon, tag: 'UI Library', level: 'Advanced' },
    { name: 'Bootstrap', icon: bootstrapIcon, tag: 'CSS Framework', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', tag: 'Runtime Environment', level: 'Advanced' },
    { name: 'Express.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg', tag: 'Server Framework', level: 'Advanced' },
    { name: 'REST APIs', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', tag: 'Web Services', level: 'Advanced' },
    { name: 'Socket.IO', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg', tag: 'Real-time WebSockets', level: 'Intermediate' },
    { name: 'JWT Auth', icon: 'https://jwt.io/img/pic_logo.svg', tag: 'Security & Auth', level: 'Advanced' },
    { name: 'Mongoose', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', tag: 'MongoDB ODM', level: 'Advanced' },
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', tag: 'Version Control', level: 'Advanced' },
    { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', tag: 'BaaS & Auth', level: 'Intermediate' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', tag: 'API Testing', level: 'Advanced' },
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

  const SkillCard = ({ skill }) => (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 1.2, sm: 2.5 },
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1, sm: 2 },
        borderRadius: 3,
        backgroundColor: 'white',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100%',
        width: '100%',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
          borderColor: '#667eea',
        },
      }}
    >
      <Avatar
        src={skill.icon}
        alt={skill.name}
        imgProps={{ style: { objectFit: 'contain' } }}
        sx={{
          width: { xs: 36, sm: 50 },
          height: { xs: 36, sm: 50 },
          p: { xs: 0.5, sm: 0.8 },
          backgroundColor: '#f8fafc',
          border: '1px solid #cbd5e1',
          flexShrink: 0,
        }}
      />
      <Box sx={{ minWidth: 0, overflow: 'hidden', flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '0.825rem', sm: '1.05rem' },
            color: '#0f172a',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: 1.2,
          }}
        >
          {skill.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#667eea',
            fontWeight: 600,
            fontSize: { xs: '0.68rem', sm: '0.8rem' },
            display: 'block',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {skill.tag}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Skills & Technical Expertise</SectionTitle>

        {/* Frontend Development Section */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#334155',
              mb: 3,
              fontSize: { xs: '1.15rem', sm: '1.35rem' },
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              '&::before': {
                content: '""',
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#667eea',
              }
            }}
          >
            Frontend Development
          </Typography>
          <Grid container spacing={{ xs: 1.5, sm: 3 }} justifyContent="center">
            {frontendSkills.map((skill, index) => (
              <Grid item xs={6} sm={6} md={4} key={index}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Backend & Database Section */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#334155',
              mb: 3,
              fontSize: { xs: '1.15rem', sm: '1.35rem' },
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              '&::before': {
                content: '""',
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#764ba2',
              }
            }}
          >
            Backend & Database
          </Typography>
          <Grid container spacing={{ xs: 1.5, sm: 3 }} justifyContent="center">
            {backendSkills.map((skill, index) => (
              <Grid item xs={6} sm={6} md={4} key={index}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tools & Cloud Section */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#334155',
              mb: 3,
              fontSize: { xs: '1.15rem', sm: '1.35rem' },
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              '&::before': {
                content: '""',
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
              }
            }}
          >
            Tools & Ecosystem
          </Typography>
          <Grid container spacing={{ xs: 1.5, sm: 3 }} justifyContent="center">
            {toolsSkills.map((skill, index) => (
              <Grid item xs={6} sm={6} md={4} key={index}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
