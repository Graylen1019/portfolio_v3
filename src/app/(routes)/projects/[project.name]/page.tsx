import React from "react";

// 1. Define the TypeScript type for Next.js App Router dynamic path params
type Props = {
  params: Promise<{
    "project.name": string;
  }>;
};

// 2. The component MUST be a default export for Next.js routing to handle it
const ProjectDetailPage = async ({ params }: Props) => {
  // Await the params object in Next.js 15+ App Router
  const resolvedParams = await params;
  
  // Clean up the URL slug for display (e.g., "portfolio-v3" becomes "portfolio v3")
  const projectName = decodeURIComponent(resolvedParams["project.name"]).replace(/-/g, " ");

  return (
    <main className="min-h-screen py-24 px-6 md:px-12 text-white font-sans flex flex-col justify-center items-center text-center">
      <div className="max-w-2xl border border-[#2a2a32] bg-[#16161e] p-8 md:p-12 rounded-2xl shadow-xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
          Project Deep Dive
        </span>
        
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight mt-3 mb-6 capitalize text-slate-100">
          {projectName}
        </h1>
        
        <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8">
          This detail page is dynamically serving content for the route param: 
          <code className="block mt-2 px-3 py-1.5 bg-[#0e0e12] rounded border border-[#2a2a32] text-purple-300 font-mono text-xs">
            /projects/{resolvedParams["project.name"]}
          </code>
        </p>

        <div className="h-px bg-[#2a2a32] my-6 w-full" />

        <p className="text-xs font-mono text-slate-500">
          Dynamic API fetching and portfolio layouts will sit here next.
        </p>
      </div>
    </main>
  );
}

export default ProjectDetailPage;
