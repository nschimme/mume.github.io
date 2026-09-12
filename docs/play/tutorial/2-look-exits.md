---
title: "Look & Exits"
description: "Build muscle memory inspecting your room environment and displaying available exits."
teach:
  - command: "look"
    desc: "describe your current room surroundings"
  - command: "exits"
    desc: "list all obvious exit directions"
steps:
  - ask: "look"
    note: "Type LOOK (or L) to inspect your room in The Foaming Mug's Beer Garden."
    accept:
      - "look"
      - "l"
    hint: "Type: look (or l)"
    example: "> look\nThe Foaming Mug's Beer Garden\nWooden tables have been set on the grass in this garden."
  - ask: "exits"
    note: "Type EXITS to display obvious cardinal exit directions."
    accept:
      - "exits"
      - "ex"
    hint: "Type: exits"
    example: "> exits\n  South   - Black Hill Stables\n  West    - Common Room of The Foaming Mug"
responses:
  look: "The Foaming Mug's Beer Garden\nWooden tables have been set on the grass in this garden allowing those staying\nat the inn to eat and drink outdoors when the weather permits. A simple stone\nwall running around the edge of the grass keeps this area private. Faint sounds\nof horses neighing and whinnying can be heard from mounts tethered in the\nstables to the south.\nA large lamp stands on the wall here, locked into an iron fixture.\nA small oaken table has been set here.\nOn the table, there is a piece of cheese.\nA circular stone well has been built here.\nExits: south, west.\n\n!.*>"
  l: "The Foaming Mug's Beer Garden\nWooden tables have been set on the grass in this garden allowing those staying\nat the inn to eat and drink outdoors when the weather permits.\nA small oaken table has been set here.\nExits: south, west.\n\n!.*>"
  exits: "  South   - Black Hill Stables\n  West    - Common Room of The Foaming Mug\n\n!.*>"
  ex: "  South   - Black Hill Stables\n  West    - Common Room of The Foaming Mug\n\n!.*>"
---

<TutorialPlayer>

# Look & Exits

In MUME, your eyes are your most important tool. Typing `look` brings back your surroundings at any time, while `exits` highlights valid paths out of your room.

Type `look` followed by `exits` below!

</TutorialPlayer>
