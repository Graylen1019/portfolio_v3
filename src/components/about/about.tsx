import React from "react"

export const About = () => {
  return (
    <section id="about" className="py-24 border-b border-(--line) relative">
      {/* Section Section Header Label Badge */}
      <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
        01 / About
      </div>
      
      <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight m-0 mb-4 line-height-[1.05] text-(--text)">
        A developer who sweats{" "}
        <span className="font-serif italic font-normal text-(--accent) tracking-tight">
          the details.
        </span>
      </h2>
      
      <p className="text-[17px] text-(--muted) max-w-[62ch] m-0 mb-14 leading-relaxed">
        Hello — I am Graylen, a frontend developer who turns ideas into interactive, accessible, user‑friendly web experiences.
      </p>

      {/* TWO COLUMN CONTENT STRUCTURE LAYOUT SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
        
        {/* SIDE GRAPHIC PORTRAIT ACCENT FRAME */}
        <div className="aspect-4/5 rounded-[14px] border border-(--line) overflow-hidden bg-[radial-gradient(120%_80%_at_30%_20%,rgba(196,181,253,0.25),transparent_60%)] bg-[#0e0e12] relative">
          {/* Custom fallback decorative typography brand mark exactly like style rules */}
          <div className="absolute inset-0 flex items-center justify-center font-serif italic text-[96px] text-(--accent) tracking-tighter select-none after:content-['GB']" />
          <div className="absolute inset-3 border border-white/5 rounded-lg pointer-events-none" />
          
          <div className="absolute left-3.5 bottom-3.5 font-mono text-[10px] tracking-[0.14em] uppercase text-(--muted) flex gap-2">
            <span className="px-2 py-1 rounded bg-black/40 border border-(--line)">GRAYLEN.B</span>
            <span className="px-2 py-1 rounded bg-black/40 border border-(--line)">2026</span>
          </div>
        </div>

        {/* DETAILED BIO COPY BLOCK & TARGET METRICS */}
        <div className="font-sans text-[17px] text-[#c8c8d0] leading-relaxed flex flex-col gap-4.5 max-w-[64ch]">
          <p>
            My expertise sits in{" "}
            <span className="text-(--text) font-medium">React, Next.js and TypeScript</span> — building production interfaces that feel fast, accessible, and visually cohesive. I have shipped on projects like{" "}
            <span className="text-(--accent) font-medium">Skinstric AI</span> and mentor 20+ developers at{" "}
            <span className="text-(--accent) font-medium">Frontend Simplified</span>.
          </p>
          
          <p>
            Every project I take on is a chance to craft something genuinely{" "}
            <span className="text-(--text) font-medium">functional, accessible, and visually cohesive</span> — from the type ramp down to the loading state nobody else thought to design.
          </p>
          
          <p>
            Off‑screen, I read about systems design, ship side projects on weekends, and treat my résumé like a product spec.
          </p>

          {/* FOCUS STRIP COMPONENT */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-(--line) border border-(--line) rounded-xl mt-4 overflow-hidden">
            <div className="bg-(--bg-2) p-[18px_20px]">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-(--muted) mb-1.5">Focus</div>
              <div className="text-sm text-(--text) font-medium">Next.js · App Router</div>
            </div>
            
            <div className="bg-(--bg-2) p-[18px_20px]">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-(--muted) mb-1.5">Lately</div>
              <div className="text-sm text-(--text) font-medium">AI‑driven interfaces</div>
            </div>
            
            <div className="bg-(--bg-2) p-[18px_20px]">
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-(--muted) mb-1.5">Open to</div>
              <div className="text-sm text-(--text) font-medium">Full‑time · Contract</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}