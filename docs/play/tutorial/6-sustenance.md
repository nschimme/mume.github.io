---
title: "Sustenance & Survival"
description: "Eating, drinking, and refilling water skins at fountains."
teach:
  - command: "eat bread"
    desc: "eat food from your inventory"
  - command: "drink water"
    desc: "drink from a water skin, well, or fountain"
  - command: "pour fountain skin"
    desc: "refill a water skin at a water source"
steps:
  - ask: "eat bread"
    accept:
      - "eat bread"
      - "eat"
    hint: "Type: eat bread"
    example: "> eat bread\nYou eat a loaf of crusty bread. You are no longer hungry."
  - ask: "drink water"
    accept:
      - "drink water"
      - "drink"
    hint: "Type: drink water"
    example: "> drink water\nYou take a long drink of cool water from your water skin. You feel refreshed!"
responses:
  eat bread: "You eat a loaf of crusty bread. You are no longer hungry."
  eat: "You eat a small portion of rations. You are no longer hungry."
  drink water: "You take a long drink of cool water from your water skin. You feel refreshed!"
  drink: "You take a long drink of cool water from your water skin. You feel refreshed!"
  pour fountain skin: "You refill your water skin at the well. It is now full of fresh water."
---

<TutorialPlayer>

# Food, Water & Refilling

Your character gets hungry and thirsty over time. If left untreated, your health and move points recover much slower.

`eat bread` and `drink water` keep you fed and hydrated.

Use `pour fountain skin` to refill your water skin at rivers, wells, or fountains.

</TutorialPlayer>
