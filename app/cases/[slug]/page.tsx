import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projectsData";
import { CaseStudyClient } from "@/components/CaseStudyClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Krishna's Files",
    };
  }

  return {
    title: `${project.title} — Krishna's Files Archive`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Engineering Archive`,
      description: project.summary,
      url: `https://github.com/kkrissshnaa/${project.title}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <CaseStudyClient
      project={project}
      projectIndex={projectIndex}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
