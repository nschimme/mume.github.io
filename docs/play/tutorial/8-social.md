---
title: "Social & Communication"
description: "Talking, telling, emotes, finding Rangers, and checking who is online."
teach:
  - command: "say hello"
    desc: "speak to everyone in the room"
  - command: "tell relim hello"
    desc: "send a private message to a player"
  - command: "nod / bow"
    desc: "perform a social gesture"
  - command: "who"
    desc: "list all online players"
  - command: "who ranger"
    desc: "find active Rangers available for help"
steps:
  - ask: "say hello"
    accept:
      - "say hello"
      - "say"
    hint: "Type: say hello"
    example: "> say hello\nYou say 'hello'\nErmin says 'Hello friend!'"
  - ask: "tell relim hello"
    accept:
      - "tell relim hello"
      - "tell"
    hint: "Type: tell relim hello"
    example: "> tell relim hello\nYou tell Relim 'hello'\nRelim tells you 'Welcome to Middle-earth! Let me know if you need help.'"
  - ask: "who ranger"
    accept:
      - "who ranger"
      - "who rangers"
    hint: "Type: who ranger"
    example: "> who ranger\nRangers Online\n--------------\n  Martyrson N'Ekasrof (Type 'tell Martyrson hello' for help!)"
responses:
  say hello: "You say 'hello'\nErmin says 'Hello friend!'"
  say: "You say 'hello'"
  tell relim hello: "You tell Relim 'hello'\nRelim tells you 'Welcome to Middle-earth! Let me know if you need help.'"
  nod: "You nod in agreement."
  bow: "You bow deeply before the company."
  who: "Players Online in Middle-earth\n------------------------------\n  Martyrson    [Ranger]\n  Elrond       [Elf Lord]\n  GandalftheGrey [Wizard]\nTotal players online: 3."
  who ranger: "Rangers Online\n--------------\n  Martyrson N'Ekasrof (Type 'tell Martyrson hello' for help!)"
  who rangers: "Rangers Online\n--------------\n  Martyrson N'Ekasrof (Type 'tell Martyrson hello' for help!)"
  where: "Players in your zone\n--------------------\nFuor                 - Western End of Market Square"
---

<TutorialPlayer>

# Talking, Telling & Emotes

`say` talks to everyone in your current room. `tell <player> <message>` sends a private message to a player anywhere in the world.

Use simple emotes like `nod`, `bow`, `smile`, or `thank` to interact with non-player characters (NPCs) and players.

# Finding Rangers & Players Online

`who` lists players currently online in Middle-earth. `who ranger` lists Rangers on duty specifically dedicated to helping new players. `where` lists players in your local zone area.

</TutorialPlayer>
