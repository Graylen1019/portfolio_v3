import { NextResponse } from "next/server";

export const revalidate = 3600;

const GITHUB_USERNAME = "Graylen1019";
const TOKEN = process.env.GITHUB_TOKEN;

const combinedQuery = `
  query($login: String!) {
    user(login: $login) {
      repositories(ownerAffiliations: OWNER, isFork: false) {
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
      }
      recentRepos: repositories(
        ownerAffiliations: OWNER,
        isFork: false,
        first: 20,
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
          name
          url
          isPrivate
          description
          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              node { name }
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  if (!TOKEN) {
    return NextResponse.json(
      { error: "GitHub token is missing", publicRepos: "?", totalCommits: "?", repos: [] },
      { status: 200 }
    );
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
        "Cache-Control": "s-maxage=3600",
      },
      body: JSON.stringify({
        query: combinedQuery,
        variables: { login: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);

    const json = await res.json();
    if (json.errors) throw new Error("GraphQL errors: " + JSON.stringify(json.errors));

    const user = json.data?.user;

    const repos = (user?.recentRepos?.nodes ?? []).map((repo: {
      name: string;
      url: string;
      isPrivate: boolean;
      description: string | null;
      languages?: { edges?: Array<{ node?: { name: string } }> };
    }) => ({
      name: repo.name,
      url: repo.url,
      isPrivate: repo.isPrivate,
      description: repo.description,
      topLanguage: repo.languages?.edges?.[0]?.node?.name ?? null,
    }));

    return NextResponse.json({
      publicRepos: user?.repositories?.totalCount ?? 0,
      totalCommits: user?.contributionsCollection?.totalCommitContributions ?? 0,
      repos,
      lastUpdated: new Date().toISOString(),
    });

  } catch (err) {
    console.error("GitHub fetch failed", err);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats", publicRepos: "?", totalCommits: "?", repos: [], lastUpdated: new Date().toISOString() },
      { status: 500 }
    );
  }
}