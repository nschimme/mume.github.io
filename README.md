# MUME Community Website

This repository contains the source code for [docs.mume.org](https://docs.mume.org), focusing on the MUME Community page and associated resources (Links, Interviews, etc.).

The site is built to exactly match the style and layout of the main [mume.org](https://mume.org) website.

## Features

- **Vite + Vue 3**: Modern, fast development and build pipeline.
- **MUME Styling**: Integrated CSS and assets to maintain visual consistency with the MUME ecosystem.
- **Dynamic Interviews**: Player interviews are stored as Markdown files in `public/interviews/` and rendered dynamically.
- **SPA on GitHub Pages**: Configured with custom 404 handling for smooth client-side routing.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Contributing

Interviews and content can be updated by modifying the Markdown files in the `public/interviews/` directory. For style or functionality changes, please refer to the `src/` directory.
