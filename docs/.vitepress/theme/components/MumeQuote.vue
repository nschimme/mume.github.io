<template>
  <div class="quote">
    <i class="fa fa-quote-left" aria-hidden="true"></i>
    <slot />
    <i class="fa fa-quote-right" aria-hidden="true"></i>
    <br v-if="cite || $slots.cite" />
    <cite v-if="cite || $slots.cite">
      &mdash; <slot name="cite">{{ cite }}</slot>
    </cite>
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
