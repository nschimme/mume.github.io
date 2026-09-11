---
title: "Exploration & Maps"
description: "Scouting ahead with scout and viewing in-game maps."
teach:
  - command: "scout south"
    desc: "peak into an adjacent room without moving"
  - command: "map"
    desc: "display regional text map"
  - command: "map room"
    desc: "display local ASCII room map"
steps:
  - ask: "scout south"
    accept:
      - "scout south"
      - "scout s"
      - "scout"
    hint: "Type: scout south"
    example: "> scout south\nYou quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
  - ask: "map"
    accept:
      - "map"
    hint: "Type: map"
    example: "> map\n           Map of Nearby Zones\n      -----------------------------\n     |              X              |\n     |              *              |"
responses:
  scout south: "You quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
  scout s: "You quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
  scout: "You quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
  map: "           Map of Nearby Zones\n      -----------------------------\n     |              X              |\n     |              *              |\n     |              :             W|\n      -----------------------------"
  map room: "+-----+\n|#   #|\n|* +.*|\n|.+X**|\n+-----+"
---

<TutorialPlayer>

# Scouting Ahead & Maps

Before stepping into dangerous or unfamiliar territory, use `scout <direction>` (e.g. `scout south`) to peak quietly without moving into the room.

`map` displays a regional text map of Middle-earth. `map room` displays an ASCII micro-map of your room's local layout.

</TutorialPlayer>
