# Contribution Guidelines for Agents

This repository is a Vite-based Vue 3 application that serves as the MUME Community landing page ([docs.mume.org](https://docs.mume.org)). It matches the style and layout of [mume.org](https://mume.org).

## Coding Standards

- **Vue 3 SFCs**: Use `<script setup>` with Composition API.
- **Asset Handling**: Import images and assets in Vue components to benefit from Vite's build pipeline.
- **CSS**: The primary styling resides in `src/assets/css/mume.css`. Maintain consistency with the `mume.org` design.
- **Scroll Logic**: Use `window.scrollY` for scroll-related features (avoid deprecated `window.pageYOffset`).

## Adding Content

### Interviews

1.  Create a new Markdown file in `public/interviews/<id>.md`.
2.  Update the `interviews` array in `src/views/Interviews.vue` with the new interview's metadata (id, title, author, date).
3.  Ensure the date and author reflect the original historical context of the interview.

### External Links

Update `src/views/Links.vue` to add or modify community resources.

## Build and Verification

- Always verify changes locally using `npm run dev`.
- Run `npm run build` to ensure the production build is successful.
- When modifying the UI, perform visual verification (e.g., using Playwright) to ensure style parity with `mume.org` is maintained.

## Deployment

The site is deployed via GitHub Actions. Ensure the `base` in `vite.config.js` is correct if deploying to a subpath.
