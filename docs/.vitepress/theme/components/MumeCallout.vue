<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  },
  actionText: {
    type: String,
    required: true
  },
  actionHref: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'fa-compass'
  },
  variant: {
    type: String,
    default: 'gold' // 'gold' | 'blue'
  }
})
</script>

<template>
  <aside class="mume-callout" :class="`variant-${variant}`">
    <div class="callout-icon-box" v-if="icon">
      <i :class="['fa', icon]" aria-hidden="true"></i>
    </div>
    <div class="callout-content">
      <div v-if="subtitle" class="callout-subtitle">{{ subtitle }}</div>
      <h3 class="callout-title">{{ title }}</h3>
      <p v-if="body" class="callout-body">{{ body }}</p>
      <slot></slot>
    </div>
    <div class="callout-action">
      <a :href="actionHref" class="callout-btn">
        {{ actionText }}
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </a>
    </div>
  </aside>
</template>

<style scoped>
.mume-callout {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: linear-gradient(135deg, #0b0d14 0%, #111420 100%);
  border: 1px solid rgba(215, 166, 63, 0.35);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
}

.variant-blue {
  border-color: rgba(116, 169, 190, 0.35);
}

@media (max-width: 650px) {
  .mume-callout {
    flex-direction: column;
    align-items: flex-start;
  }
  .callout-action {
    width: 100%;
    margin-top: 0.5rem;
  }
  .callout-btn {
    width: 100%;
    justify-content: center;
  }
}

.callout-icon-box {
  font-size: 2.2rem;
  color: darkgoldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.variant-blue .callout-icon-box {
  color: #74a9be;
}

.callout-content {
  flex: 1;
}

.callout-subtitle {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: goldenrod;
  margin-bottom: 0.25rem;
}

.variant-blue .callout-subtitle {
  color: #74a9be;
}

.callout-title {
  font-family: 'Kelt', serif;
  font-size: 1.3rem;
  color: #f4dd94;
  margin: 0 0 0.25rem 0;
  line-height: 1.25;
}

.callout-body {
  font-size: 0.9rem;
  color: #c4c8d0;
  margin: 0;
  line-height: 1.45;
}

.callout-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: darkgoldenrod;
  color: #000 !important;
  font-family: 'Kelt', serif;
  font-size: 1rem;
  padding: 0.55rem 1.2rem;
  border-radius: 25px;
  text-decoration: none !important;
  font-weight: bold;
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.2s ease;
  min-height: 44px;
}

.variant-blue .callout-btn {
  background-color: #74a9be;
  color: #0b0d14 !important;
}

.callout-btn:hover, .callout-btn:focus-visible {
  background-color: goldenrod;
  transform: scale(1.03);
}

.variant-blue .callout-btn:hover, .variant-blue .callout-btn:focus-visible {
  background-color: #a1cad9;
}

.callout-btn:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .callout-btn {
    transition: none !important;
    transform: none !important;
  }
}
</style>
