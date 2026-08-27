"use client";

import React, { useEffect } from "react";
import { X, Code, Cpu, ExternalLink, Sparkles } from "lucide-react";
import { soundFx } from "@/lib/audio";

interface PopupViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  color: string;
  children: React.ReactNode;
}

export const PopupViewer: React.FC<PopupViewerProps> = ({
  isOpen,
  onClose,
  title,
  category,
  color,
  children
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundFx.playClick();
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#141418] border border-white/20 rounded-xl shadow-2xl overflow-hidden animate-scaleUp">
        {/* Modal Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-white/10"
          style={{ borderTop: `4px solid ${color}` }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-neutral-100 font-medium">
                {title}
              </h4>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                {category}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-black/40 flex items-center justify-between font-mono text-[11px] text-neutral-400 uppercase">
          <span>ARCHIVE INSPECTOR // ESC TO CLOSE</span>
          <span>KRISHNA&apos;S FILES</span>
        </div>
      </div>
    </div>
  );
};
