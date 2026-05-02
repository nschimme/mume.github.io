# MUME Community Website

This repository contains the source code for [docs.mume.org](https://docs.mume.org), focusing on the MUME Community page and associated resources (Links, Interviews, etc.).

The site is built with **VitePress** and designed to match the style and layout of the main [mume.org](https://mume.org) website.

## Features

- **VitePress**: Fast, Vue-powered static site generator.
- **MUME Styling**: Integrated CSS and assets to maintain visual consistency with the MUME ecosystem.
- **Player Interviews**: Interviews are stored as Markdown files in `docs/interviews/` and rendered using VitePress's file-based routing.
- **Custom Theme**: A custom VitePress theme located in `docs/.vitepress/theme/` implements the MUME look and feel.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev
```

### Build

```bash
# Build for production
npm run docs:build

# Preview production build locally
npm run docs:preview
```

## Docker

Build and serve the production site in a container (mirrors the nginx setup used in deployment):

```bash
docker compose up --build
```

The site will be available at [http://localhost:4174](http://localhost:4174).

To pass a custom base path (e.g. for a subdirectory deployment):

```bash
docker compose build --build-arg VITE_BASE=/community/
docker compose up
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch.

## Contributing

Interviews and content can be updated by modifying the Markdown files in the `docs/` directory. For theme or functionality changes, please refer to the `docs/.vitepress/theme/` directory.
