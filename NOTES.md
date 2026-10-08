# Build notes

Summary of the work and the decisions made while building the site without being able to ask questions. Anything here can be changed; most of it is one line in `content.ts`.

## What was built

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, static export to `out/`.
- One page: navbar, hero, products (3 products plus 2 internal platforms), palm oil mill flow, how we use AI, about (with "How we work"), contact, footer.
- Navbar highlights the section you are reading (active menu), on desktop and in the mobile menu.
- Framer Motion is used only for the hero diagram (lines draw in, nodes fade in). It loads lazily and respects "reduce motion" settings.
- SEO: title, meta description, canonical URL, Open Graph and Twitter card, generated `/og.png` (1200×630), PNG favicon and iOS home-screen icon from the brand logo.
- Accessibility: skip link, visible keyboard focus, labelled sections, mobile menu with `aria-expanded` and Escape to close, a text description of the hero diagram for screen readers.
- Checks: `npm run build` and `npm run lint` pass. Lighthouse on the local build (served with gzip, like the live host): Performance 98, Accessibility 100, Best Practices 100, SEO 100.

## Design decisions

- **Logo:** the brand mark from the owner (`usaha-ai.png`, blue `#0072DC`), trimmed into `public/logo.png`, plus `app/icon.png` (favicon) and `app/apple-icon.png` (white background, because iOS does not show transparency).
- **Accent color:** light brand blue to cyan (`#4aa3ff` → `#55d0f0`), derived from the logo blue so the page and the mark match. The logo blue itself is too dark for text on black, so a lighter tint is used for text and icons.
- **Liquid glass style (Apple-like):** navbar is a floating glass pill, cards and panels are frosted glass with a light rim on the top-left edge, the primary button is tinted blue glass. A fixed layer of soft blue and indigo light sits behind the page so the glass has something to blur. Browsers without `backdrop-filter` get a solid dark panel instead.
- **Font:** Geist (via `next/font`, self-hosted at build time, no request to Google at runtime).
- **Hero visual:** instead of a stock illustration, a diagram showing which AI area each product uses (Computer vision → AutoGrade and Usaha Vision, Generative AI → Usaha GenAI, AutoERP linked to AutoGrade). It is built from `content.ts`, so it cannot show a link that the content does not claim. AI areas with no product are left out of the diagram.
- **Headline:** "AI products built for real-world industry" (the direction from the brief, unchanged).
- **Cards:** glass, rounded corners, small lift on hover. Each card shows the AI area it uses as a tag. Usaha Vision and Usaha GenAI sit in their own "Internal platforms" row and keep the "Internal platform" badge.
- **How we use AI:** three columns in one bordered panel (not cards, so it reads differently from the product grid). Each column lists the products that use it.
- **Contact:** `support@usaha.ai` (confirmed by the owner). The email address is the large element of the section, as a `mailto:` link. No contact form (static site, and a form would need a backend).
- **Section entrance animations:** left out on purpose. Only the hero moves, which keeps the page calm and fast.

## Content decisions

- **Claude is named** in the Language AI description ("large language models such as Claude"), because the brief asks for it and the site is for the Claude for Startups application. No other model names appear.
- **Hillow removed** at the owner's request (2026-10-07). Copy that mentioned customer service was updated to match.
- **Which products use Claude:** not stated yet. After Hillow was removed, no product is linked to Language AI, so it does not appear in the hero diagram and its column has no "Used in" line. The Language AI column still names Claude. TODO in `content.ts`.
- **Satellyte** is not tagged as using AI, because the brief does not say it does. It shows a "Sales automation" tag and is left out of the hero diagram. If it uses an LLM, add `capabilities: ["language"]` and it will appear in the diagram and the Language AI column automatically.
- **AutoERP** is tagged "Mill operations" (not an AI tag) and says "built on ERPNext". It shows "Works with AutoGrade".
- **Usaha GenAI** lists text-to-image, image editing with reference images, and short image-to-video clips. Text-to-video is not mentioned.
- **About** text is written to avoid claims that cannot be checked (no customer counts, no "in production with X").
- **More content without inventing facts (2026-10-07):** the owner felt the page was thin. Added only sections built from facts already in the brief: a 5-step "Built for palm oil mills" flow (AutoERP and AutoGrade, numbered because it is a real sequence), three "How we work" points in About (own servers, private studio, ERPNext and Claude as foundations), and a fuller footer (products, company links, contact). No testimonials, numbers, or team names.
- **Founded year** is hidden until `about.foundedYear` is set.
- **Location** shows "Indonesia" only.
- **Footer year** is calculated at build time (static site). Any redeploy updates it.

## Technical decisions

- Removed `cacheComponents` and `partialPrefetching` from the scaffolded config: they are server features that a static one-page site does not need.
- The OG image is a route at `app/og.png/route.tsx` instead of `opengraph-image.tsx`. With static export, `opengraph-image` is written as a file without an extension, which some hosts serve with the wrong content type. `/og.png` keeps the extension.
- `.remember/` and `.playwright-mcp/` (local tool folders) are in `.gitignore` and ignored by ESLint.
- `AGENTS.md` (created by Next.js) now also holds the content rules for this project, so future edits by AI tools follow them.

## Still to do (owner)

See the TODO list in `README.md`. In short: set the founded year, name the products that use Claude, decide on Satellyte's AI tag, and set up the DigitalOcean deploy and the domain.
