"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ArchiveCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only mount custom cursor for devices with mouse pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest("button") ||
          target.closest("a") ||
          target.closest(".archive-folder") ||
          target.closest(".draggable-artifact") ||
          target.getAttribute("role") === "button";
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="archive-cursor-root pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Center Reticle Dot */}
      <motion.div
        className="w-2 h-2 rounded-full bg-white fixed -top-1 -left-1 pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35
        }}
      />

      {/* Subtle Archival Focus Ring */}
      <motion.div
        className="w-7 h-7 rounded-full border border-white/40 fixed -top-3.5 -left-3.5 pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isPointer ? 1.4 : 1,
          borderColor: isPointer ? "rgba(96, 165, 250, 0.7)" : "rgba(255, 255, 255, 0.3)"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28
        }}
      />
    </div>
  );
};
