---
title: "Equipping Your Character"
description: "Equip your gear: wear clothes, wield your backsword, and strap on your shield."
teach:
  - command: "wear jerkin"
    desc: "wear leather armor on your body"
  - command: "wield backsword"
    desc: "wield your primary weapon"
  - command: "wear shield"
    desc: "fasten a shield to your arm"
steps:
  - ask: "wear jerkin"
    accept:
      - "wear jerkin"
      - "wear soft leather jerkin"
    hint: "Type: wear jerkin"
    example: "> wear jerkin\nYou wear a thick, soft leather jerkin on your body."
  - ask: "wield backsword"
    accept:
      - "wield backsword"
      - "wield sword"
    hint: "Type: wield backsword"
    example: "> wield backsword\nYou awkwardly wield a backsword, ready to fight evil."
  - ask: "wear shield"
    accept:
      - "wear shield"
      - "wear small wooden shield"
    hint: "Type: wear shield"
    example: "> wear shield\nYou fasten a small wooden shield on your arm."
responses:
  wear jerkin: "You wear a thick, soft leather jerkin on your body."
  wield backsword: "You stop using a torch.\nYou awkwardly wield a backsword, ready to fight evil."
  wear shield: "You fasten a small wooden shield on your arm, becoming very impressive."
---

<TutorialPlayer>

# Arming Yourself for Middle-earth

In modern MUME, new adventurers awaken equipped with essential gear: leather armor, boots, a weapon, a shield, and travel sacks.

Before heading into dangerous lands, you must properly don your armor and wield your weapon. Practice equipping your jerkin, wielding your backsword, and fastening your wooden shield.

</TutorialPlayer>
