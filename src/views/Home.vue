<script setup>
import mumeLogoImg from '../assets/images/mume_logo.jpg'
import boromirHornImg from '../assets/images/boromir-horn.png'
import shieldGondorImg from '../assets/images/shield-gondor.png'
import doorsOfDurinImg from '../assets/images/doors-of-durin.png'
import fellowshipBwImg from '../assets/images/fellowship_bw.jpg'
</script>

<template>
  <div class="home">
    <div class="quote">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      MUME is a free multiplayer game based on J.R.R. Tolkien's Middle-earth. It is a world where players can explore, interact, and battle in a rich, text-based environment.
      <i class="fa fa-quote-right" aria-hidden="true"></i>
      <br>
      <cite>&mdash; The MUME Community</cite>
    </div>

    <div class="separator"></div>

    <div class="playnow">
      <div class="readytoexplore">Ready to explore Middle-earth?</div>
      <a href="https://mume.org/play/">Play Now</a>
    </div>

    <div class="separator"></div>

    <h1>MUME Community Projects</h1>

    <div class="card">
      <img :src="mumeLogoImg" alt="MMapper Logo">
      <div>
        <h3>MMapper</h3>
        <p>
          A graphical mapper for MUME. It helps you navigate the vast world of Middle-earth by providing a real-time map of your surroundings.
          Available for Windows, Linux, and macOS.
        </p>
        <a href="https://github.com/mume-mud/mmapper" target="_blank" rel="noopener">View on GitHub <i class="fa fa-github" aria-hidden="true"></i></a>
      </div>
    </div>

    <div class="card">
      <img :src="boromirHornImg" alt="Powwow Logo">
      <div>
        <h3>Powwow</h3>
        <p>
          A powerful, extensible client for MUME. It features a robust scripting engine, customizable UI, and built-in support for many MUME-specific features.
        </p>
        <a href="https://github.com/mume-mud/powwow" target="_blank" rel="noopener">View on GitHub <i class="fa fa-github" aria-hidden="true"></i></a>
      </div>
    </div>

    <div class="card">
      <img :src="shieldGondorImg" alt="PowTTY Logo">
      <div>
        <h3>PowTTY</h3>
        <p>
          A terminal-based client for MUME, optimized for speed and reliability. It's a great choice for players who prefer a traditional MUDding experience.
        </p>
        <a href="https://github.com/mume-mud/powtty" target="_blank" rel="noopener">View on GitHub <i class="fa fa-github" aria-hidden="true"></i></a>
      </div>
    </div>

    <div class="separator"></div>

    <h2>Stay Connected</h2>
    <div class="card">
      <img :src="doorsOfDurinImg" alt="Community Links">
      <div>
        <h3>Community Resources</h3>
        <p>
          Join our Discord server to chat with other players, find help, and stay up-to-date with the latest MUME news. Check out ElvenRunes for logs, stories, and more.
        </p>
        <router-link to="/links">Browse Links</router-link>
      </div>
    </div>

    <div class="card">
      <img :src="fellowshipBwImg" alt="Interviews">
      <div>
        <h3>Player Interviews</h3>
        <p>
          Read interviews with legendary MUME players and developers. Learn about the history of the game and the people who made it what it is today.
        </p>
        <router-link to="/interviews">Read Interviews</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 1rem;
}
</style>
