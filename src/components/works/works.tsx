export const Experience = () => {
  return (
    <section id="work" className="py-24 border-b border-(--line) relative">
      {/* Section Header Eyebrow Tag Label Badge */}
      <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
        02 / Experience
      </div>

      <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight m-0 mb-4 line-height-[1.05] text-(--text)">
        Where I have shipped.
      </h2>

      <p className="text-[17px] text-(--muted) max-w-[62ch] m-0 mb-14 leading-relaxed">
        A short, recent track record. Measurable outcomes over titles.
      </p>

      {/* VERTICAL TIMELINE LIST CONTAINER */}
      <div className="flex flex-col gap-0">
        
        {/* JOB ENTRY 1: FRONTEND SIMPLIFIED */}
        <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-12 py-9 border-t border-(--line) first:border-none group relative">
          {/* Timeline Context Meta */}
          <div className="flex flex-col gap-1.5 pt-1 font-sans">
            <div className="font-mono text-[11px] text-(--dim) tracking-[0.14em] transition-colors duration-200 group-hover:text-(--accent)">
              01 — Current
            </div>
            <div className="font-mono text-xs text-(--muted)">
              March 2025 — Present
            </div>
            <div className="text-sm text-(--text) font-medium flex items-center">
              Frontend Simplified
              <span className="inline-block ml-2 px-1.5 py-0.5 rounded font-mono text-[10px] bg-[rgba(134,239,172,0.12)] text-[#bbf7d0] border border-[rgba(134,239,172,0.25)] align-baseline">
                Now
              </span>
            </div>
          </div>

          {/* Job Body Copy Space */}
          <div className="font-sans">
            <h3 className="margin-0 mb-3 text-2xl font-medium tracking-tight text-(--text)">
              Peer Mentor — Frontend Development (React &amp; Next.js)
            </h3>
            <p className="margin-0 mb-4 text-[#c0c0c8] max-w-[70ch] leading-relaxed">
              Recognized in the top 5% of my cohort for technical excellence and mentorship. 
              Guided 20+ students through code reviews, debugging sessions, and architecture decisions. 
              Led workshops on frontend performance, then built reusable component libraries the cohort still ships against.
            </p>
            
            {/* Impact Metric Chips Bar */}
            <div className="flex flex-wrap gap-2 mt-1.5">
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">~50%</b> · faster portfolio load times
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">40%</b> · less build time via reusable UI
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">90%</b> · students hit WCAG compliance
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">85%</b> · adopted CI/CD pipelines
              </span>
            </div>
          </div>
        </article>

        {/* JOB ENTRY 2: SKINSTRIC AI */}
        <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-12 py-9 border-t border-(--line) first:border-none group relative">
          {/* Timeline Context Meta */}
          <div className="flex flex-col gap-1.5 pt-1 font-sans">
            <div className="font-mono text-[11px] text-(--dim) tracking-[0.14em] transition-colors duration-200 group-hover:text-(--accent)">
              02
            </div>
            <div className="font-mono text-xs text-(--muted)">
              June 2025 — July 2025
            </div>
            <div className="text-sm text-(--text) font-medium">
              Skinstric AI
            </div>
          </div>

          {/* Job Body Copy Space */}
          <div className="font-sans">
            <h3 className="margin-0 mb-3 text-2xl font-medium tracking-tight text-(--text)">
              Frontend Engineer
            </h3>
            <p className="margin-0 mb-4 text-[#c0c0c8] max-w-[70ch] leading-relaxed">
              Architected a real‑time skin‑analysis platform on Next.js using OpenAIs Vision API, achieving ~98% detection accuracy across diverse skin conditions. 
              Built a responsive UI with TailwindCSS, GSAP and bespoke animations; leveraged Next.js Server Components and Lottie to keep analysis under two seconds. 
              Designed a modular component library to enable rapid A/B testing and integrated a 4D Mini model for sharper texture and tone accuracy.
            </p>
            
            {/* Impact Metric Chips Bar */}
            <div className="flex flex-wrap gap-2 mt-1.5">
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">~98%</b> · detection accuracy
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">~60%</b> · engagement lift
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">~40%</b> · retention boost
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide">
                <b className="text-(--accent) font-semibold">&lt;2s</b> · time‑to‑analysis
              </span>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}