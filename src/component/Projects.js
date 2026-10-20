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
  Tooltip,
} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import SectionHeader from './SectionHeader';

// Import videos
import autopulseVideo from '../assets/autopulse_video.mp4';
import adminVideo from '../assets/Screen Recording 2026-01-24 232258.mp4';
import websiteVideo from '../assets/Screen Recording 2026-01-24 231929.mp4';
import stamptVideo from '../assets/stampt_demo.mp4';

// Import Images
import autopulseImg from '../assets/autopulse.png';
import stamptImg from '../assets/stampt_cover.jpg';
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
    title: 'AutoPulse — Vehicle Care Platform',
    badge: 'MOBILE APP',
    category: 'Mobile App',
    deviceType: 'mobile',
    image: autopulseImg || '/autopulse.png',
    imageType: 'video',
    video: autopulseVideo,
    skills: ['React Native', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/noman-ali24/signin-signup-frontend',
    backendGithubLink: 'https://github.com/noman-ali24/sign-in-sigup-Backend',
    description:
      'A production-grade mobile app for vehicle servicing and customer management with secure JWT authentication, real-time booking, and end-to-end REST APIs.',
  },
  {
    id: 'stampt',
    isFeatured: true,
    isPrivate: true,
    title: 'Stampt — Digital Loyalty & Rewards App',
    subtitle: 'Mobile App · Professional / Company Project',
    badge: 'MOBILE APP',
    category: 'Mobile App',
    deviceType: 'mobile',
    image: stamptImg,
    imageType: 'video',
    video: stamptVideo,
    skills: [
      'React Native',
      'TypeScript',
      'Redux',
      'Socket.IO',
      'REST APIs',
      'Camera Integration',
      'React Native Animations',
    ],
    description:
      'A digital loyalty platform replacing paper punch cards — scan merchant QR codes, collect real-time stamps, discover nearby spots, and redeem rewards.',
    longDescription: [
      'Stampt is a modern digital loyalty and rewards application designed to replace traditional paper punch cards with a seamless mobile experience.',
      'Customers can scan merchant QR codes to collect digital stamps in real time, discover nearby participating businesses, track their loyalty history, and redeem rewards through an intuitive and engaging interface.',
    ],
    features: [
      'QR code scanning and digital stamp collection',
      'Real-time stamp updates and synchronization',
      'Nearby merchant discovery',
      'Loyalty history and reward tracking',
      'Reward redemption functionality',
      'Smooth animations and responsive user interface',
      'Camera integration and API connectivity',
    ],
    role: 'React Native Full Stack Developer',
    roleDescription:
      'Focused on developing responsive mobile features, integrating backend APIs, implementing real-time functionality, managing application state, and optimizing UI animations and performance.',
    projectType: 'Professional / Company Project',
    sourceCode: 'Private — Company-owned',
  },
  {
    id: 'whatsapp-ui',
    isFeatured: false,
    title: 'React Native WhatsApp UI',
    badge: 'MOBILE APP',
    category: 'Mobile App',
    deviceType: 'mobile',
    image: whatsapp1?.default || whatsapp1,
    imageType: 'gallery',
    images: whatsappImages,
    skills: ['React Native', 'Redux', 'JavaScript', 'React Navigation', 'UI/UX'],
    githubLink: 'https://github.com/noman-ali24/react-native-whatsapp-ui',
    description:
      'A pixel-perfect WhatsApp mobile clone built in React Native featuring searchable chat feeds, full-screen status views, and call history screens.',
  },
  {
    id: 'admin-dashboard',
    isFeatured: false,
    title: 'E-Commerce Admin Dashboard',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'admin.ecommerce.dev',
    image: '/admin.png',
    imageType: 'video',
    video: adminVideo,
    skills: ['React.js', 'Material-UI', 'React Router', 'Analytics', 'REST APIs'],
    githubLink: 'https://github.com/noman-ali24/E-Commerce-Admin-Dashboard',
    description:
      'An enterprise administrative operations portal for store managers with real-time metric cards, interactive sales charts, and inventory tables.',
  },
  {
    id: 'ecommerce-website',
    isFeatured: false,
    title: 'E-Commerce Customer Website',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'shop.ecommerce.dev',
    image: '/webiste.png',
    imageType: 'video',
    video: websiteVideo,
    skills: ['React.js', 'Material-UI', 'JavaScript', 'CSS3', 'REST APIs'],
    githubLink: 'https://github.com/noman-ali24/E-Commerce-Website',
    description:
      'A modern responsive storefront with product catalog browsing, instant category filtering, persistent shopping cart, and checkout workflow.',
  },
  {
    id: 'olx-clone',
    isFeatured: false,
    title: 'OLX Marketplace Clone',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'olx-marketplace.dev',
    image: olxImg?.default || olxImg,
    imageType: 'img',
    skills: ['React.js', 'Material-UI', 'JavaScript', 'Responsive Grid'],
    githubLink: 'https://github.com/noman-ali24/OLX-WEBSITE',
    description:
      'A classifieds marketplace web platform replicating the OLX experience with dynamic category exploration, search navigation, and item cards.',
  },
  {
    id: 'calculator-app',
    isFeatured: false,
    title: 'Calculator Web App',
    badge: 'WEB APP',
    category: 'Web App',
    deviceType: 'web',
    domain: 'calculator.tool',
    image: calculatorImg?.default || calculatorImg,
    imageType: 'img',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    githubLink: 'https://github.com/noman-ali24/calculator-html-css-js',
    description:
      'An interactive digital arithmetic calculator with standard computations, keyboard event listeners, and an ergonomic dark interface.',
  },
];

