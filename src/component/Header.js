import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import profileImage from '../assets/486203702_1883682939041971_2560599721687666200_n.jpg';
import cvFile from '../assets/Muhammad-Noman-Ali.pdf';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Skills', path: '/skills', icon: <CodeIcon /> },
    { label: 'Experience', path: '/experience', icon: <WorkIcon /> },
    { label: 'Education', path: '/education', icon: <SchoolIcon /> },
    { label: 'Portfolio', path: '/portfolio', icon: <FolderIcon /> },
    { label: 'Contact', path: '/contact', icon: <EmailIcon /> },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Muhammad-Noman-Ali.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const drawer = (
    <Box
      sx={{
        width: 290,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#0a0b1a',
        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#f8fafc',
      }}
    >
      {/* Drawer Top Branding */}
      <Box
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'linear-gradient(160deg, rgba(17, 18, 40, 0.95), rgba(10, 11, 26, 0.98))',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src={profileImage}
              alt="Muhammad Noman Ali"
              sx={{
                width: 44,
                height: 44,
                border: '2px solid #22d3ee',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                border: '2px solid #05060f',
              }}
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2, color: '#ffffff' }}>
              Noman Ali
            </Typography>
            <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.70rem' }}>
              React Native Full Stack
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Nav Items */}
      <List sx={{ px: 2, py: 2.5, flexGrow: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: '12px',
                mb: 1,
                py: 1.2,
                backgroundColor: isActive ? 'rgba(99, 102, 241, 0.16)' : 'transparent',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid transparent',
                color: isActive ? '#22d3ee' : '#cbd5e1',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                },
              }}
            >
              <ListItemIcon sx={{ color: isActive ? '#22d3ee' : '#94a3b8', minWidth: 38 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.95rem',
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ p: 2.5, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <Button
          fullWidth
          onClick={handleDownloadCV}
          startIcon={<DownloadIcon />}
          className="btn-primary-gradient"
          sx={{
            py: 1.2,
            fontSize: '0.88rem',
            textTransform: 'none',
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(5, 6, 15, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            maxWidth: '1280px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 4 },
            minHeight: { xs: 62, sm: 70 },
          }}
        >
          {/* Left Brand with Avatar */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
              '&:hover': { transform: 'scale(1.02)' },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Avatar
                src={profileImage}
                alt="Muhammad Noman Ali"
                sx={{
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  border: '2px solid rgba(99, 102, 241, 0.6)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -1,
                  right: -1,
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  border: '2px solid #05060f',
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  color: '#ffffff',
                  lineHeight: 1.2,
                }}
              >
                Noman Ali
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  color: '#22d3ee',
                  letterSpacing: '0.04em',
                }}
              >
                FULL STACK DEV
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              px: 1.5,
              py: 0.6,
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    px: 2,
                    py: 0.6,
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 500,
                    textTransform: 'none',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#ffffff',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Right Action: Download CV Button (Desktop) & Hamburger (Mobile) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button
              onClick={handleDownloadCV}
              startIcon={<DownloadIcon />}
              className="btn-primary-gradient"
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                px: 2.5,
                py: 0.8,
                fontSize: '0.85rem',
                textTransform: 'none',
              }}
            >
              Download CV
            </Button>

            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open drawer"
              sx={{
                display: { md: 'none' },
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
