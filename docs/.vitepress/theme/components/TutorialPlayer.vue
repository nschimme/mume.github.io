<script setup>
/*
  Interactive new-player tutorial component reading Markdown chapter frontmatter.
  Non-technical friendly: contributors can edit lessons directly in docs/play/tutorial/*.md!
*/
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useData, useRoute, useRouter, withBase } from 'vitepress'
import logoImg from '../../../assets/images/mume_logo.jpg'
import mapImg from '../../../assets/images/tutorial-map.png'
import descImg from '../../../assets/images/tutorial-desc.png'

const PLAY_URL = '/play/browser'
const NEWCOMERS_URL = '/resources/newcomers'

const CHAPTER_URLS = [
  '/play/tutorial/1-orientation',
  '/play/tutorial/2-items',
  '/play/tutorial/3-looking',
  '/play/tutorial/4-movement',
  '/play/tutorial/5-equipment',
  '/play/tutorial/6-sustenance',
  '/play/tutorial/7-stats',
  '/play/tutorial/8-social',
  '/play/tutorial/9-scouting',
  '/play/tutorial/10-combat',
  '/play/tutorial/11-resting',
  '/play/tutorial/12-guilds',
  '/play/tutorial/13-grouping',
  '/play/tutorial/14-renting',
  '/play/tutorial/15-help-and-rules',
  '/play/tutorial/16-journey'
]

