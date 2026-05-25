"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Project = {
  url: string;
  githubUrl: string;
  title: string;
  sub: string;
  desc: string;
  tags: string[];
  initials: string;
  image: string;
};

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error();
        const data = await response.json();

        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // 1. Loading State Placeholder View
  if (loading) {
    return (
      <section className="py-24 border-b border-(--line) relative animate-pulse">
        <div className="h-4 w-24 bg-(--surface) rounded mb-6" />
        <div className="h-10 w-64 bg-(--surface) rounded mb-4" />
        <div className="h-4 w-full max-w-[62ch] bg-(--surface) rounded mb-14" />
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 h-130">
          <div className="flex flex-col gap-2">
            <div className="h-24 bg-(--surface) rounded-xl" />
            <div className="h-24 bg-(--surface) rounded-xl" />
          </div>
          <div className="bg-(--surface) rounded-[14px]" />
        </div>
      </section>
    );
  }

  // 2. Error / Network Disconnection Fallback View
  if (error || projects.length === 0) {
    return (
      <div className="py-16 text-center border border-dashed border-(--line) rounded-xl">
        <p className="text-(--muted) text-sm font-mono">
          Unable to pull live portfolio stream from GitHub API.
        </p>
      </div>
    );
  }

  const currentProject = projects[activeIndex];

  return (
    <section id="projects" className="py-24 border-b border-(--line) relative">
      {/* Section Eyebrow Label Badge */}
      <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
        04 / Projects
      </div>

      <h2
        className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight m-0 mb-4 text-(--text)"
        style={{ lineHeight: "1.05" }}
      >
        Selected projects.
      </h2>

      <p className="text-[17px] text-(--muted) max-w-[62ch] m-0 mb-14 leading-relaxed">
        An interactive exploration of concepts made real. Hover over an item to
        instantly switch views, or click to lock into your selection.
      </p>

      {/* THREE-COLUMN EXPANSIVE MASTER-DETAIL LAYOUT SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-stretch relative">
        {/* LEFT COLUMN: SELECTABLE INTERACTIVE PROJECTS MENUBAR */}
        <div className="flex flex-col gap-2 relative z-30" id="projList" role="tablist">
          {projects.map((proj, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <Link
                href={"/projects/" + proj.title.toLowerCase().replace(/\s+/g, "-")}

                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                aria-selected={isSelected}
                role="tab"
                className={`text-left bg-transparent border rounded-xl p-4 cursor-pointer text-(--text) font-sans flex flex-col gap-1.5 transition-all duration-200 outline-none relative z-40 ${
                  isSelected
                    ? "border-(--accent-2) bg-linear-to-b from-(--surface) to-(--bg-2) after:content-[''] after:absolute after:-left-px after:top-3.5 after:bottom-3.5 after:w-0.5 after:rounded after:bg-(--accent)"
                    : "border-(--line)"
                } hover:border-(--accent-2) hover:bg-(--surface)`}
              >
                <div className="font-mono text-[10px] text-(--dim) tracking-[0.16em]">
                  0{idx + 1}
                </div>
                <div className="text-[15px] font-medium capitalize flex items-center gap-2">
                  {proj.title}
                </div>
                <div className="text-[12.5px] text-(--muted) leading-normal line-clamp-2">
                  {proj.desc}
                </div>
              </Link>
            );
          })}
        </div>

        {/* RIGHT COLUMN: RICH CONTEXTUAL STAGE PREVIEW VISUALIZER */}
        <div className="border border-(--line) rounded-[14px] bg-(--bg-2) overflow-hidden flex flex-col min-h-130 relative z-10">
          {/* Virtual Browser Top Window Controls Frame (Chrome Ribbon) */}
          <div className="flex items-center gap-2.5 p-3 border-b border-(--line) bg-(--surface)">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
            </div>
            <div
              className="flex-1 font-mono text-[11px] text-(--muted) bg-(--bg) border border-(--line) py-1 px-2.5 rounded-md text-center tracking-wide select-none truncate"
              id="prevUrl"
            >
              {currentProject.url.replace("https://", "")}
            </div>
          </div>

          {/* Graphical Display Fallback Decorative Canvas */}
          <div className="relative flex-1 min-h-70 bg-[#0e0e12] overflow-hidden flex items-center justify-center p-6" id="prevStage">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-350 ease-in-out select-none ${
                  idx === activeIndex
                    ? "opacity-100 scale-100 z-10 visible pointer-events-auto"
                    : "opacity-0 scale-[0.98] z-0 invisible pointer-events-none"
                }`}
              >
                <div className="w-full h-full rounded-lg border-3 border-dashed bg-transparent flex items-center justify-center font-serif italic text-[72px] text-white/5 tracking-tighter shadow-2xl border-(--line)">
                  <Image
                    src={proj.image}
                    alt={proj.initials}
                    width={1669}
                    height={957}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Reactive Content Card Footer Segment */}
          <div className="p-6 border-t border-(--line) bg-(--bg-2)">
            <h3 className="m-0 mb-1 text-2xl font-medium tracking-tight text-(--text) capitalize" id="pbTitle">
              {currentProject.title}
            </h3>

            <div className="font-mono text-[11px] text-(--muted) tracking-[0.08em] uppercase mb-3" id="pbSub">
              {currentProject.sub}
            </div>

            <p className="m-0 mb-4 text-[#c0c0c8] max-w-[62ch] text-[15px] leading-relaxed" id="pbDesc">
              {currentProject.desc}
            </p>

            {/* Dynamic Render Project Tag Cluster */}
            <div className="flex flex-wrap gap-1.5 mb-4" id="pbTags">
              {currentProject.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[11px] text-(--muted) py-0.5 px-2 rounded bg-(--surface) border border-(--line)"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Anchors */}
            <div className="proj-links flex gap-2.5 pt-2">
              {currentProject.url.startsWith("http") && (
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-(--text) py-1.5 px-2.5 rounded-md border border-(--line) bg-(--surface) transition-colors duration-200 hover:border-(--accent-2) hover:text-(--accent)"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  Open Site
                </a>
              )}
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-(--text) py-1.5 px-2.5 rounded-md border border-(--line) bg-(--surface) transition-colors duration-200 hover:border-(--accent-2) hover:text-(--accent)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
