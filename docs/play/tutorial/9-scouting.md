---
title: "Scouting & Map Reading"
description: "Use ASCII maps and scouting to survey surroundings safely."
teach:
  - command: "map"
    desc: "view an ASCII map of nearby wilderness zones"
  - command: "scout south"
    desc: "peer stealthily into an adjacent room"
steps:
  - ask: "map"
    accept:
      - "map"
    hint: "Type: map"
    example: "> map\nMap of Nearby Zones\n+-----+\n|#   #|\n|* +.*|\n|.+X**|\n+-----+"
  - ask: "scout south"
    accept:
      - "scout south"
      - "scout s"
    hint: "Type: scout south"
    example: "> scout south\nYou quietly scout southwards...\nShaded Path: A ruffian is here."
responses:
  map: "           Map of Nearby Zones\n      -----------------------------\n     |              X              |\n     |              *              |\n     |              :              |\n     |*         ~~ :*%%:         **|\n     |~~      :::=**B::: ~:::::=:~**|\n      -----------------------------\nIn the map above, your location is marked by 'X'."
  scout south: "You quietly scout southwards...\nShaded Path\nThe corpse of a brown fox is lying here.\nA fierce boar is grunting here.\nYou stop scouting."
  scout s: "You quietly scout southwards...\nShaded Path\nA fierce boar is grunting here.\nYou stop scouting."
---

<TutorialPlayer>

# Surveying the Wilderness

Before stepping into unknown territory, wise adventurers scout ahead. MUME provides built-in ASCII mapping tools with `map` (showing regional terrain and your location as `X`).

Commanding `scout <direction>` allows you to peer into an adjacent room without stepping inside, revealing hidden mobs, enemies, or players before you arrive.

</TutorialPlayer>
