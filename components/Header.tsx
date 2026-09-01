"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { soundFx } from "@/lib/audio";

interface HeaderProps {
  gridVisible?: boolean;
  onToggleGrid?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  gridVisible = false,
  onToggleGrid
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`the-header ${isHidden ? "is-hidden" : ""}`}
      data-v-a5248def
    >
      <div className="the-header__content container-mosby" data-v-a5248def>
        {/* Center Logo */}
        <div className="the-header__logo" data-v-a5248def>
          <Link
            href="/#hero"
            onClick={() => soundFx.playClick()}
            data-v-a5248def
            className="flex items-center gap-2 group text-decoration-none"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#FDFAF7] uppercase group-hover:text-blue-400 transition-colors">
              Krishna&apos;s Files
            </span>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="the-nav flex items-center gap-6 md:gap-10" data-v-a5248def data-v-ef15606b>
          {onToggleGrid && (
            <button
              onClick={() => {
                soundFx.playClick();
                onToggleGrid();
              }}
              className={`the-nav__item text-xs md:text-sm uppercase tracking-wider font-mono ${
                gridVisible ? "!opacity-100 text-blue-400" : ""
              }`}
              data-v-300b7ff9
            >
              {gridVisible ? "Grid: On" : "Grid"}
            </button>
          )}

          <Link
            href="/#archive-stack"
            onClick={() => soundFx.playClick()}
            className="the-nav__item text-xs md:text-sm uppercase tracking-wider font-mono"
          >
            Index
          </Link>

          <Link
            href="/about"
            onClick={() => soundFx.playClick()}
            className="the-nav__item text-xs md:text-sm uppercase tracking-wider font-mono"
            data-v-ef15606b
            data-v-300b7ff9
          >
            About
          </Link>
        </nav>

      </div>
    </header>
  );
};
