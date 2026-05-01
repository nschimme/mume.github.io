<template>
  <article role="main">
    <div role="banner">
      <h1>
        <img
          alt="Undertakings by the MUME Community"
          class="center"
          style="max-width:600px; width:100%; height:auto;"
          width="600"
          height="265"
          src="/Images/fellowship_bw.jpg"
        >
      </h1>
    </div>

    <section>
      <h2 class="h1">The MUME Community</h2>
      <p>
        MUME, Multi-Users in Middle-earth, is more than just a game—it's a vibrant community of Tolkien enthusiasts, developers, and players who have kept the world of Arda alive since 1991. Whether you are looking for social connection, gameplay resources, or technical tools, the community has something for you.
      </p>
      <p>
        Check out our
        <router-link to="/links">Links</router-link>
        for more resources across the web!
      </p>
    </section>

    <section>
      <h2 class="h1">Official Community Platforms</h2>

      <div class="card">
        <img alt="MUME Discord Server" loading="lazy" width="160" height="160" src="/favicon.ico">
        <div>
          <h3>MUME Discord Server</h3>
          <p>Join our Discord chat room run by MUME players. It's the central hub for real-time discussion, coordination, and community support.</p>
          <p><a href="https://discord.gg/XkZN55am9a" target="_blank" rel="noopener">Join Discord</a></p>
        </div>
      </div>

      <div class="card">
        <i class="fa fa-users fa-5x" aria-hidden="true" style="width:160px; text-align:center; color:#555;"></i>
        <div>
          <h3>ElvenRunes</h3>
          <p>ElvenRunes is the premier MUME community site. It features a forum, rateable logs, and a deep archive of community history.</p>
          <p><a href="http://elvenrunes.com/" target="_blank" rel="noopener">Visit ElvenRunes</a></p>
        </div>
      </div>

      <div class="card">
        <i class="fa fa-book fa-5x" aria-hidden="true" style="width:160px; text-align:center; color:#555;"></i>
        <div>
          <h3>MUME Wiki</h3>
          <p>The official Wiki for tips, hints, and all sorts of useful information. A collaborative effort by players to document the vast world of MUME.</p>
          <p><a href="https://mume.org/wiki/" target="_blank" rel="noopener">Explore the Wiki</a></p>
        </div>
      </div>

      <div class="card">
        <i class="fa fa-comments fa-5x" aria-hidden="true" style="width:160px; text-align:center; color:#555;"></i>
        <div>
          <h3>Official Forum</h3>
          <p>Our forum for questions and announcements. You can log in with your existing MUME characters—no registration required.</p>
          <p><a href="https://mume.org/forum/" target="_blank" rel="noopener">Go to Forum</a></p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="h1">Open Source Projects & Mappers</h2>
      <p>
        Many talented members of the community develop tools and clients to enhance the MUME experience. These projects are open-source and maintained by volunteers.
      </p>

      <div class="card">
        <img src="/Images/shield-gondor.png" alt="MMapper Logo" width="160" height="176">
        <div>
          <h3>MMapper</h3>
          <p>MMapper is a powerful mud mapper specifically written for MUME. It provides a visual representation of the game world as you explore.</p>
          <p><a href="https://mmapper.github.io/" target="_blank" rel="noopener">Visit MMapper Site</a></p>
        </div>
      </div>

      <div class="card">
        <img src="/Images/shield-mordor.png" alt="PowTTY Logo" width="160" height="176">
        <div>
          <h3>PowTTY</h3>
          <p>PowTTY is a MUD telnet client for Windows, based on PuTTY. It is optimized for playing MUME with features like remote editing support.</p>
          <p><a href="https://github.com/mume-erd/powtty" target="_blank" rel="noopener">Visit PowTTY Site</a></p>
        </div>
      </div>

      <div class="card">
        <img src="/Images/mume-classes.png" alt="Powwow Logo" width="160" height="149">
        <div>
          <h3>Powwow</h3>
          <p>The classic client for Unix/Linux users. Powwow is a feature-rich client that replaces standard telnet for the serious mudder.</p>
          <p><a href="https://github.com/mume-erd/powwow" target="_blank" rel="noopener">Visit Powwow Site</a></p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="h1">Connect With Us</h2>
      <div class="card">
        <i class="fa fa-facebook-official fa-5x" aria-hidden="true" style="width:160px; text-align:center; color:#555;"></i>
        <div>
          <h3>MUMErs on Facebook</h3>
          <p>A community-run group for MUME players on Facebook to share memories, screenshots, and updates.</p>
          <p><a href="https://www.facebook.com/groups/mumemud/" target="_blank" rel="noopener">Join Facebook Group</a></p>
        </div>
      </div>
    </section>

    <section class="playnow">
      <h2 class="h1">Speak, friend, and enter</h2>
      <div class="card">
        <img src="/Images/doors-of-durin.png" alt="Doors of Durin" width="160" height="216">
        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%;">
          <p style="font-style:italic; font-size:1.5em; margin-bottom:1em;">Speak, friend, and enter</p>
          <a href="https://mume.org/play/" class="button">Mellon</a>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'MUME Community - Tools, Projects, and Connections'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Explore the MUME community: official Discord, ElvenRunes, open-source mapping tools like MMapper, and player-developed clients for Multi-Users in Middle-earth.')
  }
})
</script>

<style scoped>
.button {
  background-color: #b8860b;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  border-radius: 50px;
  font-family: "Kelt", serif;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: transform 0.2s, background-color 0.2s;
}

.button:hover {
  background-color: #daa520;
  transform: scale(1.05);
}

.card i {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
