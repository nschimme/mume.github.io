<template>
  <article role="main">
    <div role="banner">
      <h1>
        <img
          alt="MUME Interviews"
          class="center"
          style="max-width:600px; width:100%; height:auto;"
          width="600"
          height="265"
          src="/Images/fellowship_bw.jpg"
        >
      </h1>
    </div>

    <div v-if="selectedInterview" class="interview-detail">
      <button @click="selectedInterview = null" class="back-button">
        <i class="fa fa-arrow-left"></i> Back to list
      </button>
      <div v-html="renderedMarkdown" class="markdown-body"></div>
    </div>

    <div v-else>
      <section>
        <h2 class="h1">MUME Interviews</h2>
        <p>This section is devoted to the legends of MUME—those who have reached the ultimate plateau of Level 100, and the staff who keep the world turning.</p>
      </section>

      <section>
        <h2 class="h1">Level 100 Character Interviews</h2>
        <div class="card-grid">
          <div
            v-for="interview in level100"
            :key="interview.id"
            class="card mini clickable"
            @click="loadInterview(interview)"
          >
            <div>
              <h3>{{ interview.name }}</h3>
              <p>{{ interview.description }}</p>
              <span class="read-more">Read Interview <i class="fa fa-chevron-right"></i></span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="h1">Well-known Players & Staff</h2>
        <div class="card-grid">
          <div class="card mini clickable" @click="loadInterview({id: 'timodeus', name: 'Timodeus'})">
            <div>
              <h3>Timodeus</h3>
              <p>The friendly Hobbit-Dragon (Vala Architect)</p>
              <span class="read-more">Read Interview <i class="fa fa-chevron-right"></i></span>
            </div>
          </div>
          <div class="card mini clickable" @click="loadInterview({id: 'motm', name: 'Mud Connector Interview'})">
            <div>
              <h3>Mud Connector Interview</h3>
              <p>Historical interview from 1998 (Mud of the Month)</p>
              <span class="read-more">Read Interview <i class="fa fa-chevron-right"></i></span>
            </div>
          </div>
        </div>
        <div class="card" style="margin-top: 1rem;">
          <div>
            <h3>External Resources</h3>
            <ul>
              <li><a href="http://www.roguelikeradio.com/2017/11/episode-141-muds.html" target="_blank" rel="noopener">Roguelike Radio Podcast</a> - Feat. Pier Donini (MUME developer).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { marked } from 'marked'

const level100 = [
  { id: 'norsu', name: 'Norsu', description: 'Tarkhnarb Champion' },
  { id: 'azazello', name: 'Azazello', description: 'Tarkhnarb Rider' },
  { id: 'ypsilon', name: 'Ypsilon', description: 'Noldorin Quickblade' },
  { id: 'woland', name: 'Woland', description: 'Black Númenórean Wanderer' },
  { id: 'stolb', name: 'Stolb', description: 'Tarkhnarb Weaponsmaster' },
  { id: 'staub', name: 'Staub', description: 'Dwarven Veteran' },
  { id: 'vardamir', name: 'Vardamir', description: 'Black Númenórean Scholar' },
  { id: 'salazar', name: 'Salazár', description: 'Dúnadan Hero' },
  { id: 'dragoth', name: 'Dragóth', description: 'Tarkhnarb Soldier' },
  { id: 'tan', name: 'Tan', description: 'Hill Troll Warrior' },
  { id: 'genka', name: 'Genka', description: 'Dwarven Hero' }
]

const selectedInterview = ref(null)
const markdownContent = ref('')

const renderedMarkdown = computed(() => {
  return marked.parse(markdownContent.value)
})

const loadInterview = async (interview) => {
  try {
    const response = await fetch(`/interviews/${interview.id}.md`)
    if (response.ok) {
      markdownContent.value = await response.text()
      selectedInterview.value = interview
      window.scrollTo(0, 0)
    } else {
      // Fallback for missing MD files
      markdownContent.value = `# ${interview.name}\n\nInterview content coming soon!`
      selectedInterview.value = interview
    }
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  document.title = 'MUME Interviews - Legends of Middle-earth'
})
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
.card.mini {
  margin-bottom: 0;
  padding: 1.5rem;
  transition: transform 0.2s, background-color 0.2s;
}
.clickable {
  cursor: pointer;
}
.clickable:hover {
  background-color: #1a1a1a;
  transform: translateY(-2px);
}
.read-more {
  color: #b8860b;
  font-size: 0.9rem;
  font-weight: bold;
}

.back-button {
  background: none;
  border: 1px solid #b8860b;
  color: #b8860b;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: "Kelt", serif;
  margin-bottom: 2rem;
  transition: all 0.2s;
}
.back-button:hover {
  background: #b8860b;
  color: white;
}

.markdown-body {
  color: #ccc;
  line-height: 1.6;
}
.markdown-body :deep(h1) {
  color: #b8860b;
  font-family: "Kelt", serif;
}
.markdown-body :deep(h2), .markdown-body :deep(h3) {
  color: silver;
}
.markdown-body :deep(code) {
  background: #222;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}
</style>
