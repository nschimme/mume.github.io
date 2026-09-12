---
title: "Equipment & Gear Management"
description: "Inspect carried items, wear armor, wield weapons, equip shields, attach accessories to belt, and verify equipped gear."
teach:
  - command: "inventory"
    desc: "check your carried items"
  - command: "wear jerkin"
    desc: "put on leather armor on your torso"
  - command: "wield backsword"
    desc: "wield your primary weapon"
  - command: "wear shield"
    desc: "fasten small wooden shield on your arm"
  - command: "wear lantern belt"
    desc: "attach light source directly to your belt"
  - command: "put all sack"
    desc: "stow loose provisions inside a sack"
  - command: "equipment"
    desc: "display all currently worn gear and weapons"
steps:
  - ask: "inventory"
    note: "Check what Fuor is carrying in his hands and pack."
    accept:
      - "inventory"
      - "inv"
      - "i"
    hint: "Type: inventory (or inv)"
    example: "> inventory\nYou are carrying:\na large biscuit\na small piece of meat\na loaf of bread\na cup\na large sack"
  - ask: "wear jerkin"
    note: "Put on your soft leather jerkin to protect Fuor's body."
    accept:
      - "wear jerkin"
      - "wear soft leather jerkin"
    hint: "Type: wear jerkin"
    example: "> wear jerkin\nYou wear a soft leather jerkin on your body."
  - ask: "wield backsword"
    note: "Wield your backsword into your primary weapon hand."
    accept:
      - "wield backsword"
      - "wield sword"
    hint: "Type: wield backsword"
    example: "> wield backsword\nYou wield a backsword in your right hand."
  - ask: "wear shield"
    note: "Fasten your small wooden shield onto your arm."
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
    note: "Organize loose provisions into your large sack."
    accept:
      - "put all sack"
      - "put all in sack"
    hint: "Type: put all sack"
    example: "> put all sack\nYou put a large biscuit in a large sack.\nYou put a cup in a large sack."
  - ask: "equipment"
    note: "Inspect all worn gear and equipped items with EQUIPMENT (or EQ)."
    accept:
      - "equipment"
      - "eq"
    hint: "Type: equipment (or eq)"
    example: "> equipment\nYou are using: backsword, small wooden shield, soft leather jerkin, trousers, boots."
responses:
  inventory: "You are carrying:\na large biscuit\na large biscuit\na small piece of meat\na loaf of bread\na loaf of bread\na cup\na large sack"
  inv: "You are carrying: two biscuits, piece of meat, two loaves of bread, cup, large sack."
  i: "You are carrying: two biscuits, piece of meat, two loaves of bread, cup, large sack."
  wear jerkin: "You wear a soft leather jerkin on your body."
  wear soft leather jerkin: "You wear a soft leather jerkin on your body."
  wield backsword: "You wield a backsword in your right hand."
  wield sword: "You wield a backsword in your right hand."
  wear shield: "You fasten a small wooden shield on your arm."
  wear lantern belt: "You fasten a lantern on your belt.\nYou light a lantern."
  wear lantern on belt: "You fasten a lantern on your belt.\nYou light a lantern."
  put all sack: "You put a large biscuit in a large sack.\nYou put a small piece of meat in a large sack.\nYou put a cup in a large sack."
  put all in sack: "You put your loose items in a large sack."
  equipment: "You are using:\n<wielded>            a backsword (flawless)\n<worn as shield>     a small wooden shield (flawless)\n<worn on body>       a soft leather jerkin (flawless)\n<worn on legs>       a pair of plain trousers (flawless)\n<worn on feet>       a pair of rigid leather boots (flawless)\n<worn as belt>       a plain leather belt\n<worn on belt>       a hunting knife (flawless)\n<worn on belt>       a lit lantern\n<worn on belt>       a dark coloured flask"
  eq: "You are using: backsword, small wooden shield, soft leather jerkin, plain trousers, rigid leather boots, belt, hunting knife, lit lantern, flask."
---

<TutorialPlayer>

# Equipment & Gear Management

Proper equipment management keeps Fuor alive in battle.

Practice checking inventory (`INV`), wearing armor (`WEAR JERKIN`), wielding weapons (`WIELD BACKSWORD`), equipping shields (`WEAR SHIELD`), fastening accessories to your belt (`WEAR LANTERN BELT`), and checking worn gear (`EQ`).

</TutorialPlayer>
