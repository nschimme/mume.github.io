---
title: MUME Newbie & Beginner Survival Guide
description: Essential beginner guides, interactive tutorial, video guides, FAQs, and survival commands for new players joining Multi-Users in Middle-earth (MUME).
head:
  - - meta
    - property: og:title
      content: MUME Newbie & Beginner Survival Guide
  - - meta
    - property: og:description
      content: Essential beginner guides, interactive tutorial, video guides, FAQs, and survival commands for new players joining MUME.
---

# Information for Newcomers

<MumeQuote>
Oh yeah, have fun running around at night with no torch not being able to see a loving thing. … hardcore … Enjoy that. … Amazing game.
<template #cite>TotalBiscuit, <a href="https://forums.somethingawful.com/showthread.php?threadid=3238046#post369417316" target="_blank" rel="noopener">SA Forum Post</a></template>
</MumeQuote>

<MumeCallout
  title="Interactive Walkthrough"
  subtitle="Start Here"
  body="Experience your first hour in Middle-earth with our step-by-step interactive tutorial. Learn movement, basic commands, character creation, and map reading directly in your browser."
  actionText="Start Interactive Tutorial"
  actionHref="/play/tutorial"
  icon="fa-terminal"
  variant="gold"
/>

## 1. Essential Survival Knowledge

If you are new to Multi-User Dungeons (MUDs) or joining MUME for the first time, these key concepts will keep you alive during your early adventures:

<div class="newbie-grid">
  <div class="newbie-card">
    <div class="card-icon"><i class="fa fa-compass" aria-hidden="true"></i></div>
    <h3>Movement & Navigation</h3>
    <p>Move using compass directions (<b>north / n</b>, <b>south / s</b>, <b>east / e</b>, <b>west / w</b>, <b>up / u</b>, <b>down / d</b>). Type <code>exits</code> to list available exits in your room.</p>
  </div>

  <div class="newbie-card">
    <div class="card-icon"><i class="fa fa-eye" aria-hidden="true"></i></div>
    <h3>Looking & Examining</h3>
    <p>Use <code>look</code> to describe your current room. Use <code>examine &lt;thing&gt;</code> (or <code>exa</code>) to closely inspect characters, weapons, objects, and signs.</p>
  </div>

  <div class="newbie-card">
    <div class="card-icon"><i class="fa fa-sun-o" aria-hidden="true"></i></div>
    <h3>Light, Food & Water</h3>
    <p>Outside of towns, night is pitch black. Carry a lantern or torch. Eat food when hungry and refill your water skin (<code>pour fountain skin</code>) to maintain your health and movement.</p>
  </div>

  <div class="newbie-card">
    <div class="card-icon"><i class="fa fa-bed" aria-hidden="true"></i></div>
    <h3>Renting at Inns</h3>
    <p>To preserve your items when logging off, visit an Inn and type <code>offer</code> then <code>rent</code>. Simply quitting outside an Inn will cause you to lose your carried equipment!</p>
  </div>
</div>

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
.newbie-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin: 1.25rem 0 2rem;
}

@media (max-width: 650px) {
  .newbie-grid {
    grid-template-columns: 1fr;
  }
}

.newbie-card {
  background: #0a0d15;
  border: 1px solid rgba(215, 166, 63, 0.25);
  border-radius: 8px;
  padding: 1.25rem;
}

.card-icon {
  font-size: 1.5rem;
  color: goldenrod;
  margin-bottom: 0.5rem;
}

.newbie-card h3 {
  font-family: 'Kelt', serif;
  font-size: 1.2rem;
  color: #f4dd94;
  margin: 0 0 0.5rem 0;
  padding-top: 0;
}

.newbie-card p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #c4c8d0;
  margin: 0;
}
</style>
