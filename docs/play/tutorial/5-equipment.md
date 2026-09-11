---
chapter: 5
totalChapters: 16
title: "Equipment & Light Sources"
description: "Wearing armor, wielding weapons, and lighting torches or lanterns."
prev: "/play/tutorial/4-movement"
next: "/play/tutorial/6-sustenance"
teach:
  - command: "wear jerkin"
    desc: "put on armor or clothing"
  - command: "wield sword"
    desc: "hold a weapon ready in your main hand"
  - command: "remove jerkin"
    desc: "take off armor"
  - command: "equipment / eq"
    desc: "list currently worn and wielded items"
  - command: "hold torch"
    desc: "hold a torch in your hand"
  - command: "light torch"
    desc: "ignite a torch or lantern"
  - command: "wear lantern belt"
    desc: "fasten a lantern to your belt"
practice: "light torch"
accept:
  - "light torch"
  - "light lantern"
  - "light"
hint: "Type: light torch"
example: "> light torch\nYou light a torch. It glows brightly, illuminating the dark cavern!"
responses:
  wear jerkin: "You wear a thick, soft leather jerkin on your body."
  wield sword: "You wield a backsword in your main hand."
  remove jerkin: "You take off a thick, soft leather jerkin."
  equipment: "You are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)\n<worn on legs>       a pair of trousers (brand new)"
  eq: "You are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)\n<worn on legs>       a pair of trousers (brand new)"
  hold torch: "You hold a torch in your hand."
  light torch: "You light a torch. It glows brightly, illuminating the room!"
  wear lantern belt: "You fasten a lantern on your belt.\nYou light a lantern."
---

<TutorialPlayer>

# Equipping Armor & Weapons

Carrying an item is not the same as using it.

Use `wear <item>` for armor/clothes, `wield <weapon>` for weapons, and `remove <item>` to take armor off. `equipment` (or `eq`) lists everything currently worn or wielded.

# Light Sources & Belt Items

Away from illuminated towns it gets dark! In the dark, you cannot see rooms, monsters, or exits.

Use `hold torch` and `light torch` to illuminate dark places. You can also attach utility items to belts: `wear lantern belt`, `wear knife belt`.

</TutorialPlayer>
