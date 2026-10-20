import React from 'react';
import { Box } from '@mui/material';

const TECH_ITEMS = [
  { name: 'REACT NATIVE', color: '#61dafb' },
  { name: 'NODE.JS', color: '#68a063' },
  { name: 'EXPRESS', color: '#f59e0b' },
  { name: 'MONGODB', color: '#47a248' },
  { name: 'REDUX TOOLKIT', color: '#764abc' },
  { name: 'TYPESCRIPT', color: '#3178c6' },
  { name: 'JAVASCRIPT', color: '#f7df1e' },
  { name: 'REST APIS', color: '#22d3ee' },
  { name: 'FIREBASE', color: '#ffca28' },
  { name: 'SUPABASE', color: '#3ecf8e' },
  { name: 'MATERIAL-UI', color: '#007fff' },
  { name: 'TAILWIND CSS', color: '#38bdf8' },
];

const TechTicker = () => {
  return (
    <Box className="ticker-wrap" sx={{ my: { xs: 4, sm: 6 } }}>
      <Box className="ticker-track">
        {[...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              mx: { xs: 2.5, sm: 3.5 },
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
              letterSpacing: '0.04em',
              color: 'rgba(255, 255, 255, 0.12)',
              userSelect: 'none',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: 'rgba(255, 255, 255, 0.4)',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                width: { xs: 7, sm: 9 },
                height: { xs: 7, sm: 9 },
                borderRadius: '50%',
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}`,
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechTicker;
