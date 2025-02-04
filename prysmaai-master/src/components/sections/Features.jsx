// src/components/sections/Features.jsx
import React from 'react';
import { Shield, Binary, Cpu } from 'lucide-react';
import TerminalWindow from '../ui/TerminalWindow';  // Changed from { TerminalWindow }

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Neural Security Protocol",
      code: "protect --mode=quantum",
      description: "Advanced AI-driven security layers"
    },
    {
      icon: Binary,
      title: "Autonomous Evolution",
      code: "evolve --target=optimal",
      description: "Self-improving smart contract system"
    },
    {
      icon: Cpu,
      title: "Distributed Computing",
      code: "compute --network=global",
      description: "Earn by contributing processing power"
    }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <TerminalWindow key={index} className="group">
              <div className="font-mono">
                <feature.icon className="text-green-500 mb-4" size={32} />
                <p className="text-green-500 mb-2">$ {feature.code}</p>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-green-400/80">{feature.description}</p>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;