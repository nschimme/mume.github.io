---
title: "Sustenance: Eating & Drinking"
description: "Maintain your hunger and thirst levels to keep hit point and move regeneration active."
teach:
  - command: "eat cheese"
    desc: "consume food to satisfy hunger"
  - command: "hold torch"
    desc: "hold a lit light source"
steps:
  - ask: "eat cheese"
    note: "Hunger and thirst slow down hit point and stamina regeneration. Eating food like cheese satisfies your hunger."
    accept:
      - "eat cheese"
    hint: "Type: eat cheese"
    example: "> eat cheese\nYou eat the cheese.\nYou are full."
  - ask: "hold torch"
    note: "Holding a light source ensures you can see in unlit rooms or outdoors when night falls in Middle-earth."
    accept:
      - "hold torch"
    hint: "Type: hold torch"
    example: "> hold torch\nYou hold a torch.\nYou light a torch."
responses:
  eat cheese: "You eat the cheese.\nYou are full."
  hold torch: "You hold a torch.\nYou light a torch."
---

<TutorialPlayer>

# Sustenance and Light

Surviving in the wild requires monitoring your character's physiological needs. Being hungry or thirsty penalizes health and stamina recovery.

Likewise, holding a lit torch or lantern is vital when traveling after sunset or exploring underground ruins.

</TutorialPlayer>
