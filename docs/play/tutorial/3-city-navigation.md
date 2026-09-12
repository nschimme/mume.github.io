---
title: "Arrival at the Well & City Navigation"
description: "Master cardinal compass movement, inspect room exit directions, locate players, and read town maps."
teach:
  - command: "exits"
    desc: "display all visible exit directions"
  - command: "west"
    desc: "walk west toward Market Square"
  - command: "where"
    desc: "check locations of online players in your zone"
  - command: "look map"
    desc: "read your map of Fornost"
steps:
  - ask: "exits"
    note: "Fuor materializes at the ancient well of Fornost. Inspect available exits with EXITS."
    accept:
      - "exits"
      - "ex"
    hint: "Type: exits"
    example: "> exits\nExits: West."
  - ask: "west"
    note: "Walk west toward Market Square using cardinal direction commands (north, south, east, west, up, down)."
    accept:
      - "west"
      - "w"
    hint: "Type: west (or w)"
    example: "> west\nMarket Square\nYou stand under a big red sign outside 'The Crown of Arnor' inn."
  - ask: "where"
    note: "Use WHERE to see which players are nearby in your current zone."
    accept:
      - "where"
    hint: "Type: where"
    example: "> where\nPlayers in your zone:\nFuor - Market Square\nTheowen - City Council"
  - ask: "look map"
    note: "Read your map of Fornost to understand city streets and guild locations."
    accept:
      - "look map"
      - "l map"
    hint: "Type: look map"
    example: "> look map\n-- East Fornost Map --"
responses:
  exits: "North - Arnor Square\nEast  - At the Well\nSouth - Craftsmen's Alley\nWest  - Market Square"
  ex: "North - Arnor Square\nEast  - At the Well\nSouth - Craftsmen's Alley\nWest  - Market Square"
  west: "Market Square\nYou stand under a big red sign which proclaims that you are at the entrance to\nthe well-known inn called 'The Crown of Arnor', or as people say around these\nparts, just 'The Crown'. Some oxcarts have been parked here.\nThere is an old street-lamp on the border of the street.\nExits: North East South West."
  w: "Market Square\nYou stand under a big red sign outside 'The Crown of Arnor' inn.\nExits: North East South West."
  where: "Players in your zone\n--------------------\nFuor                 - Market Square\nTheowen              - City Council's Meeting Room"
  look map: "--  East Fornost  --\n            _______________________________________________________\n           |      |                               _  |      |      |\n           |Aband |       GUILD  STREET          |_| Garden  Temple|\n           |Bldg  |                             Well        |      |\n     ______|__  __|__  _____  ____________  __       |______|______|______\n    #             |House |      |      |      |      |      |      |      |\n    Gate by       | of   |Warr  |Writin       |      | City | Post |Bakery|\n    Palisade      |Merch |Guild | Room Library|      |Councl|Office|      |\n    |______|______|______|______|______|______|      |__  __|__  __|__  __|"
  l map: "--  East Fornost Map --"
---

<TutorialPlayer>

# Arrival at the Well & City Navigation

Fuor arrives safely at **Fornost Well**.

Learn how to inspect exit paths (`EXITS`), navigate between town streets (`WEST`), find nearby companions (`WHERE`), and read city maps (`LOOK MAP`).

</TutorialPlayer>
