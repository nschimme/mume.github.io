---
title: "Character Condition"
description: "Understanding score, stat, and info (Hits, Mana, Moves, OB, DB, PB)."
teach:
  - command: "score / sc"
    desc: "hits, mana, and movement points"
  - command: "stat"
    desc: "OB, DB, PB, Armour protection %, and XP needed"
  - command: "info / inf"
    desc: "full character sheet and base attributes"
steps:
  - ask: "score"
    accept:
      - "score"
      - "sc"
    hint: "Type: score"
    example: "> score\nScore: 354/354 hits, 114/114 mana, and 132/132 moves."
  - ask: "stat"
    accept:
      - "stat"
      - "st"
    hint: "Type: stat"
    example: "> stat\nOB: 17%, DB: 26%, PB: 24%, Armour: 17%. Wimpy: 0. Mood: wimpy.\nNeeded: 831 xp, 0 tp. Gold: 0. Alert: normal."
  - ask: "info"
    accept:
      - "info"
      - "inf"
    hint: "Type: info"
    example: "> info\nYou are a male Eriadorian (level 1).\nBase abilities: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.\nYou have 24/24 hit, 76/76 mana, and 114/114 movement points."
responses:
  score: "Score: 354/354 hits, 114/114 mana, and 132/132 moves."
  sc: "Score: 354/354 hits, 114/114 mana, and 132/132 moves."
  stat: "OB: 17%, DB: 26%, PB: 24%, Armour: 17%. Wimpy: 0. Mood: wimpy.\nNeeded: 831 xp, 0 tp. Gold: 0. Alert: normal."
  info: "You are a male Eriadorian.\nThis ranks you as Fuor the Man Apprentice (level 1).\nBase abilities: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.\nYou have 24/24 hit, 76/76 mana, and 114/114 movement points."
  inf: "You are a male Eriadorian.\nThis ranks you as Fuor the Man Apprentice (level 1).\nBase abilities: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15."
---

<TutorialPlayer>

# Understanding Stats: score, stat, info

Three essential commands reveal your character status:

- `score` (sc) shows Hits (health), Mana (magic), and Moves (stamina).
- `stat` shows combat percentages: OB (Offensive Bonus), DB (Dodge Bonus), PB (Parry Bonus), and Armour protection %.
- `info` (inf) shows age, level, base attributes (Str, Int, Wis, Dex, Con, Wil), and total equipment weight.

</TutorialPlayer>
