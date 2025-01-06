// src/components/ui/ComingSoonPopup.jsx
import React, { useState } from 'react';

const ComingSoonPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative bg-black border border-green-500/30 p-6 rounded-lg font-mono">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-green-400 flex flex-col items-center space-y-4">
          <p className="text-xl">$ Feature In Development_</p>
          <p className="text-sm opacity-70">Click anywhere to close</p>
        </div>
      </div>
    </div>
  );
};

const withComingSoon = (WrappedComponent) => {
  return function WithComingSoonComponent(props) {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setShowPopup(true);
    };

    return (
      <>
        <div onClick={handleClick}>
          <WrappedComponent {...props} />
        </div>
        <ComingSoonPopup 
          isOpen={showPopup} 
          onClose={() => setShowPopup(false)} 
        />
      </>
    );
  };
};

export { ComingSoonPopup, withComingSoon };