const MUME_RESPONSES = {
  'look': `East of the Bridge
You are standing on the Old East Road, just east of the Brandywine bridge.
A dusty road leads to a gate in a tall hedgerow to the south - the High Hay.
It was grown to protect Buckland from the old forest many years ago.
Exits: north, south, east, west.
A friendly elf is resting here under the oak tree.`,

  'exits': `Exits:
  North   - Prancing Pony Inn
 -East-   - Cobble Street
 -South-  - Old East Road
 -West-   - Brandywine Bridge`,

  'examine elf': `Fair and graceful this child of Eru is, and with but a cursory glance in your
direction he continues to walk, dreaming of mysterious things.
An elf is in an excellent condition.
An elf is using:
<worn on head>       a green hood (flawless)
<worn on body>       a grey shirt (well-maintained)
<worn on legs>       a grey pair of pants (flawless)`,

  'examine sword': `This narrow, single-edged blade has been inlaid with gold filigree from point
to pommel. The grip is black leather, embossed with the image of a red hill
against a setting sun. An intricately fashioned guard of silver cages the handle.`,

  'inventory': `You are carrying:
a sturdy rope
a water skin
a coach ticket
a lantern
a dark coloured flask`,

  'equipment': `You are using:
<worn on body>       a travel-worn wool cloak
<worn on legs>       leather breeches
<worn on feet>       sturdy leather boots
<wielded>            a silver-hilted longsword`,

  'score': `Score: 354/354 hits, 114/114 mana, and 132/132 moves.
You are a young Adventurer (Level 1).
You are unhurt, hydrated, and well nourished.`,

  'who': `Players Online in Middle-earth
------------------------------
  Martyrson    [Ranger]
  Elrond       [Elf Lord]
  GandalftheGrey [Wizard]
Total players online: 3.`,

  'who ranger': `Rangers Online
--------------
  Martyrson N'Ekasrof (Type 'tell Martyrson hello' for help!)`,

  'drink water': `You take a long drink of cool water from your water skin. You feel refreshed!`,
  'drink': `You take a long drink of cool water from your water skin. You feel refreshed!`,
  'eat bread': `You eat a loaf of crusty elf bread. You are no longer hungry.`,
  'eat': `You eat a small portion of rations. You are no longer hungry.`,

  'flee': `You panic and scramble away!
You flee to the East! You manage to escape safely.`,

  'rent': `Barliman Butterbur says 'Welcome to the Prancing Pony!'
Barliman says 'It will cost you 6 silver pennies to store your equipment safely.'
Nob brings you to a quiet, warm chamber where your character and gear rest safely.`,

  'help': `HELP INDEX (Reference: mume.org/help)
======================================
MUME's built-in help files cover all aspect of gameplay:

  help basic    - Basic command list for movement, combat, & speech
  help new      - Advice and guide for new players
  help move     - Directional travel, doors, and terrain
  help fight    - Combat, attacks, positioning, and flee
  help magic    - Spells, mana, and magical arts
  help rules    - World rules and conduct

Type 'help <topic>' or '?' for details on any command.`,

  'help basic': `HELP BASIC COMMANDS
===================
Movement:  north, south, east, west, up, down, exits, open
Look:      look, examine <object>, inventory, equipment, score
Social:    say <text>, tell <player> <text>, nod, smile
Survival:  eat <food>, drink <container>, light <torch>, rest, rent
Help:      help <topic>, commands, tutorial`,

  'help new': `HELP NEW PLAYERS
================
Welcome to MUME! As a new player, remember:
1. Always look at exits before entering new rooms.
2. If you need assistance, type 'who ranger' and send them a message with 'tell'.
3. Always 'rent' at an Inn before logging off so you do not lose your equipment!`,

  'help move': `HELP MOVEMENT
=============
Travel across Middle-earth using standard compass directions (n, s, e, w, u, d).
Doors can be opened or locked ('open north'). Rest when your moves run low.`,

  'help fight': `HELP COMBAT
===========
Attack using 'kill <target>'. Watch your hits in 'score'. If a fight goes poorly,
type 'flee' to break away to a random exit!`,

  'stat': `OB: 17%, DB: 26%, PB: 24%, Armour: 17%. Wimpy: 0. Mood: wimpy.
Needed: 831 xp, 0 tp. Gold: 0. Alert: normal.`,

  'info': `You are a male Eriadorian.
You are 18 years old.
This ranks you as Fuor the Man Apprentice (level 1).
Perception: vision 40, hearing -10, smell -25.
Base abilities: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.
Offensive Bonus: 17%, Dodging Bonus: 26%, Parrying Bonus: 24%.
Your armour provides an average protection of 17%.
You have 24/24 hit, 76/76 mana, and 114/114 movement points.
You are speaking Westron.`,

  'help names': `HELP NAMES ON MUME
==================
MUME's management strongly encourages in-game roleplay. Therefore, names
must fit reasonably with the race and Tolkien lore of your character.
Unacceptable: Skullcrusher, Elfmage, Blah, Helpme, Cuddlebunny.`,

  'help accounts': `HELP ACCOUNTS ON MUME
=====================
Each player is permitted ONLY ONE ACCOUNT. You may create multiple characters
under your single account. Sharing or transferring accounts is forbidden.`,

  'scout south': `You quietly scout southwards...
Shaded Path
A ruffian is here.
You stop scouting.`,

  'scout': `You quietly scout southwards...
Shaded Path
A ruffian is here.
You stop scouting.`,

  'consider boar': `You would need some luck!`,
  'consider': `You would need some luck!`,

  'change mood aggressive': `Ok.
OB: 26%, DB: 26%, PB: 16%, Armour: 17%. Wimpy: 0. Mood: aggressive.`,

  'change mood': `   _
  | |   berserk
  | |   aggressive
  | |   brave
  | |   normal
  | |   prudent
  |~|<- wimpy
  / \\
  \\_/`,

  'practice': `You have 13 practice sessions left.
Huor can teach you:
  slashing weapons   0/29   0%   Normal
  parry              0/29   0%   Normal
  endurance          0/58   0%   Very hard
  bash               0/43   0%   Hard`,

  'follow ermin': `You now follow Ermin.`,
  'follow': `You now follow Ermin.`,

  'group': `Your group consists of:
  Ermin (Head of group)
  Fuor`,

  'get torch': `You get a torch.`,
  'get all': `You get a torch.
You get a piece of cheese.`,
  'drop cheese': `You drop a piece of cheese on the ground.`,

  'look in sack': `sack (carried) :
a cup
a map of Fornost
a torch`,

  'put all sack': `You put a cup in a large sack.
You put a map of Fornost in a large sack.
You put a torch in a large sack.`,

  'hold torch': `You hold a torch in your hand.`,
  'light torch': `You light a torch. It glows brightly, illuminating the room!`,
  'light lantern': `You light a lantern on your belt.`,
  'wear lantern belt': `You fasten a lantern on your belt.
You light a lantern.`,

  'call': `You call for the gate to be opened.
You hear a *click* in a lock.
The Irongate is opened from the other side.`,

  'where': `Players in your zone
--------------------
Fuor                 - Western End of Market Square
Theowen              - City Council's Meeting Room`,

  'trophy': `		*** TROPHY *** (Number Killed, Knowledge, Mobile)

|   1,  1%,  A butterfly               |
|   1, 10%,  A boar cub                |`,

  'rest': `You sit down and rest your tired bones.`,
  'sleep': `You go to sleep.`,
  'wake': `You wake, and sit up.`,
  'stand': `You stand up.`,

  'rules': `RULES INDEX (Reference: mume.org/rules)
=====================================
- RULES CHARACTER     Rules for character creation and accounts
- RULES COMMUNICATION Rules for speech, whoises, and titles
- RULES PLAYERKILLING Regulates battles between players
- RULES AINUR         Rules for immortals`,

  'pray fornost': `You kneel down and try to hear the Ainulindalë...
Listening to them, you have the strange sensation to fade away...
Suddenly an explosion of ancient rhymes makes the space collapse around you!
You blink, you vanish! And you are in Fornost!`,

  'pray': `You kneel down and try to hear the Ainulindalë...
Listening to them, you have the strange sensation to fade away...
Suddenly an explosion of ancient rhymes makes the space collapse around you!
You blink, you vanish! And you are in Fornost!`
}

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

