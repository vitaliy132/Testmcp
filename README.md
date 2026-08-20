# Northern Digital

A Vite + React + TypeScript SPA for Northern Digital, a web design agency site.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Router

## Run

```bash
npm install
npm run dev
```

Form submissions need `VITE_WEB3FORMS_ACCESS_KEY` in `.env.local` (see `.env.example`).

## Layout

- `src/app` — shell and routes
- `src/pages` — route composers
- `src/features` — page sections and domain data
- `src/components` — shared UI and layout
- `src/hooks` — shared hooks
- `src/config` — brand, routes, nav, assets
- `src/lib` — theme, links, forms
- `src/types` — shared types
- `projects/` — live client demos, served at `/projects/<id>/`

Work cards open live client sites. Source for each demo lives in `projects/`:

| Project | Folder | Local URL |
| --- | --- | --- |
| Anovair | `projects/anovair/` | `/projects/anovair/` |
| Emna Studio | `projects/emna-studio/` | `/projects/emna-studio/` |
| Aqua | `projects/aqua/` | `/projects/aqua/` |
| Proud Mary Coffee | `projects/proud-mary/` | `/projects/proud-mary/` |

## Notes

- Lime accent (`#D0FF71`), pill CTAs, large grotesque type, and section rhythm.
- Typography uses Space Grotesk as a free stand-in for commercial Oldschool Grotesk.
- This is a local demo/recreation, not an official site.
