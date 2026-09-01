"use client";

import React from "react";
import { Project } from "@/lib/projectsData";
import { ProjectDossier } from "@/components/dossier/ProjectDossier";

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
  return (
    <ProjectDossier
      project={project}
      projectIndex={projectIndex}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
};
