import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

// Vibrant electrons matching Image 2 reference
const TECH_ELECTRONS = [
  { name: 'React Native', color: '#22d3ee', orbit: 0, speed: 0.016, phase: 0 },
  { name: 'Node.js', color: '#4ade80', orbit: 0, speed: 0.016, phase: Math.PI },
  { name: 'TypeScript', color: '#38bdf8', orbit: 1, speed: 0.013, phase: 0.7 },
  { name: 'MongoDB', color: '#facc15', orbit: 1, speed: 0.013, phase: 0.7 + Math.PI },
  { name: 'Express.js', color: '#fb7185', orbit: 2, speed: 0.019, phase: 1.4 },
  { name: 'Redux Toolkit', color: '#c084fc', orbit: 2, speed: 0.019, phase: 1.4 + Math.PI },
  { name: 'REST APIs', color: '#ffffff', orbit: 0, speed: 0.015, phase: 2.2 },
  { name: 'Firebase', color: '#fb923c', orbit: 1, speed: 0.012, phase: 2.8 },
  { name: 'React.js', color: '#67e8f9', orbit: 2, speed: 0.017, phase: 0.2 },
  { name: 'JavaScript', color: '#fef08a', orbit: 0, speed: 0.014, phase: 4.1 },
];

const ORBIT_ANGLES = [
  { tiltZ: 0.62, radiusX: 168, radiusY: 74 },
  { tiltZ: -0.58, radiusX: 182, radiusY: 80 },
  { tiltZ: 0.12, radiusX: 158, radiusY: 66 },
];