const detailLabelSx = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  color: '#22d3ee',
  mb: 1,
  mt: 2.5,
};

const metaChipSx = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  color: '#cbd5e1',
  fontSize: '0.74rem',
  fontWeight: 500,
  '& .MuiChip-icon': { color: '#22d3ee', fontSize: '0.95rem' },
};

// Details panel shown beside the demo video for projects that define `features`
const ProjectDetails = ({ project }) => (
  <Box sx={{ textAlign: 'left' }}>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
      <Chip icon={<WorkOutlineIcon />} label={project.projectType} size="small" sx={metaChipSx} />
      <Chip
        icon={<LockOutlinedIcon />}
        label={`Source: ${project.sourceCode}`}
        size="small"
        sx={{
          ...metaChipSx,
          borderColor: 'rgba(167, 139, 250, 0.35)',
          '& .MuiChip-icon': { color: '#a78bfa', fontSize: '0.95rem' },
        }}
      />
    </Box>

    {project.longDescription.map((para, idx) => (
      <Typography
        key={idx}
        variant="body2"
        sx={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, mb: 1.25 }}
      >
        {para}
      </Typography>
    ))}

    <Typography sx={detailLabelSx}>KEY FEATURES</Typography>
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 0.9 }}>
      {project.features.map((feature) => (
        <Box
          component="li"
          key={feature}
          sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: '#e2e8f0', fontSize: '0.86rem', lineHeight: 1.5 }}
        >
          <CheckCircleRoundedIcon sx={{ fontSize: '1rem', color: '#22d3ee', mt: '2px', flexShrink: 0 }} />
          {feature}
        </Box>
      ))}
    </Box>

    <Typography sx={detailLabelSx}>MY ROLE</Typography>
    <Typography sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem', mb: 0.5 }}>
      {project.role}
    </Typography>
    <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.65 }}>
      {project.roleDescription}
    </Typography>

    <Typography sx={detailLabelSx}>TECHNOLOGIES</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
      {project.skills.map((skill) => (
        <Box
          key={skill}
          sx={{
            px: 1.25,
            py: 0.35,
            borderRadius: '9999px',
            backgroundColor: 'rgba(34, 211, 238, 0.08)',
            border: '1px solid rgba(34, 211, 238, 0.25)',
            color: '#cbd5e1',
            fontSize: '0.74rem',
            fontWeight: 500,
          }}
        >
          {skill}
        </Box>
      ))}
    </Box>
  </Box>
);

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

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      {/* Wide Container for elegant card proportions matching Image 1 */}
      <Container maxWidth={false} sx={{ maxWidth: '1380px', px: { xs: 2.5, sm: 4, md: 5 } }}>
        <SectionHeader
          eyebrow="SELECTED WORK"
          title={isFullPage ? 'Portfolio Projects' : 'Featured Projects'}
          // subtitle="Shipped apps on the App Store & Google Play — hover a card to explore."
          subtitle="A showcase of my projects, code, and development demos."
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

        {/* Projects Grid: 3-column Desktop Grid with Wide Cards (Matching Image 1) */}
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
          {filteredProjects.map((project) => {
            const hasMultipleImages = project.images && project.images.length > 1;
            const currentImgIdx = cardImageIndices[project.id] || 0;
            const displayImage = hasMultipleImages ? project.images[currentImgIdx] : project.image;

            return (
              <Box
                key={project.id}
                onClick={() => handleOpenPreview(project)}
                sx={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: 'rgba(9, 12, 28, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(34, 211, 238, 0.45)',
                    boxShadow: '0 16px 36px -10px rgba(34, 211, 238, 0.25)',
                    '& .card-hover-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                {/* Media Preview Container (Matching Image 1) */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 255,
                    backgroundColor: '#060814',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    p: 2,
                    pb: 1.5,
                  }}
                >
                  {/* Top-Left Platform Badge (Matching Image 1) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      zIndex: 4,
                      pointerEvents: 'none',
                    }}
                  >
                    <Chip
                      label={project.badge}
                      size="small"
                      sx={{
                        backgroundColor:
                          project.deviceType === 'mobile'
                            ? 'rgba(34, 211, 238, 0.12)'
                            : 'rgba(99, 102, 241, 0.16)',
                        backdropFilter: 'blur(8px)',
                        color: project.deviceType === 'mobile' ? '#22d3ee' : '#a78bfa',
                        border: `1px solid ${
                          project.deviceType === 'mobile'
                            ? 'rgba(34, 211, 238, 0.35)'
                            : 'rgba(167, 139, 250, 0.35)'
                        }`,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        fontSize: '0.64rem',
                        letterSpacing: '0.06em',
                        height: 24,
                      }}
                    />
                  </Box>

                  {/* Top-Right Private / Company badge */}
                  {project.isPrivate && (
                    <Box sx={{ position: 'absolute', top: 14, right: 14, zIndex: 4, pointerEvents: 'none' }}>
                      <Chip
                        icon={<LockOutlinedIcon />}
                        label="COMPANY"
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(167, 139, 250, 0.14)',
                          backdropFilter: 'blur(8px)',
                          color: '#a78bfa',
                          border: '1px solid rgba(167, 139, 250, 0.35)',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 700,
                          fontSize: '0.62rem',
                          letterSpacing: '0.06em',
                          height: 24,
                          '& .MuiChip-icon': { color: '#a78bfa', fontSize: '0.8rem', ml: '6px' },
                        }}
                      />
                    </Box>
                  )}

                  {/* Media Content Display */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                      pt: 1.5,
                    }}
                  >
                    {project.deviceType === 'mobile' ? (
                      /* Phone Device Mockup Frame (Matches Image 1 Center Card) */
                      <Box
                        sx={{
                          width: 'auto',
                          height: '92%',
                          maxHeight: 185,
                          aspectRatio: '9 / 18.5',
                          borderRadius: '20px',
                          overflow: 'hidden',
                          border: '2px solid rgba(255, 255, 255, 0.85)',
                          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.85)',
                          backgroundColor: '#000',
                          position: 'relative',
                        }}
                      >
                        {/* Speaker Notch */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 4,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 22,
                            height: 3,
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                            zIndex: 3,
                          }}
                        />
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
                      /* Browser Window Frame for Web Projects (Matches Image 1 Left Card) */
                      <Box
                        sx={{
                          width: '96%',
                          height: '94%',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          backgroundColor: '#0d1024',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 10px 24px rgba(0, 0, 0, 0.7)',
                        }}
                      >
                        {/* Browser Topbar with Window Dots */}
                        <Box
                          sx={{
                            height: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            px: 1,
                            gap: 0.6,
                          }}
                        >
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }} />
                        </Box>
                        {/* Web Screenshot with smooth hover zoom */}
                        <Box
                          component="img"
                          src={displayImage}
                          alt={project.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            transition: 'transform 0.4s ease',
                            '&:hover': {
                              transform: 'scale(1.04)',
                            },
                          }}
                        />
                      </Box>
                    )}

                    {/* Sleek Interactive Hover Overlay (allows instant demo or GitHub access on hover) */}
                    <Box
                      className="card-hover-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(5, 6, 15, 0.72)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1.5,
                        opacity: 0,
                        transition: 'opacity 0.25s ease',
                        zIndex: 5,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        size="small"
                        onClick={() => handleOpenPreview(project)}
                        startIcon={project.video ? <PlayArrowRoundedIcon /> : <LaunchIcon />}
                        className="btn-primary-gradient"
                        sx={{
                          px: 2.2,
                          py: 0.7,
                          fontSize: '0.78rem',
                          textTransform: 'none',
                          borderRadius: '9999px',
                        }}
                      >
                        {project.video ? 'Watch Demo' : 'View Gallery'}
                      </Button>

                      {project.isPrivate && (
                        <Tooltip title={`Source code: ${project.sourceCode}`}>
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              color: '#a78bfa',
                            }}
                          >
                            <LockOutlinedIcon sx={{ fontSize: '1.05rem' }} />
                          </Box>
                        </Tooltip>
                      )}

                      {project.githubLink && (
                        <Tooltip title={project.backendGithubLink ? 'Frontend Code' : 'GitHub Code'}>
                          <IconButton
                            component="a"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub`}
                            sx={{
                              width: 36,
                              height: 36,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              color: '#ffffff',
                              '&:hover': {
                                backgroundColor: 'rgba(34, 211, 238, 0.3)',
                                borderColor: '#22d3ee',
                                color: '#22d3ee',
                              },
                            }}
                          >
                            <GitHubIcon sx={{ fontSize: '1.05rem' }} />
                          </IconButton>
                        </Tooltip>
                      )}

                      {project.backendGithubLink && (
                        <Tooltip title="Backend Code">
                          <IconButton
                            component="a"
                            href={project.backendGithubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Backend API`}
                            sx={{
                              width: 36,
                              height: 36,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              color: '#ffffff',
                              '&:hover': {
                                backgroundColor: 'rgba(167, 139, 250, 0.3)',
                                borderColor: '#a78bfa',
                                color: '#a78bfa',
                              },
                            }}
                          >
                            <GitHubIcon sx={{ fontSize: '1.05rem' }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </Box>

                  {/* Carousel Indicator Dots (Matching Image 1: Cyan dot + Inactive dots) */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 0.6,
                      pt: 1,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {[0, 1, 2].map((dotIdx) => {
                      const isActive = hasMultipleImages ? currentImgIdx % 3 === dotIdx : dotIdx === 0;
                      return (
                        <Box
                          key={dotIdx}
                          onClick={() => {
                            if (hasMultipleImages) {
                              setCardImageIndices((prev) => ({
                                ...prev,
                                [project.id]: dotIdx,
                              }));
                            }
                          }}
                          sx={{
                            width: isActive ? 14 : 5,
                            height: 5,
                            borderRadius: '9999px',
                            backgroundColor: isActive ? '#22d3ee' : 'rgba(255, 255, 255, 0.3)',
                            cursor: hasMultipleImages ? 'pointer' : 'default',
                            transition: 'all 0.25s ease',
                          }}
                        />
                      );
                    })}
                  </Box>
                </Box>

                {/* Card Content Area (Ending after Tech Tags, Matching Image 1) */}
                <Box
                  sx={{
                    p: 2.5,
                    pt: 2,
                    pb: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* Title Row: Title on Left, Category on Right (Matching Image 1) */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: 1.5,
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: '#ffffff',
                        lineHeight: 1.3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: '#64748b',
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        flexShrink: 0,
                      }}
                    >
                      {project.badge}
                    </Typography>
                  </Box>

                  {/* 2-Line Description (Matching Image 1) */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#94a3b8',
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                      mb: 2,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '2.6em',
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technology Badges Row (Matching Image 1: compact rounded pills) */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.75,
                      alignItems: 'center',
                    }}
                  >
                    {project.skills.slice(0, 4).map((skill, sIdx) => (
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
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                    {project.skills.length > 4 && (
                      <Box
                        sx={{
                          px: 1,
                          py: 0.35,
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: '#64748b',
                          fontSize: '0.68rem',
                          fontWeight: 500,
                        }}
                      >
                        +{project.skills.length - 4}
                      </Box>
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
              {activeProject?.subtitle || activeProject?.badge}
            </Typography>
          </Box>
          <IconButton
            onClick={handleCloseDialog}
            aria-label="Close dialog"
            sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ p: 2, textAlign: 'center', position: 'relative' }}>
          {selectedVideo && activeProject?.features ? (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.85fr) minmax(0, 1.15fr)' },
                gap: { xs: 2.5, md: 3.5 },
                alignItems: 'start',
                p: { xs: 0, md: 1 },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  position: { md: 'sticky' },
                  top: { md: 0 },
                }}
              >
                <Box
                  component="video"
                  src={selectedVideo}
                  poster={activeProject.image}
                  controls
                  autoPlay
                  muted
                  playsInline
                  sx={{
                    width: '100%',
                    maxHeight: { xs: '60vh', md: '72vh' },
                    objectFit: 'contain',
                    display: 'block',
                    backgroundColor: '#000',
                  }}
                />
              </Box>
              <ProjectDetails project={activeProject} />
            </Box>
          ) : selectedVideo ? (
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
                alt={`${activeProject?.title || 'Project'} preview ${currentImageIndex + 1}`}
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
                    aria-label="Previous image"
                    sx={{
                      position: 'absolute',
                      left: 8,
                      backgroundColor: 'rgba(5, 6, 15, 0.75)',
                      color: '#ffffff',
                      '&:hover': { backgroundColor: 'rgba(99, 102, 241, 0.8)' },
                    }}
                  >
                    <ArrowBackIosNewIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={handleNextImage}
                    aria-label="Next image"
                    sx={{
                      position: 'absolute',
                      right: 8,
                      backgroundColor: 'rgba(5, 6, 15, 0.75)',
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
                      backgroundColor: 'rgba(5, 6, 15, 0.85)',
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
