---
title: "Equipping Gear & Managing Inventory"
description: "Wield weapons, wear leather armor, and organize supplies into containers."
teach:
  - command: "wield backsword"
    desc: "wield your main weapon into your primary hand"
  - command: "wear jerkin"
    desc: "wear leather armor on your torso"
  - command: "equipment"
    desc: "display all currently worn gear and held items"
steps:
  - ask: "wield backsword"
    note: "Your character automatically starts with initial adventuring gear. To prepare for battle, wield your backsword."
    accept:
      - "wield backsword"
      - "wield sword"
    hint: "Type: wield backsword"
    example: "> wield backsword\nYou stop using a torch.\nYou awkwardly wield a backsword, ready to fight evil."
  - ask: "wear jerkin"
    note: "Armor reduces damage taken from wild beasts and enemy swings. Put on your soft leather jerkin."
    accept:
      - "wear jerkin"
      - "wear leather jerkin"
    hint: "Type: wear jerkin"
    example: "> wear jerkin\nYou wear a thick, soft leather jerkin on your body."
  - ask: "equipment"
    note: "Check what gear you currently have equipped on your body with `equipment` (or `eq` for short)."
    accept:
      - "equipment"
      - "eq"
    hint: "Type: equipment (or eq)"
    example: "> equipment\nYou are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)"
responses:
  wield backsword: "You stop using a torch.\nYou awkwardly wield a backsword, ready to fight evil."
  wield sword: "You stop using a torch.\nYou awkwardly wield a backsword, ready to fight evil."
  wear jerkin: "You wear a thick, soft leather jerkin on your body."
  wear leather jerkin: "You wear a thick, soft leather jerkin on your body."
  equipment: "You are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)"
  eq: "You are using:\n<wielded>            a backsword (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)"
---

<TutorialPlayer>

# Preparing Your Armaments

Modern MUME adventurers are equipped with a starter kit upon entry. However, equipment sitting in your inventory provides no protection until it is worn or wielded!

Learn to manage your loadout with `wield`, `wear`, `remove`, and check your equipped slots anytime using `equipment` (or `eq`).

</TutorialPlayer>
