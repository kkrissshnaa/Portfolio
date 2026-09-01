"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FolderStack } from "@/components/FolderStack";
import { BlueprintGrid } from "@/components/BlueprintGrid";

export const ArchiveWorkspace: React.FC = () => {
  const [gridVisible, setGridVisible] = useState(false);

  return (
    <div className="archive-workspace surface-archival min-h-screen text-[#FDFAF7] relative selection:bg-blue-600 selection:text-white">
      {/* Blueprint Grid Overlay */}
      <BlueprintGrid visible={gridVisible} />

      {/* Archival Workspace Header */}
      <Header
        gridVisible={gridVisible}
        onToggleGrid={() => setGridVisible((prev) => !prev)}
      />

      {/* Main Home Page Surface */}
      <main className="page-home __page relative z-10 pt-16">
        {/* Section Hero */}
        <HeroSection />

        {/* 3D Archive Folder Stack */}
        <FolderStack />
      </main>
    </div>
  );
};
