// src/components/layout/Navbar.jsx
import React from 'react';
import { Terminal } from 'lucide-react';
import HackerText from '../../components/ui/HackerText';
import { withComingSoon } from '../../components/ui/ComingSoonPopup';

const NavButton = ({ children }) => (
  <button className="text-green-400 hover:text-green-300 font-mono relative group">
    {children}
  </button>
);

const ComingSoonButton = withComingSoon(NavButton);

const Navbar = () => {
  return (
    <nav className="border-b border-green-500/30 bg-black/90">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="text-green-500" size={32} />
            <span className="text-2xl font-mono font-bold glitch-text">//$ZERO</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['> execute', '> analyze', '> connect'].map((item) => (
              <ComingSoonButton key={item}>
                <HackerText text={item} />
              </ComingSoonButton>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;