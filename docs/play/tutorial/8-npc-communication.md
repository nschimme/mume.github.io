---
title: "NPC Interaction & Communication"
description: "Inspect townspeople, listen to quest givers, speak aloud, and send private tells."
teach:
  - command: "examine maelton"
    desc: "inspect Maelton the village elder in detail"
  - command: "say yes"
    desc: "speak aloud to accept a quest or answer an NPC"
  - command: "nod"
    desc: "nod solemnly to confirm agreement"
  - command: "tell Fuor hello"
    desc: "send a private message to a player anywhere in Middle-earth"
steps:
  - ask: "examine maelton"
    note: "Inspect Maelton the village elder in Market Square using EXAMINE MAELTON."
    accept:
      - "examine maelton"
      - "exa maelton"
    hint: "Type: examine maelton"
    example: "> examine maelton\nMaelton the village elder has a long, thin jaw and immaculate white beard."
  - ask: "say yes"
    note: "Speak aloud to accept Maelton's quest with SAY YES."
    accept:
      - "say yes"
      - "say y"
    hint: "Type: say yes"
    example: "> say yes\nYou say 'yes'\nMaelton says 'Wonderful! Please visit the local grocer in the southern shop.'"
  - ask: "nod"
    note: "Confirm your agreement with NOD."
    accept:
      - "nod"
    hint: "Type: nod"
    example: "> nod\nYou nod solemnly."
  - ask: "tell Fuor hello"
    note: "Send a private direct message across Middle-earth using TELL <person> <message>."
    accept:
      - "tell Fuor hello"
      - "tell fuor hello"
      - "tell"
    hint: "Type: tell Fuor hello"
    example: "> tell Fuor hello\nYou tell Fuor 'hello'"
responses:
  examine maelton: "Frail wisps of white hair have been combed over rather ineffectively to rest on\na balding head of a village elder. He has a long, thin jaw and prominent chin\nthat ends with a long and white immaculately-trimmed beard. The elder is quite\ntanned with thick calluses on his hands, remnants of his past hard work.\nMaelton the village elder is in an excellent condition.\nMaelton the village elder is using:\n<worn on head>       a brown hood (flawless)\n<worn on body>       a brown shirt (satisfactory)\n<worn about body>    a blue cloak (satisfactory)\n<worn on arms>       a brown pair of sleeves (flawless)\n<worn on legs>       a brown pair of pants (used)\n<worn on feet>       a pair of heavy shoes (satisfactory)\n<worn on finger>     a ring\n<worn as belt>       a black leather belt\n<worn on belt>       a lit lantern\n\n!+*>"
  exa maelton: "Maelton the village elder stands here watching the goings-on.\n\n!+*>"
  say yes: "You say 'yes'\nMaelton the village elder says 'Wonderful, Fuor! Please visit the local grocer in the southern shop.'\n\n!+*>"
  say y: "You say 'yes'\n\n!+*>"
  nod: "You nod solemnly.\n\n!+*>"
  tell Fuor hello: "You tell Fuor 'hello'\n\n!+*>"
  tell fuor hello: "You tell Fuor 'hello'\n\n!+*>"
  tell: "You tell Fuor 'hello'\n\n!+*>"
---

<TutorialPlayer>

# NPC Interaction & Communication

Interacting with characters is key to unlocking quests and getting help. `say` speaks to everyone in the room, while `tell` sends a private message to anyone online.

Practice `examine maelton`, `say yes`, `nod`, and `tell Fuor hello` below!

</TutorialPlayer>
