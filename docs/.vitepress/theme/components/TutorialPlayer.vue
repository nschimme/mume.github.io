<script setup>
/*
  Interactive new-player tutorial component driven dynamically by chapter Markdown files.
  Streamlined terminal output: immediate MUD output execution without extra "Press Enter to carry on" pauses.
  Clear end-of-tutorial handover options to Play Hub, Browser Client, or Newcomers Guide.
*/
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useData, useRoute, useRouter, withBase } from 'vitepress'
import { data as allChapters } from '../../../play/tutorial/chapters.data.js'
import logoImg from '../../../assets/images/mume_logo.jpg'

const PLAY_HUB_URL = '/play/'
const BROWSER_PLAY_URL = '/play/browser'
const NEWCOMERS_URL = '/resources/newcomers'


const router = useRouter()
const route = useRoute()
const { frontmatter } = useData()

const currentChapterObj = computed(() => {
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return allChapters.find(c => c.url === currentPath || currentPath.endsWith(c.filename)) || allChapters[0]
})

const chapterNum = computed(() => currentChapterObj.value ? currentChapterObj.value.chapterNum : 1)
const totalChapters = computed(() => allChapters.length)
const chapterTitle = computed(() => frontmatter.value?.title || currentChapterObj.value?.title || 'Tutorial')

const currentIndex = computed(() => allChapters.findIndex(c => c.chapterNum === chapterNum.value))

const prevChapterUrl = computed(() => {
  const idx = currentIndex.value
  return idx > 0 ? allChapters[idx - 1].url : null
})

const nextChapterUrl = computed(() => {
  const idx = currentIndex.value
  return idx >= 0 && idx < allChapters.length - 1 ? allChapters[idx + 1].url : null
})

const teachList = computed(() => frontmatter.value?.teach || currentChapterObj.value?.teach || [])

// Multi-step in-chapter practice steps
const stepsList = computed(() => {
  if (frontmatter.value?.steps && frontmatter.value.steps.length) {
    return frontmatter.value.steps
  }
  if (frontmatter.value?.practice) {
    return [{
      ask: frontmatter.value.practice,
      accept: frontmatter.value.accept || [frontmatter.value.practice],
      hint: frontmatter.value.hint || `Type: ${frontmatter.value.practice}`,
      example: frontmatter.value.example || null
    }]
  }
  return []
})

const subStepIdx = ref(0)
const currentSubStep = computed(() => stepsList.value[subStepIdx.value] || null)

// Driven 100% dynamically from chapter frontmatter
const mumeResponses = computed(() => frontmatter.value?.responses || currentChapterObj.value?.responses || {})

const log = ref([])
const finished = ref(false)
const entry = ref('')
const isSheetOpen = ref(false)

const logEl = ref(null)
const inputEl = ref(null)

const stepLabel = computed(() => `Chapter ${chapterNum.value} of ${totalChapters.value}`)

function focusInput() {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      if (inputEl.value) inputEl.value.focus()
    }, 50)
  }
}

function navigateToUrl(url) {
  if (!url) return
  const targetUrl = withBase(url)
  if (router && router.go) {
    router.go(targetUrl).catch(() => {
      if (typeof window !== 'undefined') window.location.href = targetUrl
    })
  } else if (typeof window !== 'undefined') {
    window.location.href = targetUrl
  }
}

function scrollLog() {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const el = logEl.value
      if (el) el.scrollTop = el.scrollHeight
    }, 50)
  }
}

function renderStepLog() {
  subStepIdx.value = 0
  finished.value = false

  const newLog = []
  newLog.push({
    kind: 'lesson',
    chapterNum: chapterNum.value,
    title: chapterTitle.value,
    teach: teachList.value,
    note: currentSubStep.value ? currentSubStep.value.note : null,
    ask: currentSubStep.value ? currentSubStep.value.ask : null
  })

  log.value = newLog
  scrollLog()
  focusInput()
}

function advanceNext() {
  if (nextChapterUrl.value) {
    navigateToUrl(nextChapterUrl.value)
  } else {
    finished.value = true
    log.value.push({ kind: 'end' })
    scrollLog()
  }
}

