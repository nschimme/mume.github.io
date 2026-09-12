---
title: "Tactical Retreat & Scouting Danger"
description: "Flee emergency combat, set auto-flee thresholds, view regional tactical maps, and scout ahead."
teach:
  - command: "flee"
    desc: "immediately escape emergency combat in a random direction"
  - command: "change wimpy 15"
    desc: "set automatic fleeing threshold when HP falls below 15"
  - command: "map"
    desc: "view regional area map"
  - command: "scout south"
    desc: "stealthily scout adjacent room for lurking threats"
steps:
  - ask: "flee"
    note: "Ambushed by a dangerous highway ruffian! Type FLEE to escape immediately!"
    accept:
      - "flee"
      - "f"
    hint: "Type: flee (or f)"
    example: "> flee\nYou flee head over heels! Shaded Path."
  - ask: "change wimpy 15"
    note: "Set your automatic wimpy flee threshold to 15 HP for safety."
    accept:
      - "change wimpy 15"
      - "cha w 15"
    hint: "Type: change wimpy 15"
    example: "> change wimpy 15\nWimpy set to 15 hit points."
  - ask: "map"
    note: "Inspect the regional wilderness area map centered on your position ('X')."
    accept:
      - "map"
    hint: "Type: map"
    example: "> map\n           Map of Nearby Zones\n     |              X              |"
  - ask: "scout south"
    note: "Scout stealthily southwards to check if the ruffian is lurking."
    accept:
      - "scout south"
      - "scout s"
    hint: "Type: scout south"
    example: "> scout south\nYou quietly scout southwards... Shaded Path: A ruffian is here."
responses:
  flee: "A ruffian cleaves your left arm and shatters it. That really HURT!\nYou flee head over heels.\nBend in the Road\nExits: =North= South =West=."
  f: "You flee head over heels.\nBend in the Road."
  change wimpy 15: "Wimpy set to 15 hit points."
  cha w 15: "Wimpy set to 15 hit points."
  map: "           Map of Nearby Zones\n      -----------------------------\n     |              X              |\n     |              *              |\n     |              :              |\n     |*         ~~ :*%%:         **|\n      -----------------------------"
  scout south: "You quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
  scout s: "You quietly scout southwards... Shaded Path: A ruffian is here."
---

<TutorialPlayer>

# Tactical Retreat & Scouting Danger

When faced with overwhelming foes, tactical retreat and scouting save lives.

Practice emergency fleeing (`FLEE`), setting automatic flee thresholds (`CHANGE WIMPY 15`), checking regional wilderness maps (`MAP`), and scouting adjacent rooms stealthily (`SCOUT SOUTH`).

</TutorialPlayer>
