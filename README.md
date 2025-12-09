# personal_website — Starter

This repository contains a minimal static starter for a personal website. Files included in the starter:

- `index.html` — main page with sections (hero, about, books, speaking, contact).
- `styles.css` — simple responsive CSS theme.
- `main.js` — tiny script for smooth scrolling and where to add JS.
- `README.md` — this file.

How to use
1. Paste your HTML where indicated in `index.html`, or replace the file entirely with your own HTML.
2. Put your CSS in `styles.css` or add another stylesheet and update the link in `index.html`.
3. Put your JavaScript in `main.js` or include other script files.
4. Preview locally:
   - Using Python: `python3 -m http.server 8000` then open http://localhost:8000
   - Using VS Code: install Live Server and click "Go Live"

Deploy with GitHub Pages
- Quick option: push to the `main` branch and in the repo Settings → Pages, choose "main" and root (`/`) as the source. GitHub will serve the `index.html`.
- If you want automatic builds or a workflow (React/Vite/Next), tell me and I can add a GitHub Actions workflow.

Next steps I can help with (pick one):
- Replace placeholders (photo, amazon links, email, form action) with your real values.
- Upload images into the repository under `/images` and switch src attributes to repo-relative paths.
- Add a GitHub Actions workflow to deploy to GitHub Pages automatically.
