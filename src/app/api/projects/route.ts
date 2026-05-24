import { NextResponse } from "next/server";

// Comprehensive strict schema typing for GitHub API repository payload response
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

export async function GET() {
  try {
    const username = "graylen1019"; 
    const token = process.env.GITHUB_TOKEN;
    
    // Exact repository sequence array (Deterministic ordering)
    const allowedProjects = [
      "portfolio_v3",
      "NewTube-project",
      "react-django-todo-list",
      "Skinstric-intern",
      "Google-docs",
      "Movie-API",
    ];

    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(token ? { Authorization: `token ${token}` } : {})
      },
      next: { revalidate: 60 } // Sync update interval cached at edge server
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed fetch from GitHub" }, { status: res.status });
    }
    
    const repos = await res.json();
    const reposTyped = repos as Repo[];

    const mappedProjects = reposTyped
      // 1. Structural Filter: Matches whitelist configuration
      .filter((repo: Repo) => allowedProjects.includes(repo.name))
      // 2. Map Deterministic Sorting Order
      .sort((a: Repo, b: Repo) => allowedProjects.indexOf(a.name) - allowedProjects.indexOf(b.name))
      // 3. Transformation Processor Module
      .map((repo: Repo) => {
        const createdYear = repo.created_at ? new Date(repo.created_at).getFullYear() : 2026;
        
        // Extract exact last code push cycle
        const lastCommitDate = repo.pushed_at 
          ? new Date(repo.pushed_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          : null;

        // Dynamically compute absolute repository weight
        const projectScale = repo.size > 1024 
          ? `${(repo.size / 1024).toFixed(1)} MB` 
          : `${repo.size} KB`;

        // Compose robust metadata statuses
        const statusLabel = repo.archived ? "ARCHIVED" : "ACTIVE";
        const licenseLabel = repo.license?.spdx_id ? repo.license.spdx_id : "SELECTED";

        // Map Title string casing mutations
        const cleanTitle = repo.name === "portfolio_v3" 
          ? "Portfolio v3" 
          : repo.name.replace(/[-_]/g, " ");

        const mainLanguage = repo.language ? [repo.language] : [];
        const topics = repo.topics ? repo.topics.map((t) => t.charAt(0).toUpperCase() + t.slice(1)) : [];
        
        // Construct dynamic metadata tags cluster
        const trackingTags = [
          ...mainLanguage,
          ...topics,
          projectScale,
          repo.stargazers_count > 0 ? `★ ${repo.stargazers_count}` : null,
          lastCommitDate ? `Pushed ${lastCommitDate}` : null
        ].filter((tag): tag is string => Boolean(tag)); // Cleanly strips out missing metric nodes

        return {
          url: repo.homepage || repo.html_url, 
          githubUrl: repo.html_url,
          title: cleanTitle,
          sub: `${createdYear} · ${statusLabel} · ${licenseLabel}`,
          desc: repo.description || "Explore the source repository and documentation directly on GitHub.",
          tags: trackingTags.slice(0, 5),
          initials: repo.name.replace(/[-_]/g, "").slice(0, 2).toUpperCase(),
          image: `/projects/${repo.name}.png`
        };
      });

    return NextResponse.json(mappedProjects);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}