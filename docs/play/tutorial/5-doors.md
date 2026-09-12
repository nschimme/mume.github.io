---
title: "Doors, Locks & City Gates"
description: "Learn to open, close, unlock doors, and call city gateguards."
teach:
  - command: "open door"
    desc: "open a door or exit in your current room"
  - command: "close door"
    desc: "close an open door behind you"
  - command: "call"
    desc: "call out to city gateguards to open locked city gates"
steps:
  - ask: "open door"
    note: "Many buildings, dungeons, and mountain passes in Middle-earth are secured by closed doors. To pass through, use `open <door>` or `open <direction>`."
    accept:
      - "open door"
      - "open gate"
      - "open"
    hint: "Type: open door"
    example: "> open door\nYou open the heavy oak door."
  - ask: "close door"
    note: "Closing doors behind you prevents roaming wild beasts from following you into safe structures or inn rooms."
    accept:
      - "close door"
      - "close"
    hint: "Type: close door"
    example: "> close door\nYou close the heavy oak door."
  - ask: "call"
    note: "Major walled cities like Fornost and Tharbad protect their citizens with massive iron gates. When standing outside a closed city gate, type `call` (or `say open`) to ask the gateguards to unlock and open the gates for you."
    accept:
      - "call"
      - "say open"
    hint: "Type: call (or say open)"
    example: "> call\nYou call for the gate to be opened...\nYou hear a *click* in a lock.\nThe Irongate is opened from the other side."
responses:
  open door: "You open the heavy oak door."
  open gate: "You open the iron gate."
  open: "You open the heavy oak door."
  close door: "You close the heavy oak door."
  close: "You close the heavy oak door."
  call: "You call for the gate to be opened...\nYou hear a *click* in a lock.\nThe Irongate is opened from the other side."
  say open: "An experienced Dúnadan officer looks you over.\nAn experienced Dúnadan officer unlocks the Irongate.\nAn experienced Dúnadan officer opens the Irongate."
---

<TutorialPlayer>

# Navigating Doors, Locks & City Gates

In Middle-earth, paths are often barred by wooden doors, portcullises, or locked iron gates.

- **Doors**: Use `open <door>` or `open <direction>` (e.g. `open east`) to open exits. Remember to `close` doors behind you when resting or storing items!
- **Keys & Locks**: Locked doors require a matching key in your inventory (`unlock door`, `lock door`). Thieves and Rangers with picking skills can also attempt `pick door`.
- **City Gates**: Walled sanctuaries like Fornost keep their gates locked against enemy forces. If you find yourself barred outside a city gate, standing by the entrance and typing `call` or `say open` signals the guard officers to inspect you and unlock the passage.

</TutorialPlayer>
