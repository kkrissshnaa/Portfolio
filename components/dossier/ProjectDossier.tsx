"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/projectsData";
import { Header } from "@/components/Header";
import { BlueprintGrid } from "@/components/BlueprintGrid";
import { FolderTab } from "@/components/archive/FolderTab";
import { CatalogueMeta } from "@/components/dossier/CatalogueMeta";
import { TechnicalSheet } from "@/components/dossier/TechnicalSheet";
import { BrowserArtifact } from "@/components/artifacts/BrowserArtifact";
import { TerminalArtifact } from "@/components/artifacts/TerminalArtifact";
import { DraggableArtifact } from "@/components/artifacts/DraggableArtifact";
import { soundFx } from "@/lib/audio";
import { motionTokens, documentRevealVariants } from "@/motion/tokens";
import { GithubIcon } from "@/components/Icons";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Maximize2
} from "lucide-react";

interface ProjectDossierProps {
  project: Project;
  projectIndex: number;
  prevProject: Project;
  nextProject: Project;
}

export const ProjectDossier: React.FC<ProjectDossierProps> = ({
  project,
  projectIndex,
  prevProject,
  nextProject
}) => {
  const [gridVisible, setGridVisible] = useState(false);

  return (
    <div className="project-dossier surface-archival min-h-screen text-[#FDFAF7] selection:bg-blue-600 selection:text-white relative">
      <BlueprintGrid visible={gridVisible} />
      <Header gridVisible={gridVisible} onToggleGrid={() => setGridVisible((prev) => !prev)} />

      {/* Top Dossier Pull-Forward Banner (Section 4, Section 14) */}
      <div
        className="pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden border-b border-white/15"
        style={{
          background: `linear-gradient(180deg, ${project.bgColor}30 0%, #0e0e12 100%)`
        }}
      >
        <div className="container-mosby relative z-10">
          {/* Navigation Bar: [← ARCHIVE] and [01 / 05] per Section 33 */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/#archive-stack"
              onClick={() => soundFx.playFolderOpen()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 font-mono text-xs text-neutral-300 hover:text-white transition-all uppercase tracking-wider group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>← RETURN TO ARCHIVE</span>
            </Link>

            <div className="flex items-center gap-3">
              <FolderTab
                label={project.title}
                index={`0${projectIndex + 1}`}
                color={project.bgColor}
                textColor={project.textColor}
                isActive={true}
              />
            </div>
          </div>

          {/* 02 — TITLE & HERO (Section 24) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={documentRevealVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-4"
          >
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-neutral-400 uppercase">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: project.bgColor }}
                />
                <span>DOSSIER // {project.catalogueCode}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white uppercase leading-none">
                {project.title}
              </h1>

              <p className="font-serif italic text-lg sm:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
                &ldquo;{project.thesis}&rdquo;
              </p>
            </div>

            {/* Actions & Repo Links (Section 11) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white text-neutral-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-lg"
              >
                <GithubIcon className="w-4 h-4" />
                <span>INSPECT REPOSITORY</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs uppercase tracking-wider text-white transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LAUNCH LIVE SYSTEM</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* 01 — INDEX METADATA (Section 23) */}
          <CatalogueMeta project={project} projectIndex={projectIndex} />

          {/* Quantitative Outcome Metrics (Section 10) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col border-l-2 border-white/20 pl-4">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                  {m.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  {m.label}
                </span>
                <span className="font-sans text-xs text-neutral-500 mt-0.5 font-light">
                  {m.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Dossier Content Stream */}
      <section className="py-16 px-4 sm:px-6 container-mosby space-y-16">
        {/* 03 — HERO BROWSER ARTIFACT */}
        <div>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-3 font-semibold">
            03 // INTERACTIVE DEPLOYMENT ARTIFACT
          </span>
          <BrowserArtifact
            url={project.browserArtifact.url}
            title={project.browserArtifact.title}
            badge={project.browserArtifact.badge}
            accentColor={project.bgColor}
            liveUrl={project.liveUrl}
          />
        </div>

        {/* 04 & 05 — OVERVIEW & ROLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block font-semibold">
              04 // THESIS & OVERVIEW
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-snug">
              Investigating the Problem Space
            </h2>
            <p className="font-sans text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
              {project.summary}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6 bg-[#131318] p-6 sm:p-8 rounded-lg border border-white/10">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block font-semibold">
              05 // CONTRIBUTION & ROLE
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              {project.role}
            </h3>
            <p className="font-sans text-neutral-300 text-sm leading-relaxed font-light">
              {project.contribution}
            </p>
            <div className="pt-4 border-t border-white/10 font-mono text-xs text-neutral-400">
              AUDITED TIMEFRAME: {project.year}
            </div>
          </div>
        </div>

        {/* 06 — CATALOGUE TECHNICAL STACK (Section 25) */}
        <div className="border-t border-white/10 pt-12">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4 font-semibold">
            06 // CATALOGUE STACK INDEX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-8">
            Modular Technology Infrastructure
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-xs">
            {/* Frontend */}
            {project.techStack.frontend && (
              <div className="space-y-3 p-4 rounded bg-[#101014] border border-white/10">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-bold border-b border-white/10 pb-2">
                  FRONTEND LAYER
                </span>
                <ul className="space-y-2">
                  {project.techStack.frontend.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-200">
                      <span className="text-blue-400 font-bold">0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Backend */}
            {project.techStack.backend && (
              <div className="space-y-3 p-4 rounded bg-[#101014] border border-white/10">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-bold border-b border-white/10 pb-2">
                  BACKEND & NETWORKING
                </span>
                <ul className="space-y-2">
                  {project.techStack.backend.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-200">
                      <span className="text-emerald-400 font-bold">0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* AI / Web3 */}
            {project.techStack.ai_web3 && (
              <div className="space-y-3 p-4 rounded bg-[#101014] border border-white/10">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-bold border-b border-white/10 pb-2">
                  DOMAIN PROTOCOLS
                </span>
                <ul className="space-y-2">
                  {project.techStack.ai_web3.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-200">
                      <span className="text-purple-400 font-bold">0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools & DevOps */}
            {project.techStack.tools && (
              <div className="space-y-3 p-4 rounded bg-[#101014] border border-white/10">
                <span className="text-[11px] text-neutral-500 uppercase tracking-wider block font-bold border-b border-white/10 pb-2">
                  TOOLING & PIPELINES
                </span>
                <ul className="space-y-2">
                  {project.techStack.tools.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-200">
                      <span className="text-amber-400 font-bold">0{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 07 — ARCHITECTURE TECHNICAL SHEET (Section 26 & 27) */}
        <div className="border-t border-white/10 pt-12">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4 font-semibold">
            07 // SYSTEM ARCHITECTURE & TOPOLOGY
          </span>
          <TechnicalSheet
            sheetNumber={project.technicalSheet.sheetNumber}
            sheetTitle={project.technicalSheet.sheetTitle}
            coordinates={project.technicalSheet.coordinates}
            overview={project.architecture.overview}
            steps={project.technicalSheet.steps}
            architectureNotes={project.technicalSheet.architectureNotes}
            accentColor={project.bgColor}
          />
        </div>

        {/* 08 — PROCESS & EXPERIMENTATION */}
        <div className="border-t border-white/10 pt-12">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4 font-semibold">
            08 // PROCESS & ITERATION LOG
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-8">
            How the System Evolved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.process.map((step) => (
              <div
                key={step.phase}
                className="p-6 rounded-lg bg-[#111115] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-semibold block mb-3">
                    {step.phase}
                  </span>
                  <h4 className="font-serif text-xl text-white font-normal mb-3">
                    {step.title}
                  </h4>
                  <p className="font-sans text-neutral-300 text-sm leading-relaxed font-light">
                    {step.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 09 — TECHNICAL RUNTIME ARTIFACT */}
        <div className="border-t border-white/10 pt-12">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4 font-semibold">
            09 // DETERMINISTIC VERIFICATION SUITE
          </span>
          <TerminalArtifact
            command={project.terminalArtifact.command}
            outputLines={project.terminalArtifact.outputLines}
            status={project.terminalArtifact.status}
            duration={project.terminalArtifact.duration}
          />
        </div>

        {/* LOOSE ARCHIVAL ARTIFACTS & RESEARCH SHEETS (Section 18 & 19) */}
        {project.looseArtifacts && project.looseArtifacts.length > 0 && (
          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-1 font-semibold">
                  ARCHIVAL ATTACHMENTS // DIRECT MANIPULATION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  Classified Research Sheets & Clipped Notes
                </h3>
              </div>
              <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                [DRAG & INSPECT]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {project.looseArtifacts.map((art) => (
                <DraggableArtifact
                  key={art.id}
                  id={art.id}
                  type={art.type}
                  title={art.title}
                  content={art.content}
                  rotation={art.rotation}
                  paperclipColor={art.paperclipColor}
                  accentColor={project.bgColor}
                />
              ))}
            </div>
          </div>
        )}

        {/* 10 — HIGHLIGHTS & KEY TRADEOFFS */}
        <div className="border-t border-white/10 pt-12">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-4 font-semibold">
            10 // CODE ARTIFACTS & RESOLVED CHALLENGES
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Highlights */}
            <div className="space-y-6">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-[#111116] border border-white/10 space-y-3"
                >
                  <div className="flex items-center gap-2 text-white font-serif text-xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>{h.title}</span>
                  </div>
                  <p className="font-sans text-neutral-300 text-sm font-light leading-relaxed">
                    {h.description}
                  </p>
                  {h.codeSnippet && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="font-mono text-[10px] text-neutral-400 mb-2">
                        {h.codeSnippet.filename}
                      </div>
                      <pre className="p-3 rounded bg-black/60 font-mono text-[11px] text-blue-300 overflow-x-auto">
                        <code>{h.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Challenges */}
            <div className="space-y-6">
              {project.challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-[#111116] border border-white/10 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[11px] text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                        CHALLENGE // 0{i + 1}
                      </span>
                      <p className="font-sans text-neutral-300 text-sm font-light leading-relaxed">
                        {c.problem}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded bg-white/[0.02] border-l-2 border-emerald-500 font-sans text-neutral-200 text-sm leading-relaxed font-light">
                    <span className="font-mono text-[11px] text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                      ENGINEERING RESOLUTION:
                    </span>
                    {c.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 12 — NEXT & PREVIOUS FILE CONTINUITY (Section 21, Section 33) */}
        <div className="border-t border-white/15 pt-16 pb-12 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          <Link
            href={`/cases/${prevProject.slug}`}
            onClick={() => soundFx.playFolderOpen()}
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                PREVIOUS FILE
              </span>
              <span className="font-serif text-lg text-white font-normal uppercase">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            href="/#archive-stack"
            onClick={() => soundFx.playFolderOpen()}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-neutral-200 uppercase tracking-wider hover:text-white transition-all"
          >
            CABINET INDEX [ARCHIVE]
          </Link>

          <Link
            href={`/cases/${nextProject.slug}`}
            onClick={() => soundFx.playFolderOpen()}
            className="flex items-center justify-end gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all w-full sm:w-auto text-right"
          >
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                NEXT FILE
              </span>
              <span className="font-serif text-lg text-white font-normal uppercase">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
