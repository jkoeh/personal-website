# Personal Website

Johann Koeh's personal portfolio site built with React and Vite.

## Tech Stack

- **React** 18 — UI components
- **Vite** 7 — dev server and production build
- **Tailwind CSS** v4 — utility-first styling via `@tailwindcss/vite` (no config file needed)

## Getting Started

```bash
npm install
npm start        # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build locally
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

Projects linked from the portfolio (Tic-Tac-Toe, Resume) are hosted on AWS S3 static websites.
