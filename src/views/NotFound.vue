<template>
  <article role="main">
    <div role="banner">
      <h1>404 - Page Not Found</h1>
    </div>

    <section>
      <div class="card">
        <img src="/Images/balrog.png" alt="Balrog" width="160" height="93">
        <div>
          <h3>The path is blocked...</h3>
          <p>The page you are looking for does not exist. It may have been moved or deleted.</p>
          <p>
            <router-link to="/">Return to the Community Home</router-link>
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = '404 - Page Not Found'
})
</script>
