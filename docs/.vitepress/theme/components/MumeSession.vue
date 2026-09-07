<template>
  <div class="mume-session msg_body">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style>
.mume-session {
  width: 100%;
  margin: 1rem 0;
  padding: 0.25rem;
  border: 1px solid #555555;
  box-sizing: border-box;
  background-color: #333333;
  color: silver;
}

.mume-session .session {
  font-family: 'Roboto Mono', 'Courier New', Courier, monospace;
  font-size: 0.875rem;
  background-color: #050505;
  color: #c0c0c0;
  padding: 1.25rem;
  border-radius: 6px;
  border: 1px solid #262626;
  overflow-x: auto;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  line-height: 1.4;
  margin: 1rem 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.mume-session .command {
  color: #ffffff;
  font-weight: bold;
}

.mume-session .narrate,
.mume-session .ansi-yellow {
  color: #ffff00;
}

.mume-session .damage,
.mume-session .ansi-red {
  color: #ff3333;
}

.mume-session .say,
.mume-session .hit,
.mume-session .ansi-cyan {
  color: #00ffff;
}

.mume-session .look,
.mume-session .tell,
.mume-session .ansi-green {
  color: #33cc00;
}
</style>
