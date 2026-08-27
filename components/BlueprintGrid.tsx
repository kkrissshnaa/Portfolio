"use client";

import React from "react";

interface BlueprintGridProps {
  visible: boolean;
}

export const BlueprintGrid: React.FC<BlueprintGridProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="blueprint-grid-overlay animate-fadeIn">
      <div className="container-mosby h-full">
        <div className="blueprint-grid-columns">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="blueprint-grid-column flex flex-col justify-between py-6 px-1">
              <span className="font-mono text-[10px] text-blue-400/40 select-none">
                COL-{String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] text-blue-400/40 select-none">
                {(i + 1) * 8.33}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
