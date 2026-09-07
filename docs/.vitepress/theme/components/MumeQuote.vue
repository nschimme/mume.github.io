<template>
  <div class="quote">
    <i class="fa fa-quote-left" aria-hidden="true"></i>
    <slot />
    <i class="fa fa-quote-right" aria-hidden="true"></i>
    <br v-if="cite" />
    <cite v-if="cite">&mdash; {{ cite }}</cite>
  </div>
</template>

<script setup>
defineProps({
  cite: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.quote {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-size: 1rem;
  font-family: 'Merriweather', serif;
  font-style: italic;
  color: #d1d5db;
  padding: 0;
  border: none;
  background: transparent;
}

.quote i {
  color: #cc9933;
  margin: 0 0.4em;
  font-size: 0.9em;
}

.quote cite {
  display: block;
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 0.5rem;
  font-style: normal;
}
</style>
