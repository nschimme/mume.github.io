---
title: "Combat Safety & Stances"
description: "Assess enemy strength with CONSIDER and adjust combat stances with CHANGE MOOD."
teach:
  - command: "consider wolf"
    desc: "gauge enemy difficulty relative to your hero level"
  - command: "change mood aggressive"
    desc: "boost Offensive Bonus (OB) at the cost of defense"
  - command: "hit wolf"
    desc: "engage target in real-time combat"
  - command: "change mood wimpy"
    desc: "restore defensive Dodging Bonus (DB) to protect your health"
steps:
  - ask: "consider wolf"
    note: "Gauge a hungry timber wolf's strength using CONSIDER WOLF."
    accept:
      - "consider wolf"
      - "con wolf"
    hint: "Type: consider wolf"
    example: "> consider wolf\nThe timber wolf looks like an easy target for you."
  - ask: "change mood aggressive"
    note: "Switch to aggressive stance (CHANGE MOOD AGGRESSIVE) to maximize your attack bonus."
    accept:
      - "change mood aggressive"
      - "cha mood aggressive"
      - "cha m aggressive"
    hint: "Type: change mood aggressive"
    example: "> change mood aggressive\nOk."
  - ask: "hit wolf"
    note: "Attack the wolf with HIT WOLF."
    accept:
      - "hit wolf"
      - "kill wolf"
      - "k wolf"
    hint: "Type: hit wolf"
    example: "> hit wolf\nYou slash a hungry timber wolf with your backsword!"
  - ask: "change mood wimpy"
    note: "Switch back to defensive stance (CHANGE MOOD WIMPY) to restore your defense."
    accept:
      - "change mood wimpy"
      - "cha mood wimpy"
      - "cha m wimpy"
    hint: "Type: change mood wimpy"
    example: "> change mood wimpy\nOk."
responses:
  consider wolf: "A hungry timber wolf looks like an easy target for you.\n\n*+->"
  con wolf: "A hungry timber wolf looks like an easy target for you.\n\n*+->"
  change mood aggressive: "Ok.\nYour Offensive Bonus (OB) increases while your Dodging Bonus (DB) decreases.\n\n*+->"
  cha mood aggressive: "Ok.\n\n*+->"
  cha m aggressive: "Ok.\n\n*+->"
  hit wolf: "You slash a hungry timber wolf's side with your backsword!\nA hungry timber wolf growls and snaps at you!\n\n*+->"
  kill wolf: "You slash a hungry timber wolf's side with your backsword!\n\n*+->"
  k wolf: "You slash a hungry timber wolf's side with your backsword!\n\n*+->"
  change mood wimpy: "Ok.\nYour Dodging Bonus (DB) increases to protect your health.\n\n*+->"
  cha mood wimpy: "Ok.\n\n*+->"
  cha m wimpy: "Ok.\n\n*+->"
---

<TutorialPlayer>

# Combat Safety & Stances

Before fighting, use `consider` to assess your enemy.

In MUME, combat is real-time! Adjust your posture using `change mood aggressive` to strike harder, or `change mood wimpy` to raise your defense (`DB`).

Practice `consider wolf`, `change mood aggressive`, `hit wolf`, and `change mood wimpy` below!

</TutorialPlayer>
