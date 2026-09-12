---
title: "Wilderness Scouting & Area Maps"
description: "Scout adjacent rooms safely and view ASCII wilderness maps."
teach:
  - command: "map"
    desc: "display an ASCII overview map of surrounding wilderness zones"
  - command: "scout south"
    desc: "peer quietly into an adjacent room without stepping inside"
steps:
  - ask: "map"
    note: "Stepping outside city walls into wilderness can be dangerous. Open your overland ASCII map with `map` to observe terrain features."
    accept:
      - "map"
    hint: "Type: map"
    example: "> map\n           Map of Nearby Zones\n      -----------------------------\n     |              X              |\n     |              *              |\n     |              :              |\n     |*         ~~ :*%%:         **|"
  - ask: "scout south"
    note: "To check if dangerous aggressive monsters or enemies lurk in an adjacent room before stepping in, use `scout <direction>`."
    accept:
      - "scout south"
      - "scout s"
    hint: "Type: scout south"
    example: "> scout south\nYou quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
responses:
  map: "           Map of Nearby Zones\n      -----------------------------\n     |              X              |\n     |              *              |\n     |              :              |\n     |              :             W|\n     |*         ~~ :*%%:         **|\n     |~~      :::=**B::: ~:::::=:~**|\n      -----------------------------"
  scout south: "You quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
  scout s: "You quietly scout southwards...\nShaded Path\nA ruffian is here.\nYou stop scouting."
---

<TutorialPlayer>

# Scouting and Navigation Tools

Before charging blindly down unfamiliar roads, experienced adventurers use scouting and mapping features:

- **`map`**: Renders an ASCII map of surrounding wilderness terrain (mountains, rivers, roads, towns). Your current position is marked with an `X`.
- **`scout <direction>`**: Allows you to peer stealthily into an adjacent room to check for enemies without exposing yourself to ambushes.

</TutorialPlayer>
