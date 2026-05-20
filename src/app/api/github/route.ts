import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Graylen1019";
const TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  if (!TOKEN) {
    return NextResponse.json(
      {
        error: "GitHub token is missing, please check .env",
        publicRepos: "?",
        totalCommits: "?",
        repos: [],
      },
      { status: 200 },
    );
  }

  // Removed "privacy: PUBLIC" to fetch both public and private repos.
  // Added "isPrivate" to the nodes query field.
  const query = `
    query($login: String!) {
      user(login: $login) {
        repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
          totalCount
          nodes {
            name
            url
            isPrivate
            description
            languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  name
                }
              }
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 5) {
                    nodes {
                      oid
                      message
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
        contributionsCollection {
          totalCommitContributions
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`GraphQL failed: ${res.status} ${text}`);
    }

    const json = await res.json();

    if (json.errors) {
      throw new Error(`GraphQL Errors: ${JSON.stringify(json.errors)}`);
    }

    const user = json.data?.user;
    const totalCommits =
      user?.contributionsCollection?.totalCommitContributions ?? 0;
    const totalRepos = user?.repositories?.totalCount ?? 0;

    const repos = (user?.repositories?.nodes ?? []).map(
      (repo: {
        name: string;
        url: string;
        isPrivate: boolean;
        description: string | null;
        languages?: {
          edges?: Array<{
            node?: { name: string };
          }>;
        };
        defaultBranchRef?: {
          target?: {
            history?: {
              nodes?: Array<{
                oid: string;
                message: string;
                committedDate: string;
              }>;
            };
          };
        };
      }) => {
        const topLanguageEdge = repo.languages?.edges?.[0];
        const topLanguage = topLanguageEdge ? topLanguageEdge.node?.name : null;

        const commits = repo.defaultBranchRef?.target?.history?.nodes ?? [];

        return {
          name: repo.name,
          url: repo.url,
          isPrivate: repo.isPrivate,
          description: repo.description,
          topLanguage,
          recentCommits: commits.map(
            (c: { oid: string; message: string; committedDate: string }) => ({
              sha: c.oid,
              message: c.message,
              date: c.committedDate,
            }),
          ),
        };
      },
    );

    return NextResponse.json({
      publicRepos: totalRepos, // This represents your overall total repos now
      totalCommits,
      repos,
      lastUpdated: new Date().toISOString(),
    });
  } catch (err) {
    console.error("GitHub fetch failed", err);
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub Stats",
        publicRepos: "?",
        totalCommits: "?",
        repos: [],
        lastUpdated: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}