import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg width="32" height="32" viewBox="0 0 100 100" className="text-white">
        <circle cx="50" cy="50" r="45" fill="#1e1e2f" stroke="white" strokeWidth="2"/>
        <path
          d="M30 35 L45 50 L30 65 M55 35 L70 50 L55 65"
          stroke="url(#gradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FD1C5"/>
            <stop offset="50%" stopColor="#4299E1"/>
            <stop offset="100%" stopColor="#9F7AEA"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="text-white text-xl font-bold">Gaff Digital</span>
    </div>
  );
};

export default Logo;