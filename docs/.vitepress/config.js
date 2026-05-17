import { defineConfig } from 'vitepress'

const base = (process.env.VITE_BASE || '/').replace(/\/+$/, '/')
const normalizedBase = base.startsWith('/') ? base : `/${base}`

export default defineConfig({
  title: "MUME Community",
  description: "Explore the MUME community: official Discord, Elvenrunes, open-source mapping tools like MMapper, and player-developed clients for Multi-Users in Middle-earth.",
  cleanUrls: true,
  base: normalizedBase,
  outDir: '../dist',
  sitemap: {
    hostname: 'https://docs.mume.org'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'About',
        items: [
          { text: 'About MUME', link: '/about/' },
          { text: 'Features', link: '/about/features' },
          { text: 'History', link: '/about/history' },
          { text: 'The Ainur', link: 'https://mume.org/about/ainur', target: '_self', rel: 'external' }
        ]
      },
      { text: 'Play', link: '/play' },
      {
        text: 'Community',
        items: [
          { text: 'Community Home', link: '/community/' },
          { text: 'Discord', link: 'https://discord.gg/XkZN55am9a' },
          { text: 'Elvenrunes', link: 'https://elvenrunes.com' },
          { text: 'Open Source', link: '/community/opensource' },
          { text: 'Links', link: '/community/links' },
          { text: 'Interviews', link: '/community/interviews/' },
          { text: 'Wiki', link: 'https://docs.mume.org/wiki/' }
        ]
      },
      {
        text: 'News',
        items: [
          { text: 'Web News', link: '/news/web' },
          { text: 'War', link: 'https://mume.org/news/war' },
          { text: 'Game News', link: 'https://mume.org/news/game/' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Resources', link: '/resources/' },
          { text: 'Newcomers', link: '/resources/newcomers' },
          { text: 'Help', link: 'https://mume.org/help/' },
          { text: 'Rules', link: 'https://mume.org/rules/' },
          { text: 'Dictionary', link: 'https://mume.org/dictionary/' },
          { text: 'Boards', link: 'https://mume.org/resources/boards/' },
          { text: 'Download', link: 'https://mume.org/download/' },
          { text: 'Plots', link: 'https://mume.org/plots/' }
        ]
      }
    ]
  },
  vite: {
    define: {
      __LAST_UPDATED__: JSON.stringify(process.env.VITE_LAST_UPDATED || 'May 2024')
    }
  }
})
