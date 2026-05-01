<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()
const navbarRef = ref(null)
const gandalfRef = ref(null)

const lastUpdated = new Date().toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

let prevScrollpos = window.pageYOffset

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width
  const navbar = navbarRef.value
  const gandalf = gandalfRef.value

  if (prevScrollpos > currentScrollPos || prevScrollpos < 10 || width <= 650) {
    if (navbar) navbar.style.top = "0"
    if (gandalf) gandalf.style.top = (width <= 650) ? "10px" : "22px"
  } else {
    if (navbar) navbar.style.top = "-70px"
    if (gandalf) gandalf.style.top = "-86px"
  }
  prevScrollpos = currentScrollPos
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <label class="toggle" for="toggle" @click="toggleMenu">
    <i class="fa fa-bars" aria-hidden="true"></i> <span>Menu</span>
  </label>
  <input class="toggle" id="toggle" type="checkbox" :checked="isMenuOpen" @change="isMenuOpen = $event.target.checked"/>

  <nav id="navbar" ref="navbarRef" role="navigation" aria-label="Main">
    <ul>
      <li>
        <a href="https://mume.org/">
          <i class="fa fa-home" aria-hidden="true" title="Home"></i>
          <span class="sr-only">Home</span>
        </a>
      </li>
      <li class="has_children">
        <a href="https://mume.org/about/">About<span class="caret down"></span></a>
        <ul>
          <li><a href="https://mume.org/help/features">Features</a></li>
          <li><a href="https://mume.org/about/history">History</a></li>
        </ul>
      </li>
      <li>
        <a href="https://mume.org/play/">Play<img alt="Play" height="16" width="16" style="padding-left:4px; vertical-align:-10%;" src="/favicon.ico"></a>
      </li>
      <li class="has_children">
        <router-link to="/" :class="{ current: route.path === '/' }">Community<span class="caret down"></span></router-link>
        <ul>
          <li><a href="https://discord.gg/XkZN55am9a" target="_blank" rel="noopener">Discord <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
          <li><a href="http://www.elvenrunes.com" target="_blank" rel="noopener">Elvenrunes <i class="fa fa-external-link" aria-hidden="true"></i></a></li>
          <li><router-link to="/links">Links</router-link></li>
          <li><router-link to="/interviews">Interviews</router-link></li>
          <li><a href="https://mume.org/wiki/">Wiki</a></li>
        </ul>
      </li>
      <li class="has_children">
        <a href="https://mume.org/news/">News<span class="caret down"></span></a>
        <ul>
          <li><a href="https://mume.org/news/war">War</a></li>
          <li><a href="https://mume.org/news/game/">Game News</a></li>
          <li><a href="https://mume.org/news/web" rel="nofollow">Web News</a></li>
        </ul>
      </li>
      <li class="has_children">
        <a href="https://mume.org/resources/">Resources<span class="caret down"></span></a>
        <ul>
          <li><a href="https://mume.org/resources/newcomers">Newcomers</a></li>
          <li><a href="https://mume.org/help/">Help</a></li>
          <li><a href="https://mume.org/rules/">Rules</a></li>
          <li><a href="https://mume.org/dictionary/">Dictionary</a></li>
          <li><a href="https://mume.org/resources/boards/">Boards</a></li>
          <li><a href="https://mume.org/download/" rel="nofollow">Download</a></li>
          <li><a href="https://mume.org/restricted/" rel="nofollow">Restricted</a></li>
        </ul>
      </li>
      <li>
        <a href="https://mume.org/search" rel="nofollow">
          <i class="fa fa-search" aria-hidden="true" title="Search"></i>
          <span class="sr-only">Search</span>
        </a>
      </li>
    </ul>
  </nav>

  <img id="gandalf" ref="gandalfRef" src="/Icons/gandalf_200.jpg" alt="Gandalf" width="45" height="45">

  <div class="content">
    <router-view />
  </div>

  <footer role="contentinfo">
    <div class="footer">
      <p>
        <a rel="alternate" type="application/rss+xml" href="https://mume.org/Import/News/rss.xml"><i class="fa fa-rss-square" aria-hidden="true" title="RSS"></i></a>
        Do you like MUME? Tell others on
        <a href="https://www.mudconnect.com/cgi-bin/search.cgi?mode=mud_listing&mud=MUME+-+Multi+Users+In+Middle+Earth" target="_blank" rel="noopener">The Mud Connector</a>.
      </p>
      <p>
        <a href="https://www.facebook.com/MUMEMUD/"><i class="fa fa-facebook-square" aria-hidden="true" title="Facebook"></i></a>
        Web site maintained by Manw&euml; and the <a href="https://mume.org/about/ainur">Valar</a>.
        Last updated {{ lastUpdated }}.
      </p>
      <p>
        MUME is hosted at <a href="https://www.heig-vd.ch" target="_blank" rel="noopener">HEIG-VD</a> (School of Engineering and Management Vaud, Switzerland).
      </p>
      <aside>
        MUME&rsquo;s logo is based on John Howe&rsquo;s
        &ldquo;<a href="https://mume.org/Images/gandalf.jpg">Gandalf</a>&rdquo; and
        &ldquo;<a href="https://mume.org/Images/horsemannight.jpg">Horseman in the Night</a>&rdquo; by
        Renea, Vair&euml;, and Manw&euml;.
      </aside>
    </div>
  </footer>
</template>

<style>
/* Base styles are in mume.css */
</style>
