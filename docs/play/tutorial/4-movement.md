---
title: "Movement & Navigation"
description: "Compass travel, checking exits, opening doors, and calling city gateguards."
teach:
  - command: "north / n"
    desc: "move north (also s, e, w, u, d)"
  - command: "exits"
    desc: "list the ways out of this room"
  - command: "call"
    desc: "call out to gateguards from outside closed gates"
steps:
  - ask: "exits"
    accept:
      - "exits"
      - "ex"
    hint: "Type: exits"
    example: "> exits\nExits:\n  North   - Prancing Pony Inn\n -East-   - Cobble Street\n -South-  - Old East Road\n -West-   - Old East Road"
  - ask: "call"
    accept:
      - "call"
      - "say open"
    hint: "Type: call"
    example: "> call\nYou call for the gate to be opened.\nYou hear a *click* in a lock.\nThe Irongate is opened from the other side."
responses:
  exits: "Exits:\n  North   - Prancing Pony Inn\n -East-   - Cobble Street\n -South-  - Old East Road\n -West-   - Old East Road"
  ex: "Exits:\n  North   - Prancing Pony Inn\n -East-   - Cobble Street\n -South-  - Old East Road\n -West-   - Old East Road"
  call: "You call for the gate to be opened.\nYou hear a *click* in a lock.\nThe Irongate is opened from the other side."
  open north: "You open the door leading north."
  say open: "An experienced Dúnadan officer looks you over and opens the Irongate."
---

<TutorialPlayer>

# Compass Travel & Exits

You move by compass direction: `north`, `south`, `east`, `west`, `up`, `down`. You can type the whole word or just the first letter (`n`, `s`, `e`, `w`, `u`, `d`).

`exits` lists all available exits in the room.

# Doors & Calling Guards

Doors sometimes need opening first: `open north`.

At city gates, `say open` asks gateguards to open gates. If you are outside locked gates, `call` alerts gateguards inside to unlock them for you.

</TutorialPlayer>
