---
title: "Manipulating Items"
description: "Picking up, dropping, and organizing items inside sacks and containers."
teach:
  - command: "get torch"
    desc: "pick up an item from the floor"
  - command: "inventory / i"
    desc: "list items you are carrying"
  - command: "put all sack"
    desc: "store carried items into a bag"
  - command: "look in sack"
    desc: "inspect contents of a container"
steps:
  - ask: "get torch"
    accept:
      - "get torch"
      - "get all"
      - "get"
    hint: "Type: get torch"
    example: "> get torch\nYou get a torch."
  - ask: "inventory"
    accept:
      - "inventory"
      - "inv"
      - "i"
    hint: "Type: inventory"
    example: "> inventory\nYou are carrying:\na sturdy rope\na water skin\na lantern\nsome cheese"
  - ask: "put all sack"
    accept:
      - "put all sack"
      - "put all in sack"
      - "put all"
    hint: "Type: put all sack"
    example: "> put all sack\nYou put a cup in a large sack.\nYou put a map of Fornost in a large sack."
  - ask: "look in sack"
    accept:
      - "look in sack"
      - "look sack"
      - "l in sack"
      - "l sack"
    hint: "Type: look in sack"
    example: "> look in sack\nsack (carried) :\na cup\na map of Fornost\na torch"
responses:
  get torch: "You get a torch."
  get all: "You get a torch.\nYou get a piece of cheese."
  drop cheese: "You drop a piece of cheese on the ground."
  inventory: "You are carrying:\na sturdy rope\na water skin\na coach ticket\na lantern"
  i: "You are carrying:\na sturdy rope\na water skin\na coach ticket\na lantern"
  look in sack: "sack (carried) :\na cup\na map of Fornost\na torch"
  put all sack: "You put a cup in a large sack.\nYou put a map of Fornost in a large sack."
---

<TutorialPlayer>

# Getting, Dropping & Inventory

To pick up an object lying on the ground, use `get <item>` (or `get all`). To put an item down, use `drop <item>`.

`inventory` (or `i`) lists everything currently in your hands and bags.

# Containers & Bags

To keep your inventory organized, store items inside sacks, backpacks, or pouches.

- Use `put <item> <container>` (e.g. `put all sack`) to store items.
- Use `look in <container>` to see inside a bag.
- Use `get <item> <container>` (e.g. `get map sack`) to retrieve items.

</TutorialPlayer>