const router = useRouter()
const { frontmatter } = useData()

const chapter = computed(() => frontmatter.value?.chapter || 1)
const mumeResponses = computed(() => frontmatter.value?.responses || {})
const totalChapters = computed(() => frontmatter.value?.totalChapters || 16)
const chapterTitle = computed(() => frontmatter.value?.title || 'Tutorial')
const prevChapter = computed(() => frontmatter.value?.prev || null)
const nextChapter = computed(() => frontmatter.value?.next || null)
const teachList = computed(() => frontmatter.value?.teach || [])
const practiceAsk = computed(() => frontmatter.value?.practice || null)
const acceptList = computed(() => frontmatter.value?.accept || (practiceAsk.value ? [practiceAsk.value] : []))
const practiceHint = computed(() => frontmatter.value?.hint || (practiceAsk.value ? `Type: ${practiceAsk.value}` : null))
const exampleText = computed(() => frontmatter.value?.example || null)

const log = ref([])
const finished = ref(false)
const awaitingExample = ref(false)
const entry = ref('')
const isSheetOpen = ref(false)

const logEl = ref(null)
const inputEl = ref(null)

const stepLabel = computed(() => `Chapter ${chapter.value} of ${totalChapters.value}`)

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
  awaitingExample.value = false
  finished.value = !nextChapter.value

  const newLog = [{ kind: 'banner', text: BANNER }]
  newLog.push({
    kind: 'lesson',
    chapterNum: chapter.value,
    title: chapterTitle.value,
    teach: teachList.value,
    ask: practiceAsk.value
  })

  log.value = newLog
  scrollLog()
  focusInput()
}

function advanceNext() {
  if (nextChapter.value) {
    navigateToUrl(nextChapter.value)
  } else {
    finished.value = true
    scrollLog()
  }
}

