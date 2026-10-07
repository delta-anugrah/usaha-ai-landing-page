# Usaha AI landing page

Single-page website for [usaha.ai](https://usaha.ai). Next.js (App Router) + TypeScript + Tailwind CSS, exported as a fully static site.

All copy lives in [`content.ts`](./content.ts). Edit that file to change text; you should not need to touch the components.

## Run locally

Requires Node.js 20.9 or newer (developed on Node 24).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run build      # static export into out/
npm run lint
npx serve out      # preview the exported site
```

## Project layout

| Path | What it is |
| --- | --- |
| `content.ts` | Every piece of text on the site, plus the product list |
| `app/layout.tsx` | SEO metadata (title, description, Open Graph, Twitter card) |
| `app/og.png/route.tsx` | Generates the social preview image `/og.png` at build time |
| `app/icon.svg` | Favicon |
| `app/globals.css` | Colors and background effects |
| `components/` | Navbar, hero diagram, and page sections |

The hero diagram and the "Used in" lines are built from `content.ts`: a product appears in the diagram when it has at least one entry in `capabilities` (or a `worksWith` link).

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import `delta-anugrah/usaha-ai-landing-page` from GitHub.
2. Framework preset: **Next.js** (detected automatically). Leave build command and output directory at their defaults. No environment variables are needed.
3. In **Settings → Git**, set the **Production Branch**. Vercel uses `main` by default; pushes to `staging` then become preview deployments. If you want `staging` to be live, set it as the production branch, or merge `staging` into `main`.
4. Every push redeploys automatically.

## Connect the usaha.ai domain

1. In the Vercel project, open **Settings → Domains** and add `usaha.ai` and `www.usaha.ai`. Choose to redirect one to the other (usually `www` → `usaha.ai`).
2. At your domain registrar, add the DNS records Vercel shows. Typically:
   - `A` record, name `@`, value `76.76.21.21`
   - `CNAME` record, name `www`, value `cname.vercel-dns.com`

   Use the exact values from the Vercel dashboard if they differ.
3. Wait for DNS to propagate (minutes to a few hours). Vercel issues the HTTPS certificate automatically.

## TODO before going live

Search `content.ts` for `TODO` to find each content spot. The last item (footer year) is a reminder, not a code TODO.

- [ ] **Contact email**: confirm `hello@usaha.ai` exists and receives mail (`contact.email`).
- [ ] **Founded year**: set `about.foundedYear` (hidden on the site while it is `null`).
- [ ] **Claude usage**: name the products that use Claude in the Language AI description (`capabilities[0].description`).
- [ ] **Satellyte**: if it uses an LLM, set `capabilities: ["language"]` and remove `tag`.
- [ ] **Location**: optionally add a city to `about.location`.
- [ ] **Product links**: optionally add `url` to products that have a public site.
- [ ] **Footer year**: it is set at build time. Redeploy once a year (any push does it).

See [`NOTES.md`](./NOTES.md) for the decisions made while building the site.
