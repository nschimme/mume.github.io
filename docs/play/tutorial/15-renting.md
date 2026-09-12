---
title: "Renting at Inns & Saving Progress"
description: "Safely store your character equipment and save your progress at inns."
teach:
  - command: "offer"
    desc: "ask the innkeeper for daily rent pricing"
  - command: "rent"
    desc: "safely exit MUME at an inn while preserving your equipment"
steps:
  - ask: "offer"
    note: "Never use 'quit' while carrying gear, or your items will drop to the floor! Instead, visit an inn and type `offer` to check rent rates."
    accept:
      - "offer"
      - "off"
    hint: "Type: offer"
    example: "> offer\nThe innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months."
  - ask: "rent"
    note: "When you are ready to log out, type `rent`. The innkeeper will safely store your gear in the vault until you return."
    accept:
      - "rent"
    hint: "Type: rent"
    example: "> rent\nThe innkeeper stores your stuff in the safe, and helps you into your chamber."
responses:
  offer: "The innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months."
  off: "The innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months."
  rent: "The innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months.\nThe innkeeper stores your stuff in the safe, and helps you into your chamber."
---

<TutorialPlayer>

# Safe Logging & Inn Renting

In MUME, saving your character and equipment is done by **renting at an inn**.

- **`offer`**: Checks how much copper/silver the innkeeper charges per day and how many days your gold will cover.
- **`rent`**: Safely stores all your equipment, weapons, and container items in the inn's vault and logs your character off safely.

*(Important Rule: Do NOT type `quit` with equipment on your character, as `quit` drops all carried inventory onto the ground!)*

</TutorialPlayer>
