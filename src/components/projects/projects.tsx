"use client"

import React, { useState } from "react"

export const Projects = () => {
  // 1. Structured Project Details Schema extracted from original source array
  const projects = [
    {
      url: "skinstric.com",
      title: "Skinstric AI Platform",
      sub: "2025 · AI · PRODUCTION",
      desc: "Architected a real-time skin analysis application leveraging Next.js and OpenAI's Vision API. The production software delivers texture, tone, and skin condition reports in under two seconds with 98% accuracy.",
      tags: ["Next.js", "TypeScript", "OpenAI API", "GSAP", "Tailwind"],
      // Letter/Icon pairing matching original fallback rendering strategy
      initials: "SA"
    },
    {
      url: "fsimplified.dev",
      title: "Component Catalog",
      sub: "2025 · LIBRARY · OPEN SOURCE",
      desc: "Designed and distributed a WCAG-compliant UI suite built for rapid prototyping. The system dropped cohort build requirements by 40% while verifying accessibility thresholds down to the DOM element node.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind"],
      initials: "CC"
    },
    {
      url: "omdb.graylen.dev",
      title: "OMDb Movie App",
      sub: "2024 · UTILITY · LIVE",
      desc: "A focused movie search experience with rich filtering, detail views, and snappy navigation — built against the OMDb API as a study in keeping UI feel as fast as the data layer.",
      tags: ["React", "Vite", "TypeScript", "OMDb API", "Zustand"],
      initials: "OM"
    }
  ]

  // 2. Track Interactive Active Tab State Native to React Engine
  const [activeIndex, setActiveIndex] = useState(0)
  const currentProject = projects[activeIndex]

  return (
    <section id="projects" className="py-24 border-b border-[var(--line)] relative">
      {/* Section Eyebrow Label Badge */}
      <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] mb-6 before:content-[''] before:w-6 before:h-[1px] before:bg-[var(--accent)] before:inline-block">
        04 / Projects
      </div>

      <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight m-0 mb-4 line-height-[1.05] text-[var(--text)]">
        Selected projects.
      </h2>

      <p className="text-[17px] text-[var(--muted)] max-w-[62ch] m-0 mb-14 leading-relaxed">
        An interactive exploration of concepts made real. Click an item to view live status and core technical focus areas.
      </p>

      {/* THREE-COLUMN EXPANSIVE MASTER-DETAIL LAYOUT SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-stretch">
        
        {/* LEFT COLUMN: SELECTABLE INTERACTIVE PROJECTS MENUBAR */}
        <div className="flex flex-col gap-2" id="projList" role="tablist">
          {projects.map((proj, idx) => {
            const isSelected = idx === activeIndex
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-selected={isSelected}
                role="tab"
                className={`text-left bg-transparent border rounded-xl p-[18px] cursor-pointer text-[var(--text)] font-sans flex flex-col gap-1.5 transition-all duration-200 outline-none relative hover:border-[var(--line-2)] hover:bg-[var(--surface)] ${
                  isSelected 
                    ? "border-[var(--accent-2)] bg-gradient-to-b from-[var(--surface)] to-[var(--bg-2)] after:content-[''] after:absolute after:left-[-1px] after:top-3.5 after:bottom-3.5 after:w-[2px] after:rounded after:bg-[var(--accent)]" 
                    : "border-[var(--line)]"
                }`}
              >
                <div className="font-mono text-[10px] text-[var(--dim)] tracking-[0.16em]">
                  0{idx + 1}
                </div>
                <div className="text-[15px] font-medium flex items-center gap-2">
                  {proj.title}
                </div>
                <div className="text-[12.5px] text-[var(--muted)] leading-normal line-clamp-2">
                  {proj.desc}
                </div>
              </button>
            )
          })}
        </div>

        {/* RIGHT COLUMN: RICH CONTEXTUAL STAGE PREVIEW VISUALIZER */}
        <div className="border border-[var(--line)] rounded-[14px] bg-[var(--bg-2)] overflow-hidden flex flex-col min-height-[520px]">
          
          {/* Virtual Browser Top Window Controls Frame (Chrome Ribbon) */}
          <div className="flex items-center gap-2.5 p-[12px_14px] border-b border-[var(--line)] bg-[var(--surface)]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
            </div>
            <div className="flex-1 font-mono text-[11px] text-[var(--muted)] bg-[var(--bg)] border border-[var(--line)] p-[4px_10px] rounded-md text-center tracking-wide select-none" id="prevUrl">
              {currentProject.url}
            </div>
          </div>

          {/* Graphical Display Fallback Decorative Canvas */}
          <div className="relative flex-1 min-h-[280px] bg-[#0e0e12] overflow-hidden flex items-center justify-center p-6" id="prevStage">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-350 ease-in-out select-none ${
                  idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Embedded brand typography signature inside artwork module fallback */}
                <div className="w-full h-full rounded-lg border border-dashed border-[var(--line)] bg-[radial-gradient(100%_100%_at_50%_40%,rgba(196,181,253,0.04),transparent_70%)] flex items-center justify-center font-serif italic text-[72px] text-white/5 tracking-tighter">
                  {proj.initials}
                </div>
              </div>
            ))}
          </div>

          {/* Reactive Content Card Footer Segment */}
          <div className="p-[22px_24px_24px] border-t border-[var(--line)] bg-[var(--bg-2)]">
            <h3 className="m-0 mb-1 text-2xl font-medium tracking-tight text-[var(--text)]" id="pbTitle">
              {currentProject.title}
            </h3>
            
            <div className="font-mono text-[11px] text-[var(--muted)] tracking-[0.08em] uppercase mb-3.5" id="pbSub">
              {currentProject.sub}
            </div>
            
            <p className="m-0 mb-4 text-[#c0c0c8] max-w-[62ch] text-[15px] leading-relaxed" id="pbDesc">
              {currentProject.desc}
            </p>

            {/* Dynamic Render Project Tag Cluster */}
            <div className="flex flex-wrap gap-1.5 mb-4.5" id="pbTags">
              {currentProject.tags.map((tag, tIdx) => (
                <span key={tIdx} className="font-mono text-[11px] color-[var(--muted)] p-[3px_8px] rounded-[5px] bg-[var(--surface)] border border-[var(--line)]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Anchors */}
            <div className="proj-links flex gap-2.5 pt-2">
              <a href={`https://${currentProject.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[var(--text)] p-[7px_10px] rounded-md border border-[var(--line)] bg-[var(--surface)] transition-colors duration-200 hover:border-[var(--accent-2)] hover:text-[var(--accent)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                Open Site
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[var(--text)] p-[7px_10px] rounded-md border border-[var(--line)] bg-[var(--surface)] transition-colors duration-200 hover:border-[var(--accent-2)] hover:text-[var(--accent)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                Source Code
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}