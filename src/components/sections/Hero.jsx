// src/components/sections/Hero.jsx
import React from 'react';
import TerminalWindow from '../../components/ui/TerminalWindow';
import HackerText from '../../components/ui/HackerText';
import { withComingSoon } from '../../components/ui/ComingSoonPopup';

const Button = ({ children, className }) => (
  <button className={className}>
    {children}
  </button>
);

const ComingSoonButton = withComingSoon(Button);

const Hero = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TerminalWindow>
            <div className="font-mono">
              <p className="mb-4">
                <span className="text-green-500">root@synapseZero:~$</span>
                <HackerText text=" initialize neural_network.eth" />
              </p>
              <p className="text-5xl font-bold mb-6">
                SynapseZero Protocol
              </p>
              <p className="text-xl mb-8">
                <HackerText text="Decentralized Neural Network Evolution" />
              </p>
              <p className="text-green-400 mb-8">
                <span className="text-green-500">Network:</span> PUMP.FUN Chain
              </p>
              <div className="flex space-x-4">
                <ComingSoonButton 
                  className="bg-green-500/20 hover:bg-green-500/30 border border-green-500 px-6 py-2 font-mono"
                >
                  Launch Terminal
                </ComingSoonButton>
                <ComingSoonButton 
                  className="border border-green-500/50 hover:bg-green-500/10 px-6 py-2 font-mono"
                >
                  View Source
                </ComingSoonButton>
              </div>
              <div className="mt-6 text-sm text-green-400/70">
                <p>Contract Address: <span className="text-green-500">Releasing 1/6/2025</span></p>
                <p className="mt-2">Chain ID: <span className="text-green-500">6969</span></p>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </div>
  );
};

export default Hero;