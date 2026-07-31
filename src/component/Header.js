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
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FolderIcon from '@mui/icons-material/Folder';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import profileImage from '../assets/486203702_1883682939041971_2560599721687666200_n.jpg';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  const drawer = (
    <Box sx={{ width: 280, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Drawer Top Branding */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar
            src={profileImage}
            alt="Muhammad Noman Ali"
            sx={{
              width: 44,
              height: 44,
              border: '2px solid white',
            }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              Noman Ali
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9, fontSize: '0.70rem' }}>
              Full Stack React Native Developer
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Drawer Nav Items */}
      <List sx={{ px: 1.5, py: 2, flexGrow: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 2,
                mb: 1,
                backgroundColor: isActive ? 'rgba(102, 126, 234, 0.12)' : 'transparent',
                color: isActive ? '#667eea' : '#334155',
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: isActive ? '#667eea' : '#64748b', minWidth: 40 }}>
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

      <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600 }}>
          React Native Full Stack Developer
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          color: '#0f172a',
          borderBottom: '1px solid rgba(226, 232, 240, 0.7)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
          zIndex: (theme) => theme.zIndex.drawer - 1, // 1100 so Drawer opens cleanly above AppBar
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', width: '100%', mx: 'auto', px: { xs: 1.5, sm: 3 }, minHeight: { xs: 58, sm: 64 } }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              textDecoration: 'none',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.01)',
              }
            }}
          >
            <Avatar
              src={profileImage}
              alt="Muhammad Noman Ali"
              sx={{
                width: { xs: 38, sm: 46 },
                height: { xs: 38, sm: 46 },
                border: '2px solid',
                borderColor: '#667eea',
                boxShadow: '0 4px 10px rgba(102, 126, 234, 0.2)'
              }}
            />
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '0.85rem', sm: '1.05rem', md: '1.2rem' },
                  color: '#0f172a',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                MUHAMMAD NOMAN ALI
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.825rem' },
                  color: '#667eea',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                React Native Full Stack Developer
              </Typography>
            </Box>
          </Box>
          {isMobile ? (
            <IconButton
              onClick={handleDrawerToggle}
              size="medium"
              sx={{
                backgroundColor: 'rgba(102, 126, 234, 0.08)',
                color: '#667eea',
                p: 1,
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 0.15)',
                }
              }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isActive ? '#667eea' : '#475569',
                      backgroundColor: isActive ? 'rgba(102, 126, 234, 0.08)' : 'transparent',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 500,
                      borderRadius: '8px',
                      px: 2,
                      py: 0.8,
                      position: 'relative',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.06)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { borderTopRightRadius: 16, borderBottomRightRadius: 16 }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
