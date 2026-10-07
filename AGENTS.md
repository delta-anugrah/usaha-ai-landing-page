<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules (Usaha AI landing page)

- All copy lives in `content.ts`. Components read from it; do not hardcode text in components.
- Static export (`output: "export"`): no server features (route handlers that read the request, cookies, rewrites, server actions).
- Content rules: never mention any other company name of the owner; no fake testimonials, client logos, statistics, or team names; no client names, people, IPs/servers, hardware specs, or accuracy numbers; no third-party model names except Claude; no competitor brands; no features that do not exist yet (segmentation, edge deploy, text-to-video). AutoERP is "built on ERPNext".
- Mark anything the owner still has to fill in with a `TODO` comment, and list it in `README.md`.
- Before committing: `npm run build` and `npm run lint` must pass.