function advanceSubStep() {
  subStepIdx.value++
  if (subStepIdx.value < stepsList.value.length) {
    const nextSub = currentSubStep.value
    log.value.push({
      kind: 'prompt_next',
      note: nextSub.note || null,
      ask: nextSub.ask
    })
    scrollLog()
  } else {
    advanceNext()
  }
}

function submit() {
  const raw = entry.value.trim()
  const cmd = raw.toLowerCase()
  entry.value = ''
  if (raw) { log.value.push({ kind: 'echo', text: raw }) }

  if (cmd === 'skip') { advanceNext(); focusInput(); return }
  if (cmd === 'tutorial') { navigateToUrl(allChapters[0]?.url || '/play/tutorial/1-orientation'); focusInput(); return }

  const curStep = currentSubStep.value

  if (!curStep) {
    if (cmd && mumeResponses.value[cmd]) {
      log.value.push({ kind: 'example', body: mumeResponses.value[cmd] })
      scrollLog()
    } else {
      advanceNext()
    }
    focusInput()
    return
  }

  if (!cmd) {
    log.value.push({ kind: 'error', text: curStep.hint || (`Type: ${curStep.ask}`) })
    scrollLog()
    focusInput()
    return
  }

  const accept = curStep.accept || [curStep.ask]
  const ok = accept.some(a => a.toLowerCase() === cmd)

  if (ok) {
    const body = curStep.example ? curStep.example.replace(/^>[^\n]*\n?/, '') : (mumeResponses.value[cmd] || '')
    if (body) {
      log.value.push({ kind: 'example', body })
    }
    advanceSubStep()
  } else if (mumeResponses.value[cmd]) {
    log.value.push({ kind: 'example', body: mumeResponses.value[cmd] })
    log.value.push({ kind: 'error', text: 'Good try! To proceed in this step, ' + (curStep.hint || (`try: ${curStep.ask}`)) })
    scrollLog()
  } else {
    log.value.push({ kind: 'error', text: 'MUME does not know that one here. ' + (curStep.hint || (`Try: ${curStep.ask}`)) })
    scrollLog()
  }
  focusInput()
}

watch(() => route.path, () => {
  renderStepLog()
}, { immediate: true })

function handleGlobalKeydown(e) {
  if (e.key === 'Enter') {
    submit()
  }
}

onMounted(() => {
  renderStepLog()
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleGlobalKeydown)
    focusInput()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleGlobalKeydown)
  }
})
</script>

