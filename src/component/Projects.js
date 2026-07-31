import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Dialog, DialogContent, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import videos
import adminVideo from '../assets/Screen Recording 2026-01-24 232258.mp4';
import websiteVideo from '../assets/Screen Recording 2026-01-24 231929.mp4';

// Import WhatsApp UI images
const whatsapp1 = require('../assets/whatsapp (1).jpeg');
const whatsapp2 = require('../assets/whatsapp (2).jpeg');
const whatsapp3 = require('../assets/whatsapp (3).jpeg');
const whatsapp4 = require('../assets/whatsapp (4).jpeg');
const whatsapp5 = require('../assets/whatsapp (5).jpeg');
const whatsapp6 = require('../assets/whatsapp (6).jpeg');
const whatsapp7 = require('../assets/whatsapp (7).jpeg');
const whatsapp8 = require('../assets/whatsapp (8).jpeg');
const whatsapp9 = require('../assets/whatsapp (9).jpeg');
const whatsapp10 = require('../assets/whatsapp (10).jpeg');
const whatsapp11 = require('../assets/whatsapp (11).jpeg');
const whatsapp12 = require('../assets/whatsapp (12).jpeg');
const whatsapp13 = require('../assets/whatsapp (13).jpeg');

// Import Calculator image
const calculatorImg = require('../assets/calculator.png');

// Import OLX Website image
const olxImg = require('../assets/olx.png');

