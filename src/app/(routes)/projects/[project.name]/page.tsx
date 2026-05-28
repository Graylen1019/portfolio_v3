import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectDetails } from "@/app/data/projects";

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

type Props = {
  params: Promise<{
    "project.name": string;
  }>;
};

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

function toSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ "project.name": toSlug(p.title) }));
}

const ProjectPage = async ({ params }: Props) => {
  const { "project.name": projectName } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => toSlug(p.title) === projectName);

  if (!project) notFound();

  const detail = projectDetails[projectName];
  const stack = detail?.stack ?? [];
  const challenges = detail?.challenges ?? [];

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <div className="flex items-center gap-4 mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) hover:text-(--accent) transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-3.5 h-3.5"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back
        </Link>

        <span className="w-8 h-px bg-(--accent) inline-block" />

        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted)">
          {project.sub}
        </span>
      </div>

      <h1
        className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight mb-4 text-(--text) capitalize"
        style={{ lineHeight: "1.05" }}
      >
        {project.title}
      </h1>

      <p className="text-[17px] text-(--muted) max-w-[62ch] mb-8 leading-relaxed">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-14">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="font-mono text-[11px] text-(--muted) py-0.5 px-2 rounded bg-(--surface) border border-(--line)"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="rounded-[14px] border border-(--line) overflow-hidden mb-14 bg-[#0e0e12]">
        <div className="flex items-center gap-2.5 p-3 border-b border-(--line) bg-(--surface)">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a32]" />
          </div>
          <div className="flex-1 font-mono text-[11px] text-(--muted) bg-(--bg) border border-(--line) py-1 px-2.5 rounded-md text-center tracking-wide select-none truncate">
            {project.url.replace("https://", "")}
          </div>
        </div>
        <Image
          src={project.image}
          alt={project.title}
          width={1669}
          height={957}
          className="w-full object-cover"
        />
      </div>

      {stack.length > 0 && (
        <section className="mb-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
            Stack
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stack.map((item, i) => (
              <div
                key={i}
                className="border border-(--line) rounded-xl p-4 bg-(--surface) flex flex-col gap-1.5"
              >
                <span className="font-mono text-[12px] text-(--accent) tracking-wide">
                  {item.name}
                </span>
                <span className="text-[13.5px] text-(--muted) leading-relaxed">
                  {item.reason}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {challenges.length > 0 && (
        <section className="mb-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-(--muted) mb-6 before:content-[''] before:w-6 before:h-px before:bg-(--accent) before:inline-block">
            Challenges & Solutions
          </div>
          <div className="flex flex-col gap-4">
            {challenges.map((c, i) => (
              <div
                key={i}
                className="border border-(--line) rounded-xl overflow-hidden"
              >
                <div className="px-5 py-3 border-b border-(--line) bg-(--surface)">
                  <span className="font-mono text-[11px] text-(--dim) tracking-[0.16em] mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] font-medium text-(--text)">
                    {c.title}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-(--line)">
                  <div className="p-5">
                    <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-red-400/70 mb-2">
                      Problem
                    </div>
                    <p className="text-[13.5px] text-(--muted) leading-relaxed m-0">
                      {c.problem}
                    </p>
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-emerald-400/70 mb-2">
                      Solution
                    </div>
                    <p className="text-[13.5px] text-(--muted) leading-relaxed m-0">
                      {c.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex gap-2.5">
        {project.url.startsWith("http") && (
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-(--text) py-1.5 px-2.5 rounded-md border border-(--line) bg-(--surface) transition-colors duration-200 hover:border-(--accent-2) hover:text-(--accent)"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Open Site
          </Link>
        )}
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-(--text) py-1.5 px-2.5 rounded-md border border-(--line) bg-(--surface) transition-colors duration-200 hover:border-(--accent-2) hover:text-(--accent)"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-3.5 h-3.5"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Source Code
        </Link>
      </div>
    </main>
  );
};

export default ProjectPage;
