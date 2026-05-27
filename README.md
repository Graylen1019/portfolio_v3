# Portfolio v3

A modern personal portfolio site built with Next.js (App Router). This repository contains a fast, accessible, and component-driven portfolio used to showcase projects, work history, technical stack, and contact information. It's designed for easy deployment to Vercel and local development with npm/yarn/pnpm.

## Quick Start

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Built With

- Next.js (App Router)
- TypeScript
- Node.js
- Vercel (recommended for deployment)

## What’s in this repo

Top-level structure highlights:

- `src/app/` - Main Next.js App Router; pages, layouts and route handlers.
	- `src/app/page.tsx` - Site homepage.
	- `src/app/layout.tsx` - Root layout and global styles.
	- `src/app/(routes)/projects/[project.name]/page.tsx` - Dynamic project pages.
- `src/components/` - Reusable UI components: `hero`, `nav`, `projects`, `works`, `stack`, `contact`, `footer`.
- `src/app/api/` - Server route handlers.
	- `src/app/api/github/route.ts` - (client) fetches GitHub data used in the UI.
	- `src/app/api/projects/route.ts` - API that serves the portfolio's project list.
- `public/projects/` - Static project assets used by the portfolio.

See the code for specific implementations in the `src` folder.

## Project Features

- Component-driven React UI with clear folder separation.
- Dynamic routed project pages using Next.js App Router.
- Simple serverless API routes for projects and GitHub data.
- CSS scoped via `globals.css` in `src/app`.

## API Endpoints

- `GET /api/projects` — returns the projects metadata consumed by the Projects page.
- `GET /api/github` — returns GitHub-related data (stars, repos, etc.) used in the hero or social sections.

Refer to `src/app/api` for implementation details.

## Development notes

- Edit the UI pages inside `src/app` and components in `src/components`.
- Project data can be added as JSON or MD files under `public/projects/` or inside the API route that reads project metadata.

## Deployment

This project is ready for Vercel — push the repo to GitHub and import it into Vercel, or run the following build locally:

```bash
npm run build
npm start
```

## Contributing

Contributions are welcome. Open issues or PRs for fixes, accessibility improvements, or content updates.


