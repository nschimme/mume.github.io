---
title: "Equipment & Wielding"
description: "Inspect carried items, equip body armor, wield primary weapons, and fasten shields."
teach:
  - command: "equipment"
    desc: "display all currently worn items and wielded weapons"
  - command: "inventory"
    desc: "check carried supplies and unequipped gear"
  - command: "wear jerkin"
    desc: "put on soft leather jerkin armor"
  - command: "wield backsword"
    desc: "wield your primary backsword in your main hand"
  - command: "wear shield"
    desc: "fasten small wooden shield on your off-arm"
steps:
  - ask: "equipment"
    note: "Check currently equipped items with EQUIPMENT (or EQ)."
    accept:
      - "equipment"
      - "eq"
    hint: "Type: equipment (or eq)"
    example: "> equipment\nYou are using: backsword, small wooden shield, soft leather jerkin..."
  - ask: "inventory"
    note: "Check unequipped items carried in your hands and pack with INVENTORY (or I)."
    accept:
      - "inventory"
      - "inv"
      - "i"
    hint: "Type: inventory (or i)"
    example: "> inventory\nYou are carrying: a loaf of bread, a large biscuit, a large sack..."
  - ask: "wear jerkin"
    note: "Put on your soft leather jerkin body armor."
    accept:
      - "wear jerkin"
      - "wear soft leather jerkin"
    hint: "Type: wear jerkin"
    example: "> wear jerkin\nYou wear a soft leather jerkin on your body."
  - ask: "wield backsword"
    note: "Wield your main backsword into your primary weapon hand."
    accept:
      - "wield backsword"
      - "wield sword"
    hint: "Type: wield backsword"
    example: "> wield backsword\nYou wield a backsword in your right hand."
  - ask: "wear shield"
    note: "Fasten your small wooden shield on your off-arm."
    accept:
      - "wear shield"
    hint: "Type: wear shield"
    example: "> wear shield\nYou fasten a small wooden shield on your arm."
responses:
  equipment: "You are using:\n<wielded>            a backsword (flawless)\n<worn as shield>     a small wooden shield (flawless)\n<worn on body>       a soft leather jerkin (flawless)\n<worn on legs>       a pair of plain trousers (flawless)\n<worn on feet>       a pair of rigid leather boots (flawless)\n<worn across back>   a shortbow\n<worn as belt>       a plain leather belt\n<worn on belt>       a hunting knife (flawless)\n<worn on belt>       a lit lantern\n<worn on belt>       a dark coloured flask\n<worn on belt>       a quiver\n\n*+->"
  eq: "You are using:\n<wielded>            a backsword (flawless)\n<worn as shield>     a small wooden shield (flawless)\n<worn on body>       a soft leather jerkin (flawless)\n<worn on legs>       a pair of plain trousers (flawless)\n<worn on feet>       a pair of rigid leather boots (flawless)\n<worn across back>   a shortbow\n<worn as belt>       a plain leather belt\n<worn on belt>       a hunting knife (flawless)\n<worn on belt>       a lit lantern\n<worn on belt>       a dark coloured flask\n<worn on belt>       a quiver\n\n*+->"
  inventory: "You are carrying:\na loaf of bread\na large biscuit\na small piece of meat\na loaf of bread\na cup\na large sack\n\n*+->"
  inv: "You are carrying:\na loaf of bread\na large biscuit\na small piece of meat\na loaf of bread\na cup\na large sack\n\n*+->"
  i: "You are carrying:\na loaf of bread\na large biscuit\na small piece of meat\na loaf of bread\na cup\na large sack\n\n*+->"
  wear jerkin: "You wear a soft leather jerkin on your body.\n\n*+->"
  wear soft leather jerkin: "You wear a soft leather jerkin on your body.\n\n*+->"
  wear shield: "You fasten a small wooden shield on your arm.\n\n*+->"
  wield backsword: "You wield a backsword in your right hand.\n\n*+->"
  wield sword: "You wield a backsword in your right hand.\n\n*+->"
---

<TutorialPlayer>

# Equipment & Wielding

Having gear in your inventory is not enough—you must wear armor and wield weapons to use them!

Practice `equipment`, `inventory`, `wear jerkin`, `wield backsword`, and `wear shield` below!

</TutorialPlayer>
