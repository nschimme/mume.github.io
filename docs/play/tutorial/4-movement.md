---
title: "Movement & Navigation"
description: "Master cardinal compass movement across Fornost market squares."
teach:
  - command: "west"
    desc: "walk west toward Market Square"
  - command: "exits"
    desc: "display all obvious exits in your current room"
steps:
  - ask: "west"
    note: "Navigation in MUME relies on cardinal directions: north (n), south (s), east (e), west (w), up (u), and down (d). Let's step west toward the Market Square."
    accept:
      - "west"
      - "w"
    hint: "Type: west (or w)"
    example: "> west\nMarket Square\nYou stand under a big red sign outside 'The Crown of Arnor' inn.\nExits: North East South West."
  - ask: "exits"
    note: "Whenever you enter a new area or room, you can inspect available exit directions with `exits` to avoid getting lost."
    accept:
      - "exits"
      - "ex"
    hint: "Type: exits"
    example: "> exits\nNorth - Western End of Market Square\nEast  - Market Square\nSouth - Craftsmen's Alley\nWest  - The Grocery"
responses:
  west: "Market Square\nYou stand under a big red sign which proclaims that you are at the entrance to\nthe well-known inn called 'The Crown of Arnor', or as people say around these\nparts, just 'The Crown'. Some oxcarts have been parked here.\nThere is an old street-lamp on the border of the street.\nExits: North East South West."
  w: "Market Square\nYou stand under a big red sign which proclaims that you are at the entrance to\nthe well-known inn called 'The Crown of Arnor'."
  exits: "Exits:\nNorth - Western End of Market Square\nEast  - Market Square\nSouth - Craftsmen's Alley\nWest  - The Grocery"
  ex: "Exits:\nNorth - Western End of Market Square\nEast  - Market Square\nSouth - Craftsmen's Alley\nWest  - The Grocery"
---

<TutorialPlayer>

# Moving Through the Realm

Travel in Middle-earth is executed with cardinal compass directions: `north`, `south`, `east`, `west`, `up`, and `down`. These are frequently abbreviated as `n`, `s`, `e`, `w`, `u`, and `d`.

As you travel through towns and wilderness, checking your surroundings with `exits` will ensure you always know where doors, gates, and mountain paths lead.

</TutorialPlayer>
