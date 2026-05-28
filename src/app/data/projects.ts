export const projectMeta: Record<string, {
  stack: { name: string; reason: string }[];
  challenges: { title: string; problem: string; solution: string }[];
}> = {
  "My-Portfolio": {
    stack: [
      { name: "Next.js", reason: "App Router for fast page loads, dynamic routes, and serverless API handlers." },
      { name: "React", reason: "Component-driven architecture with clear folder separation for maintainability." },
      { name: "TypeScript", reason: "Type safety across components, API routes, and GitHub data structures." },
      { name: "Tailwind CSS", reason: "Scoped, utility-first styling without the overhead of a CSS-in-JS solution." },
      { name: "Vercel", reason: "Zero-config deployment with ISR support and edge caching for API routes." },
    ],
    challenges: [
      {
        title: "GitHub API load time",
        problem: "Fetching repo stats and commit counts with multiple sequential GraphQL requests was causing load times over 1600ms.",
        solution: "Merged parallel queries into a single GraphQL request and applied Next.js fetch-level caching, bringing warm request times under 100ms.",
      },
      {
        title: "Accurate all-time commit count",
        problem: "GitHub's contributionsCollection is capped to a one-year window, making all-time totals impossible with a single query.",
        solution: "Fanned out one query per year since account creation, ran them in parallel with Promise.all, and summed the results including private contributions via restrictedContributionsCount.",
      },
    ],
  },
  "NewTube": {
    stack: [
      { name: "Next.js 15", reason: "App Router with server components and server actions for a fast, modern full-stack architecture." },
      { name: "React 19", reason: "Latest concurrent features and improved hydration for a snappy, responsive UI." },
      { name: "Bun", reason: "Faster installs and runtime performance over Node.js for local dev and builds." },
      { name: "tRPC", reason: "End-to-end type safety between client and server without writing separate API schemas." },
      { name: "Drizzle ORM", reason: "Lightweight, type-safe ORM that pairs cleanly with serverless Postgres." },
      { name: "Neon", reason: "Serverless PostgreSQL that scales to zero — no idle compute costs." },
      { name: "Clerk", reason: "Drop-in authentication handling auth state, sessions, and user management out of the box." },
      { name: "Mux", reason: "Handles video upload, transcoding, adaptive streaming, and delivery infrastructure." },
      { name: "Upstash", reason: "Serverless Redis for background job queuing and automated workflow triggers." },
      { name: "Tailwind CSS", reason: "Utility-first styling for rapid iteration and a consistent design language." },
    ],
    challenges: [
      {
        title: "AI-generated video metadata",
        problem: "Manually writing optimized titles and descriptions for every video doesn't scale and produces inconsistent quality.",
        solution: "Integrated an AI pipeline that analyzes uploaded video content and auto-generates SEO-optimized titles and descriptions, triggered automatically on upload via Upstash background jobs.",
      },
      {
        title: "Video infrastructure at scale",
        problem: "Self-managing video transcoding, adaptive bitrate streaming, and delivery is complex and error-prone.",
        solution: "Offloaded the entire video lifecycle to Mux — upload, transcode, and delivery are handled via webhooks, keeping the application layer clean.",
      },
      {
        title: "Type safety across the stack",
        problem: "REST APIs between the Next.js frontend and backend required duplicated type definitions that drifted out of sync.",
        solution: "Replaced REST with tRPC, giving end-to-end type inference from database schema through to the React component with zero duplication.",
      },
    ],
  },
  "skinstric.ai": {
    stack: [
      { name: "Next.js", reason: "App Router for server-side rendering and clean file-based routing." },
      { name: "React", reason: "Component-driven UI for building the image upload flow and results dashboard." },
      { name: "TypeScript", reason: "Type safety across API responses and demographic data structures." },
      { name: "OpenAI Vision API", reason: "Core AI engine — analyzes facial features to estimate age, sex, and ethnicity from uploaded images." },
      { name: "GSAP", reason: "Bespoke animations for the analysis flow and results reveal." },
      { name: "Lottie", reason: "Lightweight animation format used to keep time-to-analysis under 2 seconds." },
      { name: "Tailwind CSS", reason: "Responsive, clean UI built rapidly with utility classes." },
    ],
    challenges: [
      {
        title: "Accurate demographic inference from varied imagery",
        problem: "User-submitted photos vary wildly in quality, lighting, and angle, leading to inconsistent AI results.",
        solution: "Added client-side validation to filter low-quality uploads before hitting the API, and structured the prompt carefully to instruct the model to return confidence ranges rather than hard values.",
      },
      {
        title: "Presenting sensitive data responsibly",
        problem: "Demographic estimates like age and ethnicity are sensitive — presenting them poorly could feel invasive or misleading.",
        solution: "Designed the results UI to frame outputs as estimates with ranges rather than definitive conclusions, using neutral language and clear disclaimers throughout.",
      },
    ],
  },
  "solid-docs": {
    stack: [
      { name: "Next.js 15", reason: "App Router and server actions power the document management and routing layer." },
      { name: "React 19", reason: "Concurrent rendering for smooth real-time updates without blocking the UI." },
      { name: "Liveblocks", reason: "Handles real-time presence, collaborative cursors, and document sync via CRDTs." },
      { name: "Tiptap", reason: "Extensible rich text editor that integrates cleanly with Liveblocks for multiplayer editing." },
      { name: "Convex", reason: "Reactive real-time backend — document state updates propagate instantly without polling." },
      { name: "Clerk", reason: "Authentication and user identity management for both personal and organizational workspaces." },
      { name: "Tailwind CSS", reason: "Consistent, responsive styling across the editor and dashboard surfaces." },
    ],
    challenges: [
      {
        title: "Multiplayer cursor and presence sync",
        problem: "Showing each collaborator's cursor position and selection state in real time without jitter or lag is technically demanding.",
        solution: "Leveraged Liveblocks' built-in presence API which handles cursor broadcasting and CRDT-based conflict resolution, keeping the codebase focused on UI rather than sync logic.",
      },
      {
        title: "In-editor AI suggestions without disrupting flow",
        problem: "Triggering AI content suggestions mid-document risks interrupting the user's writing flow or producing unwanted insertions.",
        solution: "Implemented suggestions as a non-destructive inline overlay using Tiptap extensions — users explicitly accept or dismiss suggestions before any content is committed.",
      },
      {
        title: "Organizational workspace isolation",
        problem: "Separating personal documents from organizational ones while keeping permissions manageable adds significant data modeling complexity.",
        solution: "Modeled workspaces as first-class entities in Convex with Clerk organization IDs as the access boundary, keeping document queries scoped without custom auth middleware.",
      },
    ],
  },
  "omdb-movie-api": {
    stack: [
      { name: "Next.js 15", reason: "App Router with Suspense for handling async URL search params and streaming." },
      { name: "React 19", reason: "useMemo and concurrent features for high-performance client-side sorting." },
      { name: "TypeScript", reason: "Typed API responses from OMDb to prevent runtime shape mismatches." },
      { name: "OMDb API", reason: "The data source — provides film metadata, posters, release years, and unique IDs." },
      { name: "Tailwind CSS", reason: "Responsive UI built quickly with utility classes." },
    ],
    challenges: [
      {
        title: "Async URL search params with Suspense",
        problem: "Next.js 15 made URL search params asynchronous, breaking the standard pattern for reading query strings in server components.",
        solution: "Wrapped the search results component in a Suspense boundary so the page shell renders immediately while the async params resolve, keeping the UX smooth.",
      },
      {
        title: "Performant client-side sorting",
        problem: "Re-sorting a large results list on every render caused unnecessary recalculations and sluggish interactions.",
        solution: "Used useMemo to memoize sorted results, recomputing only when the dataset or sort order changes — keeping interactions instant regardless of result size.",
      },
    ],
  },
};