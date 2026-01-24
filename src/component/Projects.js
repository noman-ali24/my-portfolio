import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Dialog, DialogContent, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Import videos
import adminVideo from '../assets/Screen Recording 2026-01-24 231929.mp4';
import websiteVideo from '../assets/Screen Recording 2026-01-24 232258.mp4';

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
      skills: ['React.js', 'Material-UI (MUI)', 'React Router DOM', 'JavaScript (ES6+)'],
      githubLink: 'https://github.com/noman-ali24/E-Commerce-Admin-Dashboard',
      description: 'A modern and fully responsive admin dashboard for e-commerce applications with purple and white theme.',
    },
    {
      title: 'E-Commerce Website',
      image: '/webiste.png',
      imageType: 'video',
      skills: ['React.js', 'Material-UI (MUI)', 'React Router DOM', 'JavaScript (ES6+)', 'CSS3'],
      githubLink: 'https://github.com/noman-ali24/E-Commerce-Website',
      description: 'A fully responsive e-commerce website with modern UI, product listings, shopping cart, and checkout functionality.',
    },
    {
      title: 'React Native WhatsApp UI',
      image: whatsapp1?.default || whatsapp1,
      imageType: 'img',
      skills: ['React Native', 'Redux', 'JavaScript', 'React Navigation'],
      githubLink: 'https://github.com/noman-ali24/react-native-whatsapp-ui',
      description: 'A fully functional WhatsApp UI clone implemented in React Native. Includes chats, status, calls, and navigation screens.',
    },
    {
      title: 'Calculator Web App',
      image: calculatorImg?.default || calculatorImg,
      imageType: 'img',
      skills: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/noman-ali24/calculator-html-css-js',
      description: 'A responsive web calculator created with HTML, CSS, and JavaScript. Features basic arithmetic operations with a clean and responsive UI.',
    },
    {
      title: 'OLX Website Clone',
      image: olxImg?.default || olxImg,
      imageType: 'img',
      skills: ['React.js', 'Material-UI', 'JavaScript'],
      githubLink: 'https://github.com/noman-ali24/OLX-WEBSITE',
      description: 'A responsive OLX website home page built with React JS and Material UI (MUI), featuring modern navigation, mobile-friendly layout, and product listing sections.',
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
        fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 60, sm: 80 },
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
    <Box id="projects" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle>Projects</SectionTitle>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index} sx={{ maxWidth: { xs: '100%', sm: '500px' } }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: { xs: 2, md: 3 },
                  boxShadow: { xs: 2, md: 3 },
                  maxWidth: '100%',
                  transition: 'transform 0.3s, boxShadow 0.3s',
                  '&:hover': {
                    transform: { xs: 'translateY(-5px)', md: 'translateY(-10px)' },
                    boxShadow: { xs: 4, md: 6 },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: { xs: 180, sm: 200, md: 220 },
                    objectFit: 'cover',
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                  onClick={() => handleViewClick(project)}
                />
                <CardContent sx={{ flexGrow: 1, px: { xs: 2, sm: 3 }, py: { xs: 2, sm: 2.5 } }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                    {project.title}
                  </Typography>
                  {project.description && (
                    <Typography variant="body2" sx={{ color: '#666', mb: 2, fontSize: { xs: '0.8rem', sm: '0.875rem' }, lineHeight: 1.5 }}>
                      {project.description}
                    </Typography>
                  )}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                      Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 0.75 } }}>
                      {project.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: '#f0f0f0',
                            color: '#667eea',
                            fontWeight: 500,
                            fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            height: { xs: '24px', sm: '28px' },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: { xs: 2, sm: 2.5 }, pt: 0, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1, sm: 0 } }}>
                  {project.githubLink && (
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
                      sx={{
                        color: '#667eea',
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        py: { xs: 0.75, sm: 1 },
                        px: { xs: 1.5, sm: 2 },
                        minWidth: { xs: '100%', sm: 'auto' },
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        },
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                  <Button
                    size="small"
                    startIcon={<VisibilityIcon />}
                    onClick={() => handleViewClick(project)}
                    sx={{
                      color: '#667eea',
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      py: { xs: 0.75, sm: 1 },
                      px: { xs: 1.5, sm: 2 },
                      minWidth: { xs: '100%', sm: 'auto' },
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      },
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

      {/* Image View Dialog with Carousel */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth={{ xs: 'sm', sm: 'md', md: 'lg' }}
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            m: { xs: 1, sm: 2 },
          },
        }}
      >
        <DialogContent
          sx={{
            position: 'relative',
            padding: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: '70vh', sm: '80vh', md: '90vh' },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              top: { xs: 5, sm: 10 },
              right: { xs: 5, sm: 10 },
              zIndex: 10,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
                left: { xs: 5, sm: 10 },
                zIndex: 10,
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
                maxHeight: '90vh',
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
                maxHeight: '90vh',
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
                right: { xs: 5, sm: 10 },
                zIndex: 10,
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
                bottom: { xs: 10, sm: 20 },
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: { xs: '6px 12px', sm: '8px 16px' },
                borderRadius: 2,
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                fontWeight: 500,
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
