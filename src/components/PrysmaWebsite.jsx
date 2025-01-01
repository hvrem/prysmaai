import React, { useState, useEffect } from 'react';
import { Rocket, Moon, Star, DollarSign, Brain, Bot, TrendingUp, Users, Shield, Timer } from 'lucide-react';

const CortixWebsite = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2">
        <div className="container mx-auto text-center">
          <span className="font-bold">🚀 PRESALE STARTING SOON! 50% BONUS FOR EARLY INVESTORS! 🚀</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
          {/* Countdown Timer */}
          <div className="absolute top-4 w-full max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur rounded-xl px-6 py-4">
              <h3 className="text-xl mb-2">Presale Starts In:</h3>
              <div className="flex justify-center gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-purple-900/50 rounded-lg p-3 min-w-[80px]">
                    <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-gray-400">{unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-32">
            <Bot className="w-40 h-40 text-pink-500" />
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
              CORTIX AI
            </h1>
            <p className="text-3xl text-pink-200 mb-8">The Future of Meme Coins is Launching!</p>
            
            <div className="max-w-2xl mx-auto bg-white/5 rounded-xl p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <p className="text-gray-400">Presale Price:</p>
                  <p className="text-2xl font-bold text-green-400">$0.00001 USDT</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-400">Launch Price:</p>
                  <p className="text-2xl font-bold text-pink-400">$0.00002 USDT</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-400">Min Investment:</p>
                  <p className="text-xl font-bold">50 USDT</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-400">Max Investment:</p>
                  <p className="text-xl font-bold">5000 USDT</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:opacity-90">
                Join Presale Whitelist 🚀
              </button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <Rocket className="absolute top-1/4 left-1/4 w-8 h-8 text-pink-400" />
            <Moon className="absolute top-1/3 right-1/4 w-6 h-6 text-purple-400" />
            <Star className="absolute bottom-1/4 left-1/3 w-4 h-4 text-cyan-400" />
            <DollarSign className="absolute top-1/2 right-1/3 w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>

      {/* Presale Benefits */}
      <div className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Join Presale?</h2>
          <p className="text-xl text-gray-400">Early investors get exclusive benefits!</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "50% Bonus Tokens", description: "Get 50% extra tokens during presale phase" },
            { title: "Guaranteed Allocation", description: "Your chance to buy before public launch" },
            { title: "Early Supporter NFT", description: "Exclusive NFT for presale participants" }
          ].map((benefit, index) => (
            <div key={index} className="bg-black/50 rounded-xl p-8 border border-pink-500/20">
              <h3 className="text-2xl font-bold text-pink-500 mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Launch Roadmap</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: "Phase 1", title: "Presale", status: "Current", items: ["Whitelist Open", "Community Building", "Audits"] },
              { phase: "Phase 2", title: "Launch", status: "Coming Soon", items: ["DEX Listing", "CMC & CG Listing", "Marketing Push"] },
              { phase: "Phase 3", title: "Growth", status: "Q2 2024", items: ["CEX Listings", "AI Features Launch", "Partnerships"] },
              { phase: "Phase 4", title: "Expansion", status: "Q3 2024", items: ["Mobile App", "DAO Governance", "Ecosystem Growth"] }
            ].map((phase, index) => (
              <div key={index} className="p-6 border-2 border-pink-500 rounded-xl bg-black/50">
                <div className="text-pink-500 font-bold mb-2">{phase.phase}</div>
                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                <div className="text-sm text-gray-400 mb-4">{phase.status}</div>
                <ul className="text-gray-300 space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features teaser */}
      <div className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-pink-500 rounded-xl bg-black/50">
              <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6" /> AI-Powered Analysis
              </h3>
              <p className="text-gray-300">Coming Soon: Revolutionary AI algorithms to predict meme trends!</p>
            </div>

            <div className="p-8 border-2 border-purple-500 rounded-xl bg-black/50">
              <h3 className="text-2xl font-bold text-purple-500 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" /> Smart Security
              </h3>
              <p className="text-gray-300">Audited by top firms, your investment is protected!</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Don't Miss This Opportunity! 🚀</h2>
          <p className="text-2xl text-gray-400 mb-12">Join the whitelist now and be part of the next big crypto revolution!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:opacity-90">
              Join Whitelist Now
            </button>
            <button className="bg-white/10 border border-pink-500/50 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/20">
              View Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CortixWebsite;