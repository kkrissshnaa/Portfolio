"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BlueprintGrid } from "@/components/BlueprintGrid";
import { WindRose } from "@/components/WindRose";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { ABOUT_DATA, PROJECTS } from "@/lib/projectsData";
import { soundFx } from "@/lib/audio";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  CheckCircle,
  Cpu,
  Compass,
  FileText
} from "lucide-react";

export default function AboutPage() {
  const [gridVisible, setGridVisible] = useState(false);

  return (
    <main className="about-page surface-archival min-h-screen text-[#FDFAF7] selection:bg-blue-600 selection:text-white relative">
      <Header gridVisible={gridVisible} onToggleGrid={() => setGridVisible((prev) => !prev)} />
      <BlueprintGrid visible={gridVisible} />

      {/* Hero Header & Identity Document Header (Section 31) */}
      <section className="pt-28 pb-16 px-4 sm:px-6 container-mosby border-b border-white/10">
        <div className="flex flex-col gap-6 max-w-5xl">
          <Link
            href="/"
            onClick={() => soundFx.playFolderOpen()}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 font-mono text-xs text-neutral-300 hover:text-white transition-all uppercase tracking-wider w-fit group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>← RETURN TO ARCHIVE CABINET</span>
          </Link>

          <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>IDENTITY DOCUMENT // ARCHIVAL DOSSIER KB-2026</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-white uppercase leading-none tracking-tight">
            Krishna Bhardwaj
          </h1>

          <p className="font-sans text-lg sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl">
            {ABOUT_DATA.title} operating from {ABOUT_DATA.location} (
            <span className="font-mono text-base text-blue-400">
              {ABOUT_DATA.coordinates}
            </span>
            ).
          </p>
        </div>
      </section>

      {/* SECTION 31: IDENTITY SPECIFICATION SHEET */}
      <section className="py-12 px-4 sm:px-6 container-mosby border-b border-white/10">
        <div className="rounded-xl bg-[#111116] border border-white/15 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="border-b border-white/15 pb-4 mb-6 flex items-center justify-between font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-white font-semibold uppercase tracking-wider">
                CURATOR SPECIFICATION MANIFEST
              </span>
            </div>
            <span>DOC ID: KB-ENG-089</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                FULL NAME
              </span>
              <span className="text-white font-semibold text-sm">KRISHNA BHARDWAJ</span>
              <span className="text-[11px] text-neutral-400 block">ALIAS: @kkrissshnaa</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                PRIMARY DISCIPLINE
              </span>
              <span className="text-white font-semibold text-sm">FULL-STACK SYSTEMS</span>
              <span className="text-[11px] text-neutral-400 block">DISTRIBUTED ENGINES</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                CURRENT FOCUS
              </span>
              <span className="text-emerald-400 font-semibold text-sm">MULTIMODAL AI & REALTIME</span>
              <span className="text-[11px] text-neutral-400 block">SOLANA & WEBSOCKETS</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                ARCHIVE AVAILABILITY
              </span>
              <span className="text-blue-400 font-semibold text-sm">AVAILABLE FOR ROLES</span>
              <span className="text-[11px] text-neutral-400 block">GLOBAL REMOTE / RELOC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Biography & Philosophy Grid */}
      <section className="py-16 px-4 sm:px-6 container-mosby border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Biography */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold mb-3 block">
                01 // BIOGRAPHICAL CONTEXT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-6">
                Code as Architectural Craftsmanship
              </h2>
              <p className="font-sans text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-6">
                {ABOUT_DATA.bio}
              </p>
              <p className="font-sans text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                Whether orchestrating multi-model multimodal generative AI workflows, writing high-throughput WebSocket broadcast pipelines, or deploying decentralized market liquidity on Solana, every project in this archive reflects a commitment to structural elegance, sub-millisecond responsiveness, and thoughtful user interfaces.
              </p>
            </div>

            {/* Scale & Coordinates Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-500">
              <span>LAT: 28.6139° N</span>
              <WindRose size={32} color="#60A5FA" />
              <span>LON: 77.2090° E</span>
            </div>
          </div>

          {/* Right Column: Engineering Philosophies */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold block">
              02 // GUIDING PRINCIPLES & MANIFEST
            </span>

            {ABOUT_DATA.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121217] border border-white/10 flex flex-col gap-2 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-neutral-500 font-semibold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skill Matrix */}
      <section className="py-16 px-4 sm:px-6 container-mosby border-b border-white/10">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-semibold block mb-2">
              03 // TECHNICAL CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Architecture & Stack Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DATA.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121217] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-400 pb-3 mb-4 border-b border-white/10 font-semibold">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded bg-black/50 border border-white/10 font-mono text-xs text-neutral-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                  <span>PRODUCTION VERIFIED</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repository Archive Table */}
      <section className="py-16 px-4 sm:px-6 container-mosby border-b border-white/10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-semibold block mb-2">
                04 // COMPLETE ARCHIVE INDEX
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Audited Project Files
              </h2>
            </div>
            <a
              href="https://github.com/kkrissshnaa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-neutral-300 hover:text-white uppercase tracking-wider"
            >
              <span>View GitHub @kkrissshnaa</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-neutral-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Index</th>
                  <th className="py-3 px-4">Project File</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Year</th>
                  <th className="py-3 px-4 text-right">Dossier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {PROJECTS.map((project, idx) => (
                  <tr
                    key={project.id}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="py-4 px-4 text-neutral-500">0{idx + 1}</td>
                    <td className="py-4 px-4">
                      <Link
                        href={`/cases/${project.slug}`}
                        onClick={() => soundFx.playFolderOpen()}
                        className="font-serif text-base text-white group-hover:text-blue-400 transition-colors block"
                      >
                        {project.title}
                      </Link>
                      <span className="font-sans text-xs text-neutral-400 line-clamp-1">
                        {project.tagline}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-neutral-300">
                      {project.category}
                    </td>
                    <td className="py-4 px-4 text-neutral-400">
                      {project.year}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="inline-flex items-center gap-3">
                        <Link
                          href={`/cases/${project.slug}`}
                          onClick={() => soundFx.playFolderOpen()}
                          className="text-neutral-300 hover:text-white underline underline-offset-2"
                        >
                          Open Dossier
                        </Link>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundFx.playClick()}
                          className="text-neutral-400 hover:text-white"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact & Socials Footer */}
      <section className="py-20 px-4 sm:px-6 container-mosby">
        <div className="p-8 sm:p-12 md:p-16 rounded-2xl bg-gradient-to-b from-[#141418] to-black border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold">
              COMMUNICATION CHANNELS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal uppercase">
              Initiate Contact
            </h2>
            <p className="font-sans text-neutral-400 text-sm sm:text-base font-light max-w-md">
              Available for ambitious full-stack systems engineering, high-performance web applications, and architectural advisory.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {ABOUT_DATA.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 font-mono text-xs text-neutral-200 hover:text-white transition-all uppercase tracking-wider"
              >
                {social.name === "GitHub" && <GithubIcon className="w-4 h-4" />}
                {social.name === "Email" && <Mail className="w-4 h-4" />}
                {social.name === "LinkedIn" && <LinkedinIcon className="w-4 h-4" />}
                {social.name === "X / Twitter" && <TwitterIcon className="w-4 h-4" />}
                <span>{social.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
