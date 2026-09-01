"use client";

import React from "react";
import { Project } from "@/lib/projectsData";

interface CatalogueMetaProps {
  project: Project;
  projectIndex: number;
}

export const CatalogueMeta: React.FC<CatalogueMetaProps> = ({
  project,
  projectIndex
}) => {
  return (
    <div className="catalogue-meta py-4 border-y border-white/15 my-8 font-mono text-xs text-neutral-300">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {/* Project ID & Index */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
            01 / CATALOGUE ID
          </span>
          <span className="font-medium text-white tracking-wider">
            {project.catalogueCode}
          </span>
          <span className="text-[11px] text-neutral-400">
            FILE 0{projectIndex + 1} OF 05
          </span>
        </div>

        {/* Status & Validation */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
            02 / STATUS
          </span>
          <div className="flex items-center gap-1.5 text-white font-medium">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.bgColor }} />
            <span>{project.status}</span>
          </div>
          <span className="text-[11px] text-neutral-400">
            RELEASE YEAR: {project.year}
          </span>
        </div>

        {/* Engineering Role */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
            03 / ROLE
          </span>
          <span className="font-medium text-white">
            {project.role}
          </span>
          <span className="text-[11px] text-neutral-400 truncate">
            {project.categoryShort}
          </span>
        </div>

        {/* Domain Coordinates */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
            04 / COORDINATES
          </span>
          <span className="font-medium text-white font-mono">
            28.6139° N / 77.2090° E
          </span>
          <span className="text-[11px] text-neutral-400">
            VERIFIED LOCAL REPO
          </span>
        </div>
      </div>
    </div>
  );
};
