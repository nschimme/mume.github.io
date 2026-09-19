---
title: "NPC Triggers vs. Player Communication & Ranger Allies"
description: "Understand the difference between simple NPC trigger words and rich player interaction with TELL and FOLLOW."
teach:
  - command: "say yes"
    desc: "speak aloud to respond to an automated NPC trigger"
  - command: "tell ermin hello"
    desc: "send a private direct message to a living player anywhere in Middle-earth"
  - command: "follow ermin"
    desc: "follow an experienced player or ranger and join their adventuring party"
steps:
  - ask: "say yes"
    note: "Maelton the village elder asks for help. NPCs respond to simple keyword triggers spoken aloud. Type SAY YES to accept."
    accept:
      - "say yes"
      - "say y"
    hint: "Type: say yes"
    example: "> say yes\nYou say 'yes'\nMaelton says 'Thank you, Fuor! Please visit the local grocer in the southern shop.'"
  - ask: "tell ermin hello"
    note: "Unlike automated NPCs, living players and Rangers engage in rich, freeform communication! Reply to Ermin using TELL ERMIN HELLO."
    accept:
      - "tell ermin hello"
      - "tell ermin"
      - "tell"
    hint: "Type: tell ermin hello"
    example: "> tell ermin hello\nYou tell Ermin 'hello'\nErmin tells you 'Follow me, young Fuor! I shall guide you through the hills.'"
  - ask: "follow ermin"
    note: "Ermin invites you to join his party. Type FOLLOW ERMIN to travel alongside the ranger."
    accept:
      - "follow ermin"
      - "fol ermin"
    hint: "Type: follow ermin"
    example: "> follow ermin\nYou now follow Ermin.\nYou are now a member of Ermin's group."
responses:
  say yes: "You say 'yes'\nMaelton the village elder says 'Thank you, Fuor! Please visit the local grocer in the southern shop.'\n\nErmin the Ranger steps out from the shadow of the inn, smiling warmly.\nErmin tells you 'Greetings, young Fuor! Are you ready for the wild?'\n\n!+*>"
  say y: "You say 'yes'\n\nMaelton the village elder says 'Thank you, Fuor!'\n\nErmin tells you 'Greetings, young Fuor! Are you ready for the wild?'\n\n!+*>"
  tell ermin hello: "You tell Ermin 'hello'\n\nErmin tells you 'Follow me, young Fuor! I shall guide you through the hills.'\n\n!+*>"
  tell ermin: "You tell Ermin 'hello'\n\nErmin tells you 'Follow me, young Fuor! I shall guide you through the hills.'\n\n!+*>"
  tell: "You tell Ermin 'hello'\n\nErmin tells you 'Follow me, young Fuor! I shall guide you through the hills.'\n\n!+*>"
  follow ermin: "You now follow Ermin.\nYou are now a member of Ermin's group.\n\nErmin says 'Excellent! Together we shall explore the eastern countryside.'\n\n!+*>"
  fol ermin: "You now follow Ermin.\nYou are now a member of Ermin's group.\n\n!+*>"
---

# NPC Triggers vs. Player Communication & Ranger Allies

Communication in MUME falls into two distinct categories:

### 1. Automated NPCs (Non-Player Characters)
NPCs like merchants, guildmasters, and village elders are computer-controlled. They react predictably to specific action keywords or spoken phrases using `say` (e.g. `say yes`, `list`, `buy`). They serve essential world roles, but their conversation is scripted.

### 2. Living Human Players & MUME Rangers
In contrast, fellow players and **MUME Rangers** are real human beings. They provide rich, dynamic conversations, mentorship, tactical advice, and group adventuring! You can communicate directly across any zone using `tell <player> <message>`, and travel together as a team using `follow <player>`.

Practice both NPC triggers and player interaction with `say yes`, `tell ermin hello`, and `follow ermin` below!
