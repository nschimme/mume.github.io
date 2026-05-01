<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import fellowshipBwImg from '../assets/images/fellowship_bw.jpg'

const route = useRoute()
const interviews = [
  { id: 'motm', title: 'Mud of the Month', author: 'The Mud Connector', date: 'April 1998' },
  { id: 'azazello', title: 'Interview with Azazello', author: 'Antti', date: 'October 2010' },
  { id: 'dragoth', title: 'Interview with Dragoth', author: 'Antti', date: 'October 2010' },
  { id: 'genka', title: 'Interview with Genka', author: 'Antti', date: 'July 2013' },
  { id: 'norsu', title: 'Interview with Norsu', author: 'Antti', date: 'November 2010' },
  { id: 'salazar', title: 'Interview with Salazar', author: 'Antti', date: 'October 2010' },
  { id: 'staub', title: 'Interview with Staub', author: 'Antti', date: 'October 2010' },
  { id: 'stolb', title: 'Interview with Stolb', author: 'Antti', date: 'October 2010' },
  { id: 'tan', title: 'Interview with Tan', author: 'Antti', date: 'November 2012' },
  { id: 'timodeus', title: 'Interview with Timodeus', author: 'Antti', date: 'November 2011' },
  { id: 'vardamir', title: 'Interview with Vardamir', author: 'Antti', date: 'October 2020' },
  { id: 'woland', title: 'Interview with Woland', author: 'Antti', date: 'October 2010' },
  { id: 'ypsilon', title: 'Interview with Ypsilon', author: 'Antti', date: 'October 2010' }
]

const currentInterview = ref(null)
const interviewContent = ref('')
const isLoading = ref(false)
const error = ref(null)

const loadInterview = async (id) => {
  const interview = interviews.find(i => i.id === id)
  if (!interview) {
    currentInterview.value = null
    return
  }

  currentInterview.value = interview
  isLoading.value = true
  error.value = null

  try {
    const response = await fetch(`/interviews/${id}.md`)
    if (!response.ok) throw new Error('Interview not found')
    const text = await response.text()
    interviewContent.value = marked.parse(text)
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if (route.params.id) {
    loadInterview(route.params.id)
  }
})

watch(() => route.params.id, (newId) => {
  if (newId) {
    loadInterview(newId)
  } else {
    currentInterview.value = null
  }
})
</script>

<template>
  <div class="interviews">
    <div class="center-img">
      <img :src="fellowshipBwImg" alt="The Fellowship" class="banner-img">
    </div>

    <div v-if="!currentInterview">
      <h1>Player Interviews</h1>
      <p class="intro">
        A collection of interviews with players and developers from the MUME community,
        sharing their experiences and history within Middle-earth.
      </p>

      <div class="interviews-list">
        <div v-for="interview in interviews" :key="interview.id" class="card interview-card">
          <div class="interview-info">
            <h3>{{ interview.title }}</h3>
            <p class="meta">By {{ interview.author }} &bull; {{ interview.date }}</p>
          </div>
          <router-link :to="`/interviews/${interview.id}`" class="read-more">Read Interview</router-link>
        </div>
      </div>
    </div>

    <div v-else class="interview-detail">
      <router-link to="/interviews" class="back-link">&larr; Back to Interviews</router-link>

      <div v-if="isLoading" class="loading">Loading interview...</div>
      <div v-else-if="error" class="error">Error: {{ error }}</div>
      <div v-else class="content-rendered sml" v-html="interviewContent"></div>

      <div class="separator"></div>
      <router-link to="/interviews" class="back-link">&larr; Back to Interviews</router-link>
    </div>
  </div>
</template>

<style scoped>
.interviews {
  padding: 1rem;
}
.center-img {
  text-align: center;
  margin-bottom: 2rem;
}
.banner-img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
.intro {
  text-align: center;
  margin-bottom: 2.5rem;
}
.interviews-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.interview-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}
.meta {
  font-size: 0.85rem;
  color: #888;
  margin: 0;
}
.read-more {
  background: #cc9933;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}
.read-more:hover {
  background: #e4ba3c;
}
.interview-detail {
  max-width: 800px;
  margin: 0 auto;
}
.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #cc9933;
}
.content-rendered {
  line-height: 1.6;
}
.loading, .error {
  text-align: center;
  padding: 3rem;
}
</style>
