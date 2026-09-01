"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { soundFx } from "@/lib/audio";

interface TerminalArtifactProps {
  command: string;
  outputLines: string[];
  status?: string;
  duration?: string;
}

export const TerminalArtifact: React.FC<TerminalArtifactProps> = ({
  command,
  outputLines,
  status = "PASS / OPERATIONAL",
  duration = "1.2s"
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `${command}\n${outputLines.join("\n")}`;
    navigator.clipboard.writeText(textToCopy);
    soundFx.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-artifact rounded-lg overflow-hidden border border-white/15 bg-[#0a0a0d] shadow-2xl font-mono text-xs">
      {/* Terminal Header */}
      <div className="h-9 bg-[#121217] px-4 flex items-center justify-between border-b border-white/10 select-none">
        <div className="flex items-center gap-2 text-neutral-400">
          <Terminal className="w-3.5 h-3.5" />
          <span className="text-[11px] tracking-wider text-neutral-300">
            TEST SUITE & RUNTIME VERIFICATION
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold tracking-wider">
            {status}
          </span>
          <button
            onClick={handleCopy}
            className="text-neutral-400 hover:text-white transition-colors"
            title="Copy command and logs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-6 space-y-2 bg-[#09090c] overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-neutral-300">
        <div className="flex items-center gap-2 text-blue-400 font-semibold">
          <span className="text-emerald-400">user@archival-node:~$</span>
          <span>{command}</span>
        </div>

        <div className="pt-2 space-y-1 text-neutral-400 border-t border-white/5 font-light">
          {outputLines.map((line, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${
                line.includes("✓") || line.includes("PASS")
                  ? "text-emerald-400/90 font-medium"
                  : line.includes("STATUS")
                  ? "text-white font-semibold pt-1"
                  : "text-neutral-400"
              }`}
            >
              <span>{line}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 flex items-center justify-between text-[10px] text-neutral-500 border-t border-white/10">
          <span>BENCHMARK DURATION: {duration}</span>
          <span>DETERMINISTIC VERIFICATION COMPLETE</span>
        </div>
      </div>
    </div>
  );
};
