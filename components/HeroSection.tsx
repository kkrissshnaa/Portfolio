"use client";

import React from "react";
import { motion } from "framer-motion";
import { motionTokens } from "@/motion/tokens";

export const HeroSection: React.FC = () => {
  return (
    <section className="section-hero container-mosby relative" id="hero">
      {/* Registration Marks in Corner */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 tracking-widest hidden md:block select-none">
        + 28.6139° N / 77.2090° E
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-neutral-600 tracking-widest hidden md:block select-none">
        SYSTEMS ARCHIVE // VOL. 2026
      </div>

      <div className="section-hero__inner">
        {/* Monogram / Classification Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTokens.duration.standard, ease: motionTokens.ease.standard }}
          className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] uppercase tracking-widest text-neutral-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>STATUS: ALL ARCHIVES MOUNTED</span>
        </motion.div>

        {/* Primary Editorial Title (Section 32) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionTokens.duration.material, ease: motionTokens.ease.reveal }}
          className="section-hero__title font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight uppercase leading-none text-white text-balance"
        >
          Private Digital Archive
        </motion.h1>

        {/* Subtitle / Thesis (Section 32) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: motionTokens.duration.standard, ease: motionTokens.ease.standard }}
          className="flex flex-col items-center gap-3 text-center max-w-2xl px-4"
        >
          <p className="font-mono text-xs sm:text-sm text-blue-400 font-medium uppercase tracking-widest">
            PROJECTS / SYSTEMS / EXPERIMENTS
          </p>
          <p className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg font-light leading-relaxed text-balance">
            A collection of things I have designed, engineered, broken, rebuilt and shipped by{" "}
            <span className="text-white font-medium">Krishna Bhardwaj</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
