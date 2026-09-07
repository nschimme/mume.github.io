<template>
  <blockquote class="quote">
    <slot />
    <footer v-if="cite || $slots.cite">
      &mdash; <slot name="cite">{{ cite }}</slot>
    </footer>
  </blockquote>
</template>

<script setup>
defineProps({
  cite: {
    type: String,
    default: ''
  }
})
</script>
