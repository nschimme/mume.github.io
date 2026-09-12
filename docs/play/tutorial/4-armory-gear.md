---
title: "The Armory & Gear Management"
description: "Inspect carried items, wear armor, wield weapons, equip shields, attach accessories to belts, and organize sacks."
teach:
  - command: "inventory"
    desc: "check your carried items"
  - command: "wear jerkin"
    desc: "put on leather armor on your torso"
  - command: "wield backsword"
    desc: "wield your primary weapon"
  - command: "wear shield"
    desc: "fasten wooden shield to off-hand arm"
  - command: "wear lantern belt"
    desc: "attach light source to your belt"
  - command: "put all sack"
    desc: "stow loose inventory inside a sack"
  - command: "equipment"
    desc: "display all currently worn items"
steps:
  - ask: "inventory"
    note: "Check what Fuor is carrying in his hands and pack."
    accept:
      - "inventory"
      - "inv"
      - "i"
    hint: "Type: inventory (or inv)"
    example: "> inventory\nYou are carrying: leather jerkin, backsword, shield, sack..."
  - ask: "wear jerkin"
    note: "Put on your soft leather jerkin to protect Fuor's body."
    accept:
      - "wear jerkin"
      - "wear leather jerkin"
    hint: "Type: wear jerkin"
    example: "> wear jerkin\nYou wear a thick, soft leather jerkin on your body."
  - ask: "wield backsword"
    note: "Wield your backsword into your primary weapon hand."
    accept:
      - "wield backsword"
      - "wield sword"
    hint: "Type: wield backsword"
    example: "> wield backsword\nYou awkwardly wield a backsword, ready to fight evil."
  - ask: "wear shield"
    note: "Fasten your wooden shield onto your off-hand arm."
    accept:
      - "wear shield"
    hint: "Type: wear shield"
    example: "> wear shield\nYou fasten a small wooden shield on your arm."
  - ask: "wear lantern belt"
    note: "Attach your lantern directly to your belt to keep your hands free."
    accept:
      - "wear lantern belt"
      - "wear lantern on belt"
    hint: "Type: wear lantern belt"
    example: "> wear lantern belt\nYou fasten a lantern on your belt. You light a lantern."
  - ask: "put all sack"
    note: "Organize loose items into your large sack."
    accept:
      - "put all sack"
      - "put all in sack"
    hint: "Type: put all sack"
    example: "> put all sack\nYou put cheese and torch in a large sack."
  - ask: "equipment"
    note: "Inspect all worn gear and equipped items with EQUIPMENT (or EQ)."
    accept:
      - "equipment"
      - "eq"
    hint: "Type: equipment (or eq)"
    example: "> equipment\nYou are using: backsword, shield, leather jerkin, belt, lantern."
responses:
  inventory: "You are carrying:\na thick, soft leather jerkin (brand new)\na small wooden shield (brand new)\na backsword (brand new)\na plain leather belt\na lantern\na large sack"
  inv: "You are carrying: leather jerkin, shield, backsword, belt, lantern, sack."
  i: "You are carrying: leather jerkin, shield, backsword, belt, lantern, sack."
  wear jerkin: "You wear a thick, soft leather jerkin on your body."
  wear leather jerkin: "You wear a thick, soft leather jerkin on your body."
  wield backsword: "You stop using a torch.\nYou awkwardly wield a backsword, ready to fight evil."
  wield sword: "You awkwardly wield a backsword, ready to fight evil."
  wear shield: "You fasten a small wooden shield on your arm, becoming very impressive."
  wear lantern belt: "You fasten a lantern on your belt.\nYou light a lantern."
  wear lantern on belt: "You fasten a lantern on your belt.\nYou light a lantern."
  put all sack: "You put a piece of raw meat in a large sack.\nYou put a cup in a large sack.\nYou put a torch in a large sack."
  put all in sack: "You put your loose items in a large sack."
  equipment: "You are using:\n<wielded>            a backsword (brand new)\n<worn as shield>     a small wooden shield (brand new)\n<worn on body>       a thick, soft leather jerkin (brand new)\n<worn as belt>       a plain leather belt\n<worn on belt>       a lantern; it is lit"
  eq: "You are using: backsword, shield, leather jerkin, belt, lantern."
---

<TutorialPlayer>

# The Armory & Gear Management

Proper equipment management keeps Fuor alive in battle.

Practice checking inventory (`INV`), wearing armor (`WEAR JERKIN`), wielding weapons (`WIELD BACKSWORD`), equipping shields (`WEAR SHIELD`), fastening accessories to your belt (`WEAR LANTERN BELT`), and checking worn gear (`EQ`).

</TutorialPlayer>