<template>
  <div class="tut">
    <div class="tut-frame">
      <div class="tut-head">
        <img class="tut-logo" :src="logoImg" alt="MUME" />
        <div class="tut-heading">
          <div class="tut-title-row">
            <span class="tut-title">Chapter {{ chapterNum }}: {{ chapterTitle }}</span>
            <button type="button" class="tut-sheet-toggle-btn" @click="isSheetOpen = !isSheetOpen" aria-label="Toggle Command Sheet">
              Commands
            </button>
          </div>
          <span class="tut-sub">Your first hour in Middle-earth</span>
        </div>
        <div class="tut-progress">
          <span class="tut-ticks">
            <button v-for="ch in allChapters" :key="ch.chapterNum"
                    type="button"
                    class="tut-tick"
                    :class="{
                      done: ch.chapterNum < chapterNum,
                      now: ch.chapterNum === chapterNum,
                      clickable: ch.chapterNum !== chapterNum
                    }"
                    :title="'Go to Chapter ' + ch.chapterNum + ': ' + ch.title"
                    @click="navigateToUrl(ch.url)"></button>
          </span>
          <span class="tut-step">{{ stepLabel }}</span>
        </div>
      </div>

      <div class="tut-body">
        <div class="tut-term">
          <div class="tut-log" ref="logEl">
            <div v-for="(b, i) in log" :key="i" class="tut-block">
              <template v-if="b.kind === 'lesson'">
                <hr class="tut-rule" />
                <div class="tut-eyebrow">Chapter {{ b.chapterNum }} of {{ totalChapters }}</div>
                <h3 class="tut-h">{{ b.title }}</h3>

                <!-- Render markdown lesson content -->
                <div class="tut-md-content">
                  <slot />
                </div>

                <dl v-if="b.teach && b.teach.length" class="tut-teach">
                  <template v-for="(t, k) in b.teach" :key="k">
                    <dt>{{ t.command }}</dt><dd>{{ t.desc }}</dd>
                  </template>
                </dl>

                <p v-if="b.note" class="tut-note-line">{{ b.note }}</p>
                <p class="tut-ask" v-if="b.ask">Type <span class="tut-cmd">{{ b.ask }}</span> to carry on.</p>
              </template>

              <template v-else-if="b.kind === 'prompt_next'">
                <p v-if="b.note" class="tut-note-line">{{ b.note }}</p>
                <p class="tut-ask">
                  Great job! Now type <span class="tut-cmd">{{ b.ask }}</span> to carry on.
                </p>
              </template>

              <p v-else-if="b.kind === 'echo'" class="tut-echo">&gt; {{ b.text }}</p>

              <pre v-else-if="b.kind === 'example'" class="tut-example">{{ b.body }}</pre>

              <p v-else-if="b.kind === 'error'" class="tut-err">{{ b.text }}</p>

              <template v-else-if="b.kind === 'end'">
                <hr class="tut-rule" />
                <div class="tut-eyebrow">Congratulations!</div>
                <h3 class="tut-h">You have completed the tutorial!</h3>
                <p class="tut-line">You have mastered movement, equipment, stats, combat, scouting, skills, and resting in Middle-earth.</p>

                <div class="tut-end-actions">
                  <a class="tut-enter" :href="withBase(BROWSER_PLAY_URL)">Play MUME Now (Web Client) &rarr;</a>
                  <a class="tut-secondary-link" :href="withBase(NEWCOMERS_URL)">Explore Newcomers Guide</a>
                  <a class="tut-secondary-link" :href="withBase(PLAY_HUB_URL)">Back to Play Hub</a>
                </div>
                <p class="tut-note">You can retake any chapter at any time from the top progress bar or the Newcomers Hub.</p>
              </template>
            </div>
          </div>

          <div class="tut-prompt">
            <span class="tut-caret">&gt;</span>
            <input ref="inputEl" v-model="entry" @keydown.enter.prevent="submit"
                   autocomplete="off" spellcheck="false"
                   :placeholder="finished ? 'type tutorial to replay' : 'type here, then press Enter'"
                   aria-label="Type a command" />
            <button type="button" class="tut-send-btn" @click="submit" aria-label="Send Command">
              Send
            </button>
          </div>
        </div>

        <!-- Command Sheet (Desktop sidebar & Mobile modal/drawer) -->
        <aside class="tut-sheet" :class="{ open: isSheetOpen }">
          <div class="tut-sheet-bar">
            <span>Command sheet</span>
            <button type="button" class="tut-sheet-close" @click="isSheetOpen = false" aria-label="Close command sheet">&times;</button>
          </div>
          <div class="tut-sheet-body">
            <p v-if="!teachList.length" class="tut-empty">No special commands listed for this chapter.</p>
            <template v-else>
              <div class="tut-grp">Chapter {{ chapterNum }} Commands</div>
              <dl>
                <template v-for="(t, ti) in teachList" :key="ti">
                  <dt>{{ t.command }}</dt><dd>{{ t.desc }}</dd>
                </template>
              </dl>
            </template>
          </div>
        </aside>
      </div>

      <div class="tut-sheet-backdrop" v-if="isSheetOpen" @click="isSheetOpen = false"></div>

      <div class="tut-controls">
        <a class="tut-hub-ghost" :href="withBase('/resources/newcomers')">← Newcomers Hub</a>
        <button v-if="prevChapterUrl" class="tut-ghost" @click="navigateToUrl(prevChapterUrl)">← Previous Chapter</button>
        <button v-if="nextChapterUrl" class="tut-ghost" @click="navigateToUrl(nextChapterUrl)">Next Chapter →</button>
      </div>
    </div>
  </div>
</template>

