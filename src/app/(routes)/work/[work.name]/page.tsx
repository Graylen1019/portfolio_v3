import { notFound } from "next/navigation";
import Link from "next/link";
import { experience } from "@/app/data/works";

type Props = {
  params: Promise<{ "work.name": string }>;
};

export async function generateStaticParams() {
  return experience.map((job) => ({ "work.name": job.slug }));
}

export const WorkDetailPage = async (props: Props) => {
  const { "work.name": workName } = await props.params;
  const job = experience.find((j) => j.slug === workName);

  if (!job) notFound();

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      <div className="flex items-center gap-4 mb-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) hover:text-(--accent) transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>
        <span className="w-8 h-px bg-(--line) inline-block" />
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted)">
          {job.period}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

        <div className="lg:sticky lg:top-24 flex flex-col gap-6">
          <div>
            <div className="font-mono text-[11px] text-(--dim) tracking-[0.14em] mb-3">
              {job.index}{job.current ? " — Current" : ""}
            </div>
            <div className="text-sm text-(--muted) font-mono mb-2 flex items-center gap-2">
              {job.company}
              {job.current && (
                <span className="inline-block px-1.5 py-0.5 rounded font-mono text-[10px] bg-[rgba(134,239,172,0.12)] text-[#bbf7d0] border border-[rgba(134,239,172,0.25)]">
                  Now
                </span>
              )}
            </div>
            <h1
              className="text-[clamp(22px,2.6vw,36px)] font-medium tracking-tight mb-4 text-(--text)"
              style={{ lineHeight: "1.1" }}
            >
              {job.role}
            </h1>
            <p className="text-[15px] text-(--muted) leading-relaxed mb-6">
              {job.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {job.metrics.map((m, i) => (
              <div
                key={i}
                className="border border-(--line) rounded-xl p-4 bg-(--surface) flex flex-col gap-1"
              >
                <span className="font-mono text-[18px] font-semibold text-(--accent)">
                  {m.value}
                </span>
                <span className="font-mono text-[11px] text-(--muted) leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">

          {job.stack.length > 0 && (
            <section>
              <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
                Stack
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {job.stack.map((item, i) => (
                  <div
                    key={i}
                    className="border border-(--line) rounded-xl p-4 bg-(--surface) flex flex-col gap-1"
                  >
                    <span className="font-mono text-[12px] text-(--accent) tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-[13px] text-(--muted) leading-relaxed">
                      {item.reason}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {job.responsibilities.length > 0 && (
            <section>
              <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
                Responsibilities
              </div>
              <div className="flex flex-col gap-3">
                {job.responsibilities.map((r, i) => (
                  <div
                    key={i}
                    className="border border-(--line) rounded-xl p-5 bg-(--surface) flex gap-4"
                  >
                    <span className="font-mono text-[11px] text-(--dim) tracking-[0.16em] pt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13.5px] text-(--muted) leading-relaxed m-0">
                      {r}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </main>
  );
};

export default WorkDetailPage;