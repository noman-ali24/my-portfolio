import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

const TECH_ELECTRONS = [
  { name: 'React Native', color: '#61dafb', orbit: 0, speed: 0.015, phase: 0 },
  { name: 'Node.js', color: '#68a063', orbit: 0, speed: 0.015, phase: Math.PI },
  { name: 'TypeScript', color: '#3178c6', orbit: 1, speed: 0.012, phase: 0.8 },
  { name: 'MongoDB', color: '#47a248', orbit: 1, speed: 0.012, phase: 0.8 + Math.PI },
  { name: 'Express.js', color: '#f59e0b', orbit: 2, speed: 0.018, phase: 1.5 },
  { name: 'Redux Toolkit', color: '#a78bfa', orbit: 2, speed: 0.018, phase: 1.5 + Math.PI },
  { name: 'REST APIs', color: '#22d3ee', orbit: 0, speed: 0.014, phase: 2.3 },
  { name: 'Firebase', color: '#ffca28', orbit: 1, speed: 0.011, phase: 2.7 },
];

const ORBIT_ANGLES = [
  { tiltZ: 0.65, radiusX: 175, radiusY: 72 },
  { tiltZ: -0.6, radiusX: 190, radiusY: 78 },
  { tiltZ: 0.1, radiusX: 165, radiusY: 68 },
];

const AtomStack = () => {
  const canvasRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let isPaused = false;
    let angle = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = 420;
    const height = 420;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = width / 2;
    const centerY = height / 2;

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused && !prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const drawFrame = (currentAngle) => {
      ctx.clearRect(0, 0, width, height);

      // Draw Orbit Rings
      ORBIT_ANGLES.forEach((orb) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(orb.tiltZ);
        ctx.scale(1, orb.radiusY / orb.radiusX);

        ctx.beginPath();
        ctx.arc(0, 0, orb.radiusX, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.11)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.restore();
      });

      // Draw Central Glowing Nucleus
      const nucleusPulse = prefersReducedMotion ? 0 : Math.sin(currentAngle * 2) * 3;
      const nucleusRadius = 52 + nucleusPulse;

      const grad = ctx.createRadialGradient(
        centerX - 8,
        centerY - 8,
        8,
        centerX,
        centerY,
        nucleusRadius + 18
      );
      grad.addColorStop(0, 'rgba(167, 139, 250, 0.95)');
      grad.addColorStop(0.4, 'rgba(99, 102, 241, 0.65)');
      grad.addColorStop(0.8, 'rgba(34, 211, 238, 0.3)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius + 18, 0, Math.PI * 2);
      ctx.fill();

      // Faceted Geometric Core
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const rad = (i * Math.PI) / 3 + currentAngle * 0.4;
        const px = centerX + Math.cos(rad) * (nucleusRadius * 0.62);
        const py = centerY + Math.sin(rad) * (nucleusRadius * 0.62);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // Draw Electrons & Detect Touch/Hover
      let currentlyHovered = null;
      const mouse = mousePosRef.current;

      TECH_ELECTRONS.forEach((electron) => {
        const orb = ORBIT_ANGLES[electron.orbit];
        const electronAngle = prefersReducedMotion
          ? electron.phase
          : currentAngle * (electron.speed * 35) + electron.phase;

        const ex0 = Math.cos(electronAngle) * orb.radiusX;
        const ey0 = Math.sin(electronAngle) * orb.radiusY;

        const cosT = Math.cos(orb.tiltZ);
        const sinT = Math.sin(orb.tiltZ);
        const ex = centerX + (ex0 * cosT - ey0 * sinT);
        const ey = centerY + (ex0 * sinT + ey0 * cosT);

        const dist = Math.hypot(mouse.x - ex, mouse.y - ey);
        const isHovered = dist < 24;
        if (isHovered) currentlyHovered = electron.name;

        const radius = isHovered ? 11 : 8.5;

        // Electron Glow
        const eGrad = ctx.createRadialGradient(ex, ey, 2, ex, ey, radius * 2.6);
        eGrad.addColorStop(0, '#ffffff');
        eGrad.addColorStop(0.4, electron.color);
        eGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = eGrad;
        ctx.beginPath();
        ctx.arc(ex, ey, radius * 2.4, 0, Math.PI * 2);
        ctx.fill();

        // Electron Solid Core
        ctx.fillStyle = electron.color;
        ctx.beginPath();
        ctx.arc(ex, ey, radius, 0, Math.PI * 2);
        ctx.fill();

        // Core Shine
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(ex - 2, ey - 2, radius * 0.35, 0, Math.PI * 2);
        ctx.fill();

        // Hover Tag
        if (isHovered) {
          ctx.font = '600 13px Poppins, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.fillText(electron.name, ex, ey - 15);
        }
      });

      setHoveredTech(currentlyHovered);
    };

    if (prefersReducedMotion) {
      drawFrame(0);
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }

    const render = () => {
      if (isPaused) return;
      angle += 0.01;
      drawFrame(angle);
      animId = requestAnimationFrame(render);
    };

    render();

    // Mouse & Touch Interaction Handlers
    const updatePointerPos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      mousePosRef.current = {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    };

    const handleMouseMove = (e) => updatePointerPos(e.clientX, e.clientY);
    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 };
      setHoveredTech(null);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        updatePointerPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        mousePosRef.current = { x: -1000, y: -1000 };
        setHoveredTech(null);
      }, 1500);
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchStart, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
        width: '100%',
        maxWidth: { xs: 320, sm: 380, md: 420 },
        mx: 'auto',
      }}
    >
      <canvas
        ref={canvasRef}
        aria-label="Interactive 3D Atom representing technology stack"
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '1 / 1',
          cursor: 'pointer',
          touchAction: 'none',
        }}
      />
      <Typography
        variant="caption"
        sx={{
          mt: 0.5,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: { xs: '0.68rem', sm: '0.72rem' },
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: hoveredTech ? '#22d3ee' : 'rgba(255, 255, 255, 0.45)',
          transition: 'color 0.2s ease',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        {hoveredTech ? `• ${hoveredTech} •` : 'HOVER THE ELECTRONS · MY STACK'}
      </Typography>
    </Box>
  );
};

export default AtomStack;
