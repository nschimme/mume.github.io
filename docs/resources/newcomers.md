---
title: MUME Newbie & Beginner Survival Guide
description: Essential beginner guides, 16-chapter interactive tutorial directory, video guides, FAQs, and survival commands for new players joining Multi-Users in Middle-earth (MUME).
head:
  - - meta
    - property: og:title
      content: MUME Newbie & Beginner Survival Guide
  - - meta
    - property: og:description
      content: Essential beginner guides, 16-chapter interactive tutorial directory, video guides, FAQs, and survival commands for new players joining MUME.
---

# Information for Newcomers

<MumeQuote>
Oh yeah, have fun running around at night with no torch not being able to see a loving thing. … hardcore … Enjoy that. … Amazing game.
<template #cite>TotalBiscuit, <a href="https://forums.somethingawful.com/showthread.php?threadid=3238046#post369417316" target="_blank" rel="noopener">SA Forum Post</a></template>
</MumeQuote>

<MumeCallout
  title="Interactive Walkthrough"
  subtitle="Start Here"
  body="Master MUME step-by-step with our interactive tutorial. Complete all 16 chapters at your own pace, or jump directly to any topic below."
  actionText="Start Chapter 1: Orientation"
  actionHref="/play/tutorial/1-orientation"
  icon="fa-terminal"
  variant="gold"
/>

## 1. Interactive Tutorial Chapters

Jump directly into any interactive walkthrough chapter below. Progress through each chapter seamlessly or return here anytime.

<TutorialChapterGrid />

## 2. Recommended Guides & Documentation

Explore the official in-game documentation and guides to deepen your understanding:

- **Beginner Essentials**: <a href="https://mume.org/help/newbie" target="_self" rel="external">Introduction to MUME (help newcomer)</a> | <a href="https://mume.org/help/basics" target="_self" rel="external">Basic Commands (help basic)</a>
- **Frequent Questions**: <a href="https://mume.org/help/faq" target="_self" rel="external">Frequently Asked Questions (help faq)</a>
- **Advanced Features**: <a href="https://mume.org/help/advanced" target="_self" rel="external">Advanced Commands (help advanced)</a> | [Unique Features](/about/features)
- **Rules of Middle-earth**: <a href="https://mume.org/rules/" target="_self" rel="external">MUME Code of Conduct & Rules</a>

## 3. Video Tutorials & Sample Sessions

Prefer visual or log-based learning? Watch our complete YouTube walkthrough series or inspect an annotated session log:

- [Read a complete sample MUME session log](/resources/session)
- Watch the community video tutorials below (ensure annotations are enabled):

<div class="youtube-container">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLZPa6XiiZkfQZVGIw1xD7B21n51f4wLCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 4. Finding Help In-Game

Never hesitate to ask for assistance. MUME has dedicated **Rangers** whose purpose is to mentor new players:

- Type <code>who ranger</code> in-game to see active Rangers online.
- Use <code>tell &lt;ranger_name&gt; hello, I am new!</code> to send them a private message.
- Join the community on <a href="https://discord.gg/XkZN55am9a" target="_blank" rel="noopener">Discord</a> to ask questions and meet fellow adventurers.

<MumeCallout
  title="Ready to enter Middle-earth?"
  subtitle="Play Hub"
  body="Launch MMapper Web in your browser, download MMapper Desktop, or connect via Mudlet."
  actionText="Go to Play Hub"
  actionHref="/play/"
  icon="fa-gamepad"
  variant="gold"
/>

<style>
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 2.5rem;
}

.chapter-card {
  background: #0b0d14;
  border: 1px solid rgba(215, 166, 63, 0.3);
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, border-color 0.2s;
}

.chapter-card:hover {
  transform: translateY(-3px);
  border-color: goldenrod;
}

.chapter-num {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #b8860b;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.chapter-card h3 {
  font-family: 'Kelt', serif;
  font-size: 1.2rem;
  color: #f4dd94;
  margin: 0 0 0.5rem 0;
  padding-top: 0;
  border: none;
}

.chapter-card p {
  font-size: 0.88rem;
  line-height: 1.5;
  color: #a0a5b0;
  margin: 0 0 1rem 0;
  flex: 1;
}

.chapter-btn {
  display: inline-block;
  font-family: 'Kelt', serif;
  font-size: 0.95rem;
  background: rgba(184, 134, 11, 0.15);
  color: #f4dd94 !important;
  border: 1px solid darkgoldenrod;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  text-align: center;
  text-decoration: none !important;
  transition: background 0.2s, color 0.2s;
}

.chapter-btn:hover {
  background: darkgoldenrod;
  color: #000 !important;
}
</style>
