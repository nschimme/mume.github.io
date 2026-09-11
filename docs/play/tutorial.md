---
layout: page
title: Interactive Tutorial
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.location.replace('./tutorial/1')
  }
})
</script>

<div style="text-align: center; padding: 4rem 1rem;">
  <p>Loading interactive tutorial...</p>
</div>
