"use client";

import React from "react";

interface PaperclipProps {
  color?: string;
  className?: string;
  size?: number;
}

export const Paperclip: React.FC<PaperclipProps> = ({
  color = "#D1D5DB",
  className = "",
  size = 40
}) => {
  return (
    <div
      className={`paperclip-container inline-block pointer-events-none drop-shadow-md select-none ${className}`}
      style={{ width: size, height: size * 1.8 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Paperclip Metallic Wire Path */}
        <path
          d="M7 11V31C7 35.4183 10.5817 39 15 39C19.4183 39 23 35.4183 23 31V7C23 3.68629 20.3137 1 17 1C13.6863 1 11 3.68629 11 7V29C11 30.6569 12.3431 32 14 32C15.6569 32 17 30.6569 17 29V11"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Highlight for Metallic Sheen */}
        <path
          d="M7 13V30C7 34 10 37 14.5 37"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
