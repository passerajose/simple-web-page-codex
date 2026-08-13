# AGENTS.md

## Project overview

This repository contains José Pássera's single-page personal site. Keep the product simple, modern, responsive, accessible, and dark by default. Avoid adding dashboards, authentication, persistence, or other product features unless explicitly requested.

## Technology and runtime

- Node.js 22.13 or newer.
- React 19 with TypeScript.
- Vinext on Vite, targeting Cloudflare Workers.
- Tailwind CSS is available, but the current visual system lives primarily in `app/globals.css`.
- Use npm and preserve `package-lock.json`.

## Important files

- `app/page.tsx`: page content and semantic structure.
- `app/globals.css`: visual system, layout, interactions, and responsive rules.
- `app/layout.tsx`: root layout, fonts, and site metadata.
- `public/`: static assets.
- `worker/index.ts`: Cloudflare Worker entry point.
- `.openai/hosting.json`: Sites hosting capabilities.

## Development commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

On Windows environments where PowerShell blocks `npm.ps1`, use `npm.cmd` instead of `npm`.

## Implementation conventions

- Prefer a server component unless browser state or client-only APIs are genuinely required.
- Keep the site dependency-light. Do not add a package for behavior that can be implemented clearly with React or CSS.
- Preserve the existing dark palette and restrained lime accent unless a redesign is requested.
- Keep content factual. Do not invent employers, clients, projects, skills, locations, or social profiles.
- Maintain semantic HTML, visible keyboard focus, meaningful accessible labels, and reduced-motion support.
- Make every layout change work at narrow mobile widths as well as desktop widths.
- Do not add model-generated SVG illustrations. Use typography, CSS, or existing assets when imagery is unnecessary.
- Update metadata in `app/layout.tsx` when the site's identity or purpose changes.
- Never commit secrets or local environment files.

## Validation

For content or documentation-only changes, review the affected files and run the smallest relevant check. For application changes, run at least:

```bash
npm run lint
npm run build
```

Fix build or lint failures introduced by the change. Keep generated output such as `dist/`, `.vinext/`, and `.wrangler/` untracked.

## Git hygiene

- Preserve unrelated user changes.
- Do not create branches, stage files, commit, push, or open pull requests unless the user explicitly asks.
- Before handing off, report which checks ran and whether the working tree remains uncommitted.
