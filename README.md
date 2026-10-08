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
| `public/logo.png` | Brand mark used in the navbar, footer, and `/og.png` |
| `app/icon.png`, `app/apple-icon.png` | Favicon and iOS home-screen icon, made from the same logo |
| `app/globals.css` | Colors, background light, and the glass styles (`.glass`, `.glass-strong`, `.glass-tint`) |
| `components/` | Navbar, hero diagram, and page sections |

The hero diagram and the "Used in" lines are built from `content.ts`: a product appears in the diagram when it has at least one entry in `capabilities` (or a `worksWith` link), and an AI area appears only when at least one product uses it. Products with `internal: true` are listed under "Internal platforms".

To change the logo, replace `public/logo.png` (trimmed, transparent background) and regenerate `app/icon.png` and `app/apple-icon.png` from it.

## Deploy to DigitalOcean

The site is hosted as a static site on DigitalOcean App Platform (free tier, region `sgp`). Deploys run from GitHub Actions, so no DigitalOcean GitHub app has to be installed on the `delta-anugrah` org.

- `.do/app.yaml` is the app spec: it clones the public repo (`staging` branch), runs `npm ci && npm run build`, and serves `out/`.
- `.github/workflows/deploy-digitalocean.yml` runs on every push to `staging` (or by hand from the **Actions** tab). It creates the app on the first run and redeploys it after that.

One-time setup:

1. In DigitalOcean, open **API → Tokens → Generate New Token** with **Read** and **Write** scope.
2. In GitHub, open the repo's **Settings → Secrets and variables → Actions → New repository secret**. Name it `DIGITALOCEAN_ACCESS_TOKEN` and paste the token.
3. Push to `staging`, or run **Deploy to DigitalOcean** from the **Actions** tab. The live URL ends in `ondigitalocean.app` and shows up in the DigitalOcean **Apps** page.

Change build settings in `.do/app.yaml`, not in the DigitalOcean dashboard: the next deploy overwrites dashboard edits with the spec. The Node version comes from `engines` in `package.json`.

## Connect the usaha.ai domain

1. Add the domains to `.do/app.yaml` and push:

   ```yaml
   domains:
     - domain: usaha.ai
       type: PRIMARY
     - domain: www.usaha.ai
       type: ALIAS
   ```

2. At your domain registrar, add the records DigitalOcean shows in the app's **Settings → Domains**:
   - `www`: `CNAME` to the app's `ondigitalocean.app` address.
   - `usaha.ai` (apex): `CNAME`/`ALIAS` if the registrar supports flattening at the root, otherwise the `A` records App Platform lists.

   Do not delete the existing `MX` records, or `support@usaha.ai` stops receiving email.
3. Wait for DNS to propagate (minutes, up to 72 hours). DigitalOcean issues the HTTPS certificate automatically.

## TODO before going live

Search `content.ts` for `TODO` to find each content spot. The last item (footer year) is a reminder, not a code TODO.

- [ ] **Founded year**: set `about.foundedYear` (hidden on the site while it is `null`).
- [ ] **Claude usage**: name the products that use Claude in the Language AI description (`capabilities[0].description`).
- [ ] **Satellyte**: if it uses an LLM, set `capabilities: ["language"]` and remove `tag`.
- [ ] **Location**: optionally add a city to `about.location`.
- [ ] **Product links**: optionally add `url` to products that have a public site.
- [ ] **Footer year**: it is set at build time. Redeploy once a year (any push does it).

See [`NOTES.md`](./NOTES.md) for the decisions made while building the site, and [`TODO.md`](./TODO.md) for the next-day checklist (in Indonesian).
