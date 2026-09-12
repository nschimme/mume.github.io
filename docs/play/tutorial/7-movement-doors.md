---
title: "Movement & Doors"
description: "Practice cardinal directions, room transitions, and opening doors."
teach:
  - command: "south"
    desc: "move south into Black Hill Stables"
  - command: "west"
    desc: "move west into Market Square"
  - command: "open door"
    desc: "open closed door or gate"
  - command: "north"
    desc: "move north into Common Room"
steps:
  - ask: "south"
    note: "Move SOUTH (or S) into Black Hill Stables."
    accept:
      - "south"
      - "s"
    hint: "Type: south (or s)"
    example: "> south\nBlack Hill Stables\nNarrow wooden stalls filled with fresh-cut hay provide basic accommodation."
  - ask: "west"
    note: "Move WEST (or W) into Black Hill Market Square."
    accept:
      - "west"
      - "w"
    hint: "Type: west (or w)"
    example: "> west\nBlack Hill Market Square\nThis is the heart and centre of the village."
  - ask: "open door"
    note: "Open closed doors or gates before moving through them using OPEN DOOR."
    accept:
      - "open door"
      - "open gate"
      - "open north"
    hint: "Type: open door"
    example: "> open door\nYou open the door."
  - ask: "north"
    note: "Move NORTH (or N) into the Common Room of The Foaming Mug."
    accept:
      - "north"
      - "n"
    hint: "Type: north (or n)"
    example: "> north\nCommon Room of The Foaming Mug\nThis large room is filled with long, wooden tables."
responses:
  south: "Black Hill Stables\nNarrow wooden stalls filled with fresh-cut hay provide basic but comfortable\naccommodation for horses and mules of all kinds. Primitive but functional tack\nfor use on the horses has been stored on a wooden trestle against the outer\nwall. A ladder leading to the loft space allows the stable-hands access.\nA long water trough made of wood stands here.\nExits: north, east, west.\n\n![>"
  s: "Black Hill Stables\nExits: north, east, west.\n\n![>"
  west: "Black Hill Market Square\nThis is the heart and centre of the village. Many residents crowd the square,\ntalking and laughing as they go about their business. A small market has been\nset up here specialising in vegetables and other local produce. A rather large\nbuilding dominates the northern side of the square.\nMaelton, village elder of Black Hill, stands here watching the goings-on.\nExits: north, east, south, =west=.\n\n!+*>"
  w: "Black Hill Market Square\nExits: north, east, south, =west=.\n\n!+*>"
  open door: "You open the door.\n\n!.*>"
  open gate: "You open the gate.\n\n!.*>"
  open north: "You open the north door.\n\n!.*>"
  north: "Common Room of The Foaming Mug\nThis large room is filled with long, wooden tables and simple benches running\nalong each side. The locals appear to be making great use of this inn with most\ntables taken and the room filled with sounds of chattering and clinking of\nmugs. Set into the wall is a large, open fire which burns local peat.\nA bartender watches you calmly, while wiping ale mugs with a grimy cloth.\nExits: north, east, south, up.\n\n![>"
  n: "Common Room of The Foaming Mug\nExits: north, east, south, up.\n\n![>"
---

<TutorialPlayer>

# Movement & Doors

Move between rooms using cardinal directions (`south`, `west`, `north`). If an exit is blocked by a closed door or gate, use `open door` first!

Practice `south`, `west`, `open door`, and `north` below!

</TutorialPlayer>
