---
title: "Understanding Character Stats"
description: "Review hit points, movement points, and combat bonuses using stat and score."
teach:
  - command: "score"
    desc: "check current health, mana, and movement"
  - command: "stat"
    desc: "examine combat bonuses and needed experience"
steps:
  - ask: "score"
    accept:
      - "score"
      - "sc"
    hint: "Type: score (or sc)"
    example: "> score\n27/27 hit, 74/74 mana, and 114/114 moves."
  - ask: "stat"
    accept:
      - "stat"
      - "st"
    hint: "Type: stat"
    example: "> stat\nOB: 17%, DB: 26%, PB: 24%, Armour: 17%. Wimpy: 0. Mood: wimpy.\nNeeded: 831 xp, 0 tp."
responses:
  score: "27/27 hit, 74/74 mana, and 114/114 moves."
  sc: "27/27 hit, 74/74 mana, and 114/114 moves."
  stat: "OB: 17%, DB: 26%, PB: 24%, Armour: 17%. Wimpy: 0. Mood: wimpy.\nNeeded: 831 xp, 0 tp. Gold: 0. Alert: normal."
---

<TutorialPlayer>

# Knowing Your Vitals

Before facing wild beasts, an adventurer must monitor three vital stats:
1. **Hit Points (HP)**: Your health. If this reaches 0, you fall incapacitated or die.
2. **Mana**: Magical energy required for spells.
3. **Movement (Moves)**: Stamina for traveling. If exhausted, you cannot run or flee!

Additionally, `stat` displays your combat percentages: **OB** (Offensive Bonus), **DB** (Dodge Bonus), and **PB** (Parry Bonus).

</TutorialPlayer>
