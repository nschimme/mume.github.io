---
title: "Account Registration & Hero Definition"
description: "Learn how player accounts work in MUME with NEW, then enter Fuor to define your character and awaken."
teach:
  - command: "new"
    desc: "begin account creation process"
  - command: "Fuor"
    desc: "enter sample tutorial hero name (Fuor) for this walkthrough"
steps:
  - ask: "new"
    note: "In MUME, each player manages all their characters under a SINGLE ACCOUNT. Type NEW to begin registration."
    accept:
      - "new"
    hint: "Type: new"
    example: "> new\nWelcome to MUME!\nYour first step here is to create an ACCOUNT."
  - ask: "Fuor"
    note: "Type Fuor to continue this tutorial walkthrough. (When playing MUME live, you will choose your own unique hero name!)."
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

# Chapter 1: The Awakening of Fuor

Our story begins in **Bree-land**, a gentle realm of rolling hills, ancient highways, and quiet villages. You step into the boots of **Fuor**, an eager Young Warrior setting out on his first grand adventure in Middle-earth.

### Understanding MUME Accounts
When you connect to MUME for the first time, you register a single **Account**. All your characters—whether human warriors, elven scouts, or hobbit thieves—are organized safely under this one account with a single password.

Type `new` to begin account registration, then type `Fuor` (our tutorial walkthrough hero name—when playing MUME live, you'll pick your own unique hero name!) to step into Middle-earth!
