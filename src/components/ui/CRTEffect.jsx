// src/components/ui/CRTEffect.jsx
import React from 'react';

const CRTEffect = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* CRT Flicker Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-green-500/5 to-black/10 animate-pulse pointer-events-none"></div>
      
      {/* Scanlines */}
      <div className="absolute inset-0 bg-repeat bg-scanlines opacity-10 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Screen Edge Glow */}
      <div className="absolute inset-0 border border-green-500/30 rounded-lg">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default CRTEffect;