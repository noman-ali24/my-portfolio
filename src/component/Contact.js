import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SectionHeader from './SectionHeader';

const Contact = ({ showHeader = true }) => {
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

  const contactItems = [
    {
      title: 'Email',
      value: 'nomanali01241@gmail.com',
      href: 'mailto:nomanali01241@gmail.com',
      icon: <EmailIcon sx={{ color: '#22d3ee' }} />,
    },
    {
      title: 'Phone',
      value: '+92 348 4622870',
      href: 'tel:+923484622870',
      icon: <PhoneIcon sx={{ color: '#818cf8' }} />,
    },
    {
      title: 'Location',
      value: 'Karachi, Pakistan',
      href: null,
      icon: <LocationOnIcon sx={{ color: '#a78bfa' }} />,
    },
  ];

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        {showHeader && (
          <SectionHeader
            eyebrow="LET'S CONNECT"
            title="Get In Touch"
            subtitle="Have a project in mind, a freelance inquiry, or interested in full-stack collaboration? Let's connect."
          />
        )}

        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
          {/* Left Details Column */}
          <Grid item xs={12} md={5}>
            <Box
              className="glass-panel"
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: '#ffffff',
                    fontSize: { xs: '1.35rem', sm: '1.5rem' },
                    mb: 1.5,
                  }}
                >
                  Let's build something great! 🚀
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#94a3b8',
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                    mb: 4,
                  }}
                >
                  I'm always open to discussing React Native mobile development, scalable backend
                  systems with Node.js/MongoDB, or joining innovative product engineering teams.
                </Typography>

                {/* Contact Info Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                  {contactItems.map((item, idx) => (
                    <Box
                      key={idx}
                      component={item.href ? 'a' : 'div'}
                      href={item.href || undefined}
                      sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.25s ease',
                        '&:hover': item.href
                          ? {
                              transform: 'translateX(5px)',
                              borderColor: 'rgba(34, 211, 238, 0.4)',
                              backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            }
                          : {},
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#94a3b8',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: '#ffffff',
                            fontSize: { xs: '0.85rem', sm: '0.92rem' },
                            wordBreak: 'break-word',
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Social Buttons */}
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <IconButton
                  component="a"
                  href="https://github.com/noman-ali24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  sx={{
                    width: 44,
                    height: 44,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(99, 102, 241, 0.3)',
                      borderColor: '#22d3ee',
                      color: '#22d3ee',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/muhammad-noman-ali-70351b24a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  sx={{
                    width: 44,
                    height: 44,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(99, 102, 241, 0.3)',
                      borderColor: '#22d3ee',
                      color: '#22d3ee',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Right Form Column */}
          <Grid item xs={12} md={7}>
            <Box
              className="glass-panel"
              sx={{
                p: { xs: 3, sm: 4.5 },
                borderRadius: '24px',
                height: '100%',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#ffffff',
                  fontSize: '1.25rem',
                  mb: 3,
                }}
              >
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      InputLabelProps={{ sx: { color: '#94a3b8' } }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '14px',
                          color: '#ffffff',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                          '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                          '&.Mui-focused fieldset': { borderColor: '#22d3ee' },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      name="email"
                      type="email"
                      label="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      InputLabelProps={{ sx: { color: '#94a3b8' } }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '14px',
                          color: '#ffffff',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                          '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                          '&.Mui-focused fieldset': { borderColor: '#22d3ee' },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={5}
                      name="message"
                      label="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      InputLabelProps={{ sx: { color: '#94a3b8' } }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          borderRadius: '14px',
                          color: '#ffffff',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                          '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
                          '&.Mui-focused fieldset': { borderColor: '#22d3ee' },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      endIcon={<SendIcon />}
                      className="btn-primary-gradient"
                      sx={{
                        py: 1.4,
                        fontSize: '0.95rem',
                        textTransform: 'none',
                        mt: 1,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
