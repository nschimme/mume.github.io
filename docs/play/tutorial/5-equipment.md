---
title: "Equipment & Light Sources"
description: "Wearing armor, wielding weapons, and lighting torches or lanterns."
teach:
  - command: "wear jerkin"
    desc: "put on armor or clothing"
  - command: "wield sword"
    desc: "hold a weapon ready in your main hand"
  - command: "equipment / eq"
    desc: "list currently worn and wielded items"
  - command: "light torch"
    desc: "ignite a torch or lantern"
steps:
  - ask: "wear jerkin"
    accept:
      - "wear jerkin"
      - "wear all"
    hint: "Type: wear jerkin"
    example: "> wear jerkin\nYou wear a thick, soft leather jerkin on your body."
  - ask: "wield sword"
    accept:
      - "wield sword"
      - "wield backsword"
      - "wield"
    hint: "Type: wield sword"
    example: "> wield sword\nYou awkwardly wield a backsword, ready to fight evil."
  - ask: "equipment"
    accept:
      - "equipment"
      - "eq"
    hint: "Type: equipment"
    example: "> equipment\nYou are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)"
  - ask: "light torch"
    accept:
      - "light torch"
      - "light lantern"
      - "light"
    hint: "Type: light torch"
    example: "> light torch\nYou light a torch. It glows brightly, illuminating the dark cavern!"
responses:
  wear jerkin: "You wear a thick, soft leather jerkin on your body."
  wield sword: "You wield a backsword in your main hand."
  equipment: "You are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)"
  eq: "You are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)"
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
