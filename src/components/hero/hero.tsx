import React from "react"
import { Github } from "./github"
import { CurrentWork } from "./currently"

export const Hero = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 gap-12 pt-35 pb-20 border-b border-(--line) items-center content-center">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,1fr)] gap-12 lg:gap-16 items-end">

        {/* LEFT COLUMN: HERO INTRO & TYPOGRAPHY */}
        <div>
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[rgba(134,239,172,0.06)] border border-[rgba(134,239,172,0.18)] font-mono text-xs text-[#bbf7d0] mb-8">
            <span className="relative flex h-2 w-2 rounded-full bg-(--good)">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-100 duration-2000 bg-primary" />
            </span>
            <h1>
              Available for select frontend work · 2026
            </h1>
          </div>

          {/* Big Typography Header Name Space */}
          <h1 className="text-[clamp(56px,9vw,132px)] font-medium leading-[0.92] tracking-tighter mb-7 select-none text-(--text) text-gradient">
            Graylen <span className="font-serif italic font-normal tracking-tight text-gradient">Bigelow</span>
            <span className="block mt-1">~ builds<br />the <span className="font-serif italic font-normal tracking-tight text-gradient">web.</span></span>
          </h1>

          {/* Led Summary with your text gradient effect hook built right in */}
          <p className="text-[clamp(18px,1.6vw,22px)] text-[#c8c8d0] max-w-[58ch] leading-relaxed font-normal">
            Frontend developer focused on{" "}
            <em className="font-normal tacking-tight text-gradient">
              Next.js, React &amp; TypeScript
            </em>
            . I build practical, fast, and delightful web apps — with care for the small details that make a big difference.
          </p>

          {/* Action Button Links */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-surface-gradient text-[#0a0a0b] font-medium text-xs transition-all duration-400 hover:-translate-y-0.5"
            >
              See selected work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.75 w-3.75">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <a
              href="https://github.com/graylen1019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-(--line) bg-(--surface) text-(--text) text-xs transition-all hover:border-(--line-2) hover:bg-muted-foreground hover:-translate-y-0.5 hover:text-black duration-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.75 w-3.75 opacity-85">
                <path d="M12 .5a11.5 11.5 0 00-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0012 .5z" />
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/graylen-bigelow-834435371/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-(--line) bg-(--surface) text-(--text) text-xs transition-all hover:border-(--line-2) hover:bg-accent hover:-translate-y-0.5 duration-500 hover:text-black"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.75 w-3.75 opacity-85">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.01A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7.5 0H14v1.7h.06c.5-.94 1.7-1.93 3.5-1.93 3.74 0 4.44 2.46 4.44 5.66V21h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-4V9z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDE METRIC CARDS */}
        <aside className="flex flex-col gap-4 w-full max-w-sm lg:max-w-none justify-self-stretch">

          {/* Card 1: Live GitHub Aggregates */}
          <Github />

          {/* Card 2: Status Log */}
          <CurrentWork />
        </aside>
      </div>

      {/* Decorative Scrolling Indicator Cue */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex flex-col items-center gap-2 select-none pointer-events-none">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[rgba(148,163,184,0.95)]">Scroll</span>
        <div className="relative mt-2 w-0.5 h-11 overflow-hidden rounded-full bg-[rgba(34,211,238,0.14)]">
          <div
            className="absolute left-0 w-full h-2.5 rounded-full bg-[rgba(34,211,238,0.95)]"
            style={{ animation: "scroll-cue 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  )
}