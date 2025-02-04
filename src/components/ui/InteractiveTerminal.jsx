// src/components/ui/InteractiveTerminal.jsx
import React, { useState, useEffect, useRef } from 'react';

const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Enter password:']);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setOutput(prev => [...prev, `> ${input}`, 'Invalid password. Access denied.', 'Enter password:']);
      setInput('');
    }
  };

  return (
    <div className="bg-black/80 p-6 font-mono text-green-500">
      <div className="h-48 overflow-auto mt-6">
        {output.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
        <div className="flex">
          <span>{'\u276F'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none ml-2 text-green-500"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;