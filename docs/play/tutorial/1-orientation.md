---
title: "Account Registration & Hero Definition"
description: "Learn how player accounts work in MUME with NEW, then enter Fuor to define your character and awaken."
teach:
  - command: "new"
    desc: "begin account creation process"
  - command: "Fuor"
    desc: "enter your hero name to create Fuor the Man Warrior"
steps:
  - ask: "new"
    note: "In MUME, each player manages all their characters under a SINGLE ACCOUNT. Type NEW to begin registration."
    accept:
      - "new"
    hint: "Type: new"
    example: "> new\nWelcome to MUME!\nYour first step here is to create an ACCOUNT."
  - ask: "Fuor"
    note: "Type your hero name: Fuor (the heroic Man Warrior of Eriador)."
    accept:
      - "Fuor"
      - "fuor"
    hint: "Type: Fuor"
    example: "> Fuor\nWelcome to MUME! Fuor the Man Warrior has awakened in Middle-earth."
responses:
  new: "Welcome to MUME!\n\nYour first step here is to create an ACCOUNT.\n\nMUME characters are organized into accounts. You can only have ONE ACCOUNT, and\nit cannot be shared with other players. You can create as many characters as\nyou like, but they must all belong to this single account.\n\nDo you have another account on MUME [Y/N/?]?"
  Fuor: "            ~~~\n           ~~         _----|        _ _ __ _ _\n                       ----|_----|  ]-I-II-I-[\n   _ _ _/\\_ _ _ _---|      | ----|   \\ `  ' /\n   ]-I-I--I-I-[  ---|      |     |    |. ` |\n\nWelcome to MUME! Fuor the Man Warrior has awakened in Middle-earth.\n\nYour journey begins at The Foaming Mug's Beer Garden in Black Hill Village!\n\n!.*>"
  fuor: "            ~~~\n           ~~         _----|        _ _ __ _ _\n                       ----|_----|  ]-I-II-I-[\n   _ _ _/\\_ _ _ _---|      | ----|   \\ `  ' /\n   ]-I-I--I-I-[  ---|      |     |    |. ` |\n\nWelcome to MUME! Fuor the Man Warrior has awakened in Middle-earth.\n\nYour journey begins at The Foaming Mug's Beer Garden in Black Hill Village!\n\n!.*>"
---

<TutorialPlayer>

# Account Registration & Hero Definition

In MUME, every player has a single **account** that holds all their characters.

Type `new` to initiate account registration, followed by your hero name **Fuor** to awaken as a Man Warrior in **Black Hill Village**.

</TutorialPlayer>
