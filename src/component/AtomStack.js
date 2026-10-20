import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

const TECH_ELECTRONS = [
  { name: 'React Native', color: '#61dafb', orbit: 0, speed: 0.015, phase: 0 },
  { name: 'Node.js', color: '#68a063', orbit: 0, speed: 0.015, phase: Math.PI },
  { name: 'TypeScript', color: '#3178c6', orbit: 1, speed: 0.012, phase: 0.8 },
  { name: 'MongoDB', color: '#47a248', orbit: 1, speed: 0.012, phase: 0.8 + Math.PI },
  { name: 'Express.js', color: '#f59e0b', orbit: 2, speed: 0.018, phase: 1.5 },
  { name: 'Redux Toolkit', color: '#764abc', orbit: 2, speed: 0.018, phase: 1.5 + Math.PI },
  { name: 'REST APIs', color: '#22d3ee', orbit: 0, speed: 0.014, phase: 2.3 },
  { name: 'Firebase', color: '#ffca28', orbit: 1, speed: 0.011, phase: 2.7 },
];

const ORBIT_ANGLES = [
  { tiltX: 0.45, tiltZ: 0.65, radiusX: 180, radiusY: 75 },
  { tiltX: 0.55, tiltZ: -0.6, radiusX: 195, radiusY: 80 },
  { tiltX: -0.35, tiltZ: 0.1, radiusX: 170, radiusY: 70 },
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
    let angle = 0;
    const dpr = window.devicePixelRatio || 1;

    const width = 440;
    const height = 440;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = width / 2;
    const centerY = height / 2;

    const render = () => {
      angle += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Draw Orbit Ellipses
      ORBIT_ANGLES.forEach((orb) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(orb.tiltZ);
        ctx.scale(1, orb.radiusY / orb.radiusX);

        ctx.beginPath();
        ctx.arc(0, 0, orb.radiusX, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.restore();
      });

      // Draw Glowing Central Nucleus / Sphere
      const nucleusPulse = Math.sin(angle * 2) * 4;
      const nucleusRadius = 54 + nucleusPulse;

      const grad = ctx.createRadialGradient(
        centerX - 10,
        centerY - 10,
        10,
        centerX,
        centerY,
        nucleusRadius + 20
      );
      grad.addColorStop(0, 'rgba(167, 139, 250, 0.95)');
      grad.addColorStop(0.4, 'rgba(99, 102, 241, 0.7)');
      grad.addColorStop(0.8, 'rgba(34, 211, 238, 0.35)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius + 20, 0, Math.PI * 2);
      ctx.fill();

      // Inner polygon facets for tech look
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const rad = (i * Math.PI) / 3 + angle * 0.5;
        const px = centerX + Math.cos(rad) * (nucleusRadius * 0.65);
        const py = centerY + Math.sin(rad) * (nucleusRadius * 0.65);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      // Draw Electrons
      let currentlyHovered = null;
      const mouse = mousePosRef.current;

      TECH_ELECTRONS.forEach((electron) => {
        const orb = ORBIT_ANGLES[electron.orbit];
        const currentAngle = angle * (electron.speed * 40) + electron.phase;

        // Position on 2D rotated ellipse
        const ex0 = Math.cos(currentAngle) * orb.radiusX;
        const ey0 = Math.sin(currentAngle) * orb.radiusY;

        // Apply orbit tilt rotation
        const cosT = Math.cos(orb.tiltZ);
        const sinT = Math.sin(orb.tiltZ);
        const ex = centerX + (ex0 * cosT - ey0 * sinT);
        const ey = centerY + (ex0 * sinT + ey0 * cosT);

        // Check hover
        const dist = Math.hypot(mouse.x - ex, mouse.y - ey);
        const isHovered = dist < 22;
        if (isHovered) currentlyHovered = electron.name;

        const radius = isHovered ? 11 : 8.5;

        // Electron glow
        const eGrad = ctx.createRadialGradient(ex, ey, 2, ex, ey, radius * 2.8);
        eGrad.addColorStop(0, '#ffffff');
        eGrad.addColorStop(0.4, electron.color);
        eGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = eGrad;
        ctx.beginPath();
        ctx.arc(ex, ey, radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Electron core
        ctx.fillStyle = electron.color;
        ctx.beginPath();
        ctx.arc(ex, ey, radius, 0, Math.PI * 2);
        ctx.fill();

        // White center shine
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(ex - 2, ey - 2, radius * 0.35, 0, Math.PI * 2);
        ctx.fill();

        // If hovered, draw label
        if (isHovered) {
          ctx.font = '600 13px Poppins, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.fillText(electron.name, ex, ey - 16);
        }
      });

      setHoveredTech(currentlyHovered);
      animId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -1000, y: -1000 };
      setHoveredTech(null);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
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
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          maxWidth: '440px',
          height: 'auto',
          aspectRatio: '1 / 1',
          cursor: 'pointer',
        }}
      />
      <Typography
        variant="caption"
        sx={{
          mt: 1,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.72rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: hoveredTech ? '#22d3ee' : 'rgba(255, 255, 255, 0.45)',
          transition: 'color 0.2s ease',
          fontWeight: 600,
        }}
      >
        {hoveredTech ? `• ${hoveredTech} •` : 'HOVER THE ELECTRONS · MY STACK'}
      </Typography>
    </Box>
  );
};

export default AtomStack;
