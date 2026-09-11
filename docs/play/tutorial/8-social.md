---
title: "Communication & Socials"
description: "Communicate with fellow citizens using say, tell, and emotes."
teach:
  - command: "say hello"
    desc: "speak to players in the same room"
  - command: "bow"
    desc: "perform a polite social emote"
steps:
  - ask: "say hello"
    accept:
      - "say hello"
      - "say hi"
    hint: "Type: say hello"
    example: "> say hello\nYou say 'hello'"
  - ask: "bow"
    accept:
      - "bow"
    hint: "Type: bow"
    example: "> bow\nYou bow deeply."
responses:
  say hello: "You say 'hello'\nErmin the Elf smiles happily and says 'Greetings, fellow traveler!'"
  say hi: "You say 'hi'\nErmin the Elf smiles happily and says 'Greetings, fellow traveler!'"
  bow: "You bow deeply.\nFardur the guide nods respectfully in return."
---

<TutorialPlayer>

# Living in a Multi-User World

MUME is filled with both non-player characters (mobs) and live players across the globe. You can speak to anyone in your room using `say <message>`, send private messages with `tell <player> <message>`, or communicate across channels like `narrate`.

Social expressions like `bow`, `smile`, and `nod` enrich roleplay in Middle-earth. Try saying hello and bowing!

</TutorialPlayer>
