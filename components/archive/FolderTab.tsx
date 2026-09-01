"use client";

import React from "react";

interface FolderTabProps {
  label: string;
  index: string;
  color: string;
  textColor: string;
  isActive?: boolean;
  isPulling?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const FolderTab: React.FC<FolderTabProps> = ({
  label,
  index,
  color,
  textColor,
  isActive = false,
  isPulling = false,
  className = "",
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`folder-tab tag inline-flex items-end cursor-pointer select-none transition-all duration-300 ${
        isActive ? "is-visible is-active" : ""
      } ${className}`}
      style={
        {
          "--color": textColor,
          "--bg-color": color
        } as React.CSSProperties
      }
      data-state={isPulling ? "pulling" : isActive ? "active" : "idle"}
    >
      {/* Left Bezier Curve Shoulder */}
      <svg
        className="tag__side tag__start shrink-0"
        viewBox="0 0 62 44"
        style={{ width: "calc(var(--tag-height, 2.75rem) * 1.409)", height: "var(--tag-height, 2.75rem)" }}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Solid fill matching folder color */}
        <path
          d="M 0 44 C 28 44, 34 0, 62 0 L 62 44 Z"
          fill={color}
        />
        {/* Subtle Material Edge Highlight on upper shoulder */}
        <path
          d="M 0 44 C 28 44, 34 0, 62 0"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Center Tab Body */}
      <div
        className="tag__middle flex items-center gap-2 px-3 sm:px-4 h-[var(--tag-height,2.75rem)] border-t border-white/25 transition-colors"
        style={{
          backgroundColor: color,
          color: textColor
        }}
      >
        <span
          className={`font-mono text-[10px] sm:text-xs font-semibold tracking-wider transition-opacity ${
            isActive ? "opacity-100" : "opacity-75"
          }`}
        >
          {index}
        </span>
        <span
          className={`font-serif text-sm sm:text-base md:text-xl font-normal tracking-normal uppercase truncate max-w-[120px] sm:max-w-none whitespace-nowrap transition-opacity ${
            isActive ? "opacity-100 font-medium" : "opacity-85"
          }`}
        >
          {label}
        </span>
      </div>

      {/* Right Bezier Curve Shoulder */}
      <svg
        className="tag__side tag__end shrink-0"
        viewBox="0 0 62 44"
        style={{ width: "calc(var(--tag-height, 2.75rem) * 1.409)", height: "var(--tag-height, 2.75rem)" }}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Solid fill matching folder color */}
        <path
          d="M 0 0 C 28 0, 34 44, 62 44 L 0 44 Z"
          fill={color}
        />
        {/* Subtle Material Edge Highlight on upper shoulder */}
        <path
          d="M 0 0 C 28 0, 34 44, 62 44"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};
