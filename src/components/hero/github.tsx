"use client"

import { useEffect, useState } from "react"

interface GitHubData {
    publicRepos: number | string;
    totalCommits: number | string;
    repos: Array<{ topLanguage: string | null }>;
    lastUpdated?: string;
}

export const Github = () => {
    const [data, setData] = useState<GitHubData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const response = await fetch("/api/github"); // Routes to your Github.ts backend
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error loading GitHub component stats:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    const getDominantLanguage = (repos: Array<{ topLanguage: string | null }>) => {
        const counts: Record<string, number> = {};
        let maxCount = 0;
        let dominantLanguage = "None";

        repos.forEach((repo) => {
            if (repo.topLanguage) {
                counts[repo.topLanguage] = (counts[repo.topLanguage] || 0) + 1;
                if (counts[repo.topLanguage] > maxCount) {
                    maxCount = counts[repo.topLanguage];
                    dominantLanguage = repo.topLanguage;
                }
            }
        });

        return dominantLanguage;
    };

    const formatSyncDate = (isoString?: string) => {
        if (!isoString) return "Loading...";

        const date = new Date(isoString);

        // Pad single digits with a leading zero (e.g., '6' becomes '06')
        const pad = (num: number) => String(num).padStart(2, "0");

        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1); // Months are 0-indexed in JS
        const year = date.getFullYear();

        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());

        return `${day} / ${month} / ${year} · ${hours}:${minutes}`;
    };


    return (
        <div className="border border-(--line) rounded-[14px] bg-linear-to-b from-(--surface) to-(--bg-2) p-5.5 relative overflow-hidden">
            <div className="absolute top-3.5 right-3.5 font-mono text-[10px] text-(--dim) tracking-wider">/01</div>
            <h3 className="margin-0 mb-3.5 font-mono text-xs font-medium text-(--muted) tracking-widest uppercase">GitHub · live</h3>

            <div className="flex justify-between items-baseline py-2.5 border-t border-dashed border-(--line)">
                <div className="text-sm text-(--muted) flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 opacity-70"><path d="M3 4h6l2 2h10v12a2 2 0 01-2 2H3z" /></svg>
                    Repositories
                </div>
                <div className="font-mono text-2xl font-medium text-(--text) tracking-tight">{data?.publicRepos}<span className="text-(--accent)"></span></div>
            </div>

            <div className="flex justify-between items-baseline py-2.5 border-t border-dashed border-(--line)">
                <div className="text-sm text-(--muted) flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 opacity-70"><circle cx="12" cy="12" r="3" /><path d="M3 12h6M15 12h6" /></svg>
                    Commits (90d)
                </div>
                <div className="font-mono text-2xl font-medium text-(--text) tracking-tight">{data?.totalCommits}<span className="text-(--accent)"></span></div>
            </div>

            <div className="flex justify-between items-baseline py-2.5 border-t border-dashed border-(--line)">
                <div className="text-sm text-(--muted) flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 opacity-70"><path d="M12 2v6M12 16v6M2 12h6M16 12h6" /></svg>
                    Top language
                </div>
                <div className="font-mono text-sm font-medium text-(--text)">{data ? getDominantLanguage(data.repos) : "..."}</div>
            </div>

            <div className="font-mono text-[11px] text-(--dim) mt-1 flex items-center  gap-4">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <div className="text-sm text-(--muted) flex items-center gap-2 tracking-tighter">{formatSyncDate(data?.lastUpdated)}</div>
            </div>
        </div>
    )
}