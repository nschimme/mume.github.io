---
title: "Safe Haven & Inn Renting"
description: "Locate the innkeeper in The Foaming Mug, request a storage quote, and safely rent to preserve your equipment."
teach:
  - command: "up"
    desc: "ascend to the Inn's Private Rooms"
  - command: "examine innkeeper"
    desc: "inspect the innkeeper at his desk"
  - command: "offer"
    desc: "ask the innkeeper for your daily storage rate"
  - command: "rent"
    desc: "safely store your gear and save your character"
steps:
  - ask: "up"
    note: "From the Common Room of The Foaming Mug, climb UP to the Inn's Private Rooms."
    accept:
      - "up"
      - "u"
    hint: "Type: up (or u)"
    example: "> up\nInn's Private Rooms\nRows of simple wooden doors leading to guest rooms are accessed behind a small counter."
  - ask: "examine innkeeper"
    note: "Examine the innkeeper standing behind the desk."
    accept:
      - "examine innkeeper"
      - "ex innkeeper"
    hint: "Type: examine innkeeper"
    example: "> examine innkeeper\nThe old innkeeper was maybe in his youth an adventurer like yourself."
  - ask: "offer"
    note: "Request a storage cost quote using OFFER."
    accept:
      - "offer"
    hint: "Type: offer"
    example: "> offer\nThe innkeeper tells you 'It will cost you 19 copper pennies per day.'"
  - ask: "rent"
    note: "Safely store your equipment and save Fuor using RENT!"
    accept:
      - "rent"
    hint: "Type: rent"
    example: "> rent\nThe innkeeper says 'Please bring our esteemed guest to their chamber.'"
responses:
  up: "Inn's Private Rooms\nRows of simple wooden doors leading to the guest rooms are accessed from a long\ncorridor behind a small counter. A small brass bell rests on the counter to\nsummon the innkeeper if he is away from his post. Covering the floor is a\nthreadbare rug which, although worn, deadens the noise coming from below.\nThe innkeeper set is here, smiling at would-be customers.\nExits: north, down.\nThe innkeeper says 'Welcome to the largest inn in Black Hill village! I have never run out of rooms.'\n\n![>"
  u: "Inn's Private Rooms\nThe innkeeper stands behind the desk here.\nExits: north, down.\n\n![>"
  examine innkeeper: "The old innkeeper was maybe in his youth an adventurer like yourself, who\nprospered enough on his travels to buy this inn.\nThe innkeeper is in an excellent condition.\nThe innkeeper is using:\n<worn on body>       a chequered shirt (flawless)\n<worn on legs>       a pair of cotton pants (worn)\n<worn on finger>     a ring\n\n![>"
  ex innkeeper: "The old innkeeper stands behind the counter, smiling warmly.\n\n![>"
  offer: "The innkeeper tells you 'It will cost you 19 copper pennies per day.'\nYou have enough money for at least two years!\n\n![>"
  rent: "The innkeeper tells you 'It will cost you 19 copper pennies per day.'\nYou have enough money for at least two years!\nThe innkeeper calls for a servant who hurries from attending guests.\nThe innkeeper says 'Please bring our esteemed guest to their chamber.'\nYou are guided to your private room. Your equipment is safely stored.\n\n![>"
---

<TutorialPlayer>

# Safe Haven & Inn Renting

When you need to leave MUME, simply closing your client causes you to drop your equipped items!

To save your gear permanently, head upstairs in **The Foaming Mug** inn, inspect the innkeeper (`EXAMINE INNKEEPER`), check your daily rate (`OFFER`), and store your character safely (`RENT`).

</TutorialPlayer>
