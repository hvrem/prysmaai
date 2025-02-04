// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Tokenomics from './components/sections/Tokenomics';
import MatrixRain from './components/ui/MatrixRain';
import ParticleBackground from './components/ui/ParticleBackground';
import './styles/animations.css';
import './styles/terminal.css';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 overflow-hidden">
      {/* Background Effects */}
      <MatrixRain />
      <ParticleBackground />
      
      {/* Main Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Tokenomics />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;