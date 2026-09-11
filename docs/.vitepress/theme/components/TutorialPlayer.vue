<script setup>
/*
  Interactive new-player tutorial, as a VitePress component with page-based routes.
  Content lives in ../data/tutorialContent.js; assets are imported from the
  shared docs/assets/images so nothing is duplicated.
*/
import { ref, computed, watch, onMounted } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import { TUTORIAL } from '../data/tutorialContent.js'
import logoImg from '../../../assets/images/mume_logo.jpg'
import mapImg from '../../../assets/images/tutorial-map.png'
import descImg from '../../../assets/images/tutorial-desc.png'

const PLAY_URL = '/play/browser'
const NEWCOMERS_URL = '/resources/newcomers'
const MAP_SECTION = 'Playing the game'
const STORAGE_KEY = 'mume_tutorial_max_step'

const BANNER =
`                    ***  MUME IX  ***

                  In progress at FIRE
               (Free Internet Roleplay Experiences)
               Hosted at HEIG-VD (www.heig-vd.ch)

        Adapted from J.R.R. Tolkien's Middle-earth world and
                maintained by CryHavoc, Manwe, and Nada.

If you have never played MUME before, type NEW to create a new character,
or ? for help.

By what name do you wish to be known?
Account password:
Available commands:

  create        - Create a new character
  play <name>   - Play the character <name>
  help          - Display help about these commands
  menu          - Display this menu
  quit          - Leave the account menu; logs you out

Account>`

const lessons = TUTORIAL.lessons
const total = lessons.length

const route = useRoute()
const router = useRouter()
const { params } = useData()

// Determine current step index (0-based) from URL route
const currentStep = computed(() => {
  const p = params.value?.step || route.path.split('/').filter(Boolean).pop().replace(/\.html$/, '')
  const n = parseInt(p, 10)
  if (isNaN(n) || n < 1) return 1
  return Math.min(n, total)
})

const idx = computed(() => currentStep.value - 1)

const maxCompletedStep = ref(1)
const log = ref([])
const finished = ref(false)
const awaitingExample = ref(false)
const entry = ref('')
const isSheetOpen = ref(false)

const logEl = ref(null)
const inputEl = ref(null)

const stepLabel = computed(() => `${currentStep.value} of ${total}`)

// Learned commands up to current index
const learned = computed(() => {
  const list = []
  for (let i = 0; i <= idx.value && i < total; i++) {
    const L = lessons[i]
    if (L && L.teach) {
      for (const t of L.teach) {
        if (!list.some(x => x.c === t.c && x.section === L.section)) {
          list.push({ c: t.c, d: t.d, section: L.section })
        }
      }
    }
  }
  return list
})

// Commands grouped by section for the command sheet
const sheetGroups = computed(() => {
  const groups = []
  for (const c of learned.value) {
    let g = groups.find(x => x.section === c.section)
    if (!g) { g = { section: c.section, items: [] }; groups.push(g) }
    g.items.push(c)
  }
  return groups
})

function loadMaxStep() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = parseInt(saved, 10)
      if (!isNaN(parsed) && parsed > 1) {
        maxCompletedStep.value = Math.max(1, Math.min(parsed, total))
      }
    }
  }
}

function updateMaxStep(step) {
  if (step > maxCompletedStep.value) {
    maxCompletedStep.value = Math.min(step, total)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, String(maxCompletedStep.value))
    }
  }
}

