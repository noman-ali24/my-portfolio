import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionHeader = ({ eyebrow, title, gradientWord, subtitle, align = 'center' }) => {
  // If gradientWord is provided, split title or format
  let mainTitle = title;
  let highlightedWord = gradientWord;

  if (!highlightedWord && title.includes(' ')) {
    const parts = title.split(' ');
    mainTitle = parts.slice(0, parts.length - 1).join(' ');
    highlightedWord = parts[parts.length - 1];
  }

  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, sm: 5, md: 6 }, maxWidth: 800, mx: align === 'center' ? 'auto' : 0 }}>
      {eyebrow && (
        <Typography
          variant="caption"
          sx={{
            display: 'inline-block',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: { xs: '0.72rem', sm: '0.8rem' },
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#22d3ee',
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          mb: subtitle ? 1.5 : 0,
        }}
      >
        {mainTitle}{' '}
        {highlightedWord && (
          <span className="gradient-text">{highlightedWord}</span>
        )}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: '#94a3b8',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
            lineHeight: 1.6,
            maxWidth: 680,
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
