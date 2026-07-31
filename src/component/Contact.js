import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper, IconButton, Snackbar, Alert } from '@mui/material';
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

  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({
      open: true,
      message: 'Thank you for your message! I will get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseToast = () => {
    setToast({ ...toast, open: false });
  };

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

  const contactItems = [
    {
      title: 'Email',
      value: 'nomanali01241@gmail.com',
      href: 'mailto:nomanali01241@gmail.com',
      icon: <EmailIcon sx={{ color: '#667eea' }} />,
    },
    {
      title: 'Phone',
      value: '+92 348 4622870',
      href: 'tel:+923484622870',
      icon: <PhoneIcon sx={{ color: '#667eea' }} />,
    },
    {
      title: 'Location',
      value: 'Karachi, Pakistan',
      href: null,
      icon: <LocationOnIcon sx={{ color: '#667eea' }} />,
    },
  ];

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Get In Touch</SectionTitle>

        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} justifyContent="center" alignItems="stretch">
          {/* Contact Details Column */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: { xs: 1, sm: 2 } }}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    mb: 1.5,
                    color: '#0f172a',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                >
                  Let's work together! 🚀
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#475569',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                  }}
                >
                  I'm always open to discussing React Native Full Stack development projects, freelance opportunities, or joining innovative teams. Reach out anytime!
                </Typography>

                {/* Contact Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                  {contactItems.map((item, idx) => (
                    <Paper
                      key={idx}
                      elevation={0}
                      component={item.href ? 'a' : 'div'}
                      href={item.href || undefined}
                      sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: 3,
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                        '&:hover': item.href
                          ? {
                              transform: 'translateX(6px)',
                              borderColor: '#667eea',
                              boxShadow: '0 6px 16px rgba(102, 126, 234, 0.15)',
                            }
                          : {},
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(102, 126, 234, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
                        <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a', fontSize: { xs: '0.85rem', sm: '0.95rem' }, wordBreak: 'break-word' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </Box>

              {/* Social Link Badges */}
              <Box sx={{ display: 'flex', gap: 2, mb: { xs: 2, md: 0 } }}>
                <IconButton
                  component="a"
                  href="https://github.com/noman-ali24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    width: 48,
                    height: 48,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
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
                  aria-label="LinkedIn Profile"
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    width: 48,
                    height: 48,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 16px rgba(102, 126, 234, 0.4)',
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Form Column */}
          <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <form onSubmit={handleSubmit}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', mb: 3 }}>
                  Send a Message
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ mb: { xs: 2, sm: 3 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{ mb: { xs: 2, sm: 3 } }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={5}
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
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 700,
                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Snackbar Toast Feedback */}
        <Snackbar open={toast.open} autoHideDuration={5000} onClose={handleCloseToast}>
          <Alert onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%', borderRadius: 2 }}>
            {toast.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
