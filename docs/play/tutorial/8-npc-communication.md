---
title: "Communication & Meeting a Ranger Ally"
description: "Meet Ermin the Ranger in Black Hill Village, reply with TELL, and join his party with FOLLOW."
teach:
  - command: "examine ermin"
    desc: "inspect Ermin the Ranger in detail"
  - command: "tell ermin hello"
    desc: "send a private message to a player anywhere in Middle-earth"
  - command: "say yes"
    desc: "speak aloud to the room"
  - command: "follow ermin"
    desc: "follow an experienced player and join their adventuring party"
steps:
  - ask: "examine ermin"
    note: "As you wander through Market Square, Ermin the Ranger steps out from the shadows! Inspect him using EXAMINE ERMIN."
    accept:
      - "examine ermin"
      - "exa ermin"
    hint: "Type: examine ermin"
    example: "> examine ermin\nErmin the Ranger is a weathered veteran of the North."
  - ask: "tell ermin hello"
    note: "Ermin tells you 'Greetings, young Fuor! Are you ready for the wild?' Reply using TELL ERMIN HELLO."
    accept:
      - "tell ermin hello"
      - "tell ermin"
      - "tell"
    hint: "Type: tell ermin hello"
    example: "> tell ermin hello\nYou tell Ermin 'hello'\nErmin tells you 'Follow me, and I shall guide you through the hills!'"
  - ask: "follow ermin"
    note: "Ermin invites you to join his party! Type FOLLOW ERMIN to follow the ranger."
    accept:
      - "follow ermin"
      - "fol ermin"
    hint: "Type: follow ermin"
    example: "> follow ermin\nYou now follow Ermin.\nYou are now a member of Ermin's group."
responses:
  examine ermin: "A tall, weathered Dúnadan ranger wearing a dark grey cloak and travel-worn leather armor.\nKeen grey eyes scan the surroundings vigilantly, and a longbow is slung over his shoulder.\nErmin the Ranger is in excellent condition.\n\nErmin tells you 'Greetings, young Fuor! Are you ready for the wild?'\n\n!+*>"
  exa ermin: "Ermin the Ranger stands here, watching the village roads carefully.\n\n!+*>"
  tell ermin hello: "You tell Ermin 'hello'\n\nErmin tells you 'Follow me, and I shall guide you through the hills!'\n\n!+*>"
  tell ermin: "You tell Ermin 'hello'\n\nErmin tells you 'Follow me, and I shall guide you through the hills!'\n\n!+*>"
  tell: "You tell Ermin 'hello'\n\nErmin tells you 'Follow me, and I shall guide you through the hills!'\n\n!+*>"
  follow ermin: "You now follow Ermin.\nYou are now a member of Ermin's group.\n\nErmin says 'Excellent! Together we shall explore the eastern countryside.'\n\n!+*>"
  fol ermin: "You now follow Ermin.\nYou are now a member of Ermin's group.\n\n!+*>"
---

# Communication & Meeting a Ranger Ally

Interacting with fellow players and NPCs is central to surviving in Middle-earth. `say` speaks aloud to everyone in your current room, `tell` sends a private message across the realm, and `follow` links your movement with an ally!

As Fuor travels through Black Hill Village, he meets **Ermin the Ranger**, a veteran guardian of Arnor who offers to guide the young hero.

Practice `examine ermin`, `tell ermin hello`, and `follow ermin` below!
