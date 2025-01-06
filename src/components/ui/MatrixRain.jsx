// src/components/ui/MatrixRain.jsx
import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters - taken from Japanese katakana and numbers
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンヴヵヶ0123456789'.split('');
    
    // Number of columns for the rain
    const drops = [];
    // Initialize drops array
    const initDrops = () => {
      const columns = Math.floor(canvas.width / 20); // Character width is 20px
      drops.length = 0; // Clear array
      for(let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };
    
    initDrops();
    
    // Drawing the characters
    const draw = () => {
      // Black BG for the canvas, translucent to show trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = '15px monospace';
      
      // Loop over drops
      for(let i = 0; i < drops.length; i++) {
        // Get random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        // x = i * character size, y = value of drops[i] * character size
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding randomness to the reset to make the drops scattered on the Y axis
        if(drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
      }
    };
    
    // Animation loop
    const interval = setInterval(draw, 33); // Around 30 FPS
    
    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-20"
    />
  );
};

export default MatrixRain;