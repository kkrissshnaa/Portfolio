"use client";

import React from "react";
import { ArrowRight, Layers, Cpu, ShieldCheck, Database } from "lucide-react";

interface TechnicalSheetStep {
  number: string;
  label: string;
  detail: string;
  protocol?: string;
}

interface TechnicalSheetProps {
  sheetNumber: string;
  sheetTitle: string;
  coordinates: string;
  overview: string;
  steps: TechnicalSheetStep[];
  architectureNotes?: string;
  accentColor?: string;
}

export const TechnicalSheet: React.FC<TechnicalSheetProps> = ({
  sheetNumber,
  sheetTitle,
  coordinates,
  overview,
  steps,
  architectureNotes,
  accentColor = "#1E4BD7"
}) => {
  return (
    <div className="technical-sheet rounded-lg border border-white/20 bg-[#121217] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Corner Technical Registration Crosshairs */}
      <div className="absolute top-3 left-3 text-neutral-600 font-mono text-[10px] select-none">
        ┌ + ┐
      </div>
      <div className="absolute top-3 right-3 text-neutral-600 font-mono text-[10px] select-none">
        ┌ + ┐
      </div>

      {/* Sheet Header */}
      <div className="border-b border-white/15 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-xs text-neutral-400 mb-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
            <span className="font-semibold text-white tracking-widest">{sheetNumber}</span>
            <span>•</span>
            <span className="text-[11px] text-neutral-500">{coordinates}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal uppercase tracking-tight">
            {sheetTitle}
          </h3>
        </div>

        <div className="font-mono text-[11px] px-3 py-1 rounded bg-white/5 border border-white/10 text-neutral-300 w-fit">
          SCHEMATIC REV. 2.4
        </div>
      </div>

      {/* Architecture Overview Paragraph */}
      <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-3xl">
        {overview}
      </p>

      {/* Topological Flow Diagram (Section 26) */}
      <div className="bg-[#0b0b0e] rounded-lg p-6 border border-white/10 mb-8">
        <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider block mb-6 font-semibold">
          SYSTEM TOPOLOGY & DATA FLOW PIPELINE
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-4 rounded bg-[#15151c] border border-white/10 flex flex-col justify-between relative group hover:border-white/25 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                    {step.number}
                  </span>
                  {step.protocol && (
                    <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-wider">
                      {step.protocol}
                    </span>
                  )}
                </div>

                <h4 className="font-mono text-xs text-white font-semibold uppercase tracking-wider mb-2">
                  {step.label}
                </h4>

                <p className="font-sans text-neutral-400 text-xs leading-relaxed font-light">
                  {step.detail}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-500">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Notes & Technical Decision Sheet Footer */}
      {architectureNotes && (
        <div className="p-4 rounded bg-white/[0.03] border-l-2 border-blue-500 flex items-start gap-3">
          <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div className="font-mono text-xs text-neutral-300 leading-relaxed">
            <span className="text-white font-semibold uppercase tracking-wider block mb-1">
              ARCHITECTURAL TRADEOFF NOTE:
            </span>
            <span>{architectureNotes}</span>
          </div>
        </div>
      )}

      {/* Sheet Footer Crosshairs */}
      <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-500 select-none">
        <span>ARCHIVE REF: SHT-SPEC-2026</span>
        <span>FORM FOLLOWS FUNCTION</span>
        <span>└ + ┘</span>
      </div>
    </div>
  );
};