function submit() {
  const raw = entry.value.trim()
  const cmd = raw.toLowerCase()
  entry.value = ''
  if (raw) { log.value.push({ kind: 'echo', text: raw }) }

  if (cmd === 'skip') { advanceNext(); focusInput(); return }
  if (cmd === 'tutorial') { navigateToUrl('/play/tutorial/1-orientation'); focusInput(); return }

  if (awaitingExample.value) {
    awaitingExample.value = false
    advanceNext()
    focusInput()
    return
  }

  if (!practiceAsk.value) {
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
    log.value.push({ kind: 'error', text: practiceHint.value || (`Type: ${practiceAsk.value}`) })
    scrollLog()
    focusInput()
    return
  }

  const ok = acceptList.value.some(a => a.toLowerCase() === cmd)
  if (ok) {
    if (exampleText.value) {
      const body = exampleText.value.replace(/^>[^\n]*\n?/, '')
      log.value.push({ kind: 'example', body })
      awaitingExample.value = true
      scrollLog()
    } else {
      advanceNext()
    }
  } else if (mumeResponses.value[cmd]) {
    log.value.push({ kind: 'example', body: mumeResponses.value[cmd] })
    log.value.push({ kind: 'error', text: 'Good try! To proceed in this lesson, ' + (practiceHint.value || (`try: ${practiceAsk.value}`)) })
    scrollLog()
  } else {
    log.value.push({ kind: 'error', text: 'MUME does not know that one here. ' + (practiceHint.value || (`Try: ${practiceAsk.value}`)) })
    scrollLog()
  }
  focusInput()
}

watch(() => frontmatter.value, () => {
  renderStepLog()
}, { immediate: true })

function handleGlobalKeydown(e) {
  if (e.key === 'Enter') {
    const active = typeof document !== 'undefined' ? document.activeElement : null
    // If input element is already handling enter via @keydown.enter, don't double-trigger submit
    if (active && active !== document.body && active !== document.documentElement) {
      return
    }
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
            <span class="tut-title">Chapter {{ chapter }}: {{ chapterTitle }}</span>
            <button type="button" class="tut-sheet-toggle-btn" @click="isSheetOpen = !isSheetOpen" aria-label="Toggle Command Sheet">
              Commands
            </button>
            <a class="tut-hub-link" :href="withBase('/resources/newcomers')">← Newcomers Hub</a>
          </div>
          <span class="tut-sub">Your first hour in Middle-earth</span>
        </div>
        <div class="tut-progress">
          <span class="tut-ticks">
            <button v-for="(chUrl, i) in CHAPTER_URLS" :key="i"
                    type="button"
                    class="tut-tick"
                    :class="{
                      done: (i + 1) < chapter,
                      now: (i + 1) === chapter,
                      clickable: (i + 1) !== chapter
                    }"
                    :title="'Go to Chapter ' + (i + 1)"
                    @click="navigateToUrl(chUrl)"></button>
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

                <p class="tut-ask" v-if="b.ask">Type <span class="tut-cmd">{{ b.ask }}</span> to carry on.</p>
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

              <template v-else-if="b.kind === 'end' || !nextChapter">
                <hr class="tut-rule" />
                <div class="tut-eyebrow">Ready</div>
                <h3 class="tut-h">Create your character</h3>
                <p class="tut-line">That is everything you need for your first hour in Middle-earth!</p>
                <div class="tut-end-actions">
                  <a class="tut-enter" :href="withBase(PLAY_URL)">Play MUME Now</a>
                  <a class="tut-secondary-link" :href="withBase(NEWCOMERS_URL)">Explore Newcomers Guide</a>
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
            <p v-if="!teachList.length" class="tut-empty">No special commands listed for this chapter.</p>
            <template v-else>
              <div class="tut-grp">Chapter {{ chapter }} Commands</div>
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
        <button v-if="prevChapter" class="tut-ghost" @click="navigateToUrl(prevChapter)">← Previous Chapter</button>
        <button v-if="nextChapter" class="tut-ghost" @click="navigateToUrl(nextChapter)">Next Chapter →</button>
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

.tut-title-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.tut-sheet-toggle-btn { display: none; background: rgba(184,134,11,.18); border: 1px solid rgba(215,166,63,.4); color: #f4dd94; font-size: 11px; padding: 2px 8px; border-radius: 12px; cursor: pointer; }
.tut-hub-link { color: #d8b04a !important; font-size: 12px; margin-left: auto; text-decoration: none !important; transition: color .2s; }
.tut-hub-link:hover { color: #fff !important; text-decoration: underline !important; }
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
