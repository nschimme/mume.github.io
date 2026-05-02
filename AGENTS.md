# Contribution Guidelines for Agents

This repository is a VitePress-based documentation site that serves as the MUME Community landing page ([docs.mume.org](https://docs.mume.org)). It matches the style and layout of [mume.org](https://mume.org).

## Coding Standards

- **VitePress**: Use VitePress features for routing and site structure.
- **Vue 3 SFCs**: Custom components in `docs/.vitepress/theme/` should use `<script setup>` with Composition API.
- **CSS**: The primary styling resides in `docs/.vitepress/theme/mume.css`. Maintain consistency with the `mume.org` design.
- **Scroll Logic**: Use `window.scrollY` for scroll-related features (avoid deprecated `window.pageYOffset`).

## Adding Content

### Interviews

1.  Create a new Markdown file in `docs/interviews/<id>.md`.
2.  Update `docs/interviews/index.md` to include a link and metadata for the new interview.
3.  Ensure the date and author reflect the original historical context of the interview.

### External Links

Update `docs/links.md` to add or modify community resources.

## Build and Verification

- Always verify changes locally using `npm run docs:dev`.
- Run `npm run docs:build` to ensure the production build is successful.
- Use `docker compose up --build` to verify the production build in an nginx container (available at `http://localhost:4174`).
- When modifying the UI, perform visual verification (e.g., using Playwright) to ensure style parity with `mume.org` is maintained.

## Deployment

The site is deployed via GitHub Actions to GitHub Pages. The deployment branch is `master`.
