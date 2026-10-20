import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import SectionHeader from './SectionHeader';

// Import videos
import autopulseVideo from '../assets/autopulse_video.mp4';
import adminVideo from '../assets/Screen Recording 2026-01-24 232258.mp4';
import websiteVideo from '../assets/Screen Recording 2026-01-24 231929.mp4';

// Import Images
import autopulseImg from '../assets/autopulse.png';
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
const calculatorImg = require('../assets/calculator.png');
const olxImg = require('../assets/olx.png');

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

export const ALL_PROJECTS = [
  {
    id: 'autopulse',
    isFeatured: true,
    title: 'AutoPulse',
    subtitle: 'Automotive Service & Car Care Mobile Platform',
    badge: 'MOBILE APP',
    category: 'Mobile App',
    deviceType: 'mobile',
    image: autopulseImg || '/autopulse.png',
    imageType: 'video',
    video: autopulseVideo,
    skills: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT Auth',
    ],
    githubLink: 'https://github.com/noman-ali24/signin-signup-frontend',
    backendGithubLink: 'https://github.com/noman-ali24/sign-in-sigup-Backend',
    description:
      'A production-grade mobile application designed to streamline vehicle servicing and customer management. Engineered with React Native and Redux Toolkit on the client, backed by a Node.js/Express REST API with MongoDB and secure JWT authentication. Features end-to-end user onboarding, service scheduling, and high-performance mobile UI.',
  },
  {
    id: 'whatsapp-ui',
    isFeatured: false,
    title: 'React Native WhatsApp UI',
    subtitle: 'Real-time Messaging & Social Client Experience',
    badge: 'MOBILE APP',
    category: 'Mobile App',
    deviceType: 'mobile',
    image: whatsapp1?.default || whatsapp1,
    imageType: 'gallery',
    images: whatsappImages,
    skills: ['React Native', 'Redux', 'JavaScript', 'React Navigation', 'Mobile UI/UX'],
    githubLink: 'https://github.com/noman-ali24/react-native-whatsapp-ui',
    description:
      'A pixel-perfect WhatsApp mobile clone built in React Native. Implements responsive bottom tab navigation, searchable chat feeds, full-screen status viewing, and realistic voice & video call history interfaces.',
  },
  {
    id: 'admin-dashboard',
    isFeatured: false,
    title: 'E-Commerce Admin Dashboard',
    subtitle: 'Enterprise Analytics & Inventory Management Portal',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'admin.ecommerce.dev',
    image: '/admin.png',
    imageType: 'video',
    video: adminVideo,
    skills: ['React.js', 'Material-UI', 'React Router DOM', 'JavaScript', 'Analytics'],
    githubLink: 'https://github.com/noman-ali24/E-Commerce-Admin-Dashboard',
    description:
      'An administrative operations portal designed for e-commerce store managers. Features real-time metric cards, interactive sales charts, order lifecycle management, and paginated inventory data tables.',
  },
  {
    id: 'ecommerce-website',
    isFeatured: false,
    title: 'E-Commerce Website',
    subtitle: 'Modern Responsive Customer Shopping Storefront',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'shop.ecommerce.dev',
    image: '/webiste.png',
    imageType: 'video',
    video: websiteVideo,
    skills: ['React.js', 'Material-UI', 'React Router DOM', 'CSS3', 'REST APIs'],
    githubLink: 'https://github.com/noman-ali24/E-Commerce-Website',
    description:
      'A full-featured digital storefront application featuring responsive product catalog browsing, instant category filtering, persistent shopping cart state, and a multi-step checkout workflow.',
  },
  {
    id: 'olx-clone',
    isFeatured: false,
    title: 'OLX Marketplace Clone',
    subtitle: 'Classifieds & Local Listing Web Platform',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'olx-marketplace.dev',
    image: olxImg?.default || olxImg,
    imageType: 'img',
    skills: ['React.js', 'Material-UI', 'JavaScript', 'Responsive Grid'],
    githubLink: 'https://github.com/noman-ali24/OLX-WEBSITE',
    description:
      'A front-end marketplace platform replicating the OLX classifieds experience. Features dynamic category exploration, header search navigation, structured item cards, and mobile-friendly browsing.',
  },
  {
    id: 'calculator-app',
    isFeatured: false,
    title: 'Calculator Web App',
    subtitle: 'Interactive Digital Arithmetic Tool',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'calculator.tool',
    image: calculatorImg?.default || calculatorImg,
    imageType: 'img',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    githubLink: 'https://github.com/noman-ali24/calculator-html-css-js',
    description:
      'A precision web calculator supporting standard arithmetic computations, keyboard event listeners, smooth visual keypress states, and an elegant dark-themed ergonomic interface.',
  },
];

