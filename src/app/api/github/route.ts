import { NextResponse } from "next/server";

export const revalidate = 3600;

const GITHUB_USERNAME = "Graylen1019";
const TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  if (!TOKEN) {
    console.warn("⚠️ GitHub Token is missing from environment variables.");
    return NextResponse.json(
      { error: "GitHub token is missing", publicRepos: "?", totalCommits: "?", repos: [] },
      { status: 200 }
    );
  }

  try {
    const now = new Date();
    const startYear = 2025;

    const years: number[] = [];
    for (let y = startYear; y <= now.getFullYear(); y++) {
      years.push(y);
    }

    const commitQueries = years.map((year) => ({
      query: `
        query($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              totalCommitContributions
              restrictedContributionsCount
            }
          }
        }
      `,
      variables: {
        login: GITHUB_USERNAME,
        from: year === startYear
          ? `${startYear}-03-03T00:00:00Z`
          : `${year}-01-01T00:00:00Z`,
        to: year === now.getFullYear()
          ? now.toISOString()
          : `${year + 1}-01-01T00:00:00Z`,
      },
    }));

    // Common headers required across all production servers calling GitHub's API
    const baseHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
      // Enforce User-Agent header (Strictly required by GitHub API on production servers)
      "User-Agent": "graylen1019-portfolio-app",
      // Declare explicit GitHub API versioning 
      "X-GitHub-Api-Version": "2022-11-28"
    };

    const [commitResults, mainRes] = await Promise.all([
      Promise.all(
        commitQueries.map((body) =>
          fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: baseHeaders,
            body: JSON.stringify(body),
            next: { revalidate: 3600 },
          }).then(async (r) => {
            if (!r.ok) {
              console.error(`Commit fetch failed with status: ${r.status}`);
              return {};
            }
            return r.json();
          })
        )
      ),
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          ...baseHeaders,
          "Cache-Control": "s-maxage=3600",
        },
        body: JSON.stringify({
          query: `
            query($login: String!) {
              user(login: $login) {
                repositories(ownerAffiliations: OWNER, isFork: false) {
                  totalCount
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
          `,
          variables: { login: GITHUB_USERNAME },
        }),
        next: { revalidate: 3600 },
      }),
    ]);

    const totalCommits = commitResults.reduce(
      (sum, r) => {
        const collection = r?.data?.user?.contributionsCollection;
        return sum + (collection?.totalCommitContributions ?? 0) + (collection?.restrictedContributionsCount ?? 0);
      },
      0
    );

    if (!mainRes.ok) {
      console.error(`Main GraphQL response returned HTTP error status: ${mainRes.status}`);
      throw new Error(`GitHub GraphQL HTTP error status: ${mainRes.status}`);
    }

    const json = await mainRes.json();
    if (json.errors) {
      console.error("GraphQL payload contains validation errors:", JSON.stringify(json.errors));
      throw new Error("GraphQL errors: " + JSON.stringify(json.errors));
    }

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
      totalCommits,
      repos,
      lastUpdated: new Date().toISOString(),
    });

  } catch (err) {
    console.error("Fatal deployment fallback triggered:", err);
    return NextResponse.json(
      { 
        error: "Failed to fetch GitHub stats", 
        publicRepos: "?", 
        totalCommits: "?", 
        repos: [], 
        lastUpdated: new Date().toISOString() 
      },
      { status: 500 }
    );
  }
}