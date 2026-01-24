import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
    <Box id="contact" sx={{ py: 10, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <SectionTitle>Get In Touch</SectionTitle>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                Let's work together!
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#666', lineHeight: 1.8 }}>
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions. Feel free to reach out to me.
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <EmailIcon sx={{ color: '#667eea', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Email
                    </Typography>
                    <Typography 
                      variant="body2" 
                      component="a"
                      href="mailto:nomanali01241@gmail.com"
                      sx={{ 
                        color: '#666',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#667eea',
                        }
                      }}
                    >
                      nomanali01241@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <PhoneIcon sx={{ color: '#667eea', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Phone
                    </Typography>
                    <Typography 
                      variant="body2" 
                      component="a"
                      href="tel:+923484622870"
                      sx={{ 
                        color: '#666',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#667eea',
                        }
                      }}
                    >
                      +92 348 4622870
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#667eea', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Karachi, Pakistan
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  component="a"
                  href="https://github.com/noman-ali24"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/muhammad-noman-ali-70351b24a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={6}
                  sx={{ mb: 3 }}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  endIcon={<SendIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
