// In your PrysmaWebsite.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, LineChart, Zap, Shield } from 'lucide-react';

const PrysmaWebsite = () => {
  const [glitchText, setGlitchText] = useState('PRYSMA AI');
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
      if (Math.random() < 0.1) {
        const glitchedText = 'PRYSMA AI'.split('').map(char => 
          Math.random() < 0.3 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join('');
        setGlitchText(glitchedText);
        setTimeout(() => setGlitchText('PRYSMA AI'), 100);
      }
    }, 100);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Animated Background Glow */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl z-50 border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 animate-pulse"></div>
            </div>
            <div className="glitch-container relative">
              <span className="text-2xl font-bold text-white relative z-10">
                {glitchText}
              </span>
              <span className="absolute top-0 left-0 text-2xl font-bold text-purple-500 opacity-50 transform translate-x-[1px] translate-y-[1px] z-0">
                {glitchText}
              </span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Features', 'Tokenomics', 'Roadmap'].map(item => (
              <div key={item} className="relative group">
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMessage(true);
                    setTimeout(() => setShowMessage(false), 2000);
                  }}
                  href={`#${item.toLowerCase()}`} 
                  className="relative group cursor-pointer"
                >
                  <span className="text-gray-300 hover:text-white transition-colors">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                {showMessage && (
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-lg border border-purple-500/30 whitespace-nowrap z-50">
                    Info releasing 1/2/2025
                  </div>
                )}
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              setShowMessage(true);
              setTimeout(() => setShowMessage(false), 2000);
            }}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded relative group overflow-hidden"
          >
            <span className="relative z-10">Buy $PRYS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20"></div>
          {/* Animated circuit lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path d="M0,50 L100,50" className="stroke-current text-purple-500 animate-pulse" strokeWidth="0.1" fill="none"/>
              <path d="M50,0 L50,100" className="stroke-current text-blue-500 animate-pulse" strokeWidth="0.1" fill="none"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="glitch-container mb-6">
              <h1 className="text-6xl md:text-7xl font-bold relative">
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform">
                  Refracting the Future
                </span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform">
                  of Finance
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 relative group">
              <span className="relative z-10">The world's first Prismatic Intelligence Network™</span>
              <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => {
                  setShowMessage(true);
                  setTimeout(() => setShowMessage(false), 2000);
                }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded relative group overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button 
                onClick={() => {
                  setShowMessage(true);
                  setTimeout(() => setShowMessage(false), 2000);
                }}
                className="px-8 py-3 border-2 border-purple-500 rounded relative group overflow-hidden"
              >
                <span className="relative z-10">Whitepaper</span>
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-purple-400 animate-bounce" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Core Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Prismatic Analysis™",
                description: "Our AI model analyzes real-time market data across multiple chains, detecting arbitrage opportunities and market inefficiencies before they become apparent to traditional traders."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Crystal Core™ Network",
                description: "Decentralized network where token holders can run AI nodes, contributing computational power to validate predictions and earn rewards from successful trades."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Rainbow Bridge Protocol",
                description: "Multi-chain execution layer that automatically routes trades through the most efficient paths across different DEXs and bridges for optimal returns."
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Smart Risk Management",
                description: "Advanced risk scoring system continuously monitors market conditions and adjusts position sizes to protect against unexpected market movements."
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Liquidity Optimization",
                description: "Dynamic liquidity provision system that identifies and fills market gaps, generating fees for token holders while improving overall market efficiency."
              },
              {
                icon: <Gem className="w-8 h-8" />,
                title: "Community Governance",
                description: "Token holders can propose and vote on key parameters including risk levels, reward distribution, and which new chains to expand to."
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black p-6 rounded-2xl">
                  <div className="text-purple-400 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Details */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Supply", value: "10M" },
              { label: "Initial Price", value: "TBA" },
              { label: "Launch Date", value: "Coming Soon" },
              { label: "Whitelist Spots", value: "1,000" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrysmaWebsite;