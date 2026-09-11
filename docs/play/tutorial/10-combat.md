---
title: "First Encounters & Wilderness Combat"
description: "Venturing outside the gates of Fornost to engage wild creatures in battle."
teach:
  - command: "consider butterfly"
    desc: "evaluate an enemy's strength before attacking"
  - command: "hit butterfly"
    desc: "initiate melee combat"
steps:
  - ask: "consider butterfly"
    accept:
      - "consider butterfly"
      - "con butterfly"
    hint: "Type: consider butterfly"
    example: "> consider butterfly\nIt looks like easy pickings!"
  - ask: "hit butterfly"
    accept:
      - "hit butterfly"
      - "k butterfly"
      - "kill butterfly"
    hint: "Type: hit butterfly"
    example: "> hit butterfly\nYou slash a butterfly's leg extremely hard and shatter it.\nA butterfly is dead! R.I.P."
responses:
  consider butterfly: "It looks like easy pickings!"
  con butterfly: "It looks like easy pickings!"
  hit butterfly: "You slash a butterfly's leg extremely hard and shatter it.\nYou receive your share of experience.\nCongratulations! This is the first time you've killed it!\nA butterfly is dead! R.I.P."
  kill butterfly: "You slash a butterfly's leg extremely hard and shatter it.\nA butterfly is dead! R.I.P."
---

<TutorialPlayer>

# Venturing Outside the Walls

Leaving the city gates of Fornost brings you into the open wild. Beyond the walls flutter harmless butterflies and small woodland creatures.

Before attacking any creature, check your odds with `consider <mob>`. Once ready, engage with `hit <mob>` (or `kill`). Defeating new creatures awards experience toward your next level!

</TutorialPlayer>
