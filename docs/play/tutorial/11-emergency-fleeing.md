---
title: "Survival, Healing & Rest"
description: "Rest, sleep, wake, stand, and drink water from your cup to accelerate hit point and movement recovery."
teach:
  - command: "rest"
    desc: "sit down to rest tired bones and speed recovery"
  - command: "sleep"
    desc: "sleep to maximize hit point and mana regeneration"
  - command: "wake"
    desc: "awaken from sleep"
  - command: "stand"
    desc: "stand up to prepare for movement or combat"
  - command: "drink cup"
    desc: "drink fresh water to prevent dehydration"
steps:
  - ask: "rest"
    note: "Fuor reaches a safe clearing. Sit down and REST to accelerate recovery."
    accept:
      - "rest"
    hint: "Type: rest"
    example: "> rest\nYou sit down and rest your tired bones."
  - ask: "sleep"
    note: "Go to SLEEP to maximize hit point regeneration."
    accept:
      - "sleep"
    hint: "Type: sleep"
    example: "> sleep\nYou go to sleep."
  - ask: "wake"
    note: "WAKE up after feeling fully refreshed."
    accept:
      - "wake"
    hint: "Type: wake"
    example: "> wake\nYou wake, and sit up."
  - ask: "stand"
    note: "STAND up so Fuor can walk and fight again."
    accept:
      - "stand"
      - "st"
    hint: "Type: stand"
    example: "> stand\nYou stand up."
  - ask: "drink cup"
    note: "Drink fresh water from your cup to satisfy thirst."
    accept:
      - "drink cup"
    hint: "Type: drink cup"
    example: "> drink cup\nYou drink the water. A cup is now empty."
responses:
  rest: "You sit down and rest your tired bones."
  sleep: "You go to sleep."
  wake: "You wake, and sit up."
  stand: "You stand up."
  st: "You stand up."
  drink cup: "You drink the water.\nA cup is now empty."
---

<TutorialPlayer>

# Survival, Healing & Rest

Injured or exhausted adventurers must rest and stay hydrated to recover vital strength.

Practice resting (`REST`), sleeping (`SLEEP`), waking (`WAKE`), standing (`STAND`), and drinking fresh water (`DRINK CUP`).

</TutorialPlayer>
