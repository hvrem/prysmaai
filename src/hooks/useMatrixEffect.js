import { useEffect, useRef } from 'react';

export const useMatrixEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const chars = '01アイウエオカキクケコサシスセソタチツテト'.split('');
    let drops = [];

    const initializeDrops = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = canvas.width / 20;
      drops = new Array(Math.floor(columns)).fill(1);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    initializeDrops();
    const interval = setInterval(draw, 33);

    const handleResize = () => {
      initializeDrops();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return canvasRef;
};