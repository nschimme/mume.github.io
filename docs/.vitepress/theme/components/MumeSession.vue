<template>
  <div class="session-terminal-window">
    <div class="terminal-bar" v-if="title">
      <span class="terminal-dot red"></span>
      <span class="terminal-dot yellow"></span>
      <span class="terminal-dot green"></span>
      <span class="terminal-title">{{ title }}</span>
    </div>
    <pre class="terminal-content"><slot></slot></pre>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'MUME Terminal Session'
  }
})
</script>

<style scoped>
.session-terminal-window {
  background-color: #050505;
  border: 1px solid #2d2d2d;
  border-radius: 6px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.terminal-bar {
  background-color: #1a1a1a;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2d2d2d;
}

.terminal-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
  display: inline-block;
}

.terminal-dot.red { background-color: #ff5f56; }
.terminal-dot.yellow { background-color: #ffbd2e; }
.terminal-dot.green { background-color: #27c93f; }

.terminal-title {
  color: #888;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: auto;
}

.terminal-content {
  color: #c0c0c0;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.45;
  padding: 1.25rem;
  margin: 0;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
