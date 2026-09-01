"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Project } from "@/lib/projectsData";
import { FolderTab } from "@/components/archive/FolderTab";
import { soundFx } from "@/lib/audio";
import { motionTokens } from "@/motion/tokens";
import { ArrowUpRight } from "lucide-react";

interface ArchiveFolderProps {
  project: Project;
  folderIndex: number;
  totalFolders: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const ArchiveFolder: React.FC<ArchiveFolderProps> = ({
  project,
  folderIndex,
  totalFolders,
  isHovered,
  onHover,
  onLeave
}) => {
  const router = useRouter();
  const [folderState, setFolderState] = useState<"idle" | "hover" | "pulling">("idle");

  const offsetIdx = totalFolders - 1 - folderIndex;

  const handleSelect = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (folderState === "pulling") return;

    soundFx.playFolderOpen();
    setFolderState("pulling");

    // Section 13: FolderPullForward duration is ~600-800ms before transition
    setTimeout(() => {
      router.push(`/cases/${project.slug}`);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleSelect(e);
    }
  };

  return (
    <motion.div
      className={`archive-folder stack-group ${isHovered ? "is-unfolded" : "is-rotated"}`}
      style={
        {
          "--cover-color": project.textColor,
          "--cover-bg-color": project.bgColor,
          "--v-zindex": folderState === "pulling" ? 200 : folderIndex,
          "--v-offset-idx": offsetIdx
        } as React.CSSProperties
      }
      initial={false}
      animate={
        folderState === "pulling"
          ? {
              y: -40,
              scale: 1.02,
              rotateX: 0,
              z: 60,
              transition: {
                duration: motionTokens.duration.material,
                ease: motionTokens.ease.material
              }
            }
          : isHovered
          ? {
              y: -6,
              rotateZ: 0.3,
              transition: {
                duration: motionTokens.duration.quick,
                ease: motionTokens.ease.standard
              }
            }
          : {
              y: 0,
              rotateZ: 0,
              scale: 1,
              transition: {
                duration: motionTokens.duration.standard,
                ease: motionTokens.ease.soft
              }
            }
      }
      onMouseEnter={() => {
        if (folderState !== "pulling") {
          setFolderState("hover");
          onHover();
        }
      }}
      onMouseLeave={() => {
        if (folderState !== "pulling") {
          setFolderState("idle");
          onLeave();
        }
      }}
      data-state={folderState}
      data-folder-id={project.id}
    >
      <div className="stack-group__inner relative w-full h-full">
        {/* Physical Contact Shadow */}
        <div
          className="folder-shadow absolute inset-0 pointer-events-none rounded-t"
          style={{
            boxShadow:
              folderState === "pulling"
                ? "var(--shadow-folder-pulled)"
                : isHovered
                ? "var(--shadow-folder-lift)"
                : "var(--shadow-folder-rest)"
          }}
        />

        {/* Tab Header (Section 10: FolderTab) */}
        <div className="stack-page__header absolute bottom-full left-1 z-10 pointer-events-auto">
          <FolderTab
            label={project.title}
            index={`0${folderIndex + 1}`}
            color={project.bgColor}
            textColor={project.textColor}
            isActive={isHovered || folderState === "pulling"}
            isPulling={folderState === "pulling"}
          />
        </div>

        {/* Folder Cover / Body */}
        <button
          onClick={handleSelect}
          onKeyDown={handleKeyDown}
          aria-label={`Open project dossier: ${project.title}`}
          aria-expanded={folderState === "pulling"}
          className="stack-cover w-full h-full text-left relative overflow-hidden rounded-t border-t border-l border-r border-white/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 select-none group"
          style={{
            backgroundColor: project.bgColor,
            color: project.textColor
          }}
        >
          {/* Subtle Archival Texture & Material Highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/25 pointer-events-none" />

          {/* Folder Cover Content */}
          <div className="relative z-10 w-full h-full p-6 sm:p-10 flex flex-col justify-between">
            {/* Top Bar: Project Index & Category */}
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest opacity-85">
              <span className="px-2 py-0.5 rounded bg-black/25 backdrop-blur-sm border border-white/15">
                {project.catalogueIndex}
              </span>
              <span className="flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                <span>{project.categoryShort}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Middle: Title & Thesis */}
            <div className="max-w-2xl my-auto">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight uppercase leading-none mb-3">
                {project.title}
              </h2>
              <p className="font-mono text-xs sm:text-sm opacity-80 line-clamp-2 leading-relaxed max-w-xl">
                {project.thesis}
              </p>
            </div>

            {/* Bottom Metadata Bar */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider opacity-75">
              <span>{project.year}</span>
              <span className="hidden sm:inline-block">STATUS / {project.status}</span>
              <span>{project.role}</span>
            </div>
          </div>
        </button>
      </div>
    </motion.div>
  );
};
