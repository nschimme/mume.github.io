---
title: "Recovery & Rest"
description: "Sit down to accelerate hit point recovery, quench thirst, and satisfy hunger."
teach:
  - command: "rest"
    desc: "sit down to accelerate health and move recovery"
  - command: "wake"
    desc: "wake up and stand"
  - command: "drink water"
    desc: "drink water from a well or waterskin"
  - command: "eat biscuit"
    desc: "eat rations to maintain fast health regeneration"
steps:
  - ask: "rest"
    note: "Sit down to rest and regenerate health faster using REST."
    accept:
      - "rest"
    hint: "Type: rest"
    example: "> rest\nYou sit down and rest your tired bones."
  - ask: "wake"
    note: "Stand up and prepare to move again using WAKE (or STAND)."
    accept:
      - "wake"
      - "stand"
      - "st"
    hint: "Type: wake"
    example: "> wake\nYou stop resting and stand up."
  - ask: "drink water"
    note: "Quench thirst at the village well with DRINK WATER."
    accept:
      - "drink water"
      - "drink"
    hint: "Type: drink water"
    example: "> drink water\nYou drink the water from the stone well."
  - ask: "eat biscuit"
    note: "Satisfy hunger with EAT BISCUIT."
    accept:
      - "eat biscuit"
    hint: "Type: eat biscuit"
    example: "> eat biscuit\nYou eat a large biscuit. You are full."
responses:
  rest: "You sit down and rest your tired bones.\n\n*+->"
  wake: "You stop resting and stand up.\n\n*+->"
  stand: "You stop resting and stand up.\n\n*+->"
  st: "You stop resting and stand up.\n\n*+->"
  drink water: "You drink the water from the stone well.\n\n*+->"
  drink: "You drink the water from the stone well.\n\n*+->"
  eat biscuit: "You eat a large biscuit.\nYou are full.\n\n*+->"
---

# Chapter 12: Recovery by the Fire

Safely back inside **The Foaming Mug**, Fuor and Ermin sit by the peat fire. Sitting down (`rest`) accelerates health recovery, while drinking fresh well water (`drink water`) and eating biscuits (`eat biscuit`) maintain rapid health regeneration.

Help Fuor rest (`rest`), stand (`wake`), quench his thirst (`drink water`), and eat (`eat biscuit`) below!
