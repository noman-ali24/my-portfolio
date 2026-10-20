import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LanguageIcon from '@mui/icons-material/Language';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LaunchIcon from '@mui/icons-material/Launch';

// Import videos
import autopulseVideo from '../assets/autopulse_video.mp4';
import adminVideo from '../assets/Screen Recording 2026-01-24 232258.mp4';
import websiteVideo from '../assets/Screen Recording 2026-01-24 231929.mp4';

// Import AutoPulse image
import autopulseImg from '../assets/autopulse.png';

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
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('All');

  // WhatsApp UI image gallery
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

  // Complete List of All Portfolio Projects
  const allProjects = [
    {
      id: 'autopulse',
      isFeatured: true,
      title: 'AutoPulse',
      subtitle: 'Automotive Service & Car Care Mobile Platform',
      category: 'Mobile Application',
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
        'A production-grade mobile application designed to streamline vehicle servicing and customer management. Engineered with React Native and Redux Toolkit on the client, backed by a Node.js/Express REST API with MongoDB and secure JWT-based authentication. Features end-to-end user onboarding, profile controls, and high-performance interactive interfaces.',
    },
    {
      id: 'whatsapp-ui',
      isFeatured: false,
      title: 'React Native WhatsApp UI',
      subtitle: 'Real-time Messaging & Media Social Client Clone',
      category: 'Mobile Application',
      deviceType: 'mobile',
      image: whatsapp1?.default || whatsapp1,
      imageType: 'img',
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
      category: 'Web Application',
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
      subtitle: 'Modern Responsive Customer Shopping Experience',
      category: 'Web Application',
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
      category: 'Web Application',
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
      category: 'Utility Web App',
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

  const featuredProject = allProjects.find((p) => p.isFeatured);
  const regularProjects = allProjects.filter((p) => !p.isFeatured);

  const handleViewClick = (project) => {
    setActiveProject(project);
    if (project.video) {
      setSelectedVideo(project.video);
      setOpenDialog(true);
    } else if (project.images && project.images.length > 0) {
      setSelectedImages(project.images);
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
    setActiveProject(null);
  };

  const handlePreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  }, [selectedImages.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [selectedImages.length]);

  // Keyboard navigation for modal
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

  // Filtered views
  const showFeatured = (filter === 'All' || filter === 'Mobile App') && Boolean(featuredProject);
  const filteredGridProjects = regularProjects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Mobile App') return p.category.includes('Mobile');
    if (filter === 'Web App') return p.category.includes('Web') || p.category.includes('Utility');
    return true;
  });

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
        {/* ========================================================= */}
        {/* 1. SECTION HEADER                                         */}
        {/* ========================================================= */}
        <Box sx={{ maxWidth: '780px', mx: 'auto', textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          {/* Eyebrow Label */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 1.8,
              py: 0.6,
              borderRadius: '9999px',
              backgroundColor: 'rgba(102, 126, 234, 0.08)',
              border: '1px solid rgba(102, 126, 234, 0.18)',
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: '#667eea',
                boxShadow: '0 0 8px rgba(102, 126, 234, 0.8)',
              }}
            />
            <Typography
              component="span"
              sx={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: '#5b21b6',
                textTransform: 'uppercase',
              }}
            >
              SELECTED WORK
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              color: '#0f172a',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            Projects that solve real problems.
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: '#475569',
              fontSize: { xs: '0.98rem', sm: '1.08rem' },
              lineHeight: 1.65,
              maxWidth: '640px',
              mx: 'auto',
              mb: 3.5,
            }}
          >
            A curated showcase of mobile applications and full-stack web products, built with clean architecture, robust state management, and modern user experiences.
          </Typography>

          {/* Category Filter Pills */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              p: '5px',
              borderRadius: '9999px',
              backgroundColor: '#f1f5f9',
              border: '1px solid #e2e8f0',
              gap: 0.5,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { id: 'All', label: 'All Projects (6)' },
              { id: 'Mobile App', label: 'Mobile Apps (2)', icon: <SmartphoneIcon sx={{ fontSize: '0.95rem !important' }} /> },
              { id: 'Web App', label: 'Web Applications (4)', icon: <LanguageIcon sx={{ fontSize: '0.95rem !important' }} /> },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <Button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  startIcon={tab.icon}
                  size="small"
                  sx={{
                    borderRadius: '9999px',
                    px: { xs: 1.8, sm: 2.2 },
                    py: 0.7,
                    textTransform: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    color: isActive ? '#ffffff' : '#64748b',
                    backgroundColor: isActive ? '#0f172a' : 'transparent',
                    boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none',
                    '&:hover': {
                      backgroundColor: isActive ? '#1e293b' : 'rgba(0, 0, 0, 0.04)',
                      color: isActive ? '#ffffff' : '#0f172a',
                    },
                  }}
                >
                  {tab.label}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* ========================================================= */}
        {/* 2. FEATURED PROJECT SHOWCASE (AutoPulse)                  */}
        {/* ========================================================= */}
        {showFeatured && featuredProject && (
          <Box sx={{ mb: { xs: 6, md: 9 } }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: { xs: 4, md: 5 },
                border: '1px solid #e2e8f0',
                background: 'linear-gradient(180deg, #ffffff 0%, #fafcff 100%)',
                boxShadow: '0 20px 40px -15px rgba(102, 126, 234, 0.1), 0 1px 3px rgba(0, 0, 0, 0.03)',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  borderColor: '#c7d2fe',
                  boxShadow: '0 25px 50px -12px rgba(102, 126, 234, 0.18)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '1.05fr 1fr' },
                  alignItems: 'stretch',
                }}
              >
                {/* Left Side: Editorial Content & Actions */}
                <Box
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    {/* Featured & Category Badges */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        icon={<StarRoundedIcon sx={{ fontSize: '1rem !important', color: '#f59e0b !important' }} />}
                        label="FEATURED PROJECT"
                        size="small"
                        sx={{
                          fontWeight: 800,
                          fontSize: '0.68rem',
                          letterSpacing: '0.08em',
                          backgroundColor: 'rgba(245, 158, 11, 0.12)',
                          color: '#b45309',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          height: '24px',
                        }}
                      />
                      <Chip
                        icon={<SmartphoneIcon sx={{ fontSize: '0.85rem !important', color: '#667eea !important' }} />}
                        label="Mobile App"
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.68rem',
                          backgroundColor: 'rgba(102, 126, 234, 0.08)',
                          color: '#4f46e5',
                          height: '24px',
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        fontWeight: 800,
                        color: '#0f172a',
                        fontSize: { xs: '1.75rem', sm: '2.15rem', md: '2.4rem' },
                        letterSpacing: '-0.025em',
                        lineHeight: 1.2,
                        mb: 1,
                      }}
                    >
                      {featuredProject.title}
                    </Typography>

                    {/* Subtitle */}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#667eea',
                        fontWeight: 700,
                        fontSize: { xs: '0.92rem', sm: '1rem' },
                        mb: 2.2,
                      }}
                    >
                      {featuredProject.subtitle}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#475569',
                        fontSize: { xs: '0.88rem', sm: '0.94rem' },
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {featuredProject.description}
                    </Typography>

                    {/* Technology Badges */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          textTransform: 'uppercase',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          color: '#94a3b8',
                          display: 'block',
                          mb: 1.2,
                          fontSize: '0.68rem',
                        }}
                      >
                        Core Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                        {featuredProject.skills.map((skill, sIdx) => (
                          <Chip
                            key={sIdx}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: '#f1f5f9',
                              color: '#1e293b',
                              fontWeight: 600,
                              fontSize: '0.74rem',
                              height: '26px',
                              borderRadius: '6px',
                              border: '1px solid #e2e8f0',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Actions */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1.2,
                      pt: 2.5,
                      borderTop: '1px solid #f1f5f9',
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<PlayArrowRoundedIcon sx={{ fontSize: '1.25rem !important' }} />}
                      onClick={() => handleViewClick(featuredProject)}
                      sx={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: '#ffffff',
                        px: 2.8,
                        py: 1.1,
                        borderRadius: '9px',
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: '0.86rem',
                        boxShadow: '0 4px 14px rgba(102, 126, 234, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #5a6fd8 0%, #683f94 100%)',
                          boxShadow: '0 6px 18px rgba(102, 126, 234, 0.4)',
                        },
                      }}
                    >
                      Live Preview
                    </Button>

                    {featuredProject.githubLink && (
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon sx={{ fontSize: '1rem !important' }} />}
                        onClick={() =>
                          window.open(featuredProject.githubLink, '_blank', 'noopener,noreferrer')
                        }
                        sx={{
                          borderColor: '#cbd5e1',
                          color: '#334155',
                          px: 2.2,
                          py: 1.1,
                          borderRadius: '9px',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '0.84rem',
                          backgroundColor: '#ffffff',
                          '&:hover': {
                            borderColor: '#667eea',
                            color: '#667eea',
                            backgroundColor: 'rgba(102, 126, 234, 0.04)',
                          },
                        }}
                      >
                        Frontend Code
                      </Button>
                    )}

                    {featuredProject.backendGithubLink && (
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon sx={{ fontSize: '1rem !important' }} />}
                        onClick={() =>
                          window.open(featuredProject.backendGithubLink, '_blank', 'noopener,noreferrer')
                        }
                        sx={{
                          borderColor: '#cbd5e1',
                          color: '#334155',
                          px: 2.2,
                          py: 1.1,
                          borderRadius: '9px',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '0.84rem',
                          backgroundColor: '#ffffff',
                          '&:hover': {
                            borderColor: '#764ba2',
                            color: '#764ba2',
                            backgroundColor: 'rgba(118, 75, 162, 0.04)',
                          },
                        }}
                      >
                        Backend Code
                      </Button>
                    )}
                  </Box>
                </Box>

                {/* Right Side: Phone Device Mockup Container */}
                <Box
                  onClick={() => handleViewClick(featuredProject)}
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    background: 'radial-gradient(circle at 60% 40%, #1e293b 0%, #0a0f1d 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 3, sm: 4, md: 5 },
                    minHeight: { xs: 340, sm: 420, md: 460 },
                    overflow: 'hidden',
                    borderLeft: { lg: '1px solid #e2e8f0' },
                    borderTop: { xs: '1px solid #e2e8f0', lg: 'none' },
                    '&:hover .mockup-overlay': { opacity: 1 },
                    '&:hover .phone-mockup': { transform: 'translateY(-4px)' },
                  }}
                >
                  {/* Subtle Ambient Depth Glows */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 280,
                      height: 280,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(102, 126, 234, 0.22) 0%, transparent 70%)',
                      top: '15%',
                      right: '10%',
                      pointerEvents: 'none',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 240,
                      height: 240,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(118, 75, 162, 0.22) 0%, transparent 70%)',
                      bottom: '10%',
                      left: '10%',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Phone Mockup Frame */}
                  <Box
                    className="phone-mockup"
                    sx={{
                      position: 'relative',
                      width: { xs: 185, sm: 220, md: 240 },
                      borderRadius: '34px',
                      p: '6px',
                      background: 'linear-gradient(145deg, #334155 0%, #0f172a 100%)',
                      boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.12)',
                      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        borderRadius: '28px',
                        overflow: 'hidden',
                        backgroundColor: '#000000',
                        aspectRatio: '277 / 600',
                      }}
                    >
                      {/* Notch */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 65,
                          height: 14,
                          borderRadius: '10px',
                          backgroundColor: '#000000',
                          zIndex: 5,
                        }}
                      />

                      <Box
                        component="img"
                        src={featuredProject.image}
                        alt="AutoPulse Mobile App Interface"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          display: 'block',
                        }}
                      />

                      {/* Hover Overlay */}
                      <Box
                        className="mockup-overlay"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(15, 23, 42, 0.65)',
                          backdropFilter: 'blur(3px)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                          opacity: 0,
                          transition: 'opacity 0.25s ease',
                          zIndex: 4,
                        }}
                      >
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            boxShadow: '0 8px 20px rgba(102, 126, 234, 0.5)',
                          }}
                        >
                          <PlayArrowRoundedIcon sx={{ fontSize: '2rem' }} />
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            fontSize: '0.75rem',
                          }}
                        >
                          Watch Demo
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Highlights */}
                  <Chip
                    label="⚡ React Native + Redux"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: { xs: 16, sm: 24 },
                      right: { xs: 16, sm: 28 },
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      color: '#e2e8f0',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      zIndex: 3,
                      display: { xs: 'none', sm: 'inline-flex' },
                    }}
                  />
                  <Chip
                    label="🔐 JWT Auth + Express"
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: { xs: 16, sm: 24 },
                      left: { xs: 16, sm: 28 },
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(8px)',
                      color: '#e2e8f0',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      zIndex: 3,
                      display: { xs: 'none', sm: 'inline-flex' },
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Box>
        )}

        {/* ========================================================= */}
        {/* 3. PREMIUM SHOWCASE CARDS FOR ALL OTHER PROJECTS          */}
        {/* ========================================================= */}
        <Box sx={{ mb: 2 }}>
          {showFeatured && (
            <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 800,
                  color: '#0f172a',
                  fontSize: { xs: '1.25rem', sm: '1.45rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                More Selected Applications
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#64748b',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                {filteredGridProjects.length} Projects
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: { xs: 2.5, sm: 3, md: 3.5 },
            }}
          >
            {filteredGridProjects.map((project) => {
              const hasVideo = Boolean(project.video);
              const hasMultipleImages = Boolean(project.images && project.images.length > 1);
              const isMobile = project.deviceType === 'mobile';

              return (
                <Card
                  key={project.id}
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3.5,
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px -6px rgba(102, 126, 234, 0.15)',
                      borderColor: '#cbd5e1',
                    },
                    '&:hover .showcase-hover-overlay': {
                      opacity: 1,
                    },
                    '&:hover .showcase-img': {
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  {/* Compact, Consistent Preview Area (Height: 195px across all cards) */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 185, sm: 195 },
                      backgroundColor: '#0f172a',
                      cursor: 'pointer',
                      borderBottom: '1px solid #f1f5f9',
                      overflow: 'hidden',
                    }}
                    onClick={() => handleViewClick(project)}
                  >
                    {/* For Mobile (e.g. WhatsApp UI): Ambient background + balanced centered phone mockup */}
                    {isMobile ? (
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          backgroundColor: '#0a0f1d',
                        }}
                      >
                        {/* Ambient blurred backdrop of the screen */}
                        <Box
                          component="img"
                          src={project.image}
                          alt=""
                          sx={{
                            position: 'absolute',
                            inset: -20,
                            width: 'calc(100% + 40px)',
                            height: 'calc(100% + 40px)',
                            objectFit: 'cover',
                            filter: 'blur(20px) brightness(0.4)',
                            transform: 'scale(1.1)',
                            pointerEvents: 'none',
                          }}
                        />

                        {/* Centered Phone Mockup Frame */}
                        <Box
                          sx={{
                            position: 'relative',
                            height: '86%',
                            aspectRatio: '9 / 18.5',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '2.5px solid rgba(255, 255, 255, 0.25)',
                            boxShadow: '0 10px 24px rgba(0, 0, 0, 0.6)',
                            backgroundColor: '#000000',
                            zIndex: 2,
                          }}
                        >
                          <Box
                            className="showcase-img"
                            component="img"
                            src={project.image}
                            alt={`${project.title} Preview`}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top',
                              transition: 'transform 0.35s ease',
                            }}
                          />
                        </Box>
                      </Box>
                    ) : (
                      /* For Web Apps: Edge-to-edge sharp cover screenshot */
                      <Box
                        className="showcase-img"
                        component="img"
                        src={project.image}
                        alt={`${project.title} Preview`}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          transition: 'transform 0.35s ease',
                          display: 'block',
                        }}
                      />
                    )}

                    {/* Category Chip (Top Left) */}
                    <Chip
                      icon={
                        isMobile ? (
                          <SmartphoneIcon sx={{ fontSize: '0.8rem !important', color: '#ffffff !important' }} />
                        ) : (
                          <LanguageIcon sx={{ fontSize: '0.8rem !important', color: '#ffffff !important' }} />
                        )
                      }
                      label={project.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        backgroundColor: 'rgba(15, 23, 42, 0.82)',
                        color: '#f8fafc',
                        fontWeight: 700,
                        fontSize: '0.66rem',
                        height: '22px',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        zIndex: 3,
                      }}
                    />

                    {/* Demo / Preview Badge (Top Right) */}
                    <Chip
                      icon={
                        hasVideo ? (
                          <PlayArrowRoundedIcon sx={{ fontSize: '0.85rem !important', color: '#ffffff !important' }} />
                        ) : undefined
                      }
                      label={hasVideo ? 'Video Demo' : hasMultipleImages ? `${project.images.length} Screens` : 'Live Demo'}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: 'rgba(102, 126, 234, 0.92)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.66rem',
                        height: '22px',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                        zIndex: 3,
                      }}
                    />

                    {/* Subtle Hover Action Overlay */}
                    <Box
                      className="showcase-hover-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        backdropFilter: 'blur(2px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.8,
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                        zIndex: 4,
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          boxShadow: '0 4px 14px rgba(102, 126, 234, 0.5)',
                        }}
                      >
                        {hasVideo ? (
                          <PlayArrowRoundedIcon sx={{ fontSize: '1.6rem' }} />
                        ) : hasMultipleImages ? (
                          <VisibilityIcon sx={{ fontSize: '1.2rem' }} />
                        ) : (
                          <LaunchIcon sx={{ fontSize: '1.1rem' }} />
                        )}
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#ffffff',
                          fontWeight: 700,
                          letterSpacing: '0.03em',
                          fontSize: '0.72rem',
                        }}
                      >
                        {hasVideo ? 'Watch Demo' : hasMultipleImages ? 'View Screens' : 'Preview'}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Card Content - Clean, Uniform Proportions */}
                  <CardContent
                    sx={{
                      p: { xs: 2.2, sm: 2.5 },
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      {/* Project Title */}
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{
                          fontWeight: 800,
                          color: '#0f172a',
                          fontSize: { xs: '1.05rem', sm: '1.14rem' },
                          lineHeight: 1.25,
                          letterSpacing: '-0.02em',
                          mb: 0.4,
                        }}
                      >
                        {project.title}
                      </Typography>

                      {/* Project Subtitle */}
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          color: '#667eea',
                          fontWeight: 700,
                          fontSize: '0.76rem',
                          letterSpacing: '0.01em',
                          mb: 1.2,
                        }}
                      >
                        {project.subtitle}
                      </Typography>

                      {/* Description limited to 2 lines with consistent min-height */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#475569',
                          fontSize: '0.84rem',
                          lineHeight: 1.55,
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          minHeight: 38,
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>

                    {/* Compact Technology Badges */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.6,
                        pt: 1.2,
                        borderTop: '1px solid #f1f5f9',
                        minHeight: 32,
                        alignContent: 'flex-start',
                      }}
                    >
                      {project.skills.map((skill, sIdx) => (
                        <Chip
                          key={sIdx}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: '#f1f5f9',
                            color: '#334155',
                            fontWeight: 600,
                            fontSize: '0.68rem',
                            height: '22px',
                            borderRadius: '5px',
                            border: '1px solid #e2e8f0',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>

                  {/* Actions Bar - Compact & High-Contrast */}
                  <CardActions
                    sx={{
                      px: { xs: 2.2, sm: 2.5 },
                      pb: { xs: 2.2, sm: 2.5 },
                      pt: 0,
                      gap: 1.2,
                    }}
                  >
                    {/* Secondary Action: GitHub */}
                    {project.githubLink && (
                      <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
                        onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
                        sx={{
                          borderColor: '#cbd5e1',
                          color: '#334155',
                          borderRadius: '7px',
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          py: 0.7,
                          backgroundColor: '#ffffff',
                          '&:hover': {
                            borderColor: '#667eea',
                            color: '#667eea',
                            backgroundColor: 'rgba(102, 126, 234, 0.04)',
                          },
                        }}
                      >
                        Source Code
                      </Button>
                    )}

                    {/* Primary Action: Demo / Preview */}
                    <Button
                      fullWidth
                      variant="contained"
                      size="small"
                      startIcon={
                        hasVideo ? (
                          <PlayArrowRoundedIcon sx={{ fontSize: '1.05rem !important' }} />
                        ) : hasMultipleImages ? (
                          <VisibilityIcon sx={{ fontSize: '0.9rem !important' }} />
                        ) : (
                          <LaunchIcon sx={{ fontSize: '0.85rem !important' }} />
                        )
                      }
                      onClick={() => handleViewClick(project)}
                      sx={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: '#ffffff',
                        borderRadius: '7px',
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        py: 0.7,
                        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.25)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #5a6fd8 0%, #683f94 100%)',
                          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.35)',
                        },
                      }}
                    >
                      {hasVideo ? 'Live Demo' : hasMultipleImages ? 'View Screens' : 'Preview'}
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Container>

      {/* ========================================================= */}
      {/* 4. HIGH-END PREVIEW MODAL (Video & Screenshot Gallery)    */}
      {/* ========================================================= */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#090d16',
            borderRadius: 3.5,
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
            margin: { xs: 1.5, sm: 2.5 },
          },
        }}
      >
        {activeProject && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 2.2, sm: 3 },
              py: 1.8,
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: { xs: '0.94rem', sm: '1.05rem' },
                }}
              >
                {activeProject.title}
              </Typography>
              <Chip
                label={activeProject.category}
                size="small"
                sx={{
                  backgroundColor: 'rgba(102, 126, 234, 0.2)',
                  color: '#c7d2fe',
                  fontWeight: 600,
                  fontSize: '0.68rem',
                  height: '22px',
                  display: { xs: 'none', sm: 'inline-flex' },
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {activeProject.githubLink && (
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
                  onClick={() =>
                    window.open(activeProject.githubLink, '_blank', 'noopener,noreferrer')
                  }
                  sx={{
                    color: '#e2e8f0',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    fontSize: '0.75rem',
                    textTransform: 'none',
                    py: 0.4,
                    px: 1.2,
                    borderRadius: '6px',
                    '&:hover': {
                      borderColor: '#667eea',
                      color: '#ffffff',
                      backgroundColor: 'rgba(102, 126, 234, 0.15)',
                    },
                  }}
                >
                  Code
                </Button>
              )}
              {activeProject.backendGithubLink && (
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
                  onClick={() =>
                    window.open(activeProject.backendGithubLink, '_blank', 'noopener,noreferrer')
                  }
                  sx={{
                    color: '#c7d2fe',
                    borderColor: 'rgba(102, 126, 234, 0.4)',
                    fontSize: '0.75rem',
                    textTransform: 'none',
                    py: 0.4,
                    px: 1.2,
                    borderRadius: '6px',
                    '&:hover': {
                      borderColor: '#764ba2',
                      color: '#ffffff',
                      backgroundColor: 'rgba(118, 75, 162, 0.2)',
                    },
                  }}
                >
                  Backend
                </Button>
              )}
              <IconButton
                onClick={handleCloseDialog}
                aria-label="Close modal"
                sx={{
                  color: '#94a3b8',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  ml: 0.5,
                  '&:hover': {
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: '1.1rem' }} />
              </IconButton>
            </Box>
          </Box>
        )}

        <DialogContent
          sx={{
            position: 'relative',
            p: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: '55vh', sm: '72vh' },
            backgroundColor: '#090d16',
          }}
        >
          {/* Previous Button for Image Carousel */}
          {!selectedVideo && selectedImages.length > 1 && (
            <IconButton
              onClick={handlePreviousImage}
              aria-label="Previous image"
              sx={{
                position: 'absolute',
                left: 14,
                zIndex: 10,
                color: '#ffffff',
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: '1.1rem' }} />
            </IconButton>
          )}

          {/* Video Player */}
          {selectedVideo && (
            <Box
              component="video"
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              sx={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
              }}
            />
          )}

          {/* Image Display */}
          {!selectedVideo && selectedImages.length > 0 && (
            <Box
              component="img"
              src={selectedImages[currentImageIndex]}
              alt={`Project Screen ${currentImageIndex + 1}`}
              sx={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: 1,
              }}
            />
          )}

          {/* Next Button for Image Carousel */}
          {!selectedVideo && selectedImages.length > 1 && (
            <IconButton
              onClick={handleNextImage}
              aria-label="Next image"
              sx={{
                position: 'absolute',
                right: 14,
                zIndex: 10,
                color: '#ffffff',
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: '1.1rem' }} />
            </IconButton>
          )}

          {/* Image Index Indicator */}
          {!selectedVideo && selectedImages.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#ffffff',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                px: 2,
                py: 0.6,
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
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
