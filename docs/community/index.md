<script setup>
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'

const router = useRouter()

onMounted(() => {
  router.go(withBase('/'))
})
</script>

<template>
  <div>
    <p>Redirecting to home...</p>
  </div>
</template>
