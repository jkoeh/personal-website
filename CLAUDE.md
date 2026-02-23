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
| Language | JSX / ES Modules | `"type": "module"` in package.json |
| Font | Roboto Condensed | Loaded via Google Fonts in `index.html` |

## Repository Layout

```
personal-website/
├── index.html              # Entry HTML — sets theme color, loads Google Font
├── vite.config.js          # Vite config: plugins [react(), tailwindcss()]
├── package.json
├── terraform/              # AWS infra — GitHub OIDC provider + deploy IAM role
│   ├── providers.tf
│   ├── variables.tf
│   ├── github_oidc.tf
│   └── outputs.tf
├── public/                 # Copied verbatim to dist/ (favicon, PWA manifest)
├── src/
│   ├── main.jsx            # Mounts <App /> into #root
│   ├── App.jsx             # Root component — layout + project-type state
│   ├── index.css           # @import "tailwindcss" + global body/html/#root rules
│   ├── components/
│   │   └── Header.jsx      # Navigation bar (presentational, no props)
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
- State lives in `App.jsx` unless a component exclusively owns it.
- No external state management library (Redux, Zustand, etc.) — use `useState`/`useContext`.

## Images

- Import images as ES modules: `import img from './images/foo.webp'`
- Provide WebP + JPG pairs using a `<picture>` element with a `<source>` for webp and `<img>` fallback.
- Use `decoding="async"` and `fetchpriority="low"` on non-critical images.

## Deployment

The portfolio site is deployed automatically to **AWS S3** (`johannkoeh.io`, `us-west-1`) via GitHub Actions on every push to `main`.

- Workflow: `.github/workflows/deploy.yml`
- **No static credentials.** GitHub Actions authenticates to AWS via OIDC (short-lived tokens). No secrets required in GitHub.
- Required GitHub Actions variable (not secret): `AWS_ACCOUNT_ID` (set under repo Settings → Variables).
- IAM role and OIDC provider are managed by Terraform in `terraform/`. Run once to bootstrap; see README.md.
- The S3 bucket must have static website hosting enabled and a public read bucket policy.
- Linked sub-projects (Tic-Tac-Toe, Resume) are also S3 static sites in separate buckets.

To deploy manually (bypass CI):
```bash
pnpm build
aws s3 sync dist/ s3://johannkoeh.io --delete
```

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
