---
title: "Looking & Inspecting"
description: "Describing rooms with look and inspecting objects with examine."
teach:
  - command: "look / l"
    desc: "describe the room you are in"
  - command: "examine sword"
    desc: "study one thing closely (also: exa)"
  - command: "examine sign"
    desc: "read inscriptions on a sign or plaque"
practice: "examine elf"
accept:
  - "examine elf"
  - "exa elf"
  - "examine"
  - "exa"
hint: "Type: examine elf"
example: "> examine elf\nFair and graceful this child of Eru is, and with but a cursory glance in your direction he continues to walk, dreaming of mysterious things.\nAn elf is in an excellent condition."
responses:
  look: "East of the Bridge\nYou are standing on the Old East Road, just east of the Brandywine bridge.\nA dusty road leads to a gate in a tall hedgerow to the south - the High Hay.\nExits: north, south, east, west.\nA friendly elf is resting here under the oak tree."
  l: "East of the Bridge\nYou are standing on the Old East Road, just east of the Brandywine bridge.\nA dusty road leads to a gate in a tall hedgerow to the south - the High Hay.\nExits: north, south, east, west.\nA friendly elf is resting here under the oak tree."
  examine elf: "Fair and graceful this child of Eru is, and with but a cursory glance in your direction he continues to walk, dreaming of mysterious things.\nAn elf is in an excellent condition."
  exa elf: "Fair and graceful this child of Eru is, and with but a cursory glance in your direction he continues to walk, dreaming of mysterious things.\nAn elf is in an excellent condition."
  examine sword: "This narrow, single-edged blade has been inlaid with gold filigree from point to pommel. The grip is black leather, embossed with the image of a red hill against a setting sun."
  examine sign: "Prancing Pony Inn - Food & Safe Lodging for Travelers"
---

<TutorialPlayer>

# How to Type & Look Around

You talk to MUME in short instructions. Usually a verb, then a thing (e.g. `look sign`, `get sword`).

`look` (or `l`) describes your room, occupants, objects, and compass exits. If text scrolls past quickly, `look` brings back the room description immediately.

# Inspecting Things Closely

`examine <target>` (or `exa`) studies a specific person, monster, object, or sign in detail. It reveals condition, worn equipment on characters, and inscriptions on signs.

</TutorialPlayer>
