import React, { useState, useEffect } from 'react';

const HackerText = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="font-mono">
      {displayText}
      {index < text.length && '|'}
    </span>
  );
};

export default HackerText;