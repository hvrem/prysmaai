// src/components/sections/Tokenomics.jsx
import React from 'react';
import TerminalWindow from '../../components/ui/TerminalWindow';
import HackerText from '../../components/ui/HackerText';
import SpazzyNumber from '../../components/ui/SpazzyNumber';

const Tokenomics = () => {
  const TokenomicsDisplay = () => (
    <div className="text-green-400 font-mono">
      {
        `{
  "name": "SynapseZero",
  "symbol": "ZERO",
  "total_supply": "`}<SpazzyNumber originalValue="1,000,000,000" />{`",
  "distribution": {
    "presale": "`}<SpazzyNumber originalValue="40" isPercentage={true}/>{`",
    "liquidity": "`}<SpazzyNumber originalValue="30" isPercentage={true}/>{`",
    "development": "`}<SpazzyNumber originalValue="20" isPercentage={true}/>{`",
    "marketing": "`}<SpazzyNumber originalValue="10" isPercentage={true}/>{`"
  },
  "tax": {
    "neural_development": "`}<SpazzyNumber originalValue="3" isPercentage={true}/>{`",
    "liquidity": "`}<SpazzyNumber originalValue="2" isPercentage={true}/>{`",
    "compute_rewards": "`}<SpazzyNumber originalValue="2" isPercentage={true}/>{`"
  }
}`}
    </div>
  );

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <TerminalWindow>
          <div className="font-mono">
            <p className="mb-4">
              <span className="text-green-500">root@synapseZero:~$</span> 
              <HackerText text=" cat tokenomics.json" />
            </p>
            <pre className="text-green-400">
              <TokenomicsDisplay />
            </pre>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

export default Tokenomics;