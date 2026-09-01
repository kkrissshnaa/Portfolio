"use client";

import React, { useState, useEffect, useCallback } from "react";
import { PROJECTS, Project } from "@/lib/projectsData";
import { ArchiveFolder } from "@/components/archive/ArchiveFolder";
import { soundFx } from "@/lib/audio";
import { WindRose } from "@/components/WindRose";

export const FolderStack: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(PROJECTS.length - 1); // Top folder active by default

  const handleHover = useCallback((idx: number) => {
    if (hoveredIndex !== idx) {
      soundFx.playHover();
      setHoveredIndex(idx);
    }
  }, [hoveredIndex]);

  // Keyboard navigation through folders (Section 45)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHoveredIndex((prev) => {
          const next = prev > 0 ? prev - 1 : PROJECTS.length - 1;
          soundFx.playHover();
          return next;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHoveredIndex((prev) => {
          const next = prev < PROJECTS.length - 1 ? prev + 1 : 0;
          soundFx.playHover();
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const totalFolders = PROJECTS.length;

  return (
    <div className="page-home__stack container-mosby pb-20" id="archive-stack">
      {/* Keyboard Hint */}
      <div className="flex justify-between items-center mb-6 font-mono text-[11px] text-neutral-500 uppercase tracking-widest px-2">
        <span>ARCHIVE CABINET // {totalFolders} FILES INDEXED</span>
        <span className="hidden sm:inline-block text-neutral-400">
          [↑ / ↓] NAVIGATE · [ENTER] PULL FILE FORWARD
        </span>
      </div>

      <div
        className="stack"
        style={
          {
            "--v-groups-count": totalFolders
          } as React.CSSProperties
        }
      >
        {PROJECTS.map((project, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <ArchiveFolder
              key={project.id}
              project={project}
              folderIndex={idx}
              totalFolders={totalFolders}
              isHovered={isHovered}
              onHover={() => handleHover(idx)}
              onLeave={() => {}}
            />
          );
        })}
      </div>

      {/* Archival Scale & Footnotes Bar */}
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="h-1.5 w-6 bg-white border border-black/40" />
            <div className="h-1.5 w-6 bg-neutral-700 border border-white/40" />
            <div className="h-1.5 w-6 bg-white border border-black/40" />
            <div className="h-1.5 w-6 bg-neutral-700 border border-white/40" />
          </div>
          <span>SCALE 1:1</span>
        </div>

        <div className="flex items-center gap-2">
          <WindRose size={28} color="#9E9EA6" />
          <span>NEW DELHI ARCHIVE HUB</span>
        </div>

        <div className="flex items-center gap-4">
          <span>© 2026 KRISHNA BHARDWAJ</span>
          <a
            href="https://github.com/kkrissshnaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
          >
            @kkrissshnaa
          </a>
        </div>
      </div>
    </div>
  );
};
