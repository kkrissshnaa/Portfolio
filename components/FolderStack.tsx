"use client";

import React, { useState } from "react";
import Link from "next/link";
import { soundFx } from "@/lib/audio";
import { WindRose } from "@/components/WindRose";

interface StackGroupData {
  id: number;
  category: string;
  desc: string;
  coverBg: string;
  coverColor: string;
  pages: {
    title: string;
    slug: string;
    color: string;
    textColor: string;
  }[];
}

const STACK_GROUPS: StackGroupData[] = [
  {
    id: 0,
    category: "Generative AI & Multimodal Media",
    desc: "Bridging high-parameter visual AI models directly into streamlined mobile and edge interfaces. Designed for rapid prompt iteration, multimodal context chaining, and parallel video frame rendering without client bottlenecks.",
    coverBg: "#1E4BD7",
    coverColor: "#FDFAF7",
    pages: [
      {
        title: "GiveMore-Context",
        slug: "givemore-context",
        color: "#1E4BD7",
        textColor: "#FDFAF7"
      }
    ]
  },
  {
    id: 1,
    category: "Web3 & Decentralized Protocols",
    desc: "Decentralized prediction markets and liquidity engines built atop Solana's sub-second finality. Combines trustless smart contract settlement with ultra-responsive off-chain order books synced continuously via Supabase Realtime.",
    coverBg: "#0C7866",
    coverColor: "#FDFAF7",
    pages: [
      {
        title: "Prediction-Market",
        slug: "prediction-market",
        color: "#0C7866",
        textColor: "#FDFAF7"
      }
    ]
  },
  {
    id: 2,
    category: "Real-Time Distributed Systems",
    desc: "Ultra-reliable event publishing engines designed for high-concurrency sporting events and digital archives. Sub-millisecond WebSocket fanout, persistent event sequences in PostgreSQL, and deterministic client state machines.",
    coverBg: "#581E70",
    coverColor: "#FDFAF7",
    pages: [
      {
        title: "sportz",
        slug: "sportz",
        color: "#581E70",
        textColor: "#FDFAF7"
      },
      {
        title: "Portfolio Engine",
        slug: "portfolio",
        color: "#FFE927",
        textColor: "#000000"
      }
    ]
  },
  {
    id: 3,
    category: "Mobile Architecture & SaaS",
    desc: "Streamlined cross-platform mobile architectures designed with offline-first local SQLite caching, deterministic billing calendars, and proactive expense forecasting algorithms built with React Native and Expo.",
    coverBg: "#D71E1E",
    coverColor: "#FDFAF7",
    pages: [
      {
        title: "Recurly",
        slug: "recurly",
        color: "#D71E1E",
        textColor: "#FDFAF7"
      }
    ]
  }
];

