# Northern Digital

A Next.js App Router site for Northern Digital, a web design agency.

## Stack

- Next.js 16 + React + TypeScript
- Tailwind CSS v4
- Framer Motion

## Run

```bash
npm install
npm run dev
```

Form submissions need `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (see `.env.example`).

## Deploy (Vercel)

This is a Next.js app. It builds to `.next`, not Vite’s `dist`.

In the Vercel project: **Settings → Build and Deployment → Framework settings**:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (or leave the default)
- **Output Directory:** empty — turn **Override** off if it is still set to `dist` from the old Vite project

Redeploy after saving. If Output Directory stays `dist`, Vercel will fail with “No Output Directory named dist found” even though `next build` succeeded.

## Layout

- `src/app` — App Router routes, metadata, sitemap, robots
- `src/views` — page composers
- `src/features` — page sections and domain data
- `src/components` — shared UI and layout
- `src/hooks` — shared hooks
- `src/config` — brand, routes, nav, assets
- `src/lib` — SEO, theme, links, forms
- `src/types` — shared types
- `projects/` — live client demos (`shared/` TypeScript helpers + per-site HTML/CSS/`app.ts`), built into `public/projects/<id>/`

Work cards open live client sites. Source for each demo lives in `projects/`:

| Project | Folder | Local URL |
| --- | --- | --- |
| Anovair | `projects/anovair/` | `/projects/anovair` |
| Emna Studio | `projects/emna-studio/` | `/projects/emna-studio` |
| Aqua | `projects/aqua/` | `/projects/aqua` |
| Proud Mary Coffee | `projects/proud-mary/` | `/projects/proud-mary` |

Demos are static HTML/CSS with TypeScript entries. Shared helpers live in `projects/shared/`. `npm run projects` (also run before `dev` and `build`) bundles each `app.ts` to `public/projects/<id>/app.js`.

## Notes

- Lime accent (`#D0FF71`), pill CTAs, large grotesque type, and section rhythm.
- Typography uses Space Grotesk as a free stand-in for commercial Oldschool Grotesk.
- This is a local demo/recreation, not an official site.
