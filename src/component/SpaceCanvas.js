import React, { useEffect, useRef } from 'react';

const SpaceCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let isPaused = false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (prefersReducedMotion) drawStaticStars();
    };

    window.addEventListener('resize', handleResize);

    // Visibility change listener to pause background rendering when tab is hidden
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Adaptive star count for battery & 60fps performance
    const isMobile = width < 768;
    const starCount = isMobile ? 45 : 95;

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.6 + 0.25,
      speed: Math.random() * 0.003 + 0.001,
      color:
        Math.random() > 0.65
          ? 'rgba(34, 211, 238, '
          : Math.random() > 0.35
          ? 'rgba(167, 139, 250, '
          : 'rgba(255, 255, 255, ',
    }));

    const drawStaticStars = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.fillStyle = star.color + star.alpha + ')';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (prefersReducedMotion) {
      drawStaticStars();
      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }

    let time = 0;
    let lastTime = performance.now();

    const render = (now) => {
      if (isPaused) return;

      const delta = (now - lastTime) / 1000;
      lastTime = now;
      time += delta * 1.2;

      ctx.clearRect(0, 0, width, height);

      // Draw starry particle field
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const currentAlpha = star.alpha * (0.65 + 0.35 * Math.sin(time * star.speed * 80 + i));
        ctx.fillStyle = star.color + currentAlpha + ')';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default SpaceCanvas;
