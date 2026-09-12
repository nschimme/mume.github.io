---
title: "Communication & Social Expression"
description: "Communicate with nearby adventurers using say, tell, emote, and gestures."
teach:
  - command: "say hello"
    desc: "speak to everyone present in your current room"
  - command: "bow"
    desc: "perform a polite bow emote"
steps:
  - ask: "say hello"
    note: "To speak aloud to everyone in the same room, use `say <message>`. In MUME, speaking roleplay-appropriate dialogue enriches the world."
    accept:
      - "say hello"
      - "say hi"
    hint: "Type: say hello"
    example: "> say hello\nOk.\nYou say 'hello'"
  - ask: "bow"
    note: "Social emotes allow you to express gestures without words. Perform a formal bow."
    accept:
      - "bow"
    hint: "Type: bow"
    example: "> bow\nYou bow deeply."
responses:
  say hello: "Ok.\nYou say 'hello'"
  say hi: "Ok.\nYou say 'hi'"
  bow: "You bow deeply."
---

<TutorialPlayer>

# Interacting with Fellow Adventurers

MUME is an online multiplayer realm where players collaborate, trade, and fight alongside one another.

You can communicate locally with `say`, message distant allies with `tell` or `narrate`, and express physical gestures using social emotes like `bow`, `nod`, `smile`, or `wave`.

</TutorialPlayer>
