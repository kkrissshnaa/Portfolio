"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FolderStack } from "@/components/FolderStack";
import { BlueprintGrid } from "@/components/BlueprintGrid";

export default function Home() {
  const [gridVisible, setGridVisible] = useState(false);

  return (
    <div className="__app">
      {/* Blueprint Grid Overlay */}
      <BlueprintGrid visible={gridVisible} />

      {/* Exact Mosby Header */}
      <Header
        gridVisible={gridVisible}
        onToggleGrid={() => setGridVisible(!gridVisible)}
      />

      {/* Main Home Page Content */}
      <main className="page-home __page">
        {/* Section Hero */}
        <HeroSection />

        {/* 3D Stack */}
        <FolderStack />
      </main>
    </div>
  );
}