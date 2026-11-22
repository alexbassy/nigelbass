# Nigel Bass — Plumbing & Heating website

Marketing site for Nigel Bass, a plumbing and heating engineer.

## The business

- **Who:** Nigel Bass, plumbing and heating engineer, 30+ years' experience.
- **Registration:** Gas Safe registered. Registration number not known yet; add it once Nigel provides it.
- **Based:** Enfield, London. **Covers:** all of London.
- **Domestic work:** standard plumbing and heating jobs for individual clients. Callout charge **£100**.
- **Larger work:** renovations, office and corporate/commercial projects, quoted per job.
- Copy is British English (colour, licence, centre) and prices are in £.

## Site

- **Home:** who Nigel is, experience, area covered, callout charge, call to action.
- **Services:** one page per service (e.g. boiler repair/servicing, central heating, leaks and burst pipes, bathrooms, renovations, commercial). Exact list to be agreed with Nigel.
- **Blog:** articles section. Content not decided yet, so start with Astro content collections (Markdown in the repo) rather than a CMS.
- **Contact:** contact form, plus phone and email.
- **Photos:** Unsplash, credited where the licence asks for it. Replace with Nigel's own job photos when available.
- **No tracking or analytics** for now, so no consent banner is needed.

## Stack

Copy the setup from `../atlantic-editorial` unless there's a reason not to, minus what this site doesn't need (EmDash CMS, D1/R2/KV, PostHog, consent banner, Vue/React).

- **Astro**, static output (`build.format: "file"`, no-slash URLs). Fonts via Astro's `fonts` config.
- **Content:** services and blog posts are Markdown content collections (`src/content.config.ts`, `src/content/{services,blog}/`), rendered by `src/pages/{services,blog}/[slug].astro`.
- **TypeScript 6**, pinned because `astro check` doesn't support TS 7 yet.
- **pnpm**, Node 24 (`.nvmrc`).
- **Biome** for formatting and linting, run with `pnpm exec biome check --write`. Husky + lint-staged pre-commit.
- **Vitest** for tests, `astro check` for types.
- **Cloudflare Workers** (free plan): `wrangler.jsonc` serves `dist/` as static assets. A small Worker (`main`) will be added for the contact form. `pnpm preview` builds and serves through Wrangler on port 8787.
- **Contact form** (same pattern as atlantic-editorial's `worker/`): `POST /api/contact` → Turnstile check → Cloudflare rate limiter → email via Resend. Secrets (`TURNSTILE_SECRET`, `RESEND_API_KEY`) are set in Cloudflare, never committed; dev values go in `.dev.vars` (`.dev.vars.example` is committed).
- **Deploy:** GitHub Actions on push to `main` (check, test, build, `wrangler deploy`), as in atlantic-editorial's `.github/workflows/deploy.yml`.

## Development

- Code runs in the OrbStack `dev` machine. Dev server on port 4321.
- If the user already has the dev server running, don't start or stop it.
- No production secrets in this machine; deploys run from CI or the Mac.
- Astro docs: https://docs.astro.build

## Open questions

- Phone number, email, and domain name.
- Final list of services.
- Gas Safe registration number, and any trade memberships to display.
- Domain: `src/lib/site.ts` and `wrangler.jsonc` use a placeholder until it's bought.
- Who writes blog articles and how often.