// Fixed background cosmic dust specks matching Image 2
const COSMIC_DUST = [
  { x: 0.18, y: 0.15, size: 2.5, isSquare: true, opacity: 0.4 },
  { x: 0.82, y: 0.18, size: 2, isSquare: false, opacity: 0.35 },
  { x: 0.12, y: 0.68, size: 1.8, isSquare: false, opacity: 0.3 },
  { x: 0.88, y: 0.75, size: 3, isSquare: true, opacity: 0.45 },
  { x: 0.52, y: 0.72, size: 3.5, isSquare: true, opacity: 0.5 },
  { x: 0.84, y: 0.86, size: 2.5, isSquare: true, opacity: 0.35 },
  { x: 0.28, y: 0.79, size: 1.5, isSquare: false, opacity: 0.3 },
  { x: 0.68, y: 0.12, size: 1.8, isSquare: false, opacity: 0.25 },
  { x: 0.38, y: 0.28, size: 2, isSquare: false, opacity: 0.3 },
  { x: 0.78, y: 0.42, size: 2, isSquare: false, opacity: 0.25 },
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

      // 1. Draw Cosmic Dust / Micro Stars (matches Image 2)
      COSMIC_DUST.forEach((dust) => {
        const dx = dust.x * width;
        const dy = dust.y * height;
        ctx.fillStyle = `rgba(255, 255, 255, ${dust.opacity})`;
        if (dust.isSquare) {
          ctx.fillRect(dx - dust.size / 2, dy - dust.size / 2, dust.size, dust.size);
        } else {
          ctx.beginPath();
          ctx.arc(dx, dy, dust.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 2. Draw 3D Orbit Rings with subtle cyan glow
      ORBIT_ANGLES.forEach((orb) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(orb.tiltZ);
        ctx.scale(1, orb.radiusY / orb.radiusX);

        ctx.beginPath();
        ctx.arc(0, 0, orb.radiusX, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
        ctx.lineWidth = 1.3;
        ctx.stroke();

        ctx.restore();
      });

      // 3. Draw Central Lavender Faceted Nucleus (matches Image 2)
      const nucleusPulse = prefersReducedMotion ? 0 : Math.sin(currentAngle * 0.9) * 1.8;
      const nucleusRadius = 48 + nucleusPulse;

      // Outer ambient translucent violet glow
      const outerGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        nucleusRadius * 0.4,
        centerX,
        centerY,
        nucleusRadius + 32
      );
      outerGlow.addColorStop(0, 'rgba(168, 140, 255, 0.35)');
      outerGlow.addColorStop(0.5, 'rgba(120, 80, 220, 0.2)');
      outerGlow.addColorStop(0.85, 'rgba(34, 211, 238, 0.08)');
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius + 32, 0, Math.PI * 2);
      ctx.fill();

      // Translucent lavender sphere body
      const coreGrad = ctx.createRadialGradient(
        centerX - nucleusRadius * 0.25,
        centerY - nucleusRadius * 0.25,
        nucleusRadius * 0.1,
        centerX,
        centerY,
        nucleusRadius
      );
      coreGrad.addColorStop(0, 'rgba(230, 220, 255, 0.95)');
      coreGrad.addColorStop(0.35, 'rgba(190, 165, 255, 0.85)');
      coreGrad.addColorStop(0.75, 'rgba(145, 115, 240, 0.7)');
      coreGrad.addColorStop(1, 'rgba(90, 60, 180, 0.6)');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI * 2);
      ctx.fill();

      // Outer delicate sphere rim
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Geodesic 3D Wireframe Facets across nucleus (matches Image 2)
      const facetPoints = [
        { u: -0.6, v: -0.3 },
        { u: 0.1, v: -0.65 },
        { u: 0.65, v: -0.2 },
        { u: 0.5, v: 0.5 },
        { u: -0.15, v: 0.65 },
        { u: -0.7, v: 0.2 },
        { u: 0, v: 0 },
      ];

      const rot = currentAngle * 0.18;
      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      const transformedPoints = facetPoints.map((pt) => {
        const rx = pt.u * cosR - pt.v * sinR;
        const ry = pt.u * sinR + pt.v * cosR;
        return {
          x: centerX + rx * (nucleusRadius * 0.85),
          y: centerY + ry * (nucleusRadius * 0.85),
        };
      });

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
      ctx.lineWidth = 0.9;

      // Facet triangulation lines
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
        [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5],
      ];

      edges.forEach(([p1, p2]) => {
        ctx.beginPath();
        ctx.moveTo(transformedPoints[p1].x, transformedPoints[p1].y);
        ctx.lineTo(transformedPoints[p2].x, transformedPoints[p2].y);
        ctx.stroke();
      });

      // 4. Calculate Electron Positions
      let currentlyHovered = null;
      const mouse = mousePosRef.current;
      const electronPositions = [];

      TECH_ELECTRONS.forEach((electron) => {
        const orb = ORBIT_ANGLES[electron.orbit];
        const electronAngle = prefersReducedMotion
          ? electron.phase
          : currentAngle * (electron.speed * 16) + electron.phase;

        const ex0 = Math.cos(electronAngle) * orb.radiusX;
        const ey0 = Math.sin(electronAngle) * orb.radiusY;

        const cosT = Math.cos(orb.tiltZ);
        const sinT = Math.sin(orb.tiltZ);
        const ex = centerX + (ex0 * cosT - ey0 * sinT);
        const ey = centerY + (ex0 * sinT + ey0 * cosT);

        const dist = Math.hypot(mouse.x - ex, mouse.y - ey);
        const isHovered = dist < 22;
        if (isHovered) currentlyHovered = electron.name;

        electronPositions.push({
          ...electron,
          x: ex,
          y: ey,
          isHovered,
        });
      });

      // 5. Draw Constellation Connectors between paired electrons (matches Image 2)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = 0.8;
      const connections = [
        [0, 8],
        [4, 1],
        [7, 3],
        [2, 9],
      ];
      connections.forEach(([i1, i2]) => {
        if (electronPositions[i1] && electronPositions[i2]) {
          ctx.beginPath();
          ctx.moveTo(electronPositions[i1].x, electronPositions[i1].y);
          ctx.lineTo(electronPositions[i2].x, electronPositions[i2].y);
          ctx.stroke();
        }
      });

      // 6. Draw Electrons with Glowing Halos & Specular Shine
      electronPositions.forEach((electron) => {
        const radius = electron.isHovered ? 12 : 9;

        // Glowing outer halo
        const haloGrad = ctx.createRadialGradient(
          electron.x,
          electron.y,
          2,
          electron.x,
          electron.y,
          radius * 2.8
        );
        haloGrad.addColorStop(0, '#ffffff');
        haloGrad.addColorStop(0.35, electron.color);
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(electron.x, electron.y, radius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Solid electron sphere body
        ctx.fillStyle = electron.color;
        ctx.beginPath();
        ctx.arc(electron.x, electron.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // White Specular Highlight (top-left shine)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(electron.x - radius * 0.3, electron.y - radius * 0.3, radius * 0.32, 0, Math.PI * 2);
        ctx.fill();

        // Hover Tag label
        if (electron.isHovered) {
          ctx.font = '700 13px Poppins, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.fillText(electron.name, electron.x, electron.y - 18);
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
      angle += 0.0055;
      drawFrame(angle);
      animId = requestAnimationFrame(render);
    };

    render();

    // Mouse & Touch Handlers
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
        maxWidth: { xs: 320, sm: 380, md: 430 },
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
          mt: 1,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: { xs: '0.68rem', sm: '0.74rem' },
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: hoveredTech ? '#22d3ee' : 'rgba(255, 255, 255, 0.72)',
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
