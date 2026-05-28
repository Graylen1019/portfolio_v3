import React from "react"

export const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-12 relative flex flex-col gap-20">

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
        
        <div>

          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
            05 / Contact
          </div>

          <h2 className="text-[clamp(36px,5.5vw,68px)] font-medium tracking-tight m-0 mb-6 leading-[1.02] text-(--text) select-none">
            Let us build something{" "}
            <span className="font-serif italic font-normal text-gradient tracking-tight block sm:inline">
              exceptional.
            </span>
          </h2>

          <p className="text-[17px] text-(--muted) max-w-[46ch] m-0 leading-relaxed">
            I am currently considering full‑time opportunities and select freelance projects. If you have an interesting problem to solve, say hello.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 sm:pt-11 w-full max-w-md lg:max-w-none">

          <a
            href="mailto:Graylenbigelow@gmail.com"
            className="flex items-center justify-between p-5 rounded-2xl border border-(--line) bg-(--surface) text-(--text) text-[15px] font-medium font-sans transition-all duration-200 group hover:border-(--accent-2) hover:bg-(--surface-2) hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-(--muted) group-hover:text-(--accent) transition-colors">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Graylenbigelow@gmail.com
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-(--dim) group-hover:text-(--text) transition-all transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <div className="grid grid-cols-2 gap-3.5">
            <a
              href="https://github.com/Graylen1019"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-[15px_18px] rounded-xl border border-(--line) bg-(--surface) text-(--text) text-sm transition-all duration-200 group hover:border-(--accent-2) hover:bg-(--surface-2)"
            >
              <span className="text-(--muted) group-hover:text-(--text) transition-colors">GitHub</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-(--dim) group-hover:text-(--accent) transition-transform transform group-hover:-rotate-45">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/graylen-bigelow-834435371"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-[15px_18px] rounded-xl border border-(--line) bg-(--surface) text-(--text) text-sm transition-all duration-200 group hover:border-(--accent-2) hover:bg-(--surface-2)"
            >
              <span className="text-(--muted) group-hover:text-(--text) transition-colors">LinkedIn</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-(--dim) group-hover:text-(--accent) transition-transform transform group-hover:-rotate-45">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}