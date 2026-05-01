<template>
  <article role="main">
    <div role="banner">
      <h1>
        <img
          alt="Related Links"
          class="center"
          style="max-width:600px; width:100%; height:auto;"
          width="600"
          height="265"
          src="/Images/fellowship_bw.jpg"
        >
      </h1>
    </div>

    <section>
      <h2 class="h1">Related Links</h2>
      <p>A collection of resources, communities, and Tolkien-related websites curated by the MUME community.</p>
    </section>

    <section>
      <h2 class="h1">Link us back!</h2>
      <div class="card">
        <img src="/Images/mume_banner.gif" alt="MUME Banner" width="440" height="65" style="max-width:100%; height:auto;">
        <div>
          <h3>Use this banner on your site</h3>
          <p>Help spread the word about MUME. Copy the code below to link to us:</p>
          <code>&lt;a href="https://mume.org"&gt;&lt;img src="https://mume.org/Images/mume_banner.gif" alt="MUME"&gt;&lt;/a&gt;</code>
        </div>
      </div>
    </section>

    <section>
      <h2 class="h1">Other MUME Web Pages</h2>
      <ul>
        <li><a href="https://discord.gg/XkZN55am9a" target="_blank" rel="noopener"><strong>MUME Discord</strong></a> - Join our Discord chat room run by MUME players.</li>
        <li><a href="http://www.elvenrunes.com/" target="_blank" rel="noopener"><strong>Elvenrunes</strong></a> - Gossip, logs, discussions, tales, generators, and the community.</li>
        <li><a href="http://axel.trocha.com/mume/" target="_blank" rel="noopener"><strong>Axel's MUME Page</strong></a> - Warlords history, powwow scripts, logs.</li>
        <li><a href="https://groups.google.com/u/0/g/mume-announcements" target="_blank" rel="noopener"><strong>MUME Announcements</strong></a> - Google Group for updates and news.</li>
      </ul>
    </section>

    <section>
      <h2 class="h1">Tolkien Resources</h2>
      <div class="card">
        <div>
          <h3>Encyclopedias & Lore</h3>
          <ul>
            <li><a href="http://www.glyphweb.com/arda/" target="_blank" rel="noopener">The Encyclopedia of Arda</a></li>
            <li><a href="http://tolkiengateway.net/wiki/MUME" target="_blank" rel="noopener">Tolkien Gateway</a></li>
            <li><a href="http://www.uib.no/people/hnohf/" target="_blank" rel="noopener">Ardalambion (Tolkien Languages)</a></li>
          </ul>
        </div>
        <div>
          <h3>Communities & News</h3>
          <ul>
            <li><a href="http://theonering.net/" target="_blank" rel="noopener">TheOneRing.net</a></li>
            <li><a href="https://en.wikipedia.org/wiki/MUME" target="_blank" rel="noopener">MUME on Wikipedia</a></li>
            <li><a href="http://tolkien.cro.net/" target="_blank" rel="noopener">The Grey Havens</a></li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 class="h1">MUD Databases</h2>
      <ul>
        <li><a href="https://www.mudconnect.com/reviews/muds/MUME.html" target="_blank" rel="noopener">The Mud Connector</a></li>
        <li><a href="https://www.topmudsites.com/forums/muddisplay.php?mudid=MUME" target="_blank" rel="noopener">The Top Mud Sites</a></li>
        <li><a href="http://mudstats.com/World/MUME-MultiUsersInMiddleEarth" target="_blank" rel="noopener">Mud Stats</a></li>
        <li><a href="https://grapevine.haus/games/MUME" target="_blank" rel="noopener">Grapevine</a></li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'MUME Community Links - Resources & Tolkien Lore'
})
</script>
