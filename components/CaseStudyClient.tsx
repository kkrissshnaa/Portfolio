"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/projectsData";
import { Header } from "@/components/Header";
import { BlueprintGrid } from "@/components/BlueprintGrid";
import { FolderTag } from "@/components/FolderTag";
import { WindRose } from "@/components/WindRose";
import { PopupViewer } from "@/components/PopupViewer";
import { GithubIcon } from "@/components/Icons";
import { soundFx } from "@/lib/audio";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Cpu,
  Code2,
  CheckCircle2,
  AlertCircle,
  Layers,
  Copy,
  Check,
  Maximize2
} from "lucide-react";

interface CaseStudyClientProps {
  project: Project;
  projectIndex: number;
  prevProject: Project;
  nextProject: Project;
}

export const CaseStudyClient: React.FC<CaseStudyClientProps> = ({
  project,
  projectIndex,
  prevProject,
  nextProject
}) => {
  const [activeTab, setActiveTab] = useState<"architecture" | "code" | "highlights" | "challenges">("architecture");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [gridVisible, setGridVisible] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    soundFx.playClick();
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleTabChange = (tab: "architecture" | "code" | "highlights" | "challenges") => {
    soundFx.playHover();
    setActiveTab(tab);
  };

  return (
    <main className="min-h-screen bg-[#0c0c0e] text-[#FDFAF7] selection:bg-blue-600 selection:text-white">
      <Header gridVisible={gridVisible} onToggleGrid={() => setGridVisible(!gridVisible)} />
      <BlueprintGrid visible={gridVisible} />

      {/* Case Header Folder Banner */}
      <div
        className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500"
        style={{
          background: `linear-gradient(180deg, ${project.bgColor}40 0%, #0c0c0e 100%)`
        }}
      >
        <div className="container-mosby relative z-10">
          {/* Back Button & Folder Tag Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/#archive-stack"
              onClick={() => soundFx.playFolderOpen()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 font-mono text-xs text-neutral-200 hover:text-white transition-all uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Archives</span>
            </Link>

            <div className="flex items-center gap-3">
              <FolderTag
                label={project.title}
                color={project.bgColor}
                textColor={project.textColor}
                isActive={true}
              />
            </div>
          </div>

          {/* Project Title & Metadata Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="inline-flex items-center gap-3 font-mono text-xs tracking-widest text-neutral-400 uppercase">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: project.bgColor }}
                ></span>
                <span>CASE STUDY NO. 0{projectIndex + 1}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase leading-none">
                {project.title}
              </h1>

              <p className="font-sans text-lg sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Quick Actions & Repository Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white text-neutral-900 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-lg"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
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
                  <span>Launch Live App</span>
                </a>
              )}

              <button
                onClick={() => {
                  soundFx.playClick();
                  setPopupOpen(true);
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-neutral-900 border border-white/15 hover:border-white/30 font-mono text-[11px] uppercase tracking-wider text-neutral-400 hover:text-white transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Technical Schematics</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col border-l-2 border-white/20 pl-4">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                  {m.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  {m.label}
                </span>
                <span className="font-sans text-xs text-neutral-500 mt-0.5">
                  {m.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area: Tabbed Technical Workbench */}
      <section className="py-12 px-4 sm:px-6 container-mosby">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/15 pb-4 mb-10 overflow-x-auto no-scrollbar font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => handleTabChange("architecture")}
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all whitespace-nowrap ${
              activeTab === "architecture"
                ? "bg-white text-neutral-950 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>01. System Architecture</span>
          </button>

          <button
            onClick={() => handleTabChange("code")}
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all whitespace-nowrap ${
              activeTab === "code"
                ? "bg-white text-neutral-950 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>02. Code Highlights</span>
          </button>

          <button
            onClick={() => handleTabChange("highlights")}
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all whitespace-nowrap ${
              activeTab === "highlights"
                ? "bg-white text-neutral-950 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>03. Core Capabilities</span>
          </button>

          <button
            onClick={() => handleTabChange("challenges")}
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all whitespace-nowrap ${
              activeTab === "challenges"
                ? "bg-white text-neutral-950 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>04. Engineering Solutions</span>
          </button>
        </div>

        {/* Tab 1: System Architecture */}
        {activeTab === "architecture" && (
          <div className="flex flex-col gap-10 animate-fadeIn">
            <div className="bg-[#141418] border border-white/10 rounded-xl p-6 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-4">
                Architecture Blueprint & Data Pipeline
              </h3>
              <p className="font-sans text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-4xl">
                {project.architecture.overview}
              </p>

              {/* Step-by-step pipeline diagram cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.architecture.diagramSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-5 rounded-lg bg-black/40 border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
                        {step.step}
                      </span>
                      <h4 className="font-serif text-lg text-white font-medium mt-2 mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                      <span>PIPELINE STAGE {idx + 1}</span>
                      <WindRose size={18} color="#60A5FA" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div className="bg-[#141418] border border-white/10 rounded-xl p-6 sm:p-10">
              <h3 className="font-serif text-2xl text-white mb-6">
                Technical Stack & Dependencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.techStack.frontend && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      Frontend / UI
                    </span>
                    <ul className="flex flex-col gap-1.5 font-mono text-sm text-neutral-200">
                      {project.techStack.frontend.map((t, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.techStack.backend && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      Backend & API
                    </span>
                    <ul className="flex flex-col gap-1.5 font-mono text-sm text-neutral-200">
                      {project.techStack.backend.map((t, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.techStack.ai_web3 && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      AI / Web3 Engine
                    </span>
                    <ul className="flex flex-col gap-1.5 font-mono text-sm text-neutral-200">
                      {project.techStack.ai_web3.map((t, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.techStack.tools && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                      Tooling & Infra
                    </span>
                    <ul className="flex flex-col gap-1.5 font-mono text-sm text-neutral-200">
                      {project.techStack.tools.map((t, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Code Highlights */}
        {activeTab === "code" && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {project.highlights
              .filter((h) => h.codeSnippet)
              .map((highlight, hIdx) => (
                <div
                  key={hIdx}
                  className="bg-[#141418] border border-white/10 rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-black/30">
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                        {highlight.title}
                      </h4>
                      <p className="font-sans text-sm text-neutral-400 font-light mt-1">
                        {highlight.description}
                      </p>
                    </div>

                    {highlight.codeSnippet && (
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-neutral-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                          {highlight.codeSnippet.filename}
                        </span>
                        <button
                          onClick={() =>
                            handleCopyCode(highlight.codeSnippet!.code, hIdx)
                          }
                          className="p-2 rounded bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                          title="Copy Code"
                        >
                          {copiedIndex === hIdx ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {highlight.codeSnippet && (
                    <div className="p-6 overflow-x-auto bg-[#0a0a0d] font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <pre>
                        <code>{highlight.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Tab 3: Core Capabilities & Highlights */}
        {activeTab === "highlights" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-xl bg-[#141418] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>FEATURE {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="font-serif text-2xl text-white font-medium mb-3">
                    {h.title}
                  </h4>
                  <p className="font-sans text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                    {h.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-neutral-500">
                  <span>PRODUCTION TESTED</span>
                  <span>ARCHIVE SPEC</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Engineering Solutions & Challenges */}
        {activeTab === "challenges" && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {project.challenges.map((c, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-xl bg-[#141418] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold">
                      CHALLENGE NO. {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-white font-medium mt-2">
                      Technical Hurdle
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-neutral-300 font-light mt-3 leading-relaxed">
                      {c.problem}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-lg bg-black/40 border border-emerald-500/20">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                      ARCHITECTED SOLUTION
                    </span>
                    <p className="font-sans text-sm sm:text-base text-neutral-200 font-light mt-2 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                    <span>STATUS: RESOLVED & VERIFIED</span>
                    <WindRose size={16} color="#34D399" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Related Folders Navigation at the Bottom */}
      <section className="py-16 border-t border-white/15 bg-black/40">
        <div className="container-mosby">
          <div className="flex items-center justify-between mb-8 font-mono text-xs uppercase tracking-wider text-neutral-400">
            <span>EXPLORE NEXT CASE FILES</span>
            <span>REPOSITORY ARCHIVE (5/5)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Previous Case */}
            <Link
              href={`/cases/${prevProject.slug}`}
              onClick={() => soundFx.playFolderOpen()}
              className="p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
              style={{ backgroundColor: `${prevProject.bgColor}25` }}
            >
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase mb-2">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>PREVIOUS CASE</span>
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {prevProject.title}
              </h4>
              <span className="font-mono text-xs text-neutral-400 uppercase mt-2">
                {prevProject.category}
              </span>
            </Link>

            {/* Next Case */}
            <Link
              href={`/cases/${nextProject.slug}`}
              onClick={() => soundFx.playFolderOpen()}
              className="p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group text-right"
              style={{ backgroundColor: `${nextProject.bgColor}25` }}
            >
              <div className="flex items-center justify-end gap-2 font-mono text-xs text-neutral-400 uppercase mb-2">
                <span>NEXT CASE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {nextProject.title}
              </h4>
              <span className="font-mono text-xs text-neutral-400 uppercase mt-2">
                {nextProject.category}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <PopupViewer
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        title={project.title}
        category={project.category}
        color={project.bgColor}
      >
        <div className="flex flex-col gap-6">
          <div className="p-4 rounded bg-black/50 border border-white/10 font-mono text-xs text-neutral-300">
            <p className="text-white font-bold uppercase mb-2">
              EXECUTIVE SPECIFICATION: {project.title}
            </p>
            <p className="font-sans text-sm text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded bg-white/5 border border-white/10">
                <span className="font-serif text-2xl font-bold text-white">
                  {m.value}
                </span>
                <div className="font-mono text-xs uppercase text-neutral-300 mt-1">
                  {m.label}
                </div>
                <div className="font-sans text-xs text-neutral-400 mt-0.5">
                  {m.description}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded bg-white/5 border border-white/10 flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
              Source Repository
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-blue-400 hover:underline break-all"
            >
              {project.githubUrl}
            </a>
          </div>
        </div>
      </PopupViewer>
    </main>
  );
};
