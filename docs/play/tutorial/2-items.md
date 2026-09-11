---
chapter: 2
totalChapters: 16
title: "Manipulating Items"
description: "Picking up, dropping, and organizing items inside sacks and containers."
prev: "/play/tutorial/1-orientation"
next: "/play/tutorial/3-looking"
teach:
  - command: "get torch"
    desc: "pick up an item from the floor"
  - command: "get all"
    desc: "pick up all items in the room"
  - command: "drop cheese"
    desc: "put an item down on the ground"
  - command: "inventory / i"
    desc: "list items you are carrying"
  - command: "look in sack"
    desc: "inspect contents of a container"
  - command: "put all sack"
    desc: "store carried items into a bag"
practice: "look in sack"
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
  inventory: "You are carrying:\na sturdy rope\na water skin\na coach ticket\na lantern\na dark coloured flask"
  i: "You are carrying:\na sturdy rope\na water skin\na coach ticket\na lantern\na dark coloured flask"
  look in sack: "sack (carried) :\na cup\na map of Fornost\na torch"
  put all sack: "You put a cup in a large sack.\nYou put a map of Fornost in a large sack.\nYou put a torch in a large sack."
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
