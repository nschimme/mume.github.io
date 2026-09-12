---
title: "Checking Vitals & Stats"
description: "Inspect HP, Mana, Movement, combat parameters, and full character attributes."
teach:
  - command: "score"
    desc: "check current Hit Points, Mana, and Movement Points"
  - command: "stat"
    desc: "view OB, DB, PB combat bonuses and experience needed to level"
  - command: "info"
    desc: "display full character sheet attributes and travel points"
steps:
  - ask: "score"
    note: "Check your core vitals with SCORE (or SC)."
    accept:
      - "score"
      - "sc"
    hint: "Type: score (or sc)"
    example: "> score\n36/36 hits, 76/76 mana, and 126/126 moves."
  - ask: "stat"
    note: "Check combat attributes (OB/DB/PB), armor rating, and experience needed with STAT."
    accept:
      - "stat"
      - "st"
    hint: "Type: stat"
    example: "> stat\nOB: 10%, DB: 31%, PB: 13%, Armour: 19%. Needed: 999 xp, 27 tp."
  - ask: "info"
    note: "Display your full character overview sheet with INFO."
    accept:
      - "info"
      - "inf"
    hint: "Type: info"
    example: "> info\nYou are a male Eriadorian. You are 18 years and 3 days old."
responses:
  score: "36/36 hits, 76/76 mana, and 126/126 moves.\n\n*+->"
  sc: "36/36 hits, 76/76 mana, and 126/126 moves.\n\n*+->"
  stat: "OB: 10%, DB: 31%, PB: 13%, Armour: 19%. Wimpy: 15. Mood: wimpy.\nNeeded: 999 xp, 27 tp. Gold: 0. Alert: normal.\n\n*+->"
  st: "OB: 10%, DB: 31%, PB: 13%, Armour: 19%. Needed: 999 xp, 27 tp.\n\n*+->"
  info: "You are a male Eriadorian.\nYou are 18 years and 3 days old.\nYou have played 1 hour (real time). Session: 1 mins (not encrypted).\nThis ranks you as Fuor the Man Adventurer (level 1).\nYou are five feet eight and weigh eleven stone and six pounds.\nPerception: vision 30, hearing -2, smell -25. Alertness: normal.\nYou are a well-meaning person, always glad to help your friends.\nYou are welcome in Bree.\nYour equipment weighs forty-three pounds. A tad uncomfortable, but no problem.\nYour base abilities are: Str:18 Int:12 Wis:11 Dex:17 Con:16 Wil:13 Per:15.\nOffensive Bonus: 10%, Dodging Bonus: 31%, Parrying Bonus: 13%.\nYour armour provides an average protection of 19%.\nYou have 36/36 hit, 76/76 mana, and 126/126 movement points.\nYour mood is wimpy. You will flee if your hit points go below 15.\nYou have scored 1 experience point and you have 27 travel points.\nYou need 999 exp. points and 27 travel points to reach the next level.\nYou have 5 silver pennies and 87 copper pennies.\nYou are speaking Westron.\n\n*+->"
  inf: "Fuor the Man Adventurer (level 1). Hit: 36/36, Mana: 76/76, Moves: 126/126.\n\n*+->"
---

<TutorialPlayer>

# Checking Vitals & Stats

Always monitor your health (`score`), combat offensive/defensive statistics (`stat`), and character progress (`info`).

Practice `score`, `stat`, and `info` below!

</TutorialPlayer>
