import { NextResponse } from "next/server";
import { projectMeta } from "@/app/data/projects";

type GitHubLicense = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
};

type Repo = {
  name: string;
  created_at?: string | null;
  pushed_at?: string | null;
  language?: string | null;
  topics?: string[];
  homepage?: string | null;
  html_url: string;
  description?: string | null;
  size: number;
  stargazers_count: number;
  archived: boolean;
  license?: GitHubLicense | null;
};

const allowedProjects = [
  "My-Portfolio",
  "NewTube",
  "skinstric.ai",
  "solid-docs",
  "OMDB-movie-api",
];

export async function GET() {
  try {
    const username = "graylen1019";
    const token = process.env.GITHUB_TOKEN;

    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        // Enforce User-Agent header (Strictly required by GitHub API on production servers)
        "User-Agent": "graylen1019-portfolio-app",
        // Explicitly declare the GitHub API version as recommended by GitHub
        "X-GitHub-Api-Version": "2022-11-28",
        // Authenticate using standard Bearer schema if token is present
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      // Server-side console log so you can inspect deployment logs (Vercel, Netlify, etc.)
      console.error(`GitHub API responded with status: ${res.status} (${res.statusText})`);
      return NextResponse.json(
        { error: `Failed fetch from GitHub: ${res.statusText}` }, 
        { status: res.status }
      );
    }

    const repos = (await res.json()) as Repo[];

    const mappedProjects = repos
      .filter((repo) => allowedProjects.includes(repo.name))
      .sort((a, b) => allowedProjects.indexOf(a.name) - allowedProjects.indexOf(b.name))
      .map((repo) => {
        const meta = projectMeta[repo.name];

        const createdYear = repo.created_at ? new Date(repo.created_at).getFullYear() : 2026;
        const lastCommitDate = repo.pushed_at
          ? new Date(repo.pushed_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          : null;
        const projectScale = repo.size > 1024
          ? `${(repo.size / 1024).toFixed(1)} MB`
          : `${repo.size} KB`;
        const statusLabel = repo.archived ? "ARCHIVED" : "ACTIVE";
        const licenseLabel = repo.license?.spdx_id ?? "SELECTED";
        const cleanTitle = repo.name === "portfolio_v3"
          ? "Portfolio v3"
          : repo.name.replace(/[-_]/g, " ");
        const mainLanguage = repo.language ? [repo.language] : [];
        const topics = repo.topics
          ? repo.topics.map((t) => t.charAt(0).toUpperCase() + t.slice(1))
          : [];
        const trackingTags = [
          ...mainLanguage,
          ...topics,
          projectScale,
          repo.stargazers_count > 0 ? `★ ${repo.stargazers_count}` : null,
          lastCommitDate ? `Pushed ${lastCommitDate}` : null,
        ].filter((tag): tag is string => Boolean(tag));

        return {
          url: repo.homepage || repo.html_url,
          githubUrl: repo.html_url,
          title: cleanTitle,
          sub: `${createdYear} · ${statusLabel} · ${licenseLabel}`,
          desc: repo.description || "Explore the source repository and documentation directly on GitHub.",
          tags: trackingTags.slice(0, 5),
          initials: repo.name.replace(/[-_]/g, "").slice(0, 2).toUpperCase(),
          image: `/projects/${repo.name}.png`,
          stack: meta?.stack ?? [],
          challenges: meta?.challenges ?? [],
        };
      });

    return NextResponse.json(mappedProjects);
  } catch (error) {
    console.error("Internal Route Handler Error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}