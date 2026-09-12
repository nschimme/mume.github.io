---
title: "Shopping & Trading"
description: "Browse shop inventory, buy travel rations, and give items to townspeople."
teach:
  - command: "south"
    desc: "head south into the Cluttered Traveller's Shop"
  - command: "list"
    desc: "browse the shopkeeper's available stock and prices"
  - command: "buy bread"
    desc: "purchase travel rations"
  - command: "give bread maelton"
    desc: "give an item to another character (item name comes first)"
steps:
  - ask: "south"
    note: "Head SOUTH from Market Square into the Cluttered Traveller's Shop."
    accept:
      - "south"
      - "s"
    hint: "Type: south (or s)"
    example: "> south\nCluttered Traveller's Shop\nWhile the shop may be small it is packed from floor to ceiling."
  - ask: "list"
    note: "Type LIST to browse the grocer's wares and prices."
    accept:
      - "list"
    hint: "Type: list"
    example: "> list\nYou can buy: 71. ten loaves of bread up to 13 copper."
  - ask: "buy bread"
    note: "Purchase a loaf of travel bread using BUY BREAD."
    accept:
      - "buy bread"
    hint: "Type: buy bread"
    example: "> buy bread\nYou buy a loaf of bread for 13 copper pennies."
  - ask: "give bread maelton"
    note: "Give your bread to Maelton. Remember MUME syntax: GIVE <item> <person>!"
    accept:
      - "give bread maelton"
      - "give bread to maelton"
    hint: "Type: give bread maelton"
    example: "> give bread maelton\nYou give a loaf of bread to Maelton the village elder."
responses:
  south: "Cluttered Traveller's Shop\nWhile the shop may be small it is packed from floor to ceiling with all manner\nof items, most of them stored in dusty boxes upon wooden shelves. It certainly\nseems as if few people have bought much of the shopkeeper's stock recently.\nA large grocer is here, waiting to buy or sell some goods.\nExits: north.\n\n*[>ÿù"
  s: "Cluttered Traveller's Shop\nExits: north.\n\n*[>ÿù"
  list: "You can buy:\n   1. five large yellow apples up to thirteen copper.\n   7. five large biscuits up to seven copper.\n  71. ten loaves of bread up to thirteen copper.\n 124. ten pieces of cheese up to seven copper.\n\n*[>ÿù"
  buy bread: "You buy a loaf of bread for thirteen copper pennies.\n\n*[>ÿù"
  give bread maelton: "You give a loaf of bread to Maelton the village elder.\nMaelton says 'Thank you, Fuor! You are truly a friend of Black Hill Village!'\n\n!+*>"
  give bread to maelton: "You give a loaf of bread to Maelton the village elder.\n\n!+*>"
---

<TutorialPlayer>

# Shopping & Trading

To trade with merchants, inspect stock using `list` and purchase items with `buy <item>`.

When giving items to NPCs or players, MUME syntax strictly expects **`give <item> <person>`** (item name before person)!

Practice `south`, `list`, `buy bread`, and `give bread maelton` below!

</TutorialPlayer>
