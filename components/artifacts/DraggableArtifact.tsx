"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Paperclip } from "@/components/artifacts/Paperclip";
import { soundFx } from "@/lib/audio";
import { motionTokens } from "@/motion/tokens";
import { Move } from "lucide-react";

interface DraggableArtifactProps {
  id: string;
  type: "note" | "metric" | "schematic" | "spec";
  title: string;
  content: string;
  rotation?: number;
  paperclipColor?: string;
  accentColor?: string;
}

export const DraggableArtifact: React.FC<DraggableArtifactProps> = ({
  id,
  type,
  title,
  content,
  rotation = 0,
  paperclipColor = "#D1D5DB",
  accentColor = "#1E4BD7"
}) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -60, right: 60, top: -40, bottom: 40 }}
      dragElastic={0.18}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
      whileHover={{ y: -4, transition: { duration: motionTokens.duration.quick } }}
      whileDrag={{
        scale: 1.03,
        rotate: rotation + 2,
        zIndex: 100,
        boxShadow: "var(--shadow-dragged)",
        cursor: "grabbing"
      }}
      onDragStart={() => {
        soundFx.playHover();
        setIsDragging(true);
      }}
      onDragEnd={() => {
        soundFx.playClick();
        setIsDragging(false);
      }}
      initial={{ rotate: rotation }}
      className="draggable-artifact surface-document-paper p-6 rounded relative select-none cursor-grab group transition-colors"
      style={{
        boxShadow: isDragging ? "var(--shadow-dragged)" : "var(--shadow-sheet)"
      }}
      data-artifact-id={id}
    >
      {/* Paperclip Physical Attachment (Section 19) */}
      <div className="absolute -top-3 left-6 z-20 transition-transform group-hover:-translate-y-0.5">
        <Paperclip color={paperclipColor} size={28} />
      </div>

      {/* Drag Indicator Tooltip */}
      <div className="absolute top-3 right-3 text-neutral-400 group-hover:text-neutral-700 transition-colors">
        <Move className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
      </div>

      {/* Archival Sheet Content */}
      <div className="pt-2 font-mono text-[11px] text-neutral-800 space-y-2">
        <div className="flex items-center gap-2 border-b border-black/10 pb-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <span className="font-bold tracking-wider text-neutral-900 uppercase">
            {type.toUpperCase()} // {title}
          </span>
        </div>

        <p className="font-sans text-xs text-neutral-700 leading-relaxed font-normal pt-1">
          {content}
        </p>

        <div className="pt-2 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
          <span>CLASSIFIED ARCHIVAL NOTE</span>
          <span className="opacity-75">[DRAGGABLE]</span>
        </div>
      </div>
    </motion.div>
  );
};
