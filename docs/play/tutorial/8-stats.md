---
title: "Character Stats & Vitals"
description: "Inspect your hit points, movement points, defensive bonuses, and experience."
teach:
  - command: "score"
    desc: "check your current hit points, mana, and movement"
  - command: "stat"
    desc: "view offensive/defensive combat bonuses and experience needed"
  - command: "info"
    desc: "display full character overview including age, attributes, and alignment"
steps:
  - ask: "score"
    note: "During quick moments, `score` (or `sc`) provides a fast reading of your core vitals: Hit Points, Mana, and Movement Points."
    accept:
      - "score"
      - "sc"
    hint: "Type: score (or sc)"
    example: "> score\n24/24 hit, 76/76 mana, and 114/114 moves."
  - ask: "stat"
    note: "To inspect combat parameters—such as Offensive Bonus (OB), Dodge Bonus (DB), Parry Bonus (PB), and experience to next level—use `stat`."
    accept:
      - "stat"
      - "st"
    hint: "Type: stat"
    example: "> stat\nOB: 8%, DB: 24%, PB: 0%, Armour: 0%. Wimpy: 0. Mood: wimpy.\nNeeded: 999 xp, 0 tp. Gold: 0. Alert: normal."
  - ask: "info"
    note: "For a complete character profile—including base abilities (Str, Dex, Con, Int, Wis, Wil, Per), weight carried, and age—use `info`."
    accept:
      - "info"
      - "inf"
    hint: "Type: info (or inf)"
    example: "> info\nYou are a male Eriadorian, 18 years old.\nYou have 24/24 hit, 76/76 mana, and 114/114 movement points."
responses:
  score: "24/24 hit, 76/76 mana, and 114/114 moves."
  sc: "24/24 hit, 76/76 mana, and 114/114 moves."
  stat: "OB: 8%, DB: 24%, PB: 0%, Armour: 0%. Wimpy: 0. Mood: wimpy.\nNeeded: 999 xp, 0 tp. Gold: 0. Alert: normal."
  st: "OB: 8%, DB: 24%, PB: 0%, Armour: 0%. Wimpy: 0. Mood: wimpy.\nNeeded: 999 xp, 0 tp. Gold: 0. Alert: normal."
  info: "You are a male Eriadorian.\nYou are 18 years old. It's your birthday today!\nThis ranks you as Fuor the Man Apprentice (level 1).\nBase abilities: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.\nOffensive Bonus: 8%, Dodging Bonus: 24%, Parrying Bonus: 0%.\nYou have 24/24 hit, 76/76 mana, and 114/114 movement points.\nYou need 999 exp. points and 0 travel points to reach the next level."
  inf: "You are a male Eriadorian.\nYou are 18 years old. It's your birthday today!\nThis ranks you as Fuor the Man Apprentice (level 1).\nBase abilities: Str:17 Int:12 Wis:11 Dex:17 Con:15 Wil:14 Per:15.\nOffensive Bonus: 8%, Dodging Bonus: 24%, Parrying Bonus: 0%.\nYou have 24/24 hit, 76/76 mana, and 114/114 movement points.\nYou need 999 exp. points and 0 travel points to reach the next level."
---

<TutorialPlayer>

# Understanding Your Vitals & Stats

In MUME, three core commands provide information about your character's status: `score`, `stat`, and `info`.

- **Score (`sc`)**: Quick check of Hit Points, Mana, and Movement.
- **Stat (`stat`)**: Displays combat percentages (OB, DB, PB, Armour) and required experience/travel points.
- **Info (`inf`)**: Full summary including age, base attributes (Strength, Intelligence, Wisdom, Dexterity, Constitution, Willpower, Perception), and carried weight.

</TutorialPlayer>
