import React from "react"

type StackItem = {
  label: string
  icon?: string
  bg?: string
  fg?: string
  isFav?: boolean
  customRaw?: boolean
  circle?: boolean
  border?: string
  isReact?: boolean
  isRedux?: boolean
  isTailwind?: boolean
  isFirebase?: boolean
}

type StackCategory = {
  name: string
  items: StackItem[]
}

export const Stack = () => {
  // Structured stack schema grouping technologies seamlessly
  const categories: StackCategory[] = [
    {
      name: "Languages",
      items: [
        { label: "TypeScript", icon: "TS", bg: "#3178C6", fg: "#fff", isFav: true },
        { label: "JavaScript", icon: "JS", bg: "#F7DF1E", fg: "#000", isFav: false },
        { label: "Python", icon: "🐍", customRaw: true, isFav: false },
        { label: "CSS", icon: "3", bg: "#264DE4", fg: "#fff", isFav: false },
        { label: "HTML5", icon: "5", bg: "#E34F26", fg: "#fff", isFav: false },
      ],
    },
    {
      name: "Frameworks",
      items: [
        { label: "Next.js", icon: "N", bg: "#000", fg: "#fff", isFav: true, circle: true, border: "1px solid #444" },
        { label: "React", isReact: true, isFav: true },
        { label: "Redux", isRedux: true, isFav: false },
      ],
    },
    {
      name: "Tools & Extras",
      items: [
        { label: "Tailwind CSS", isTailwind: true, isFav: true },
        { label: "Firebase", isFirebase: true, isFav: false },
        { label: "Zustand", icon: "🐻", customRaw: true, isFav: false },
        { label: "GSAP", icon: "G", bg: "#88CE02", fg: "#000", isFav: false },
        { label: "Git", icon: "F", bg: "#F05032", fg: "#fff", isFav: false },
      ],
    },
  ]

  return (
    <section id="stack" className="py-24 border-b border-[var(--line)] relative">
      {/* Section Identifier Badge */}
      <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--muted)] mb-6 before:content-[''] before:w-6 before:h-[1px] before:bg-[var(--accent)] before:inline-block">
        03 / Toolkit
      </div>

      <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight m-0 mb-4 line-height-[1.05] text-[var(--text)]">
        The stack I reach for.
      </h2>

      <p className="text-[17px] text-[var(--muted)] max-w-[62ch] m-0 mb-14 leading-relaxed">
        A working set, not a wishlist. Items marked{" "}
        <span className="text-[var(--accent)] mx-0.5">●</span> are what I am sharpest on right now.
      </p>

      {/* MATRIX TABLE OF CATEGORIZED STACK CHIPS */}
      <div className="flex flex-col">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-7 border-t border-[var(--line)] first:border-none items-start"
          >
            {/* Left Category Column Label */}
            <div className="font-mono text-xs tracking-[0.14em] uppercase text-[var(--muted)] pt-1.5">
              {cat.name}
            </div>

            {/* Right Chips Wrapper List */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, key) => (
                <div
                  key={key}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] text-xs font-sans transition-all hover:border-[var(--accent-2)] hover:-translate-y-0.5 hover:bg-[var(--surface-2)] select-none relative ${
                    item.isFav ? "after:content-[''] after:absolute after:-top-[3px] after:-right-[3px] after:w-[7px] after:height-[7px] after:rounded-full after:bg-[var(--accent)] after:shadow-[0_0_0_2px_var(--bg)]" : ""
                  }`}
                >
                  {/* Handle Custom React Icon Integration */}
                  {item.isReact && (
                    <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-[#61DAFB]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                        <circle cx="12" cy="12" r="2" />
                        <ellipse cx="12" cy="12" rx="10" ry="4.5" className="fill-none stroke-current stroke-[2]" />
                        <ellipse cx="12" cy="12" rx="10" ry="4.5" className="fill-none stroke-current stroke-[2] rotate-[60deg] transform origin-center" />
                        <ellipse cx="12" cy="12" rx="10" ry="4.5" className="fill-none stroke-current stroke-[2] rotate-[120deg] transform origin-center" />
                      </svg>
                    </span>
                  )}

                  {/* Handle Custom Redux Icon Integration */}
                  {item.isRedux && (
                    <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-[#764ABC]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="hidden" />
                        <path d="M12 2s7 3.5 7 9.5S12 22 12 22s-7-6-7-12.5S12 2 12 2z" />
                      </svg>
                    </span>
                  )}

                  {/* Handle Custom Tailwind Icon Integration */}
                  {item.isTailwind && (
                    <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-[#38BDF8]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                        <path d="M12 6.5c-2.8 0-4.5 1.4-5.2 4.2 1-.7 2.2-.6 3.1.3.8.8 1.9 2 4.1 2 2.8 0 4.5-1.4 5.2-4.2-1 .7-2.2.6-3.1-.3-.7-.8-1.8-2-4.1-2zm-6.5 6c-2.8 0-4.5 1.4-5.2 4.2 1-.7 2.2-.6 3.1.3.8.8 1.9 2 4.1 2 2.8 0 4.5-1.4 5.2-4.2-1 .7-2.2.6-3.1-.3-.7-.8-1.8-2-4.1-2z" />
                      </svg>
                    </span>
                  )}

                  {/* Handle Custom Firebase Icon Integration */}
                  {item.isFirebase && (
                    <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-[#FFCA28]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                        <path d="M3.89 15.55L11.11 2.22a.93.93 0 011.78 0l2.13 3.91-11.13 9.42zM20.1 15.42l-2.42-12.2a.93.93 0 00-1.6-.46L3.45 15.6l7.65 4.28a1.9 1.9 0 001.8 0l7.2-4.46z" />
                      </svg>
                    </span>
                  )}

                  {/* Standard Text/Character-based Icons */}
                  {!item.isReact && !item.isRedux && !item.isTailwind && !item.isFirebase && (
                    <span
                      style={{
                        background: item.bg || "transparent",
                        color: item.fg || "inherit",
                        borderRadius: item.circle ? "50%" : "3px",
                        border: item.border || "none",
                      }}
                      className={`inline-flex h-3.5 w-3.5 items-center justify-center font-mono text-[9px] font-bold ${
                        item.customRaw ? "text-sm font-normal" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                  )}

                  <span>{item.isReact ? "React" : item.isRedux ? "Redux" : item.isTailwind ? "Tailwind CSS" : item.isFirebase ? "Firebase" : item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}