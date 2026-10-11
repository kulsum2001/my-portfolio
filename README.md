# My Portfolio

Dark tech-themed portfolio built with Next.js, Tailwind CSS and Framer Motion.
Animations: typing hero, particle network background, scroll reveals, staggered
project cards, hover glow, scroll progress bar.

## Run locally

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Customize

| What | Where |
|---|---|
| Your name, bio, skills, links, experience | `src/data/site.ts` |
| **Add / edit projects** | `src/data/projects.ts` |
| Project screenshots | `public/projects/` |
| Resume | `public/resume.pdf` |
| Theme colors | `src/app/globals.css` (`[data-theme]` blocks) |
| Theme list / default | `src/data/themes.ts` |

To add a project, copy one object in `src/data/projects.ts`, edit it, save.

## Themes

Click the round palette button (bottom-right) to switch themes live. The choice is remembered.

- Dark: Cyber Cyan, Neon Synthwave, Matrix Terminal, Dracula, Ember, Deep Ocean
- Light: Arctic Light, Solar Light
- Color-changing: Aurora (slow hue shift), Chroma (full spectrum, tints the background too)

Add your own: copy a `[data-theme="..."]` block in `src/app/globals.css`, change the id and
colors (space-separated R G B), then add an entry to `src/data/themes.ts`.
Change the default in `DEFAULT_THEME` (same file).

## Deploy on Vercel (free)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com, sign in with GitHub, **Add New, Project**, import the repo.
3. Click **Deploy**. Every future `git push` redeploys automatically.

Other free hosts: Netlify and Cloudflare Pages (build command `npm run build`).
