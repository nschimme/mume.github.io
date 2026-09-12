---
title: "Resting & Health Recovery"
description: "Sit, rest, and sleep in safe zones to recover lost health and movement."
teach:
  - command: "rest"
    desc: "sit down to accelerate health and stamina regeneration"
  - command: "sleep"
    desc: "sleep in a safe zone for maximum recovery rate"
  - command: "wake"
    desc: "wake up from sleep when fully rested"
  - command: "stand"
    desc: "stand back up onto your feet"
steps:
  - ask: "rest"
    note: "After taking damage in combat or walking long distances, sit down with `rest` to speed up health recovery."
    accept:
      - "rest"
    hint: "Type: rest"
    example: "> rest\nYou sit down and rest your tired bones."
  - ask: "sleep"
    note: "When inside safe town walls or inns, `sleep` provides the fastest rate of hit point and mana recovery."
    accept:
      - "sleep"
    hint: "Type: sleep"
    example: "> sleep\nYou go to sleep."
  - ask: "wake"
    note: "Once your hit points and moves return to full, wake up with `wake`."
    accept:
      - "wake"
    hint: "Type: wake"
    example: "> wake\nYou wake, and sit up."
  - ask: "stand"
    note: "Finally, stand up onto your feet with `stand` (or `st`) before walking."
    accept:
      - "stand"
      - "st"
    hint: "Type: stand (or st)"
    example: "> stand\nYou stand up."
responses:
  rest: "You sit down and rest your tired bones."
  sleep: "You go to sleep."
  wake: "You wake, and sit up."
  stand: "You stand up."
  st: "You stand up."
---

<TutorialPlayer>

# Regaining Health & Mobility

When injured or exhausted, resting in safe areas (such as cities or inn rooms) allows your character to heal.

- **`rest`**: Sits down to increase regeneration while staying alert.
- **`sleep`**: Maximizes hit point, mana, and movement recovery. (Note: Avoid sleeping in dangerous wilderness areas where aggressive monsters wander!)
- **`wake` & `stand`**: Wakes your character up and returns you to a standing position ready for action.

</TutorialPlayer>
