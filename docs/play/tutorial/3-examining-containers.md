---
title: "Examining & Containers"
description: "Inspect specific objects in detail and practice putting items in or retrieving them from bags."
teach:
  - command: "examine table"
    desc: "inspect a specific object in detail"
  - command: "get cheese sack"
    desc: "retrieve an item from inside a container"
  - command: "put cheese sack"
    desc: "store an item inside a bag or container"
steps:
  - ask: "examine table"
    note: "Use EXAMINE (or EXA) to inspect the small oaken table in detail."
    accept:
      - "examine table"
      - "exa table"
      - "examine"
    hint: "Type: examine table"
    example: "> examine table\nA small oaken table set on the lawn. On the table, there is a piece of cheese."
  - ask: "get cheese sack"
    note: "Retrieve rations from inside your sack using GET <item> <container>."
    accept:
      - "get cheese sack"
      - "get cheese from sack"
    hint: "Type: get cheese sack"
    example: "> get cheese sack\nYou get a piece of cheese from a large sack."
  - ask: "put cheese sack"
    note: "Store items back in your bag using PUT <item> <container>."
    accept:
      - "put cheese sack"
      - "put cheese in sack"
    hint: "Type: put cheese sack"
    example: "> put cheese sack\nYou put a piece of cheese in a large sack."
responses:
  examine table: "A small oaken table crafted from local timber rests on the garden lawn.\nOn the table, there is a piece of cheese.\n\n!.*>"
  exa table: "A small oaken table crafted from local timber rests on the garden lawn.\n\n!.*>"
  get cheese sack: "You get a piece of cheese from a large sack.\n\n!.*>"
  get cheese from sack: "You get a piece of cheese from a large sack.\n\n!.*>"
  put cheese sack: "You put a piece of cheese in a large sack.\n\n!.*>"
  put cheese in sack: "You put a piece of cheese in a large sack.\n\n!.*>"
---

<TutorialPlayer>

# Examining & Containers

`examine` gives detailed descriptions of items, people, and room features. Container commands follow the pattern `get <item> <container>` and `put <item> <container>`.

Practice `examine table`, `get cheese sack`, and `put cheese sack` below!

</TutorialPlayer>
