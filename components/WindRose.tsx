"use client";

import React from "react";

interface WindRoseProps {
  className?: string;
  size?: number;
  color?: string;
}

export const WindRose: React.FC<WindRoseProps> = ({
  className = "",
  size = 48,
  color = "currentColor"
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-1000 ease-out hover:rotate-90"
      >
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
        <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="0.75" opacity="0.4" />
        
        {/* Cardinal Lines */}
        <line x1="50" y1="4" x2="50" y2="96" stroke={color} strokeWidth="1" opacity="0.8" />
        <line x1="4" y1="50" x2="96" y2="50" stroke={color} strokeWidth="1" opacity="0.8" />
        
        {/* Diagonal Lines */}
        <line x1="18" y1="18" x2="82" y2="82" stroke={color} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
        <line x1="18" y1="82" x2="82" y2="18" stroke={color} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />

        {/* 4 Point Compass Star */}
        <polygon points="50,10 53,47 90,50 53,53 50,90 47,53 10,50 47,47" fill={color} opacity="0.9" />
        <polygon points="50,10 50,50 90,50 50,50 50,90 50,50 10,50 50,50" fill="#ffffff" opacity="0.3" />

        {/* Center Point */}
        <circle cx="50" cy="50" r="3" fill={color} />
        <circle cx="50" cy="50" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};
