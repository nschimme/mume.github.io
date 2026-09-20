import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const base = (process.env.VITE_BASE || '/').replace(/\/+$/, '/')
const normalizedBase = base.startsWith('/') ? base : `/${base}`

export default withMermaid(defineConfig({
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
      { text: 'Home', link: 'https://mume.org' },
      {
        text: 'About',
        items: [
          { text: 'Overview', link: '/about/' },
          { text: 'Features', link: '/about/features' },
          { text: 'History', link: '/about/history' }
        ]
      },
      { text: 'Play', link: '/play/' },
      {
        text: 'Community',
        items: [
          { text: 'Community Hub', link: '/' },
          { text: 'Educator & Classroom Portal 🎓', link: '/community/educators/' },
          { text: 'Discord', link: '/community/discord' },
          { text: 'Elvenrunes', link: 'https://elvenrunes.com' },
          { text: 'Open Source', link: '/opensource' },
          { text: 'Links', link: '/links' },
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
          { text: 'Overview', link: '/resources/' },
          { text: 'Newcomers', link: '/resources/newcomers' },
          { text: 'Help', link: 'https://mume.org/help/' },
          { text: 'Rules', link: 'https://mume.org/rules/' },
          { text: 'Dictionary', link: 'https://mume.org/dictionary/' },
          { text: 'Boards', link: '/resources/boards/' },
          { text: 'Download', link: 'https://mume.org/download/' },
          { text: 'Restricted', link: 'https://mume.org/restricted/' }
        ]
      }
    ],
    sidebar: {
      '/community/': [
        {
          text: '🤝 Community Hub',
          items: [
            { text: 'Community Home', link: '/' },
            { text: 'Open Source Projects', link: '/opensource' },
            { text: 'Community Interviews', link: '/community/interviews/' }
          ]
        },
        {
          text: '🎓 Educators & Classrooms',
          items: [
            { text: 'Overview & Portal', link: '/community/educators/' },
            { text: 'Classroom & IT Setup', link: '/community/educators/classroom-setup' },
            { text: 'Student Quickstart', link: '/community/educators/student' }
          ]
        },
        {
          text: '🎲 Game Design & RPG Dynamics',
          items: [
            { text: 'RPG Track Overview', link: '/community/educators/rpg-dynamics/' },
            { text: 'Lab 1: TTRPG Evolution', link: '/community/educators/rpg-dynamics/lab-1-ttrpg-evolution' },
            { text: 'Lab 2: System & Bartle Critique', link: '/community/educators/rpg-dynamics/lab-2-system-critique' },
            { text: 'Lab 3: Scarcity & Competition', link: '/community/educators/rpg-dynamics/lab-3-scarcity' },
            { text: 'Lab 4: Faction Friction', link: '/community/educators/rpg-dynamics/lab-4-asymmetric-factions' }
          ]
        },
        {
          text: '💻 STEM & CS Curriculum',
          items: [
            { text: 'CS Track Overview', link: '/community/educators/cs/' },
            { text: 'Lab 1: CLI & Aliases', link: '/community/educators/cs/lab-1-aliases' },
            { text: 'Lab 2: RegEx Captures', link: '/community/educators/cs/lab-2-regex' },
            { text: 'Lab 3: Triggers & FSM', link: '/community/educators/cs/lab-3-parsing' },
            { text: 'Lab 4: Graph Pathfinding', link: '/community/educators/cs/lab-4-graph-pathfinding' }
          ]
        },
        {
          text: '📚 Humanities Curriculum',
          items: [
            { text: 'Humanities Overview', link: '/community/educators/literature/' },
            { text: 'Lab 1: Spatial Narrative', link: '/community/educators/literature/lab-1-worldbuilding' },
            { text: 'Lab 2: MUD Digital History', link: '/community/educators/literature/lab-2-game-history' },
            { text: 'Lab 3: Adaptation Studies', link: '/community/educators/literature/lab-3-adaptation' },
            { text: 'Lab 4: Collaborative Storytelling', link: '/community/educators/literature/lab-4-storytelling' }
          ]
        }
      ]
    }
  },
  vite: {
    define: {
      __LAST_UPDATED__: JSON.stringify(process.env.VITE_LAST_UPDATED || 'May 2024')
    }
  },
  mermaid: {
    theme: 'dark'
  }
}))
