---
title: "Combat Tactics & Combat Moods"
description: "Engage enemies in combat, adjust combat moods, and learn when to flee."
teach:
  - command: "consider butterfly"
    desc: "gauge an enemy's relative strength before attacking"
  - command: "hit butterfly"
    desc: "initiate a melee attack on a target"
  - command: "change mood aggressive"
    desc: "shift combat posture to increase offensive bonus"
  - command: "flee"
    desc: "retreat immediately from a dangerous combat encounter"
steps:
  - ask: "consider butterfly"
    note: "Before attacking any creature, check its difficulty relative to your level using `consider` (or `con`)."
    accept:
      - "consider butterfly"
      - "con butterfly"
    hint: "Type: consider butterfly"
    example: "> consider butterfly\nIt looks like easy pickings!"
  - ask: "hit butterfly"
    note: "Attack the target using `hit <target>`. In MUME, combat swings automatically resolve round-by-round."
    accept:
      - "hit butterfly"
      - "kill butterfly"
    hint: "Type: hit butterfly"
    example: "> hit butterfly\nYou slash a butterfly's leg extremely hard and shatter it.\nA butterfly is dead! R.I.P."
  - ask: "change mood aggressive"
    note: "Combat mood controls your balance between offense and defense. Changing to `aggressive` raises your Offensive Bonus (OB) while lowering Parry Bonus (PB)."
    accept:
      - "change mood aggressive"
      - "cha m aggressive"
      - "mood aggressive"
    hint: "Type: change mood aggressive"
    example: "> change mood aggressive\nOk."
  - ask: "flee"
    note: "If an enemy inflicts severe damage or overpowers you, escape immediately with `flee`."
    accept:
      - "flee"
      - "f"
    hint: "Type: flee"
    example: "> flee\nYou flee head over heels."
responses:
  consider butterfly: "It looks like easy pickings!"
  con butterfly: "It looks like easy pickings!"
  hit butterfly: "You slash a butterfly's leg extremely hard and shatter it.\nYou receive your share of experience.\nCongratulations! This is the first time you've killed it!\nA butterfly is dead! R.I.P."
  kill butterfly: "You slash a butterfly's leg extremely hard and shatter it.\nA butterfly is dead! R.I.P."
  change mood aggressive: "Ok."
  cha m aggressive: "Ok."
  mood aggressive: "Ok."
  flee: "You flee head over heels."
  f: "You flee head over heels."
---

<TutorialPlayer>

# Basic Combat Tactics

Combat in MUME is real-time and strategic. Key commands include:

- **`consider <target>`**: Assesses whether a target is easy pickings, a fair match, or lethal.
- **`hit <target>`**: Initiates physical combat.
- **`change mood <mood>`**: Adjusts your combat stance (`berserk`, `aggressive`, `brave`, `normal`, `prudent`, `wimpy`). Aggressive stances increase your hit chance (OB) at the cost of defense (PB).
- **`flee`**: Retreats randomly to an open exit when health drops dangerously low.

</TutorialPlayer>
