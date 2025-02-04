// src/components/ui/TerminalWindow.jsx
import React from 'react';

const TerminalWindow = ({ children, className = '' }) => {
  return (
    <div className={`bg-black/80 border border-green-500/30 p-6 terminal-window ${className}`}>
      {/* Simple Terminal Header */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;