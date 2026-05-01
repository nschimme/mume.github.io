<script setup>
import balrogImg from '../assets/images/balrog.png'
</script>

<template>
  <div class="not-found">
    <h1>404 - Fly, you fools!</h1>
    <div class="center-img">
      <img :src="balrogImg" alt="Balrog">
    </div>
    <p>You have wandered into the shadow. The page you are looking for does not exist.</p>
    <router-link to="/" class="back-home">Return to the Light</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem 1rem;
}
.center-img {
  margin: 2rem 0;
}
.center-img img {
  max-width: 200px;
  height: auto;
}
h1 {
  color: #cc9933;
}
.back-home {
  display: inline-block;
  margin-top: 2rem;
  background: #cc9933;
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}
</style>
