"use client"

import React, { useState } from "react"
import { IconType } from "react-icons"
import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiCss, 
  SiHtml5, 
  SiNextdotjs, 
  SiReact, 
  SiVite, 
  SiVuedotjs, 
  SiAngular, 
  SiRedux, 
  SiTailwindcss, 
  SiFirebase, 
  SiPreact, 
  SiGreensock, 
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiClerk,
  SiTrpc,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiBun,
  SiPnpm,
  SiOpenai,
  SiAnthropic
} from "react-icons/si"

type StackItem = {
  label: string
  icon: IconType
  iconColor?: string
  isFav?: boolean
}

type StackCategory = {
  name: string
  items: StackItem[]
}

export const Stack = () => {
  // State to toggle a "Focus" view of your core technologies
  const [filterFavs, setFilterFavs] = useState(false);

  const categories: StackCategory[] = [
    {
      name: "Languages",
      items: [
        { label: "TypeScript", icon: SiTypescript, iconColor: "#3178C6", isFav: true },
        { label: "JavaScript", icon: SiJavascript, iconColor: "#F7DF1E", isFav: false },
        { label: "Python", icon: SiPython, iconColor: "#3776AB", isFav: false },
        { label: "CSS", icon: SiCss, iconColor: "#1572B6", isFav: false },
        { label: "HTML5", icon: SiHtml5, iconColor: "#E34F26", isFav: false },
      ],
    },
    {
      name: "Frameworks",
      items: [
        { label: "Next.js", icon: SiNextdotjs, iconColor: "#FFFFFF", isFav: true },
        { label: "React", icon: SiReact, iconColor: "#61DAFB", isFav: true },
        { label: "Vite", icon: SiVite, iconColor: "#646CFF", isFav: false },
        { label: "Vue", icon: SiVuedotjs, iconColor: "#4FC08D", isFav: false },
        { label: "Angular", icon: SiAngular, iconColor: "#DD0031", isFav: false },
      ],
    },
    {
      name: "Backend",
      items: [
        { label: "Node.js", icon: SiNodedotjs, iconColor: "#5FA04E", isFav: true },
        { label: "Express.js", icon: SiExpress, iconColor: "#FFFFFF", isFav: false },
        { label: "Nest.js", icon: SiNestjs, iconColor: "#E0234E", isFav: false },
        { label: "Django", icon: SiDjango, iconColor: "#092E20", isFav: false },
        { label: "FastAPI", icon: SiFastapi, iconColor: "#009688", isFav: false },
        { label: "tRPC", icon: SiTrpc, iconColor: "#398BCH", isFav: true },
        { label: "Clerk.js", icon: SiClerk, iconColor: "#6C47FF", isFav: false },
      ],
    },
    {
      name: "Data / AI",
      items: [
        { label: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169E1", isFav: true },
        { label: "MongoDB", icon: SiMongodb, iconColor: "#47A248", isFav: false },
        { label: "Prisma", icon: SiPrisma, iconColor: "#5A67D8", isFav: false },
        { label: "Firebase", icon: SiFirebase, iconColor: "#FFCA28", isFav: false },
      ],
    },
    {
      name: "Tools & Extras",
      items: [
        { label: "Tailwind CSS", icon: SiTailwindcss, iconColor: "#38BDF8", isFav: true },
        { label: "bun", icon: SiBun, iconColor: "#FBF0DF", isFav: false },
        { label: "pnpm", icon: SiPnpm, iconColor: "#F69220", isFav: false },
        { label: "Zustand", icon: SiPreact, iconColor: "#764ABC", isFav: false }, 
        { label: "Redux", icon: SiRedux, iconColor: "#764ABC", isFav: false }, 
        { label: "GSAP", icon: SiGreensock, iconColor: "#88CE02", isFav: false },
        { label: "Git", icon: SiGit, iconColor: "#F05032", isFav: false },
        { label: "OpenAI API", icon: SiOpenai, iconColor: "#10A37F", isFav: true }, 
        { label: "Claude", icon: SiAnthropic, iconColor: "#D97706", isFav: false },
      ],
    },
  ]

  return (
    <section id="stack" className="py-24 border-b border-(--line) relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
        <div>

          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
            03 / Toolkit
          </div>

          <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight m-0 mb-4 line-height-[1.05] text-(--text)">
            The stack I reach for.
          </h2>

          <p className="text-[17px] text-(--muted) max-w-[62ch] m-0 leading-relaxed">
            A working set, not a wishlist. Items marked{" "}
            <span className="text-(--accent) mx-0.5">●</span> are what I am sharpest on right now.
          </p>
        </div>

        <button
          onClick={() => setFilterFavs(!filterFavs)}
          className={`self-start md:self-center px-4 py-2 rounded-full border text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
            filterFavs 
              ? "border-(--accent) bg-(--accent)/10 text-(--accent) shadow-[0_0_15px_rgba(34,211,238,0.15)]" 
              : "border-(--line) text-(--muted) hover:text-(--text) hover:border-(--accent-2)"
          }`}
        >
          {filterFavs ? "Show All Tech" : "Filter Core Stack"}
        </button>
      </div>

      <div className="flex flex-col">
        {categories.map((cat, idx) => {
          // Filter items dynamically based on toggle state
          const visibleItems = filterFavs ? cat.items.filter(i => i.isFav) : cat.items;
          if (visibleItems.length === 0) return null;

          return (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-7 border-t border-(--line) first:border-none items-start transition-all duration-500"
            >
              <div className="font-mono text-xs tracking-[0.14em] uppercase text-(--muted) pt-1.5">
                {cat.name}
              </div>

              <div className="flex flex-wrap gap-2">
                {visibleItems.map((item, key) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={key}
                      style={{ '--brand-color': item.iconColor || 'currentColor' } as React.CSSProperties}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-(--line) bg-(--surface) text-(--text) text-xs font-sans select-none relative transition-all duration-300 group hover:border-(--brand-color) hover:-translate-y-0.5 hover:bg-(--surface-2) hover:shadow-[0_4px_12px_rgba(0,0,0,0.5),0_0_10px_rgba(var(--brand-color),0.15)]"
                    >
                      {item.isFav && (
                        <div 
                          className="absolute -top-0.75 -right-0.75 w-2 h-2 rounded-full bg-accent shadow-[0_0_0_2px_var(--bg)] cursor-help z-10"
                          title="Core Competency Focus"
                        />
                      )}

                      <span className="inline-flex h-4 w-4 items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <IconComponent 
                          size={15} 
                          style={{ color: item.iconColor || "inherit" }} 
                        />
                      </span>

                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}