export const FolderStack: React.FC = () => {
  const [hoveredGroupId, setHoveredGroupId] = useState<number>(3); // Top group active by default
  const [hoveredPageIndex, setHoveredPageIndex] = useState<number>(0);

  const handleGroupHover = (gIdx: number, pIdx = 0) => {
    if (hoveredGroupId !== gIdx || hoveredPageIndex !== pIdx) {
      soundFx.playHover();
      setHoveredGroupId(gIdx);
      setHoveredPageIndex(pIdx);
    }
  };

  const totalGroups = STACK_GROUPS.length;

  return (
    <div className="page-home__stack container-mosby" data-v-db042a42>
      <div
        className="stack"
        style={
          {
            "--v-groups-count": totalGroups
          } as React.CSSProperties
        }
        data-v-db042a42
      >
        {STACK_GROUPS.map((group, gIdx) => {
          const isUnfolded = hoveredGroupId === gIdx;
          const isRotated = hoveredGroupId !== gIdx;
          const offsetIdx = totalGroups - 1 - gIdx;
          const isTopCover = gIdx === totalGroups - 1;

          return (
            <div
              key={group.id}
              className={`stack-group ${isUnfolded ? "is-unfolded" : ""} ${
                isRotated ? "is-rotated" : ""
              }`}
              data-v-db042a42
              data-v-a72804d3
              style={
                {
                  "--cover-color": group.coverColor,
                  "--cover-bg-color": group.coverBg,
                  "--v-zindex": gIdx,
                  "--v-offset-idx": offsetIdx
                } as React.CSSProperties
              }
              onMouseEnter={() => handleGroupHover(gIdx, 0)}
            >
              <div className="stack-group__inner" data-v-a72804d3>
                {/* Stack Cover */}
                <div
                  className={`stack-cover ${isUnfolded ? "is-unfolded" : ""} ${
                    isRotated ? "is-rotated" : ""
                  }`}
                  data-v-a72804d3
                  data-v-6315b3c1
                >
                  <div className="stack-cover__desc caption" data-v-6315b3c1>
                    <span className="rich-text" data-v-6315b3c1>
                      <p>{group.desc}</p>
                    </span>
                  </div>

                  <div className="stack-cover__category caption" data-v-6315b3c1>
                    <span data-v-6315b3c1>{group.category}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      data-v-6315b3c1
                    >
                      <path
                        d="M2.5 3.75L6.17542 8.25L9.5 3.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Mosby Files Iconic Architectural Footer on the unfolded cover */}
                  {isTopCover && (
                    <div className="the-footer" data-v-6315b3c1 data-v-f982321c>
                      {/* Wind Rose Compasses */}
                      <div className="the-footer__wind-roses" data-v-f982321c>
                        <div className="wind-rose --hide-on-mobile" data-v-f982321c>
                          <WindRose size={48} color={group.coverColor} />
                        </div>
                        <div className="wind-rose" data-v-f982321c>
                          <WindRose size={48} color={group.coverColor} />
                        </div>
                        <div className="wind-rose --hide-on-mobile" data-v-f982321c>
                          <WindRose size={48} color={group.coverColor} />
                        </div>
                        <div className="wind-rose" data-v-f982321c>
                          <WindRose size={48} color={group.coverColor} />
                        </div>
                        <div className="wind-rose --hide-on-mobile" data-v-f982321c>
                          <WindRose size={48} color={group.coverColor} />
                        </div>
                      </div>

                      {/* Scale, Year, Signature */}
                      <div className="the-footer__bottom" data-v-f982321c>
                        {/* Architectural Scale Ruler */}
                        <div className="the-footer__scale flex items-center" data-v-f982321c>
                          <div className="h-2 w-7 bg-white border border-black/40"></div>
                          <div className="h-2 w-7 bg-black/40 border border-white/40"></div>
                          <div className="h-2 w-7 bg-white border border-black/40"></div>
                          <div className="h-2 w-7 bg-black/40 border border-white/40"></div>
                        </div>

                        <span className="the-footer__year" data-v-f982321c>
                          © 2026
                        </span>

                        <a
                          className="the-footer__signature"
                          href="https://github.com/kkrissshnaa"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-v-f982321c
                        >
                          <span className="rich-text" data-v-f982321c>
                            <p>
                              Crafted by <u>Krishna Bhardwaj</u>
                            </p>
                          </span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stack Pages inside this Group */}
                {group.pages.map((page, pIdx) => {
                  const isPageActive = isUnfolded && hoveredPageIndex === pIdx;

                  return (
                    <Link
                      key={page.slug}
                      href={`/cases/${page.slug}`}
                      className={`stack-page ${isRotated ? "is-rotated" : ""}`}
                      data-v-a72804d3
                      data-v-4f4c0f3b
                      style={
                        {
                          "--color": page.textColor,
                          "--bg-color": page.color,
                          "--v-page-zindex": -pIdx
                        } as React.CSSProperties
                      }
                      onMouseEnter={() => handleGroupHover(gIdx, pIdx)}
                      onClick={() => soundFx.playFolderOpen()}
                    >
                      <div className="stack-page__bg" data-v-4f4c0f3b></div>

                      {/* Header with authentic Mosby Bezier Tags */}
                      <div className="stack-page__header" data-v-4f4c0f3b>
                        {group.pages.map((tagPage, tIdx) => {
                          const isTagVisible = tIdx === pIdx;

                          if (isTagVisible) {
                            return (
                              <div
                                key={tagPage.slug}
                                className="tag is-visible"
                                aria-hidden="false"
                                data-v-4f4c0f3b
                                data-v-62db4139
                                style={
                                  {
                                    "--color": tagPage.textColor,
                                    "--bg-color": tagPage.color
                                  } as React.CSSProperties
                                }
                              >
                                <svg
                                  className="tag__side tag__start"
                                  viewBox="0 0 62 44"
                                  preserveAspectRatio="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-v-62db4139
                                  data-v-94de6103
                                >
                                  <path
                                    d="M1.1449 -2.54901e-05L-521.145 -2.66006e-06C-531.065 -2.22644e-06 -540.343 4.90374 -545.932 13.0999L-558.55 31.6066C-563.837 39.3607 -572.615 44 -582 44L62 44C52.6151 44 43.8369 39.3607 38.5499 31.6066L25.9318 13.0999C20.3434 4.90373 11.0649 -2.59237e-05 1.1449 -2.54901e-05Z"
                                    fill="currentColor"
                                    data-v-94de6103
                                  ></path>
                                </svg>
                                <div className="tag__middle" data-v-62db4139>
                                  <span data-v-62db4139>{tagPage.title}</span>
                                </div>
                                <svg
                                  className="tag__side tag__end"
                                  viewBox="0 0 62 44"
                                  preserveAspectRatio="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-v-62db4139
                                  data-v-94de6103
                                >
                                  <path
                                    d="M1.1449 -2.54901e-05L-521.145 -2.66006e-06C-531.065 -2.22644e-06 -540.343 4.90374 -545.932 13.0999L-558.55 31.6066C-563.837 39.3607 -572.615 44 -582 44L62 44C52.6151 44 43.8369 39.3607 38.5499 31.6066L25.9318 13.0999C20.3434 4.90373 11.0649 -2.59237e-05 1.1449 -2.54901e-05Z"
                                    fill="currentColor"
                                    data-v-94de6103
                                  ></path>
                                </svg>
                              </div>
                            );
                          }

                          return (
                            <div
                              key={tagPage.slug}
                              className="tag"
                              aria-hidden="true"
                              data-v-4f4c0f3b
                              data-v-62db4139
                              style={
                                {
                                  "--color": tagPage.textColor,
                                  "--bg-color": tagPage.color
                                } as React.CSSProperties
                              }
                            >
                              <div
                                className="tag__side-dummy tag__start"
                                data-v-62db4139
                                data-v-94de6103
                              ></div>
                              <div className="tag__middle" data-v-62db4139>
                                <span data-v-62db4139>{tagPage.title}</span>
                              </div>
                              <div
                                className="tag__side-dummy tag__end"
                                data-v-62db4139
                                data-v-94de6103
                              ></div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="stack-page__unfold-area" data-v-4f4c0f3b></div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
