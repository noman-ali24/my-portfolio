import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Projects = () => {
  const projects = [
    {
      title: 'Grid App',
      image: '🛒',
      skills: ['React-Native', 'Redux-Thunk', 'OneSignal'],
    },
    {
      title: 'Tattoo App',
      image: '🎨',
      skills: ['React-Native', 'Redux-Thunk', 'OneSignal'],
    },
    {
      title: 'Guard App',
      image: '🛡️',
      skills: ['React-Native', 'Redux-Thunk', 'OneSignal'],
    },
    {
      title: 'Kaci Help',
      image: '💬',
      skills: ['React-Native', 'Redux-Thunk', 'OneSignal'],
    },
    {
      title: 'Kirista',
      image: '📱',
      skills: ['React-Native', 'Redux-Thunk', 'OneSignal'],
    },
    {
      title: 'Adjuster Hub',
      image: '📊',
      skills: ['React-Native', 'Redux-Thunk', 'OneSignal'],
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
    <Box id="projects" sx={{ py: 10, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle>Projects</SectionTitle>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: 'transform 0.3s, boxShadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  {project.image}
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: '#f0f0f0',
                            color: '#667eea',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<VisibilityIcon />}
                    sx={{
                      color: '#667eea',
                      fontWeight: 600,
                      textTransform: 'none',
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
