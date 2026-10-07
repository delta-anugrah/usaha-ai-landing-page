# Build notes

Summary of the work and the decisions made while building the site without being able to ask questions. Anything here can be changed; most of it is one line in `content.ts`.

## What was built

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, static export to `out/`.
- One page: navbar, hero, products (6 cards), how we use AI, about, contact, footer.
- Framer Motion is used only for the hero diagram (lines draw in, nodes fade in). It loads lazily and respects "reduce motion" settings.
- SEO: title, meta description, canonical URL, Open Graph and Twitter card, generated `/og.png` (1200×630), SVG favicon.
- Accessibility: skip link, visible keyboard focus, labelled sections, mobile menu with `aria-expanded` and Escape to close, a text description of the hero diagram for screen readers.
- Checks: `npm run build` and `npm run lint` pass. Lighthouse on the local build (served with gzip, like Vercel): Performance 97, Accessibility 100, Best Practices 100, SEO 100.

## Design decisions

- **Accent color:** teal to sky blue (`#3ddbc0` → `#45b8f5`), used only for the primary button, small icons, and the hero diagram. Picked teal over blue-purple because blue-purple is what most AI sites use.
- **Font:** Geist (via `next/font`, self-hosted at build time, no request to Google at runtime).
- **Hero visual:** instead of a stock illustration, a diagram showing which AI area each product uses (Language AI → Hillow, Computer vision → AutoGrade and Usaha Vision, Generative AI → Usaha GenAI, AutoERP linked to AutoGrade). It is built from `content.ts`, so it cannot show a link that the content does not claim.
- **Headline:** "AI products built for real-world industry" (the direction from the brief, unchanged).
- **Cards:** thin border, rounded corners, small lift and teal glow on hover. Each card shows the AI area it uses as a tag. "Internal platform" badge on Usaha Vision and Usaha GenAI.
- **How we use AI:** three columns in one bordered panel (not cards, so it reads differently from the product grid). Each column lists the products that use it.
- **Contact:** the email address is the large element of the section, as a `mailto:` link. No contact form (static site, and a form would need a backend).
- **Section entrance animations:** left out on purpose. Only the hero moves, which keeps the page calm and fast.

## Content decisions

- **Claude is named** in the Language AI description ("large language models such as Claude"), because the brief asks for it and the site is for the Claude for Startups application. No other model names appear.
- **Which products use Claude:** not stated yet. Only Hillow is linked to Language AI, because its description (AI agents replying to customers) clearly is language AI. TODO in `content.ts`.
- **Satellyte** is not tagged as using AI, because the brief does not say it does. It shows a "Sales automation" tag and is left out of the hero diagram. If it uses an LLM, add `capabilities: ["language"]` and it will appear in the diagram and the Language AI column automatically.
- **AutoERP** is tagged "Mill operations" (not an AI tag) and says "built on ERPNext". It shows "Works with AutoGrade".
- **Usaha GenAI** lists text-to-image, image editing with reference images, and short image-to-video clips. Text-to-video is not mentioned.
- **About** text is written to avoid claims that cannot be checked (no customer counts, no "in production with X").
- **Founded year** is hidden until `about.foundedYear` is set.
- **Location** shows "Indonesia" only.
- **Footer year** is calculated at build time (static site). Any redeploy updates it.

## Technical decisions

- Removed `cacheComponents` and `partialPrefetching` from the scaffolded config: they are server features that a static one-page site does not need.
- The OG image is a route at `app/og.png/route.tsx` instead of `opengraph-image.tsx`. With static export, `opengraph-image` is written as a file without an extension, which some hosts serve with the wrong content type. `/og.png` keeps the extension.
- `.remember/` and `.playwright-mcp/` (local tool folders) are in `.gitignore` and ignored by ESLint.
- `AGENTS.md` (created by Next.js) now also holds the content rules for this project, so future edits by AI tools follow them.

## Still to do (owner)

See the TODO list in `README.md`. In short: confirm the email, set the founded year, name the products that use Claude, decide on Satellyte's AI tag, and set up Vercel and the domain.
