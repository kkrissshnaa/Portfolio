"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface BrowserArtifactProps {
  url: string;
  title: string;
  badge?: string;
  accentColor?: string;
  liveUrl?: string;
  children?: React.ReactNode;
}

export const BrowserArtifact: React.FC<BrowserArtifactProps> = ({
  url,
  title,
  badge = "LOCAL ARTIFACT",
  accentColor = "#1E4BD7",
  liveUrl,
  children
}) => {
  return (
    <div className="browser-artifact rounded-lg overflow-hidden border border-white/15 bg-[#101014] shadow-2xl transition-all hover:border-white/25">
      {/* Minimal Browser Chrome */}
      <div className="h-10 bg-[#16161c] px-4 flex items-center justify-between border-b border-white/10 select-none">
        {/* Chrome Dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-600/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-600/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-600/70" />
        </div>

        {/* Minimal URL Bar */}
        <div className="flex items-center gap-2 px-4 py-1 rounded bg-[#0b0b0e] border border-white/10 font-mono text-[11px] text-neutral-400 tracking-wider max-w-sm truncate">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <span>https://{url}</span>
        </div>

        {/* Right Badge / Action */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
            {badge}
          </span>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              title="Open Live Deployment"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Browser Viewport Content */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-[#131318] to-[#0c0c0f] min-h-[220px] flex flex-col justify-between">
        {children ? (
          children
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-serif text-2xl text-white font-normal uppercase">
                {title}
              </span>
              <span className="font-mono text-xs text-neutral-400">
                ACTIVE DEPLOYMENT
              </span>
            </div>
            <p className="font-sans text-neutral-300 text-sm leading-relaxed max-w-xl font-light">
              Interactive artifact verified across Chrome, Safari, and mobile WebKit rendering engines.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
