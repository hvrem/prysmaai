// src/components/ui/SpazzyNumber.jsx
import React, { useState, useEffect } from 'react';

const SpazzyNumber = ({ originalValue, isPercentage = false }) => {
  const [displayValue, setDisplayValue] = useState(originalValue);

  useEffect(() => {
    const generateRandomNumber = () => {
      if (isPercentage) {
        return Math.floor(Math.random() * 100) + '%';
      } else {
        const magnitude = originalValue.toString().replace(/[^0-9]/g, '').length;
        return Math.floor(Math.random() * Math.pow(10, magnitude))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    };

    const interval = setInterval(() => {
      setDisplayValue(generateRandomNumber());
    }, 50); // Adjust speed here

    return () => clearInterval(interval);
  }, [originalValue, isPercentage]);

  return <span className="font-mono">{displayValue}</span>;
};

export default SpazzyNumber;