const Projects = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // All WhatsApp UI images
  const whatsappImages = [
    whatsapp1?.default || whatsapp1,
    whatsapp2?.default || whatsapp2,
    whatsapp3?.default || whatsapp3,
    whatsapp4?.default || whatsapp4,
    whatsapp5?.default || whatsapp5,
    whatsapp6?.default || whatsapp6,
    whatsapp7?.default || whatsapp7,
    whatsapp8?.default || whatsapp8,
    whatsapp9?.default || whatsapp9,
    whatsapp10?.default || whatsapp10,
    whatsapp11?.default || whatsapp11,
    whatsapp12?.default || whatsapp12,
    whatsapp13?.default || whatsapp13,
  ].filter(Boolean);

  const handleViewClick = (project) => {
    if (project.title === 'E-Commerce Admin Dashboard') {
      setSelectedVideo(adminVideo);
      setOpenDialog(true);
    } else if (project.title === 'E-Commerce Website') {
      setSelectedVideo(websiteVideo);
      setOpenDialog(true);
    } else if (project.imageType === 'img' && project.title === 'React Native WhatsApp UI') {
      setSelectedImages(whatsappImages);
      setCurrentImageIndex(0);
      setOpenDialog(true);
    } else if (project.imageType === 'img') {
      setSelectedImages([project.image]);
      setCurrentImageIndex(0);
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImages([]);
    setSelectedVideo(null);
    setCurrentImageIndex(0);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const projects = [
    {
      title: 'E-Commerce Admin Dashboard',
      image: '/admin.png',
      imageType: 'video',
      skills: ['React.js', 'Material-UI', 'React Router DOM', 'JavaScript'],
      githubLink: 'https://github.com/noman-ali24/E-Commerce-Admin-Dashboard',
      description: 'A modern, responsive admin management dashboard for e-commerce applications with analytics and inventory views.',
    },
    {
      title: 'E-Commerce Website',
      image: '/webiste.png',
      imageType: 'video',
      skills: ['React.js', 'Material-UI', 'React Router DOM', 'CSS3'],
      githubLink: 'https://github.com/noman-ali24/E-Commerce-Website',
      description: 'A fully responsive e-commerce web application featuring modern UI, product catalogs, shopping cart, and checkout flow.',
    },
    {
      title: 'React Native WhatsApp UI',
      image: whatsapp1?.default || whatsapp1,
      imageType: 'img',
      skills: ['React Native', 'Redux', 'JavaScript', 'React Navigation'],
      githubLink: 'https://github.com/noman-ali24/react-native-whatsapp-ui',
      description: 'A functional WhatsApp mobile clone built in React Native. Includes chats, status, call history, and navigation screens.',
    },
    {
      title: 'Calculator Web App',
      image: calculatorImg?.default || calculatorImg,
      imageType: 'img',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/noman-ali24/calculator-html-css-js',
      description: 'A sleek web calculator with responsive layout, basic arithmetic calculations, and clean keypress feedback.',
    },
    {
      title: 'OLX Website Clone',
      image: olxImg?.default || olxImg,
      imageType: 'img',
      skills: ['React.js', 'Material-UI', 'JavaScript'],
      githubLink: 'https://github.com/noman-ali24/OLX-WEBSITE',
      description: 'A responsive web application clone of OLX marketplace home page featuring navigation headers and item categories.',
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
    <Box id="projects" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Featured Projects</SectionTitle>

        <Grid container spacing={{ xs: 3, sm: 3, md: 4 }} justifyContent="center" alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Card
                elevation={0}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  borderRadius: 3.5,
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 30px rgba(102, 126, 234, 0.15)',
                    borderColor: '#667eea',
                  },
                }}
              >
                {/* Media Image Container */}
                <Box 
                  sx={{ 
                    position: 'relative', 
                    height: 210, 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    backgroundColor: '#0f172a',
                    flexShrink: 0,
                  }} 
                  onClick={() => handleViewClick(project)}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  {project.imageType === 'video' && (
                    <Chip
                      label="▶ Video Demo"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: 'rgba(15, 23, 42, 0.85)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        backdropFilter: 'blur(4px)',
                      }}
                    />
                  )}
                </Box>

                {/* Content Box */}
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    p: { xs: 2.5, sm: 3 } 
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 800,
                        color: '#0f172a',
                        mb: 1.5,
                        fontSize: { xs: '1.05rem', sm: '1.15rem' },
                        lineHeight: 1.3,
                        minHeight: 48,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#475569',
                        mb: 2.5,
                        fontSize: { xs: '0.85rem', sm: '0.875rem' },
                        lineHeight: 1.6,
                        minHeight: 64,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  {/* Skills Box */}
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 0.8,
                      minHeight: 58,
                      alignContent: 'flex-start',
                      mt: 'auto',
                    }}
                  >
                    {project.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(102, 126, 234, 0.08)',
                          color: '#667eea',
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          height: '24px',
                          borderRadius: '6px',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                {/* Action Buttons */}
                <CardActions sx={{ px: { xs: 2.5, sm: 3 }, pb: { xs: 2.5, sm: 3 }, pt: 0, gap: 1.5 }}>
                  {project.githubLink && (
                    <Button
                      fullWidth
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon />}
                      onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
                      sx={{
                        borderColor: '#cbd5e1',
                        color: '#334155',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        py: 0.8,
                        '&:hover': {
                          borderColor: '#667eea',
                          color: '#667eea',
                          backgroundColor: 'rgba(102, 126, 234, 0.04)',
                        },
                      }}
                    >
                      Code
                    </Button>
                  )}

                  <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    startIcon={<VisibilityIcon />}
                    onClick={() => handleViewClick(project)}
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      borderRadius: '8px',
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      py: 0.8,
                      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.25)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                        boxShadow: '0 6px 16px rgba(102, 126, 234, 0.35)',
                      },
                    }}
                  >
                    Preview
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Image & Video View Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#090d16',
            borderRadius: 3,
            overflow: 'hidden',
            margin: { xs: 1, sm: 2 },
          },
        }}
      >
        <DialogContent
          sx={{
            position: 'relative',
            p: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: '60vh', sm: '75vh' },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 10,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Previous Button */}
          {!selectedVideo && selectedImages.length > 1 && (
            <IconButton
              onClick={handlePreviousImage}
              sx={{
                position: 'absolute',
                left: 12,
                zIndex: 10,
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(4px)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}

          {/* Video Player */}
          {selectedVideo && (
            <Box
              component="video"
              src={selectedVideo}
              controls
              autoPlay
              sx={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
            />
          )}

          {/* Current Image */}
          {!selectedVideo && selectedImages.length > 0 && (
            <Box
              component="img"
              src={selectedImages[currentImageIndex]}
              alt={`Project Preview ${currentImageIndex + 1}`}
              sx={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
            />
          )}

          {/* Next Button */}
          {!selectedVideo && selectedImages.length > 1 && (
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: 12,
                zIndex: 10,
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(4px)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}

          {/* Image Counter */}
          {!selectedVideo && selectedImages.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(4px)',
                px: 2,
                py: 0.8,
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 700,
              }}
            >
              {currentImageIndex + 1} / {selectedImages.length}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;
