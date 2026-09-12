---
title: "Character Vitals & Self-Assessment"
description: "Inspect hit points, mana, movement points, combat stats, character sheet overview, and achievement logs."
teach:
  - command: "score"
    desc: "quick check of Hit Points, Mana, and Movement Points"
  - command: "stat"
    desc: "view OB, DB, PB combat bonuses and experience needed to level"
  - command: "info"
    desc: "full character sheet including age, alignment, and attributes"
  - command: "eat biscuit"
    desc: "satisfy hunger to maintain rapid health recovery"
  - command: "drink water"
    desc: "quench thirst at a well or water source"
  - command: "achievements"
    desc: "check completed and active achievements"
steps:
  - ask: "score"
    note: "Check Fuor's core vitals quickly with SCORE (or SC)."
    accept:
      - "score"
      - "sc"
    hint: "Type: score (or sc)"
    example: "> score\n36/36 hits, 76/76 mana, and 126/126 moves."
  - ask: "stat"
    note: "View combat bonuses (OB/DB/PB), armor rating, and experience needed."
    accept:
      - "stat"
      - "st"
    hint: "Type: stat"
    example: "> stat\nOB: 10%, DB: 31%, PB: 13%, Armour: 19%. Needed: 999 xp, 83 tp."
  - ask: "info"
    note: "Display Fuor's complete character sheet."
    accept:
      - "info"
      - "inf"
    hint: "Type: info"
    example: "> info\nYou are a male Eriadorian. You are eighteen years old."
  - ask: "eat biscuit"
    note: "Eat a biscuit to prevent hunger from slowing health recovery."
    accept:
      - "eat biscuit"
    hint: "Type: eat biscuit"
    example: "> eat biscuit\nYou eat a large biscuit. You are full."
  - ask: "drink water"
    note: "Quench your thirst at a well or water container."
    accept:
      - "drink water"
      - "drink"
    hint: "Type: drink water"
    example: "> drink water\nYou drink the water from the stone well."
  - ask: "achievements"
    note: "Inspect achievements to track exploration and milestones."
    accept:
      - "achievements"
    hint: "Type: achievements"
    example: "> achievements\nCompleted: Awakening in Mandos, Arrival in Black Hill Village."
responses:
  score: "36/36 hits, 76/76 mana, and 126/126 moves."
  sc: "36/36 hits, 76/76 mana, and 126/126 moves."
  stat: "OB: 10%, DB: 31%, PB: 13%, Armour: 19%. Wimpy: 35. Mood: wimpy.\nNeeded: 999 xp, 83 tp. Gold: 0. Alert: normal."
  st: "OB: 10%, DB: 31%, PB: 13%, Armour: 19%. Needed: 999 xp, 83 tp."
  info: "You are a male Eriadorian.\nYou are eighteen years old. It's your birthday today!\nThis ranks you as Fuor the Man Adventurer (level 1).\nYou are five feet eight and weigh eleven stone and six pounds.\nPerception: vision 40, hearing -10, smell -25. Alertness: normal.\nYou are a well-meaning person, always glad to help your friends.\nYou are welcome in Bree.\nYour base abilities are: Str:18 Int:12 Wis:11 Dex:17 Con:16 Wil:13 Per:15.\nOffensive Bonus: 10%, Dodging Bonus: 31%, Parrying Bonus: 13%.\nYour armour provides an average protection of 19%.\nYou have 36/36 hit, 76/76 mana, and 126/126 movement points.\nYour mood is wimpy. You will flee if your hit points go below 35.\nYou have scored 1 experience point and you have 17 travel points.\nYou need 999 exp. points and 83 travel points to reach the next level.\nYou have 5 silver pennies and 87 copper pennies.\nYou are speaking Westron."
  inf: "Fuor the Man Adventurer (level 1). Hit: 36/36, Mana: 76/76, Moves: 126/126."
  eat biscuit: "You eat a large biscuit.\nYou are full."
  drink water: "You drink the water from the stone well."
  drink: "You drink the water from the stone well."
  achievements: "ACHIEVEMENTS SUMMARY\n====================\n- [x] Awakening in Mandos\n- [x] Arrival in Black Hill Village\n- [ ] Defeat First Enemy\n- [ ] Gain Level 2"
---

<TutorialPlayer>

# Character Vitals & Self-Assessment

Before heading out to train, Fuor must understand his vital statistics and character status.

Practice checking core vitals (`SCORE`), combat parameters (`STAT`), complete character overview (`INFO`), eating provisions (`EAT BISCUIT`), drinking water (`DRINK WATER`), and inspecting achievement logs (`ACHIEVEMENTS`).

</TutorialPlayer>
