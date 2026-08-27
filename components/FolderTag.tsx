"use client";

import React from "react";

interface FolderTagProps {
  label: string;
  color: string;
  textColor?: string;
  isActive?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
  className?: string;
}

export const FolderTag: React.FC<FolderTagProps> = ({
  label,
  color,
  textColor = "#FDFAF7",
  isActive = false,
  isHovered = false,
  onClick,
  className = ""
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative inline-flex items-end cursor-pointer select-none transition-transform duration-300 ${
        isActive ? "scale-105" : isHovered ? "scale-[1.02]" : ""
      } ${className}`}
      style={{ height: "var(--tag-height, 2.75rem)" }}
    >
      {/* Left Angled SVG Wing */}
      <svg
        viewBox="0 0 44 44"
        preserveAspectRatio="none"
        className="h-full w-6 sm:w-8 shrink-0 fill-current"
        style={{ color: color }}
      >
        <path d="M44,0 C30,0 20,12 14,24 L2,44 L44,44 Z" />
      </svg>

      {/* Middle Flat Body */}
      <div
        className="h-full flex items-center justify-center px-2 sm:px-4 text-xs sm:text-sm md:text-base font-serif font-medium tracking-wide whitespace-nowrap"
        style={{
          backgroundColor: color,
          color: textColor
        }}
      >
        <span className="relative top-[-1px] transition-transform duration-200 group-hover:-translate-y-0.5">
          {label}
        </span>
      </div>

      {/* Right Angled SVG Wing */}
      <svg
        viewBox="0 0 44 44"
        preserveAspectRatio="none"
        className="h-full w-6 sm:w-8 shrink-0 fill-current"
        style={{ color: color }}
      >
        <path d="M0,0 C14,0 24,12 30,24 L42,44 L0,44 Z" />
      </svg>
    </div>
  );
};
