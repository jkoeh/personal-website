# CLAUDE.md — Architecture & Development Guide

> **PR Rules:**
> - If a pull request introduces an architectural change (new dependency, new directory, new build step, change to styling approach, change to state management, etc.), this file **must** be updated in the same PR before it can be merged.
> - If a pull request changes how to develop, test, or deploy the app (commands, environment setup, hosting), **README.md must also be updated** in the same PR.

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| UI | React 18 | Functional components + hooks only |
| Package manager | pnpm | Lockfile: `pnpm-lock.yaml`. Do not use npm or yarn. |
| Build | Vite 7 | `pnpm start` → dev server, `pnpm build` → `dist/` |
| Styling | Tailwind CSS v4 | Zero-config via `@tailwindcss/vite` plugin |
| Language | TypeScript / TSX | `"type": "module"` in package.json; `tsconfig.json` targets ES2020 |
| Font | Roboto Condensed | Loaded via Google Fonts in `index.html` |

## Repository Layout

```
personal-website/
├── index.html              # Entry HTML — sets theme color, loads Google Font
├── vite.config.ts          # Vite config: plugins [react(), tailwindcss()]
├── tsconfig.json           # TypeScript config (strict, noEmit, bundler resolution)
├── package.json
├── public/                 # Copied verbatim to dist/ (favicon, PWA manifest)
├── src/
│   ├── vite-env.d.ts       # Vite client types (image imports, env vars)
│   ├── main.tsx            # Mounts <App /> into #root
│   ├── App.tsx             # Root component — layout + project-type state
│   ├── index.css           # @import "tailwindcss" + global body/html/#root rules
│   ├── components/
│   │   ├── Header.tsx      # Navigation bar (presentational, no props)
│   │   └── HeroSlot.tsx    # Slot-machine hero animation (pure CSS, no state)
│   └── images/             # Imported as ES module URLs (webp + jpg pairs)
└── dist/                   # Git-ignored build output
```

## Styling Conventions

- **No CSS Modules.** All styles are Tailwind utility classes in `className`.
- **No `tailwind.config.js`.** Tailwind v4 is zero-config; the Vite plugin handles everything.
- **`index.css`** is only for the Tailwind import and rules that must apply globally (`body`, `html`, `#root`). Do not add component styles here.
- **Custom breakpoints** use Tailwind v4 arbitrary-value syntax: `min-[700px]:text-[25px]`. Prefer this over adding named breakpoints unless a breakpoint is reused in 3+ places.
- **Arbitrary CSS properties** (e.g. `text-shadow`) use the bracket syntax: `hover:[text-shadow:0.5px_0.5px_#fff]`.

## Component Conventions

- Functional components only. No class components.
- One component per file. File name matches the component name.
- Presentational components (no state, no side-effects) go in `src/components/`.
- State lives in `App.tsx` unless a component exclusively owns it.
- No external state management library (Redux, Zustand, etc.) — use `useState`/`useContext`.

## Images

- Import images as ES modules: `import img from './images/foo.webp'`
- Provide WebP + JPG pairs using a `<picture>` element with a `<source>` for webp and `<img>` fallback.
- Use `decoding="async"` and `fetchpriority="low"` on non-critical images.

## Deployment

The portfolio site is deployed automatically to **Cloudflare Pages** via the GitHub integration on every push to `main`. No workflow file or secrets required — Cloudflare Pages pulls from the repo directly.

- Build command: `pnpm build`
- Output directory: `dist/`
- Domain: `johannkoeh.io` (registered and DNS-managed on Cloudflare)
- Linked sub-projects (Tic-Tac-Toe, Resume) are hosted as separate Cloudflare Pages projects.

## Adding a New Project Card

1. Add the project image(s) to `src/images/`.
2. Import and render the card inside `App.jsx` (or extract a `ProjectCard` component if there are 2+ cards).
3. Link out to the externally hosted project (S3 static site or similar).

## What Counts as an Architectural Change (requires updating this file)

- Adding or removing a dependency that affects how the app is built or styled
- Adding a new top-level directory under `src/`
- Introducing a state management library or a router
- Changing the build tool or bundler
- Switching the CSS approach (e.g. adding CSS Modules back, switching Tailwind version)
- Adding server-side logic, API routes, or a backend
- Changing the deployment target or hosting strategy
