---
title: "Navigating Black Hill Village"
description: "Master compass movement, exit inspection, and zone orientation across Black Hill Village."
teach:
  - command: "exits"
    desc: "display obvious exits and destinations"
  - command: "south"
    desc: "head south into the Black Hill Stables"
  - command: "west"
    desc: "head west into Black Hill Market Square"
  - command: "where"
    desc: "locate players in your immediate area"
  - command: "north"
    desc: "head north into the Common Room of The Foaming Mug"
steps:
  - ask: "exits"
    note: "Check available exits in The Foaming Mug's Beer Garden using EXITS."
    accept:
      - "exits"
      - "ex"
    hint: "Type: exits"
    example: "> exits\n  South   - Black Hill Stables\n  West    - Common Room of The Foaming Mug"
  - ask: "south"
    note: "Move SOUTH into the Black Hill Stables."
    accept:
      - "south"
      - "s"
    hint: "Type: south (or s)"
    example: "> south\nBlack Hill Stables\nNarrow wooden stalls filled with fresh-cut hay provide basic accommodation."
  - ask: "west"
    note: "Move WEST from the stables into Black Hill Market Square."
    accept:
      - "west"
      - "w"
    hint: "Type: west (or w)"
    example: "> west\nBlack Hill Market Square\nThis is the heart and centre of the village. Many residents crowd the square."
  - ask: "where"
    note: "Use WHERE to locate players and key residents nearby."
    accept:
      - "where"
    hint: "Type: where"
    example: "> where\nPlayer               Distance    Direction  Room\nFuor                 Very near              Black Hill Market Square"
  - ask: "north"
    note: "Head NORTH into the cozy Common Room of The Foaming Mug inn."
    accept:
      - "north"
      - "n"
    hint: "Type: north (or n)"
    example: "> north\nCommon Room of The Foaming Mug\nThis large room is filled with long, wooden tables and simple benches."
responses:
  exits: "Exits:\n  South   - Black Hill Stables\n  West    - Common Room of The Foaming Mug"
  ex: "Exits:\n  South   - Black Hill Stables\n  West    - Common Room of The Foaming Mug"
  south: "Black Hill Stables\nNarrow wooden stalls filled with fresh-cut hay provide basic but comfortable\naccommodation for horses and mules of all kinds. Primitive but functional tack\nfor use on the horses has been stored on a wooden trestle against the outer\nwall. A ladder leading to the loft space allows the stable-hands access.\nA long water trough made of wood stands here.\nA rather dirty young boy is here, ready to tend to the stable.\nExits: north, east, west."
  s: "Black Hill Stables\nNarrow wooden stalls filled with fresh-cut hay provide basic accommodation.\nExits: north, east, west."
  west: "Black Hill Market Square\nThis is the heart and centre of the village. Many residents crowd the square,\ntalking and laughing as they go about their business. A small market has been\nset up here specialising in vegetables and other local produce. A rather large\nbuilding dominates the northern side of the square.\nMaelton, village elder of Black Hill, stands here watching the goings-on.\nExits: north, east, south, =west=."
  w: "Black Hill Market Square\nThis is the heart and centre of the village. Maelton stands here.\nExits: north, east, south, =west=."
  where: "Player               Distance    Direction  Room\n-----------------------------------------------------------\nFuor                 Very near              Black Hill Market Square"
  north: "Common Room of The Foaming Mug\nThis large room is filled with long, wooden tables and simple benches running\nalong each side. The locals appear to be making great use of this inn with most\ntables taken and the room filled with sounds of chattering and clinking of\nmugs. Set into the wall is a large, open fire which burns local peat.\nA bartender watches you calmly, while wiping ale mugs with a grimy cloth.\nExits: north, east, south, up."
  n: "Common Room of The Foaming Mug\nA large stone fireplace warms the room. A bartender watches you calmly.\nExits: north, east, south, up."
---

<TutorialPlayer>

# Navigating Black Hill Village

Explore the bustling village of **Black Hill**: step from the Beer Garden into the **Black Hill Stables**, cross over to **Market Square**, check nearby players (`WHERE`), and step inside **The Foaming Mug** tavern.

</TutorialPlayer>
