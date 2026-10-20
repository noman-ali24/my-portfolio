import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BreadcrumbHeader = ({ currentPage }) => {
  return (
    <Box sx={{ pt: { xs: 11, sm: 13, md: 14 }, pb: 2 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4, md: 5 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            component={Link}
            to="/"
            variant="caption"
            sx={{
              color: '#22d3ee',
              textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.82rem',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Home
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.82rem',
            }}
          >
            /
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#94a3b8',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.82rem',
              fontWeight: 500,
            }}
          >
            {currentPage}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BreadcrumbHeader;
