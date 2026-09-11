---
title: "Managing Inventory & Provisions"
description: "Organize supplies into sacks, and eat provisions to stay nourished."
teach:
  - command: "inventory"
    desc: "check what you are holding"
  - command: "eat cheese"
    desc: "consume food to prevent hunger"
steps:
  - ask: "inventory"
    accept:
      - "inventory"
      - "inv"
      - "i"
    hint: "Type: inventory (or inv)"
    example: "> inventory\nYou are carrying: some cheese, a large sack."
  - ask: "eat cheese"
    accept:
      - "eat cheese"
    hint: "Type: eat cheese"
    example: "> eat cheese\nYou eat the cheese.\nYou are full."
responses:
  inventory: "You are carrying:\nsome cheese\na large sack"
  inv: "You are carrying:\nsome cheese\na large sack"
  eat cheese: "You eat the cheese.\nYou are full."
---

<TutorialPlayer>

# Sustenance on the Road

Travelers in Middle-earth must manage hunger and thirst. If your character becomes hungry or thirsty, hit points and movement points recover much slower!

Check your carried supplies with `inventory` (or `inv`), then eat the piece of cheese you carried from Mandos.

</TutorialPlayer>
