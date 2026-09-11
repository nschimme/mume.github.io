---
title: "Navigating Fornost"
description: "Walk from the Well through Market Square toward The Crown of Arnor Inn."
teach:
  - command: "west"
    desc: "walk west to Market Square"
  - command: "exits"
    desc: "check available cardinal directions"
steps:
  - ask: "west"
    accept:
      - "west"
      - "w"
    hint: "Type: west (or w)"
    example: "> west\nMarket Square\nYou stand under a big red sign for 'The Crown of Arnor' Inn."
  - ask: "exits"
    accept:
      - "exits"
      - "ex"
    hint: "Type: exits"
    example: "> exits\nNorth - Western End of Market Square\nEast  - Market Square\nSouth - Craftsmen's Alley\nWest  - The Grocery"
responses:
  west: "Market Square\nYou stand under a big red sign which proclaims that you are at the entrance to\nthe well-known inn called 'The Crown of Arnor', or as people say around these\nparts, just 'The Crown'. Some oxcarts have been parked here, and presumably\ntheir drivers are inside enjoying a nice, hot meal.\nA timetable for the coach to Tharbad has been nailed on to a wall.\nThere is an old street-lamp on the border of the street.\nExits: North East South West."
  w: "Market Square\nYou stand under a big red sign... Exits: North East South West."
  exits: "Exits from Market Square:\nNorth - Western End of Market Square\nEast  - At the Well\nSouth - The Crown of Arnor Inn\nWest  - Western End of Market Square"
---

<TutorialPlayer>

# Exploring the Streets of Fornost

Fornost is a bustling trade hub rebuilt after ancient wars. Movement in MUME uses cardinal directions: `north`, `south`, `east`, `west`, `up`, and `down` (abbreviated `n`, `s`, `e`, `w`, `u`, `d`).

Step west from the well to enter **Market Square**, where oxcarts park outside the famous *Crown of Arnor Inn*. Use the `exits` command at any time to see where neighboring streets lead.

</TutorialPlayer>