<style>
.tut { margin: 1.5rem 0 2rem; }
.tut-frame { border: 1px solid rgba(215,166,63,.35); border-radius: 12px; background: #0b0b0d; overflow: hidden; box-shadow: 0 18px 50px rgba(0,0,0,.45); }

.tut-head { display: flex; align-items: center; gap: 14px; padding: 12px 16px; border-bottom: 1px solid rgba(215,166,63,.25); background: linear-gradient(180deg,#15130c,#0b0b0d); }
.tut-logo { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; flex: none; }
.tut-heading { display: flex; flex-direction: column; line-height: 1.15; margin-right: auto; }
.tut-title { font-family: 'Kelt', serif; color: #f4dd94; font-size: 22px; }
.tut-sub { color: #9a927f; font-size: 12.5px; }
.tut-progress { display: flex; align-items: center; gap: 10px; }
.tut-ticks { display: inline-flex; gap: 5px; align-items: center; }
.tut-tick { width: 10px; height: 10px; border-radius: 50%; background: #2a2a2a; border: none; padding: 0; cursor: default; transition: background .3s, transform .2s, box-shadow .2s; }
.tut-tick.done { background: #a9812a; }
.tut-tick.now { background: #f4dd94; box-shadow: 0 0 8px rgba(244,221,148,.6); transform: scale(1.15); }
.tut-tick.clickable { cursor: pointer; }
.tut-tick.clickable:hover { background: #ffd966; transform: scale(1.25); }
.tut-step { color: #9a927f; font-size: 12.5px; white-space: nowrap; }

.tut-body { display: grid; grid-template-columns: 1fr 260px; gap: 0; }
@media (max-width: 720px) { .tut-body { grid-template-columns: 1fr; } }

.tut-term { display: flex; flex-direction: column; min-width: 0; }
.tut-log { height: 460px; overflow-y: auto; padding: 6px 18px 14px; scroll-behavior: smooth; }
.tut-rule { border: 0; border-top: 1px solid #23262e; margin: 20px 0 14px; }
.tut-eyebrow { text-transform: uppercase; letter-spacing: .14em; font-size: 11px; color: #b8860b; margin-bottom: 4px; }
.tut-h { font-family: 'Kelt', serif; color: #e6d79a; font-size: 26px; margin: 0 0 .4em; border: 0; padding: 0; }
.tut-line { color: #cdc7b8; font-size: 15px; line-height: 1.6; margin: 0 0 12px; }
.tut-teach { display: grid; grid-template-columns: max-content 1fr; gap: 4px 16px; margin: 4px 0 14px; padding: 12px 14px; background: #101216; border: 1px solid #23262e; border-radius: 8px; }
.tut-teach dt { color: #d8b04a; font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 13px; }
.tut-teach dd { color: #9a9a9a; margin: 0; font-size: 13.5px; }

.tut-note-line { color: #c4ba9d; font-size: 14px; line-height: 1.5; margin: 10px 0 4px; font-style: italic; background: rgba(215,166,63,.06); padding: 8px 12px; border-left: 3px solid darkgoldenrod; border-radius: 0 6px 6px 0; }
.tut-ask { color: #7fb0c8; font-size: 14px; margin: 8px 0 4px; }
.tut-cmd { font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; color: #f4dd94; background: rgba(184,134,11,.12); padding: 1px 6px; border-radius: 4px; }
.tut-echo { font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; color: #cfcfcf; margin: 10px 0 2px; }
.tut-example { font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 12.5px; color: #b9d3c2; white-space: pre-wrap; background: #06120c; border: 1px solid #17301f; border-radius: 8px; padding: 12px 14px; margin: 6px 0 8px; }
.tut-err { color: #d98a7f; font-size: 14px; margin: 8px 0; }

.tut-end-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin: 16px 0 16px; }
.tut-enter { display: inline-block; font-family: 'Kelt', serif; font-size: 1.15rem; background: darkgoldenrod; color: white !important; padding: 0.5em 2em; border-radius: 3.75rem; box-shadow: 1px 5px 10px 0px rgba(184, 134, 11, 0.5); text-decoration: none !important; transition: color .2s; }
.tut-enter:hover, .tut-enter:focus-visible { color: #3a3a3a !important; text-decoration: none !important; }
.tut-secondary-link { display: inline-block; font-family: 'Kelt', serif; font-size: 1.05rem; background: rgba(10, 13, 21, 0.75); color: white !important; border: 2px solid darkgoldenrod; padding: 0.5em 1.5em; border-radius: 3.75rem; box-shadow: 1px 5px 10px 0px rgba(184, 134, 11, 0.5); text-decoration: none !important; transition: background-color .2s, color .2s; }
.tut-secondary-link:hover, .tut-secondary-link:focus-visible { background: darkgoldenrod; color: #3a3a3a !important; text-decoration: none !important; }
.tut-note { color: #8f8a7d; font-size: 12.5px; margin: 4px 0 6px; }

.tut-prompt { display: flex; align-items: center; gap: 8px; border-top: 1px solid #23262e; padding: 12px 18px; background: #08080a; }
.tut-caret { color: #d8b04a; font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; }
.tut-prompt input { flex: 1; background: transparent; border: none; outline: none; color: #eaeaea; font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 14px; }
.tut-prompt input::placeholder { color: #5f5f5f; }

.tut-sheet { border-left: 1px solid #23262e; background: #08090c; display: flex; flex-direction: column; }
@media (max-width: 720px) { .tut-sheet { border-left: 0; border-top: 1px solid #23262e; } }
.tut-sheet-bar { color: #d8b04a; font-family: 'Kelt', serif; font-size: 18px; padding: 12px 14px 8px; border-bottom: 1px solid #1c1e24; }
.tut-sheet-body { padding: 10px 14px 14px; overflow-y: auto; max-height: 472px; }
.tut-empty { color: #7d7d7d; font-size: 13px; }
.tut-grp { color: #7d7d7d; border-bottom: 1px solid #242424; padding-bottom: 3px; margin: 12px 0 8px; font-size: 11.5px; text-transform: uppercase; letter-spacing: .08em; }
.tut-sheet-body dl { display: grid; grid-template-columns: max-content 1fr; gap: 3px 12px; margin: 0; }
.tut-sheet-body dt { color: #d8b04a; font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 12.5px; }
.tut-sheet-body dd { color: #9a9a9a; margin: 0; font-size: 12.5px; }

.tut-title-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.tut-sheet-toggle-btn { display: none; background: rgba(184,134,11,.18); border: 1px solid rgba(215,166,63,.4); color: #f4dd94; font-size: 11px; padding: 2px 8px; border-radius: 12px; cursor: pointer; }
.tut-hub-ghost { display: inline-block; background: none; border: 1px solid rgba(215,166,63,.4); color: #9a927f !important; border-radius: 30px; padding: 7px 16px; font-size: 13px; text-decoration: none !important; margin-right: 12px; font-family: 'Merriweather', serif; transition: background .2s, color .2s; }
.tut-hub-ghost:hover { background: rgba(184,134,11,.12); color: #f4dd94 !important; }

.tut-send-btn { background: darkgoldenrod; border: none; color: #fff; font-family: 'Kelt', serif; font-size: 13px; padding: 4px 12px; border-radius: 14px; cursor: pointer; font-weight: bold; }

.tut-sheet-close { display: none; background: none; border: none; color: #9a927f; font-size: 20px; cursor: pointer; padding: 0 4px; }

.tut-controls { border-top: 1px solid #23262e; padding: 10px 16px; text-align: right; background: #0b0b0d; }
.tut-ghost { background: none; border: 1px solid #b8860b; color: #d7a63f; border-radius: 30px; padding: 7px 16px; font-size: 13px; cursor: pointer; font-family: 'Merriweather', serif; transition: background .2s, color .2s; }
.tut-ghost:hover { background: rgba(184,134,11,.12); color: #f4dd94; }

@media (max-width: 720px) {
  .tut-sheet-toggle-btn { display: inline-block; }
  .tut-sheet-close { display: block; }
  .tut-head { flex-wrap: wrap; gap: 8px 10px; padding: 10px 12px; }
  .tut-progress { width: 100%; justify-content: space-between; margin-top: 2px; flex-wrap: wrap; gap: 6px; }
  .tut-ticks { gap: 3px; }
  .tut-tick { width: 8px; height: 8px; }
  .tut-log { height: 340px; padding: 6px 12px 10px; }
  .tut-prompt { padding: 8px 12px; }
  .tut-controls { padding: 8px 12px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; }
  .tut-hub-ghost { margin-right: 0; font-size: 12px; padding: 5px 12px; }
  .tut-ghost { font-size: 12px; padding: 5px 12px; }

  .tut-sheet {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 60vh;
    z-index: 1000;
    border-top: 2px solid darkgoldenrod;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -10px 30px rgba(0,0,0,0.8);
    background: #0d0e12;
  }
  .tut-sheet.open { display: flex; }
  .tut-sheet-bar { display: flex; justify-content: space-between; align-items: center; }
  .tut-sheet-backdrop { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 999; }
}
</style>
