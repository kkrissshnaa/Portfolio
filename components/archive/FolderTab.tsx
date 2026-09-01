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
}

export const FolderTab: React.FC<FolderTabProps> = ({
  label,
  index,
  color,
  textColor,
  isActive = false,
  isPulling = false,
  className = ""
}) => {
  return (
    <div
      className={`folder-tab tag ${isActive ? "is-visible" : ""} ${className}`}
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
        className="tag__side tag__start"
        viewBox="0 0 62 44"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.1449 -2.54901e-05L-521.145 -2.66006e-06C-531.065 -2.22644e-06 -540.343 4.90374 -545.932 13.0999L-558.55 31.6066C-563.837 39.3607 -572.615 44 -582 44L62 44C52.6151 44 43.8369 39.3607 38.5499 31.6066L25.9318 13.0999C20.3434 4.90373 11.0649 -2.59237e-05 1.1449 -2.54901e-05Z"
          fill="currentColor"
        />
      </svg>

      {/* Center Tab Body */}
      <div className="tag__middle flex items-center gap-2 px-3 select-none">
        <span className="font-mono text-[11px] opacity-75 font-semibold tracking-wider">
          {index}
        </span>
        <span className="font-serif text-lg sm:text-xl font-normal tracking-normal uppercase">
          {label}
        </span>
      </div>

      {/* Right Bezier Curve Shoulder */}
      <svg
        className="tag__side tag__end"
        viewBox="0 0 62 44"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.1449 -2.54901e-05L-521.145 -2.66006e-06C-531.065 -2.22644e-06 -540.343 4.90374 -545.932 13.0999L-558.55 31.6066C-563.837 39.3607 -572.615 44 -582 44L62 44C52.6151 44 43.8369 39.3607 38.5499 31.6066L25.9318 13.0999C20.3434 4.90373 11.0649 -2.59237e-05 1.1449 -2.54901e-05Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
