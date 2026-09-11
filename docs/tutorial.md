---
title: Interactive MUME Tutorial & Walkthrough
description: Redirecting to the interactive tutorial under /play/tutorial...
head:
  - - meta
    - http-equiv: refresh
      content: 0; url=/play/tutorial
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.location.replace('/play/tutorial')
  }
})
</script>

# Redirecting to Interactive Tutorial...

If you are not redirected automatically, please [click here to go to the Interactive Tutorial](/play/tutorial).