const Projects = ({ isFullPage = false }) => {
  const [filter, setFilter] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const [cardImageIndices, setCardImageIndices] = useState({});

  const handleOpenPreview = (project) => {
    setActiveProject(project);
    if (project.video) {
      setSelectedVideo(project.video);
      setOpenDialog(true);
    } else if (project.images && project.images.length > 0) {
      setSelectedImages(project.images);
      setCurrentImageIndex(0);
      setOpenDialog(true);
    } else if (project.image) {
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
    setActiveProject(null);
  };

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? selectedImages.length - 1 : prev - 1));
  }, [selectedImages.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === selectedImages.length - 1 ? 0 : prev + 1));
  }, [selectedImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!openDialog) return;
      if (e.key === 'Escape') handleCloseDialog();
      if (!selectedVideo && selectedImages.length > 1) {
        if (e.key === 'ArrowLeft') handlePreviousImage();
        if (e.key === 'ArrowRight') handleNextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openDialog, selectedVideo, selectedImages.length, handleNextImage, handlePreviousImage]);

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Mobile App') return p.category === 'Mobile App';
    if (filter === 'Web App') return p.category === 'Web App';
    return true;
  });

  const gridProjects = isFullPage
    ? filteredProjects
    : filteredProjects;

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        <SectionHeader
          eyebrow="SELECTED WORK"
          title={isFullPage ? "Portfolio Projects" : "Featured Projects"}
          subtitle="Shipped applications across mobile and web — click or hover a card to preview."
        />

        {/* Filter Pills */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1.5,
            mb: { xs: 4, sm: 5 },
            flexWrap: 'wrap',
          }}
        >
          {['All', 'Mobile App', 'Web App'].map((tab) => {
            const isActive = filter === tab;
            return (
              <Button
                key={tab}
                onClick={() => setFilter(tab)}
                sx={{
                  px: 2.5,
                  py: 0.75,
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  textTransform: 'none',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  backgroundColor: isActive ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid #22d3ee' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isActive ? '0 0 15px rgba(34, 211, 238, 0.3)' : 'none',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                  },
                }}
              >
                {tab}
              </Button>
            );
          })}
        </Box>

        {/* Projects Grid matching Reference 3-column Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3.5,
          }}
        >
          {gridProjects.map((project) => {
            const hasMultipleImages = project.images && project.images.length > 1;
            const currentImgIdx = cardImageIndices[project.id] || 0;
            const displayImage = hasMultipleImages ? project.images[currentImgIdx] : project.image;

            return (
              <Box
                key={project.id}
                className="glass-panel glass-panel-hover"
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Media Preview Container */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 230,
                    backgroundColor: '#070914',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    p: project.deviceType === 'mobile' ? 2 : 0,
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpenPreview(project)}
                >
                  {/* Category Badge on top left */}
                  <Chip
                    label={project.badge}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      zIndex: 3,
                      backgroundColor: 'rgba(5, 6, 15, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: project.deviceType === 'mobile' ? '#22d3ee' : '#a78bfa',
                      border: `1px solid ${project.deviceType === 'mobile' ? 'rgba(34, 211, 238, 0.4)' : 'rgba(167, 139, 250, 0.4)'}`,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      fontSize: '0.68rem',
                      letterSpacing: '0.06em',
                    }}
                  />

                  {/* If mobile app, render phone mockup display */}
                  {project.deviceType === 'mobile' ? (
                    <Box
                      sx={{
                        width: 'auto',
                        height: '100%',
                        maxHeight: 200,
                        aspectRatio: '9 / 18',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '2px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.6)',
                        backgroundColor: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component="img"
                        src={displayImage}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  ) : (
                    /* Web App preview */
                    <Box
                      component="img"
                      src={displayImage}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.04)',
                        },
                      }}
                    />
                  )}

                  {/* Play video overlay if video exists */}
                  {project.video && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(5, 6, 15, 0.35)',
                        transition: 'background-color 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(5, 6, 15, 0.15)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(34, 211, 238, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#05060f',
                          boxShadow: '0 0 20px rgba(34, 211, 238, 0.7)',
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        <PlayArrowRoundedIcon sx={{ fontSize: 32 }} />
                      </Box>
                    </Box>
                  )}

                  {/* Multi-image indicator dots */}
                  {hasMultipleImages && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 0.6,
                        zIndex: 3,
                        backgroundColor: 'rgba(5, 6, 15, 0.6)',
                        px: 1,
                        py: 0.3,
                        borderRadius: '9999px',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.images.slice(0, 5).map((_, dotIdx) => (
                        <Box
                          key={dotIdx}
                          onClick={() =>
                            setCardImageIndices((prev) => ({
                              ...prev,
                              [project.id]: dotIdx,
                            }))
                          }
                          sx={{
                            width: currentImgIdx === dotIdx ? 14 : 5,
                            height: 5,
                            borderRadius: '9999px',
                            backgroundColor:
                              currentImgIdx === dotIdx ? '#22d3ee' : 'rgba(255, 255, 255, 0.4)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>

                {/* Card Content Area */}
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#ffffff',
                      lineHeight: 1.3,
                      mb: 0.5,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: '#22d3ee',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.74rem',
                      fontWeight: 500,
                      mb: 1.5,
                    }}
                  >
                    {project.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#94a3b8',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      mb: 2.5,
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Skills Pills */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                    {project.skills.map((skill, sIdx) => (
                      <Box
                        key={sIdx}
                        sx={{
                          px: 1.25,
                          py: 0.35,
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#cbd5e1',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>

                  {/* Action Buttons Row */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      pt: 2,
                      borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                    }}
                  >
                    {/* View Preview / Play Video Button */}
                    <Button
                      fullWidth
                      onClick={() => handleOpenPreview(project)}
                      startIcon={project.video ? <PlayArrowRoundedIcon /> : <LaunchIcon />}
                      className="btn-secondary-glass"
                      sx={{
                        py: 0.8,
                        fontSize: '0.8rem',
                        textTransform: 'none',
                        flex: 1,
                      }}
                    >
                      {project.video ? 'Watch Demo' : 'View Gallery'}
                    </Button>

                    {/* GitHub Link */}
                    {project.githubLink && (
                      <IconButton
                        component="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#cbd5e1',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(99, 102, 241, 0.25)',
                            borderColor: '#22d3ee',
                            color: '#22d3ee',
                          },
                        }}
                      >
                        <GitHubIcon sx={{ fontSize: '1.1rem' }} />
                      </IconButton>
                    )}

                    {/* Backend GitHub Link for AutoPulse */}
                    {project.backendGithubLink && (
                      <IconButton
                        component="a"
                        href={project.backendGithubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Backend GitHub Repository"
                        title="Backend Repo"
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#cbd5e1',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(99, 102, 241, 0.25)',
                            borderColor: '#a78bfa',
                            color: '#a78bfa',
                          },
                        }}
                      >
                        <GitHubIcon sx={{ fontSize: '1.1rem' }} />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Bottom Action: See all projects button (Homepage only) */}
        {!isFullPage && (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              to="/portfolio"
              endIcon={<ArrowForwardIcon />}
              className="btn-secondary-glass"
              sx={{
                px: 4,
                py: 1.25,
                fontSize: '0.92rem',
                textTransform: 'none',
              }}
            >
              See all projects
            </Button>
          </Box>
        )}
      </Container>

      {/* Dialog Preview Modal for Videos and Gallery */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#0a0b1a',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            color: '#ffffff',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        {/* Modal Header */}
        <Box
          sx={{
            p: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
              {activeProject?.title}
            </Typography>
            <Typography variant="caption" sx={{ color: '#22d3ee' }}>
              {activeProject?.subtitle}
            </Typography>
          </Box>
          <IconButton onClick={handleCloseDialog} sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ p: 2, textAlign: 'center', position: 'relative' }}>
          {selectedVideo ? (
            <Box sx={{ width: '100%', maxHeight: '70vh', borderRadius: '12px', overflow: 'hidden' }}>
              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  borderRadius: '12px',
                  backgroundColor: '#000',
                }}
              />
            </Box>
          ) : selectedImages.length > 0 ? (
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                component="img"
                src={selectedImages[currentImageIndex]}
                alt="Project Preview"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '68vh',
                  borderRadius: '12px',
                  objectFit: 'contain',
                }}
              />

              {/* Arrow navigation if multiple images */}
              {selectedImages.length > 1 && (
                <>
                  <IconButton
                    onClick={handlePreviousImage}
                    sx={{
                      position: 'absolute',
                      left: 8,
                      backgroundColor: 'rgba(5, 6, 15, 0.7)',
                      color: '#ffffff',
                      '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.8)' },
                    }}
                  >
                    <ArrowBackIosNewIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={handleNextImage}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      backgroundColor: 'rgba(5, 6, 15, 0.7)',
                      color: '#ffffff',
                      '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.8)' },
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      backgroundColor: 'rgba(5, 6, 15, 0.8)',
                      px: 2,
                      py: 0.5,
                      borderRadius: '9999px',
                      color: '#94a3b8',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.8rem',
                    }}
                  >
                    {currentImageIndex + 1} / {selectedImages.length}
                  </Box>
                </>
              )}
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Projects;
