import Link from "next/link";
import { experience } from "@/app/data/works";

export const Experience = () => {
  return (
    <section id="work" className="py-24 border-b border-(--line) relative">
      <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
        02 / Experience
      </div>

      <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight m-0 mb-4 text-(--text)" style={{ lineHeight: "1.05" }}>
        Where I have shipped.
      </h2>

      <p className="text-[17px] text-(--muted) max-w-[62ch] m-0 mb-14 leading-relaxed">
        A short, recent track record. Measurable outcomes over titles.
      </p>

      <div className="flex flex-col gap-0">
        {experience.map((job) => (
          <Link
            key={job.slug}
            href={`/work/${job.slug}`}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 py-9 border-t border-(--line) first:border-none group relative no-underline hover:bg-(--surface) transition-colors duration-200 rounded-xl px-4 -mx-4"
          >
            <div className="flex flex-col gap-1.5 pt-1 font-sans">
              <div className="font-mono text-[11px] text-(--dim) tracking-[0.14em] transition-colors duration-200 group-hover:text-(--accent)">
                {job.index}{job.current ? " — Current" : ""}
              </div>
              <div className="font-mono text-xs text-(--muted)">
                {job.period}
              </div>
              <div className="text-sm text-(--text) font-medium flex items-center gap-2">
                {job.company}
                {job.current && (
                  <span className="inline-block px-1.5 py-0.5 rounded font-mono text-[10px] bg-[rgba(134,239,172,0.12)] text-[#bbf7d0] border border-[rgba(134,239,172,0.25)]">
                    Now
                  </span>
                )}
              </div>
            </div>

            <div className="font-sans">
              <h3 className="m-0 mb-3 text-2xl font-medium tracking-tight text-(--text)">
                {job.role}
              </h3>
              <p className="m-0 mb-4 text-[#c0c0c8] max-w-[70ch] leading-relaxed">
                {job.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1.5">
                {job.metrics.map((m, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] px-2.5 py-1.5 rounded-md bg-[rgba(196,181,253,0.06)] border border-[rgba(196,181,253,0.18)] text-[#dcd1ff] tracking-wide"
                  >
                    <b className="text-(--accent) font-semibold">{m.value}</b> · {m.label}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};