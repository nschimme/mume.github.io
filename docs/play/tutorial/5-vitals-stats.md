---
title: "Character Vitals & Self-Assessment"
description: "Inspect hit points, mana, movement points, combat stats, character overview, achievements, and quest logs."
teach:
  - command: "score"
    desc: "quick check of Hit Points, Mana, and Movement Points"
  - command: "stat"
    desc: "view OB, DB, PB bonuses and experience to next level"
  - command: "info"
    desc: "full character sheet including age, alignment, and attributes"
  - command: "eat cheese"
    desc: "satisfy hunger to maintain rapid recovery"
  - command: "hold torch"
    desc: "hold a lit light source"
  - command: "achievements"
    desc: "check completed and active achievements"
  - command: "quests"
    desc: "inspect active quest log"
steps:
  - ask: "score"
    note: "Check Fuor's core vitals quickly with SCORE (or SC)."
    accept:
      - "score"
      - "sc"
    hint: "Type: score (or sc)"
    example: "> score\n24/24 hit, 76/76 mana, and 114/114 moves."
  - ask: "stat"
    note: "View combat bonuses (OB/DB/PB) and experience needed for Level 2."
    accept:
      - "stat"
      - "st"
    hint: "Type: stat"
    example: "> stat\nOB: 8%, DB: 24%, PB: 0%, Armour: 17%. Needed: 999 xp."
  - ask: "info"
    note: "Display Fuor's complete character sheet."
    accept:
      - "info"
      - "inf"
    hint: "Type: info"
    example: "> info\nYou are a male Eriadorian, 18 years old. Level 1 Warrior."
  - ask: "eat cheese"
    note: "Eat your cheese ration to prevent hunger from slowing health recovery."
    accept:
      - "eat cheese"
    hint: "Type: eat cheese"
    example: "> eat cheese\nYou eat the cheese. You are full."
  - ask: "hold torch"
    note: "Hold your lit wooden torch."
    accept:
      - "hold torch"
    hint: "Type: hold torch"
    example: "> hold torch\nYou hold a torch. You light a torch."
  - ask: "achievements"
    note: "Inspect achievements to track exploration and milestones."
    accept:
      - "achievements"
    hint: "Type: achievements"
    example: "> achievements\nCompleted: First Step into Mandos, Fornost Visitor."
  - ask: "quests"
    note: "Review active quests in your Quest Log."
    accept:
      - "quests"
      - "quest"
    hint: "Type: quests"
    example: "> quests\nActive Quests: Huor's Warrior Trial."
responses:
  score: "24/24 hit, 76/76 mana, and 114/114 moves."
  sc: "24/24 hit, 76/76 mana, and 114/114 moves."
  stat: "OB: 8%, DB: 24%, PB: 0%, Armour: 17%. Wimpy: 0. Mood: wimpy.\nNeeded: 999 xp, 0 tp. Gold: 0. Alert: normal."
  st: "OB: 8%, DB: 24%, PB: 0%, Armour: 17%. Needed: 999 xp."
  info: "You are a male Eriadorian.\nYou are 18 years old. It's your birthday today!\nThis ranks you as Fuor the Man Apprentice (level 1).\nYour base abilities are: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.\nOffensive Bonus: 8%, Dodging Bonus: 24%, Parrying Bonus: 0%.\nYour armour provides an average protection of 17%.\nYou have 24/24 hit, 76/76 mana, and 114/114 movement points."
  inf: "Fuor the Man Apprentice (level 1). Hit: 24/24, Mana: 76/76, Moves: 114/114."
  eat cheese: "You eat the cheese.\nYou are full."
  hold torch: "You hold a torch.\nYou light a torch."
  achievements: "ACHIEVEMENTS SUMMARY\n====================\n- [x] Awakening in Mandos\n- [x] Arrival in Fornost\n- [ ] Defeat First Enemy\n- [ ] Gain Level 2"
  quests: "QUEST LOG\n=========\n- Active: Huor's Martial Apprentice (Visit the Warrior Guild in Fornost)"
  quest: "Active Quests: Visit the Warrior Guild in Fornost."
---

<TutorialPlayer>

# Character Vitals & Self-Assessment

Before heading out to train, Fuor must understand his vital statistics and character status.

Practice checking core vitals (`SCORE`), combat parameters (`STAT`), complete character overview (`INFO`), eating provisions (`EAT CHEESE`), lighting torches (`HOLD TORCH`), and inspecting achievement logs (`ACHIEVEMENTS`).

</TutorialPlayer>