function goToStep(stepNum) {
  if (stepNum < 1 || stepNum > total) return
  if (stepNum > maxCompletedStep.value) return
  awaitingExample.value = false
  finished.value = false
  const targetUrl = `/play/tutorial/${stepNum}`
  if (router && router.go) {
    router.go(targetUrl)
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
  updateMaxStep(currentStep.value)
  awaitingExample.value = false
  finished.value = false

  const L = lessons[idx.value]
  if (!L) {
    showEnd()
    return
  }

  const newLog = [{ kind: 'banner', text: BANNER }]
  newLog.push({
    kind: 'lesson',
    section: L.section,
    title: L.title,
    body: L.body || [],
    teach: L.teach || [],
    ask: L.practice ? { cmd: L.practice.ask } : null,
    map: L.section === MAP_SECTION
  })

  log.value = newLog
  scrollLog()
}

function showEnd() {
  finished.value = true
  log.value.push({ kind: 'end' })
  scrollLog()
}

function handover() {
  log.value.push({ kind: 'handover' })
  scrollLog()
}

function dumpSheet() {
  if (!learned.value.length) {
    log.value.push({ kind: 'error', text: 'You have not been shown any commands yet.' })
  } else {
    log.value.push({ kind: 'sheetdump', groups: sheetGroups.value.map(g => ({ ...g })) })
  }
  scrollLog()
}

function advanceNext() {
  const nextStep = currentStep.value + 1
  updateMaxStep(nextStep)
  if (nextStep <= total) {
    goToStep(nextStep)
  } else {
    showEnd()
  }
}

function submit() {
  const raw = entry.value.trim()
  const cmd = raw.toLowerCase()
  entry.value = ''
  if (raw) { log.value.push({ kind: 'echo', text: raw }) }

  if (cmd === 'commands') { dumpSheet(); return }
  if (cmd === 'skip') { skip(); return }
  if (cmd === 'tutorial') { goToStep(1); return }

  if (finished.value) { handover(); return }

  if (awaitingExample.value) {
    awaitingExample.value = false
    advanceNext()
    return
  }

  const L = lessons[idx.value]
  const p = L && L.practice

  if (!p) {
    advanceNext()
    return
  }
  if (!cmd) {
    log.value.push({ kind: 'error', text: p.hint || ('Type: ' + p.ask) })
    scrollLog()
    return
  }

  const ok = (p.accept || [p.ask]).some(a => a.toLowerCase() === cmd)
  if (ok) {
    if (L.example) {
      const body = L.example.replace(/^>[^\n]*\n?/, '')
      log.value.push({ kind: 'example', body })
      awaitingExample.value = true
      scrollLog()
    } else {
      advanceNext()
    }
  } else {
    log.value.push({ kind: 'error', text: 'MUME does not know that one here. ' + (p.hint || ('Try: ' + p.ask)) })
    scrollLog()
  }
}

function skip() {
  updateMaxStep(total)
  showEnd()
}

watch(currentStep, () => {
  renderStepLog()
}, { immediate: true })

onMounted(() => {
  loadMaxStep()
  renderStepLog()
})
</script>

<template>
  <div class="tut">
    <div class="tut-frame">
      <div class="tut-head">
        <img class="tut-logo" :src="logoImg" alt="MUME" />
        <div class="tut-heading">
          <div class="tut-title-row">
            <span class="tut-title">New player tutorial</span>
            <button type="button" class="tut-sheet-toggle-btn" @click="isSheetOpen = !isSheetOpen" aria-label="Toggle Command Sheet">
              Commands {{ learned.length ? `(${learned.length})` : '' }}
            </button>
          </div>
          <span class="tut-sub">Your first hour in Middle-earth</span>
        </div>
        <div class="tut-progress" v-if="!finished">
          <span class="tut-ticks">
            <button v-for="i in total" :key="i"
                    type="button"
                    class="tut-tick"
                    :class="{
                      done: i < currentStep,
                      now: i === currentStep,
                      clickable: i <= maxCompletedStep && i !== currentStep
                    }"
                    :disabled="i > maxCompletedStep"
                    :title="i <= maxCompletedStep ? 'Go to step ' + i : 'Complete previous steps to unlock'"
                    @click="goToStep(i)"></button>
          </span>
          <span class="tut-step">{{ stepLabel }}</span>
        </div>
      </div>

      <div class="tut-body">
        <div class="tut-term">
          <div class="tut-log" ref="logEl">
            <div v-for="(b, i) in log" :key="i" class="tut-block">
              <pre v-if="b.kind === 'banner'" class="tut-banner">{{ b.text }}</pre>

              <template v-else-if="b.kind === 'lesson'">
                <hr class="tut-rule" />
                <div class="tut-eyebrow">{{ b.section }}</div>
                <h3 class="tut-h">{{ b.title }}</h3>
                <p v-for="(line, j) in b.body" :key="j" class="tut-line">{{ line }}</p>

                <dl v-if="b.teach.length" class="tut-teach">
                  <template v-for="(t, k) in b.teach" :key="k">
                    <dt>{{ t.c }}</dt><dd>{{ t.d }}</dd>
                  </template>
                </dl>

                <div v-if="b.map" class="tut-panels">
                  <figure><img :src="mapImg" alt="Live map of Middle-earth" /><figcaption>The map</figcaption></figure>
                  <figure><img :src="descImg" alt="Room description and view" /><figcaption>The description</figcaption></figure>
                </div>

                <p class="tut-ask" v-if="b.ask">Type <span class="tut-cmd">{{ b.ask.cmd }}</span> to carry on.</p>
                <p class="tut-ask" v-else>Press Enter to carry on.</p>
              </template>

              <p v-else-if="b.kind === 'echo'" class="tut-echo">&gt; {{ b.text }}</p>

              <template v-else-if="b.kind === 'example'">
                <p class="tut-exlead">Here's an example of what you'll see:</p>
                <pre class="tut-example">{{ b.body }}</pre>
                <p class="tut-ask">Press Enter to carry on.</p>
              </template>

              <p v-else-if="b.kind === 'error'" class="tut-err">{{ b.text }}</p>

              <div v-else-if="b.kind === 'sheetdump'" class="tut-dump">
                <template v-for="(g, gi) in b.groups" :key="gi">
                  <div class="tut-grp">{{ g.section }}</div>
                  <dl><template v-for="(c, ci) in g.items" :key="ci"><dt>{{ c.c }}</dt><dd>{{ c.d }}</dd></template></dl>
                </template>
              </div>

              <template v-else-if="b.kind === 'end'">
                <hr class="tut-rule" />
                <div class="tut-eyebrow">Ready</div>
                <h3 class="tut-h">Create your character</h3>
                <p class="tut-line">That is everything you need for your first hour in Middle-earth!</p>
                <p class="tut-line">Your command sheet stays with you. Type <span class="tut-cmd">commands</span> for it, or <span class="tut-cmd">tutorial</span> to run this again while you are still new.</p>
                <div class="tut-end-actions">
                  <a class="tut-enter" :href="PLAY_URL">Play MUME Now</a>
                  <a class="tut-secondary-link" :href="NEWCOMERS_URL">Explore Newcomers Guide</a>
                </div>
                <p class="tut-note">Opens the web client. You can retake this tutorial at any time.</p>
              </template>

              <template v-else-if="b.kind === 'handover'">
                <hr class="tut-rule" />
                <h3 class="tut-h">Off you go</h3>
                <p class="tut-line">The <a :href="PLAY_URL">web client</a> is where you drop into the account prompt and begin. Good luck out there!</p>
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
            <p v-if="!learned.length" class="tut-empty">Commands appear here as you learn them.</p>
            <template v-else>
              <template v-for="(g, gi) in sheetGroups" :key="gi">
                <div class="tut-grp">{{ g.section }}</div>
                <dl><template v-for="(c, ci) in g.items" :key="ci"><dt>{{ c.c }}</dt><dd>{{ c.d }}</dd></template></dl>
              </template>
            </template>
          </div>
        </aside>
      </div>

      <div class="tut-sheet-backdrop" v-if="isSheetOpen" @click="isSheetOpen = false"></div>

      <div class="tut-controls">
        <button v-if="!finished" class="tut-ghost" @click="skip">Skip to the end</button>
        <button v-else class="tut-ghost" @click="goToStep(1)">Run the tutorial again</button>
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
.tut-block { }
.tut-banner { font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 12px; color: #8f8f8f; white-space: pre-wrap; margin: 8px 0 4px; }
.tut-rule { border: 0; border-top: 1px solid #23262e; margin: 20px 0 14px; }
.tut-eyebrow { text-transform: uppercase; letter-spacing: .14em; font-size: 11px; color: #b8860b; margin-bottom: 4px; }
.tut-h { font-family: 'Kelt', serif; color: #e6d79a; font-size: 26px; margin: 0 0 .4em; border: 0; padding: 0; }
.tut-line { color: #cdc7b8; font-size: 15px; line-height: 1.6; margin: 0 0 12px; }
.tut-teach { display: grid; grid-template-columns: max-content 1fr; gap: 4px 16px; margin: 4px 0 14px; padding: 12px 14px; background: #101216; border: 1px solid #23262e; border-radius: 8px; }
.tut-teach dt { color: #d8b04a; font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 13px; }
.tut-teach dd { color: #9a9a9a; margin: 0; font-size: 13.5px; }
.tut-panels { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 6px 0 16px; }
@media (max-width: 520px) { .tut-panels { grid-template-columns: 1fr; } }
.tut-panels figure { margin: 0; }
.tut-panels img { width: 100%; border: 1px solid #23262e; border-radius: 8px; display: block; }
.tut-panels figcaption { color: #8f8a7d; font-size: 12px; margin-top: 6px; text-align: center; }
.tut-ask { color: #7fb0c8; font-size: 14px; margin: 4px 0 2px; }
.tut-cmd { font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; color: #f4dd94; background: rgba(184,134,11,.12); padding: 1px 6px; border-radius: 4px; }
.tut-echo { font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; color: #cfcfcf; margin: 10px 0 2px; }
.tut-exlead { color: #9a927f; font-size: 13px; margin: 8px 0 4px; }
.tut-example { font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 12.5px; color: #b9d3c2; white-space: pre-wrap; background: #06120c; border: 1px solid #17301f; border-radius: 8px; padding: 12px 14px; margin: 0 0 8px; }
.tut-err { color: #d98a7f; font-size: 14px; margin: 8px 0; }
.tut-dump { margin: 8px 0; }

.tut-end-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin: 8px 0 12px; }
.tut-enter { display: inline-block; font-family: 'Kelt', serif; font-size: 1.15rem; background: darkgoldenrod; color: white !important; padding: 0.5em 2em; border-radius: 3.75rem; box-shadow: 1px 5px 10px 0px rgba(184, 134, 11, 0.5); text-decoration: none !important; transition: color .2s; }
.tut-enter:hover, .tut-enter:focus-visible { color: #3a3a3a !important; text-decoration: none !important; }
.tut-secondary-link { display: inline-block; font-family: 'Kelt', serif; font-size: 1.15rem; background: rgba(10, 13, 21, 0.75); color: white !important; border: 2px solid darkgoldenrod; padding: 0.5em 2em; border-radius: 3.75rem; box-shadow: 1px 5px 10px 0px rgba(184, 134, 11, 0.5); text-decoration: none !important; transition: background-color .2s, color .2s; }
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
.tut-sheet-body dl, .tut-dump dl { display: grid; grid-template-columns: max-content 1fr; gap: 3px 12px; margin: 0; }
.tut-sheet-body dt, .tut-dump dt { color: #d8b04a; font-family: 'DejaVu Sans Mono', Menlo, Consolas, monospace; font-size: 12.5px; }
.tut-sheet-body dd, .tut-dump dd { color: #9a9a9a; margin: 0; font-size: 12.5px; }

.tut-title-row { display: flex; align-items: center; gap: 8px; }
.tut-sheet-toggle-btn { display: none; background: rgba(184,134,11,.18); border: 1px solid rgba(215,166,63,.4); color: #f4dd94; font-size: 11px; padding: 2px 8px; border-radius: 12px; cursor: pointer; }

.tut-send-btn { background: darkgoldenrod; border: none; color: #fff; font-family: 'Kelt', serif; font-size: 13px; padding: 4px 12px; border-radius: 14px; cursor: pointer; font-weight: bold; }

.tut-sheet-close { display: none; background: none; border: none; color: #9a927f; font-size: 20px; cursor: pointer; padding: 0 4px; }

.tut-controls { border-top: 1px solid #23262e; padding: 10px 16px; text-align: right; background: #0b0b0d; }
.tut-ghost { background: none; border: 1px solid #b8860b; color: #d7a63f; border-radius: 30px; padding: 7px 16px; font-size: 13px; cursor: pointer; font-family: 'Merriweather', serif; transition: background .2s, color .2s; }
.tut-ghost:hover { background: rgba(184,134,11,.12); color: #f4dd94; }

@media (max-width: 720px) {
  .tut-sheet-toggle-btn { display: inline-block; }
  .tut-sheet-close { display: block; }
  .tut-head { flex-wrap: wrap; gap: 8px 12px; }
  .tut-progress { width: 100%; justify-content: space-between; margin-top: 2px; }

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
