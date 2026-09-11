---
title: "Resting & Logging Off at the Inn"
description: "Safely save your gear and character progress by renting at an inn."
teach:
  - command: "offer"
    desc: "check daily lodging costs at an inn"
  - command: "rent"
    desc: "safely store gear and end your session"
steps:
  - ask: "offer"
    accept:
      - "offer"
    hint: "Type: offer"
    example: "> offer\nThe innkeeper tells you 'It will cost you 62 copper pennies per day.'"
  - ask: "rent"
    accept:
      - "rent"
    hint: "Type: rent"
    example: "> rent\nThe innkeeper stores your stuff in the safe, and helps you into your chamber."
responses:
  offer: "The innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months."
  rent: "The innkeeper tells you 'It will cost you 62 copper pennies per day.'\nYou have enough money for 2 months.\nThe innkeeper stores your stuff in the safe, and helps you into your chamber."
---

<TutorialPlayer>

# Resting at the Crown of Arnor

At the end of a long day of adventuring, return to a safe inn such as *The Crown of Arnor Inn*.

In MUME, **never type quit** to exit the game! Typing `quit` drops all your carried equipment onto the floor. Instead, speak to the innkeeper and type `offer` to check daily costs, then `rent` to safely store your items and log off.

</TutorialPlayer>
