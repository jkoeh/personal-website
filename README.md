# Personal Website

Johann Koeh's personal portfolio site built with React and Vite.

## Tech Stack

- **React** 18 — UI components
- **Vite** 7 — dev server and production build
- **Tailwind CSS** v4 — utility-first styling via `@tailwindcss/vite` (no config file needed)

## Getting Started

```bash
pnpm install
pnpm start        # dev server at http://localhost:5173
pnpm build        # production build → dist/
pnpm preview      # preview production build locally
```

## Project Structure

```
personal-website/
├── index.html              # HTML entry point, Google Fonts preload
├── vite.config.js          # Vite + Tailwind plugin config
├── public/                 # Static assets (favicon, PWA manifest)
├── src/
│   ├── main.jsx            # React root
│   ├── App.jsx             # Main component + state
│   ├── index.css           # @import "tailwindcss" + global body styles
│   ├── components/
│   │   └── Header.jsx      # Navigation bar
│   └── images/             # Static images (imported as ES modules)
└── dist/                   # Production build output (git-ignored)
```

## Styling

All styles are Tailwind utility classes applied directly in JSX. There are no CSS Modules or separate stylesheet files beyond `index.css` (which only holds the Tailwind import and global `body`/`html`/`#root` rules).

Custom breakpoints use Tailwind v4's arbitrary-value syntax, e.g. `min-[700px]:text-[25px]`.

## Deployment

Pushes to `main` automatically deploy to the `johannkoeh.io` S3 bucket via GitHub Actions (`.github/workflows/deploy.yml`).

**No static AWS credentials are stored anywhere.** The workflow uses GitHub OIDC — AWS issues short-lived tokens per run, trusted only for this repo's `main` branch.

### One-time infrastructure bootstrap

The IAM role and OIDC trust are managed by Terraform:

```bash
cd terraform
terraform init
terraform apply
```

After applying, add one GitHub Actions **variable** (not a secret) in repo Settings → Variables → Actions:

| Variable | Value |
|---|---|
| `AWS_ACCOUNT_ID` | Your 12-digit AWS account ID |

### Manual deploy (bypass CI)

```bash
pnpm build
aws s3 sync dist/ s3://johannkoeh.io --delete
```

Linked sub-projects (Tic-Tac-Toe, Resume) are hosted in separate S3 buckets.
