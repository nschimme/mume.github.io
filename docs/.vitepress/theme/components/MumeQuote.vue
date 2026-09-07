<template>
  <blockquote class="quote">
    <i class="fa fa-quote-left"></i>
    <slot />
    <i class="fa fa-quote-right"></i>
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
