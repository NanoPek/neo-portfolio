# neo-portfolio

Personal portfolio of Jérémie Carrez, mobile software engineer. Live at [jecarrez.vercel.app](https://jecarrez.vercel.app).

> [!NOTE]
> **Vibecoded since 2026-11-03.** From that day on, every change to this project is written by Claude (Claude Code); I prompt, review and ship. The code before that date was hand-typed.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, i18next (English, French, Korean), lucide icons. Deployed on Vercel.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server on http://localhost:5173 |
| `npm run build` | Typechecks and builds to `build/` |
| `npm run preview` | Serves the production build |
| `npm run lint` | Runs ESLint on `src/` |
| `npm run assets` | Regenerates the favicon, app icons and OG image from the theme tokens (`-- --gena` also redraws the Gena placeholder card) |
