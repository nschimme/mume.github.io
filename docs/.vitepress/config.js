import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MUME Community",
  description: "Explore the MUME community: official Discord, Elvenrunes, open-source mapping tools like MMapper, and player-developed clients for Multi-Users in Middle-earth.",
  cleanUrls: true,
  base: process.env.VITE_BASE || '/',
  outDir: '../dist',
  sitemap: {
    hostname: process.env.VITE_HOSTNAME || 'https://docs.mume.org'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://mume.org' },
      { text: 'Community', link: '/' }
    ]
  },
  vite: {
    define: {
      __LAST_UPDATED__: JSON.stringify(process.env.VITE_LAST_UPDATED || 'May 2024')
    }
  }
})
